export const endpoint = import.meta.env.VITE_DREAMS_API_URL || "";
export async function request(action, payload = {}, token) {
  if (!endpoint) throw new Error("Sync is not connected yet.");
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: JSON.stringify({ action, ...payload }),
  });
  const result = await response.json().catch(() => ({}));
  if (!response.ok) {
    const error = new Error(result.error || "Could not connect. Please retry.");
    error.status = response.status;
    throw error;
  }
  return result;
}
