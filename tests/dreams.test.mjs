import test from "node:test";
import assert from "node:assert/strict";
import {
  emptyWorkspace,
  summary,
  remainingSeconds,
  nextStep,
  move,
  youtubeResource,
  todayKey,
} from "../src/dreams/model.js";
import {
  hashPassword,
  issueToken,
  verifyToken,
  validateWorkspace,
} from "../supabase/functions/dreams/security.ts";
import {
  isoSeconds,
  fetchMetadata,
} from "../supabase/functions/dreams/youtube.ts";
const goal = {
  id: "g",
  title: "Learning",
  description: "",
  accent: "peach",
  archived: false,
  order: 0,
};
const step = {
  id: "s",
  goalId: "g",
  title: "A step",
  kind: "task",
  url: "",
  notes: "",
  durationMinutes: null,
  plannedDate: "",
  completed: false,
  completedThrough: 0,
  metadata: null,
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
test("playlist progress and manual override", () => {
  const playlist = {
    ...step,
    kind: "playlist",
    completedThrough: 1,
    metadata: {
      videos: [{ seconds: 60 }, { seconds: 120 }, { seconds: null }],
    },
  };
  assert.equal(remainingSeconds(playlist), 120);
  assert.equal(remainingSeconds({ ...playlist, durationMinutes: 5 }), 300);
  assert.equal(remainingSeconds({ ...playlist, completedThrough: 3 }), 0);
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
test("YouTube URLs are restricted to the provider", () => {
  assert.equal(
    youtubeResource("https://youtu.be/abcdefghijk").id,
    "abcdefghijk",
  );
  assert.equal(
    youtubeResource("https://youtube.com/playlist?list=PL123456789012").kind,
    "playlist",
  );
  assert.equal(
    youtubeResource("https://evil.example/watch?v=abcdefghijk"),
    null,
  );
  assert.equal(youtubeResource("javascript:alert(1)"), null);
  assert.equal(todayKey(new Date(2026, 9, 17)), "2026-10-17");
});
test("server validates URLs, goal references, dates, and duplicates", () => {
  assert.deepEqual(validateWorkspace(emptyWorkspace()), emptyWorkspace());
  const valid = { goals: [goal], steps: [step], pinnedStepId: null };
  assert.equal(validateWorkspace(valid), valid);
  for (const changed of [
    { url: "javascript:alert(1)" },
    { goalId: "missing" },
    { plannedDate: "2026-02-30" },
    { durationMinutes: -1 },
  ])
    assert.throws(() =>
      validateWorkspace({ ...valid, steps: [{ ...step, ...changed }] }),
    );
  assert.throws(() => validateWorkspace({ ...valid, steps: [step, step] }));
});
test("edit token expires and rejects tampering", async () => {
  const secret = "test-only-secret-with-more-than-32-characters";
  const session = await issueToken(secret, 1000);
  assert.equal(await verifyToken(session.token, secret, 1001), true);
  assert.equal(
    await verifyToken(session.token, secret, session.expiresAt),
    false,
  );
  assert.equal(await verifyToken(session.token + "x", secret, 1001), false);
  assert.equal(await verifyToken(session.token, "another-secret", 1001), false);
});
test("password hashes are deterministic and salted", async () => {
  const a = await hashPassword("test-password", "salt-a", 1000);
  assert.equal(a, await hashPassword("test-password", "salt-a", 1000));
  assert.notEqual(a, await hashPassword("test-password", "salt-b", 1000));
});
test("YouTube ISO duration", () => {
  assert.equal(isoSeconds("PT1H2M3S"), 3723);
  assert.equal(isoSeconds("P1DT1M"), 86460);
  assert.equal(isoSeconds(undefined), null);
});
test("playlist pagination, batching, duplicates and unavailable videos", async () => {
  const calls = [];
  const ids = Array.from({ length: 55 }, (_, i) => `video${i}`);
  const fetcher = async (input) => {
    const url = new URL(input);
    calls.push(url);
    if (url.pathname.endsWith("/playlists"))
      return Response.json({ items: [{ snippet: { title: "Learning" } }] });
    if (url.pathname.endsWith("/playlistItems")) {
      const second = !!url.searchParams.get("pageToken");
      return Response.json({
        items: (second ? [...ids.slice(50), ids[0]] : ids.slice(0, 50)).map(
          (videoId) => ({ contentDetails: { videoId } }),
        ),
        ...(!second ? { nextPageToken: "next" } : {}),
      });
    }
    return Response.json({
      items: url.searchParams
        .get("id")
        .split(",")
        .filter((id) => id !== "video54")
        .map((id) => ({
          id,
          snippet: { title: id },
          contentDetails: { duration: "PT1M" },
        })),
    });
  };
  const meta = await fetchMetadata(
    { kind: "playlist", id: "playlist" },
    "test",
    fetcher,
  );
  assert.equal(meta.videos.length, 56);
  assert.equal(meta.seconds, 55 * 60);
  assert.equal(meta.partial, true);
  assert.equal(calls.filter((u) => u.pathname.endsWith("/videos")).length, 2);
});
test("YouTube failures and private videos give actionable errors", async () => {
  await assert.rejects(
    fetchMetadata({ kind: "video", id: "abcdefghijk" }, "test", async () =>
      Response.json({ items: [] }),
    ),
    /private or unavailable/,
  );
  await assert.rejects(
    fetchMetadata({ kind: "video", id: "abcdefghijk" }, "test", async () =>
      Response.json({}, { status: 403 }),
    ),
    /unavailable/,
  );
});
