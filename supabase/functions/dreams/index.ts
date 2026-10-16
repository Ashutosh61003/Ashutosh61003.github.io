import { createClient } from "https://esm.sh/@supabase/supabase-js@2.57.4";
import {
  constantEqual,
  hashPassword,
  issueToken,
  validateWorkspace,
  verifyToken,
} from "./security.ts";
import { fetchMetadata, parseResource } from "./youtube.ts";

const env = (name: string) => Deno.env.get(name) || "";
const db = createClient(env("SUPABASE_URL"), env("SUPABASE_SERVICE_ROLE_KEY"), {
  auth: { persistSession: false },
});
const allowed = new Set(
  (
    env("DREAMS_ALLOWED_ORIGINS") ||
    "https://ashutoshsrivastava.me,http://localhost:5173,http://127.0.0.1:5173"
  )
    .split(",")
    .map((s) => s.trim()),
);
Deno.serve(async (req: Request) => {
  const origin = req.headers.get("origin") || "";
  const headers = {
    "Content-Type": "application/json",
    "Cache-Control": "no-store",
    Vary: "Origin",
    ...(allowed.has(origin) ? { "Access-Control-Allow-Origin": origin } : {}),
    "Access-Control-Allow-Headers": "authorization, content-type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
  };
  const json = (body: unknown, status = 200) =>
    new Response(JSON.stringify(body), { status, headers });
  if (origin && !allowed.has(origin))
    return json({ error: "Origin is not allowed." }, 403);
  if (req.method === "OPTIONS")
    return new Response(null, { status: 204, headers });
  if (req.method !== "POST") return json({ error: "Use POST." }, 405);
  try {
    if (Number(req.headers.get("content-length")) > 8000000)
      return json({ error: "Workspace is too large." }, 413);
    const raw = await req.text();
    if (raw.length > 8000000)
      return json({ error: "Workspace is too large." }, 413);
    let body;
    try {
      body = JSON.parse(raw);
    } catch {
      return json({ error: "Invalid request." }, 400);
    }
    if (!body || typeof body !== "object")
      return json({ error: "Invalid request." }, 400);
    const { action } = body;
    if (action === "read") {
      const { data, error } = await db
        .from("dreams_workspace")
        .select("data,revision")
        .eq("id", 1)
        .single();
      if (error) throw error;
      return json(data);
    }
    const secret = env("DREAMS_TOKEN_SECRET");
    if (
      secret.length < 32 ||
      !env("DREAMS_PASSWORD_HASH") ||
      !env("DREAMS_PASSWORD_SALT")
    )
      return json({ error: "Editing setup is not complete." }, 503);
    const address =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    async function rate(bucket: string, limit: number, seconds: number) {
      const { data, error } = await db.rpc("dreams_take_attempt", {
        p_bucket: bucket,
        p_limit: limit,
        p_seconds: seconds,
      });
      if (error) throw error;
      return data;
    }
    if (action === "unlock") {
      if (!(await rate(`unlock:${address}`, 8, 900)))
        return json(
          { error: "Too many attempts. Try again in 15 minutes." },
          429,
        );
      if (typeof body.password !== "string" || body.password.length > 256)
        return json({ error: "Incorrect password." }, 401);
      const hash = await hashPassword(
        body.password,
        env("DREAMS_PASSWORD_SALT"),
      );
      if (!constantEqual(hash, env("DREAMS_PASSWORD_HASH")))
        return json({ error: "Incorrect password." }, 401);
      return json(await issueToken(secret));
    }
    const token = (req.headers.get("authorization") || "").replace(
      /^Bearer /i,
      "",
    );
    if (!(await verifyToken(token, secret)))
      return json({ error: "Unlock editing again to save your changes." }, 401);
    if (action === "save") {
      if (!Number.isInteger(body.revision) || body.revision < 0)
        return json({ error: "Invalid workspace version." }, 400);
      try {
        validateWorkspace(body.data);
      } catch (e) {
        return json({ error: (e as Error).message }, 400);
      }
      const { data, error } = await db
        .from("dreams_workspace")
        .update({
          data: body.data,
          revision: body.revision + 1,
          updated_at: new Date().toISOString(),
        })
        .eq("id", 1)
        .eq("revision", body.revision)
        .select("data,revision")
        .maybeSingle();
      if (error) throw error;
      if (!data)
        return json(
          {
            error:
              "Another device saved changes. Load the latest version before saving.",
          },
          409,
        );
      return json(data);
    }
    if (action === "metadata") {
      let resource;
      try {
        resource = parseResource(body.url);
      } catch (e) {
        return json({ error: (e as Error).message }, 400);
      }
      const resourceKey = `${resource.kind}:${resource.id}`;
      const { data: cached, error: cacheError } = await db
        .from("dreams_metadata")
        .select("data,fetched_at")
        .eq("resource_key", resourceKey)
        .maybeSingle();
      if (cacheError) throw cacheError;
      if (
        !body.force &&
        cached &&
        Date.now() - Date.parse(cached.fetched_at) < 86400000
      )
        return json(cached.data);
      if (!(await rate("youtube:workspace", 40, 3600)))
        return json(
          { error: "Duration lookup limit reached. Try again later." },
          429,
        );
      const key = env("YOUTUBE_API_KEY");
      if (!key)
        return json({ error: "YouTube lookup is not connected yet." }, 503);
      let metadata;
      try {
        metadata = await fetchMetadata(resource, key);
      } catch (e) {
        return json({ error: (e as Error).message }, 422);
      }
      const { error } = await db
        .from("dreams_metadata")
        .upsert({
          resource_key: resourceKey,
          data: metadata,
          fetched_at: new Date().toISOString(),
        });
      if (error) throw error;
      return json(metadata);
    }
    return json({ error: "Unknown action." }, 400);
  } catch {
    // Never return provider errors or credentials to the browser.
    return json(
      { error: "Could not save or load your workspace. Please retry." },
      500,
    );
  }
});
