import { build } from "vite";
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { resolve } from "node:path";
const output = process.env.DREAMS_BUILD_DIR || "dist";
await build({ build: { outDir: resolve(output) } });
const html = await readFile(resolve(output, "index.html"), "utf8");
await writeFile(resolve(output, "404.html"), html);
for (const route of [
  "portfolio",
  "portfolio/projects",
  "about",
  "opinions",
  "beliefs",
  "connect",
  "messages",
  "spaces",
  "admin",
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
  const folder = resolve(output, route);
  await mkdir(folder, { recursive: true });
  const page = /^(dreams|admin|messages)$/i.test(route)
    ? html
        .replace(
          "<head>",
          '<head>\n    <meta name="robots" content="noindex, nofollow" />',
        )
        .replace(
          "<title>Ashutosh Srivastava</title>",
          `<title>${/dreams/i.test(route) ? "Dreams" : route[0].toUpperCase() + route.slice(1)} · Ashutosh</title>`,
        )
    : html;
  await writeFile(resolve(folder, "index.html"), page);
}
