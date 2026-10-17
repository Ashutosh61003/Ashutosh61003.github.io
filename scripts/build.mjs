import { build } from "vite";
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { resolve } from "node:path";
import { portfolioRoutes } from "./routes.mjs";
const output =
  process.env.SITE_BUILD_DIR || process.env.DREAMS_BUILD_DIR || "dist";
await build({ build: { outDir: resolve(output) } });
const html = await readFile(resolve(output, "index.html"), "utf8");
await writeFile(resolve(output, "404.html"), html);
for (const route of portfolioRoutes) {
  await mkdir(resolve(output, route), { recursive: true });
  await writeFile(resolve(output, route, "index.html"), html);
}
