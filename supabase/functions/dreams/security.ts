const encoder = new TextEncoder();
const hex = (bytes: ArrayBuffer) =>
  Array.from(new Uint8Array(bytes), (b) =>
    b.toString(16).padStart(2, "0"),
  ).join("");
export async function hashPassword(
  password: string,
  salt: string,
  iterations = 600000,
) {
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(password),
    "PBKDF2",
    false,
    ["deriveBits"],
  );
  return hex(
    await crypto.subtle.deriveBits(
      {
        name: "PBKDF2",
        hash: "SHA-256",
        salt: encoder.encode(salt),
        iterations,
      },
      key,
      256,
    ),
  );
}
export function constantEqual(a: string, b: string) {
  let different = a.length ^ b.length;
  for (let i = 0; i < Math.max(a.length, b.length); i++)
    different |= (a.charCodeAt(i) || 0) ^ (b.charCodeAt(i) || 0);
  return different === 0;
}
async function signature(payload: string, secret: string) {
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  return hex(await crypto.subtle.sign("HMAC", key, encoder.encode(payload)));
}
export async function issueToken(secret: string, now = Date.now()) {
  const expiresAt = now + 3600000;
  const payload = `${expiresAt}.${crypto.randomUUID()}`;
  return { token: `${payload}.${await signature(payload, secret)}`, expiresAt };
}
export async function verifyToken(
  token: string,
  secret: string,
  now = Date.now(),
) {
  const [expiry, nonce, signed, extra] = token.split(".");
  if (
    extra ||
    !expiry ||
    !nonce ||
    !signed ||
    !/^\d+$/.test(expiry) ||
    Number(expiry) <= now ||
    Number(expiry) > now + 3600000
  )
    return false;
  return constantEqual(signed, await signature(`${expiry}.${nonce}`, secret));
}
export function validateWorkspace(data: any) {
  if (
    !data ||
    !Array.isArray(data.goals) ||
    !Array.isArray(data.steps) ||
    data.goals.length > 200 ||
    data.steps.length > 5000
  )
    throw new Error("Workspace is too large or invalid.");
  const id = (value: any) =>
    typeof value === "string" && /^[\w-]{1,100}$/.test(value);
  const text = (value: any, max: number) =>
    typeof value === "string" && value.length <= max;
  const goalIds = new Set(),
    stepIds = new Set();
  for (const g of data.goals) {
    if (
      !id(g.id) ||
      goalIds.has(g.id) ||
      !text(g.title, 160) ||
      !g.title.trim() ||
      !text(g.description, 2000) ||
      !["peach", "sage", "lavender", "blue"].includes(g.accent) ||
      typeof g.archived !== "boolean" ||
      !Number.isInteger(g.order) ||
      g.order < 0
    )
      throw new Error("Invalid goal.");
    goalIds.add(g.id);
  }
  for (const s of data.steps) {
    if (
      !id(s.id) ||
      stepIds.has(s.id) ||
      !goalIds.has(s.goalId) ||
      !text(s.title, 160) ||
      !s.title.trim() ||
      !text(s.notes, 20000) ||
      !text(s.url, 2000) ||
      !["task", "video", "playlist", "article", "link"].includes(s.kind) ||
      typeof s.completed !== "boolean" ||
      !Number.isInteger(s.order) ||
      s.order < 0 ||
      !Number.isInteger(s.completedThrough) ||
      s.completedThrough < 0
    )
      throw new Error("Invalid step.");
    if (s.url) {
      let url;
      try {
        url = new URL(s.url);
      } catch {
        throw new Error("Invalid resource link.");
      }
      if (!["http:", "https:"].includes(url.protocol))
        throw new Error("Use an http or https resource link.");
    }
    if (
      s.durationMinutes !== null &&
      (!Number.isFinite(s.durationMinutes) ||
        s.durationMinutes < 0 ||
        s.durationMinutes > 1000000)
    )
      throw new Error("Invalid duration.");
    if (
      s.plannedDate &&
      (!/^\d{4}-\d{2}-\d{2}$/.test(s.plannedDate) ||
        !Number.isFinite(Date.parse(s.plannedDate)) ||
        new Date(s.plannedDate).toISOString().slice(0, 10) !== s.plannedDate)
    )
      throw new Error("Invalid planned date.");
    if (s.metadata) {
      const m = s.metadata;
      if (
        !text(m.title, 1000) ||
        !["video", "playlist"].includes(m.kind) ||
        !id(m.id) ||
        !Array.isArray(m.videos) ||
        m.videos.length > 10000 ||
        typeof m.partial !== "boolean" ||
        (m.seconds !== null &&
          (!Number.isFinite(m.seconds) || m.seconds < 0)) ||
        !text(m.fetchedAt, 40)
      )
        throw new Error("Invalid YouTube details.");
      for (const video of m.videos)
        if (
          !id(video.id) ||
          !text(video.title, 1000) ||
          (video.seconds !== null &&
            (!Number.isFinite(video.seconds) || video.seconds < 0))
        )
          throw new Error("Invalid video details.");
      if (s.completedThrough > m.videos.length)
        throw new Error("Invalid playlist progress.");
    }
    stepIds.add(s.id);
  }
  if (data.pinnedStepId !== null && !stepIds.has(data.pinnedStepId))
    throw new Error("Invalid pinned step.");
  return data;
}
