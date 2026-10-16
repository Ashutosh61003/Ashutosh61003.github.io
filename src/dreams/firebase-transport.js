import { emptyWorkspace } from "./model.js";
export function createFirebaseTransport(
  { projectId, apiKey, editorEmail },
  fetcher = fetch,
) {
  const documentUrl = `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/dreams/workspace`;
  function failure(message, status) {
    const error = new Error(message);
    error.status = status;
    return error;
  }
  async function decode(response) {
    const result = await response.json().catch(() => ({}));
    if (!response.ok) {
      const code = result.error?.status || result.error?.message || "";
      if (
        code === "FAILED_PRECONDITION" ||
        code === "ABORTED" ||
        code === "ALREADY_EXISTS"
      )
        throw failure(
          "Another device saved changes. Load the latest version before saving.",
          409,
        );
      if (response.status === 401 || response.status === 403)
        throw failure("Unlock editing again to save your changes.", 401);
      throw failure(
        "Could not connect to your workspace. Please retry.",
        response.status,
      );
    }
    return result;
  }
  function unpack(document) {
    try {
      const data = JSON.parse(document.fields.stateJson.stringValue);
      if (!Array.isArray(data.goals) || !Array.isArray(data.steps))
        throw new Error();
      return {
        data,
        revision: Number(document.fields.revision.integerValue),
        updateTime: document.updateTime,
      };
    } catch {
      throw failure(
        "The saved workspace could not be read. Please retry.",
        500,
      );
    }
  }
  async function read() {
    const response = await fetcher(documentUrl);
    if (response.status === 404)
      return { data: emptyWorkspace(), revision: 0, updateTime: null };
    return unpack(await decode(response));
  }
  async function request(action, payload = {}, token) {
    if (action === "read") return read();
    if (action === "unlock") {
      const response = await fetcher(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${encodeURIComponent(apiKey)}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: editorEmail,
            password: payload.password,
            returnSecureToken: true,
          }),
        },
      );
      const result = await response.json();
      if (!response.ok) {
        if (result.error?.message?.startsWith("TOO_MANY_ATTEMPTS"))
          throw failure("Too many attempts. Please try again later.", 429);
        throw failure(
          "Incorrect password, or editing is not configured yet.",
          401,
        );
      }
      // No refresh token is retained: each editing session lasts at most one hour.
      return {
        token: result.idToken,
        expiresAt:
          Date.now() + Math.min(Number(result.expiresIn) || 3600, 3600) * 1000,
      };
    }
    if (action === "save") {
      if (!token)
        throw failure("Unlock editing again to save your changes.", 401);
      const current = await read();
      if (current.revision !== payload.revision)
        throw failure(
          "Another device saved changes. Load the latest version before saving.",
          409,
        );
      const stateJson = JSON.stringify(payload.data);
      if (new TextEncoder().encode(stateJson).length > 900000)
        throw failure(
          "Your workspace is full. Remove some older notes before saving.",
          413,
        );
      const revision = payload.revision + 1;
      const response = await fetcher(
        `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents:commit`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            writes: [
              {
                update: {
                  name: `projects/${projectId}/databases/(default)/documents/dreams/workspace`,
                  fields: {
                    stateJson: { stringValue: stateJson },
                    revision: { integerValue: String(revision) },
                  },
                },
                currentDocument: current.updateTime
                  ? { updateTime: current.updateTime }
                  : { exists: false },
              },
            ],
          }),
        },
      );
      await decode(response);
      return { data: payload.data, revision };
    }
    throw failure("Unknown workspace action.", 400);
  }

  return request;
}
