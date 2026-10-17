// Transitional support for the repository's existing root-folder Pages source.
// Both publication paths must contain the same build until an owner switches
// Pages to GitHub Actions. Old hashed assets are retained for cached HTML.
import { mkdtemp, mkdir, cp, rm, readFile, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { spawnSync } from "node:child_process";
const output = await mkdtemp(join(tmpdir(), "dreams-pages-"));
try {
  const result = spawnSync(process.execPath, ["scripts/build.mjs"], {
    env: { ...process.env, DREAMS_BUILD_DIR: output },
    stdio: "inherit",
  });
  if (result.status !== 0)
    throw new Error("Build failed; root publication files were not changed.");
  await cp(join(output, "assets"), "assets", { recursive: true });
  for (const file of ["index.html", "404.html"])
    await cp(join(output, file), file);
  for (const route of [
    "portfolio",
  "story",
  "work",
    "blogs",
    "identity",
    "thoughts",
    "project",
    "projects",
    "photography",
    "contact",
    "Dreams",
    "dreams",
  ]) {
    await mkdir(route, { recursive: true });
    await cp(join(output, route, "index.html"), join(route, "index.html"));
  }
  // On macOS a checkout cannot store Dreams/ and dreams/ separately. The
  // legacy Jekyll build uses this permalink to emit the lowercase entry too.
  const dreamsHtml = await readFile(
    join(output, "Dreams", "index.html"),
    "utf8",
  );
  await writeFile(
    "dreams-route.html",
    "---\npermalink: /dreams/index.html\n---\n" + dreamsHtml,
  );
  console.log("Repository-root publication files now match the Actions build.");
} finally {
  await rm(output, { recursive: true, force: true });
}
