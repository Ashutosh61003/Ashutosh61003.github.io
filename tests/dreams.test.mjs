import test from "node:test";
import assert from "node:assert/strict";
import {
  emptyWorkspace,
  summary,
  remainingSeconds,
  nextStep,
  move,
  todayKey,
  duration,
} from "../src/dreams/model.js";
const goal = { id: "g", title: "Learning", archived: false, order: 0 };
const step = {
  id: "s",
  goalId: "g",
  title: "A step",
  durationMinutes: null,
  completed: false,
  order: 0,
};
test("unknown duration is not zero; completed steps are excluded", () => {
  assert.equal(remainingSeconds(step), null);
  assert.deepEqual(
    summary([
      step,
      { ...step, id: "b", durationMinutes: 12 },
      { ...step, id: "c", durationMinutes: 4, completed: true },
    ]),
    { done: 1, total: 3, seconds: 720, unknown: true },
  );
});
test("manual time is the only duration source", () => {
  assert.equal(remainingSeconds({ ...step, durationMinutes: 75 }), 4500);
  assert.equal(remainingSeconds({ ...step, metadata: { seconds: 900 } }), null);
  assert.equal(
    remainingSeconds({ ...step, durationMinutes: 75, completed: true }),
    0,
  );
  assert.equal(duration(4500), "1h 15m");
});
test("continue honors pin, order, completion and archives", () => {
  const data = {
    goals: [goal, { ...goal, id: "archived", archived: true }],
    steps: [
      step,
      { ...step, id: "second", order: 1 },
      { ...step, id: "old", goalId: "archived" },
    ],
    pinnedStepId: "second",
  };
  assert.equal(nextStep(data).id, "second");
  data.steps[1].completed = true;
  assert.equal(nextStep(data).id, "s");
  data.steps[0].completed = true;
  assert.equal(nextStep(data), null);
});
test("reordering preserves values and bounds", () => {
  const original = [
    { id: "a", order: 0 },
    { id: "b", order: 1 },
  ];
  assert.deepEqual(move(original, "b", -1), [
    { id: "b", order: 0 },
    { id: "a", order: 1 },
  ]);
  assert.deepEqual(move(original, "a", -1), original);
});
test("local dates and empty workspace", () => {
  assert.equal(todayKey(new Date(2026, 9, 17)), "2026-10-17");
  assert.deepEqual(emptyWorkspace(), {
    goals: [],
    steps: [],
    pinnedStepId: null,
  });
});

import { createFirebaseTransport } from "../src/dreams/firebase-transport.js";
const config = {
  projectId: "test-project",
  apiKey: "test-public-key",
  editorEmail: "editor@example.com",
};
const saved = (revision = 3) => ({
  fields: {
    stateJson: { stringValue: JSON.stringify(emptyWorkspace()) },
    revision: { integerValue: String(revision) },
  },
  updateTime: "2026-10-17T00:00:00Z",
});
test("Firebase unlock discards refresh tokens and limits sessions to an hour", async () => {
  let sent;
  const request = createFirebaseTransport(config, async (url, init) => {
    sent = JSON.parse(init.body);
    return Response.json({
      idToken: "id-token",
      refreshToken: "must-not-persist",
      expiresIn: "7200",
    });
  });
  const before = Date.now();
  const session = await request("unlock", { password: "test-only" });
  assert.equal(sent.email, config.editorEmail);
  assert.equal(session.token, "id-token");
  assert.equal(session.refreshToken, undefined);
  assert.ok(
    session.expiresAt <= Date.now() + 3600000 &&
      session.expiresAt >= before + 3600000,
  );
});
test("Firebase wrong password and throttling give clear errors", async () => {
  for (const [message, status] of [
    ["INVALID_LOGIN_CREDENTIALS", 401],
    ["TOO_MANY_ATTEMPTS_TRY_LATER", 429],
  ]) {
    const request = createFirebaseTransport(config, async () =>
      Response.json({ error: { message } }, { status: 400 }),
    );
    await assert.rejects(
      request("unlock", { password: "wrong" }),
      (e) => e.status === status,
    );
  }
});
test("Firebase missing workspace starts empty and first save creates conditionally", async () => {
  let write;
  const request = createFirebaseTransport(config, async (url, init) => {
    if (!init) return Response.json({ error: {} }, { status: 404 });
    write = JSON.parse(init.body).writes[0];
    return Response.json({ writeResults: [] });
  });
  assert.deepEqual((await request("read")).data, emptyWorkspace());
  assert.equal(
    (await request("save", { revision: 0, data: emptyWorkspace() }, "token"))
      .revision,
    1,
  );
  assert.deepEqual(write.currentDocument, { exists: false });
});
test("Firebase save uses update-time precondition and ID token", async () => {
  let write, headers;
  const request = createFirebaseTransport(config, async (url, init) => {
    if (!init) return Response.json(saved());
    write = JSON.parse(init.body).writes[0];
    headers = init.headers;
    return Response.json({ writeResults: [] });
  });
  const result = await request(
    "save",
    { revision: 3, data: emptyWorkspace() },
    "id-token",
  );
  assert.equal(result.revision, 4);
  assert.equal(write.currentDocument.updateTime, saved().updateTime);
  assert.equal(headers.Authorization, "Bearer id-token");
});
test("Firebase detects revision conflicts before writes and concurrent commit conflicts", async () => {
  let writes = 0;
  const request = createFirebaseTransport(config, async (url, init) => {
    if (!init) return Response.json(saved());
    writes++;
    return Response.json(
      { error: { status: "FAILED_PRECONDITION" } },
      { status: 400 },
    );
  });
  await assert.rejects(
    request("save", { revision: 2, data: emptyWorkspace() }, "token"),
    (e) => e.status === 409,
  );
  assert.equal(writes, 0);
  await assert.rejects(
    request("save", { revision: 3, data: emptyWorkspace() }, "token"),
    (e) => e.status === 409,
  );
});
test("Firebase unauthorized writes and oversized workspace fail safely", async () => {
  const request = createFirebaseTransport(config, async (url, init) =>
    !init
      ? Response.json(saved())
      : Response.json(
          { error: { status: "PERMISSION_DENIED" } },
          { status: 403 },
        ),
  );
  await assert.rejects(
    request("save", { revision: 3, data: emptyWorkspace() }, "expired-token"),
    (e) => e.status === 401,
  );
  await assert.rejects(
    request(
      "save",
      { revision: 3, data: { notes: "x".repeat(900001) } },
      "token",
    ),
    (e) => e.status === 413,
  );
});
