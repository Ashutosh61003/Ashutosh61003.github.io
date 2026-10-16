import firebaseConfig from "./firebase-config.json";
import { createFirebaseTransport } from "./firebase-transport";

// Firebase web configuration identifies the project; it contains no private credentials.
const projectId =
  import.meta.env.VITE_FIREBASE_PROJECT_ID || firebaseConfig.projectId;
const apiKey = import.meta.env.VITE_FIREBASE_API_KEY || firebaseConfig.apiKey;
const editorEmail =
  import.meta.env.VITE_DREAMS_EDITOR_EMAIL || firebaseConfig.editorEmail;
// A mock HTTP endpoint is used only by the browser test suite.
const testEndpoint = import.meta.env.VITE_DREAMS_TEST_API_URL || "";
export const endpoint =
  testEndpoint || (projectId && apiKey ? `firebase:${projectId}` : "");
const firebaseRequest = createFirebaseTransport({
  projectId,
  apiKey,
  editorEmail,
});
export async function request(action, payload = {}, token) {
  if (!endpoint) throw new Error("Sync is not connected yet.");
  if (!testEndpoint) return firebaseRequest(action, payload, token);
  const response = await fetch(testEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: JSON.stringify({ action, ...payload }),
  });
  const result = await response.json();
  if (!response.ok) {
    const error = new Error(result.error || "Could not connect.");
    error.status = response.status;
    throw error;
  }
  return result;
}
