// Keep the repository-root Pages source and the Actions build in sync.
import { mkdtemp, mkdir, cp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { spawnSync } from "node:child_process";
import { siteRoutes, retiredRoutes } from "./routes.mjs";
const output = await mkdtemp(join(tmpdir(), "personal-site-"));
try {
  const result = spawnSync(process.execPath, ["scripts/build.mjs"], {
    env: { ...process.env, SITE_BUILD_DIR: output },
    stdio: "inherit",
  });
  if (result.status !== 0)
    throw new Error("Build failed; root publication files were not changed.");
  await cp(join(output, "assets"), "assets", { recursive: true });
  for (const file of ["index.html", "404.html"])
    await cp(join(output, file), file);
  for (const route of siteRoutes) {
    await mkdir(route, { recursive: true });
    await cp(join(output, route, "index.html"), join(route, "index.html"));
  }
  // Remove only generated HTML entry points for retired pages, preserving any other files.
  for (const route of retiredRoutes)
    await rm(join(route, "index.html"), { force: true });
  await rm("dreams-route.html", { force: true });
  console.log(
    "Root publication now contains the landing page and professional portfolio.",
  );
} finally {
  await rm(output, { recursive: true, force: true });
}
