import { execFileSync } from "node:child_process";
import { readFile, stat } from "node:fs/promises";
const files = execFileSync("git", ["ls-files", "-z"], { encoding: "utf8" }).split("\0").filter(Boolean);
const flagged = [];
for (const file of files) {
  if (/^\.env(?:\.|$)/.test(file) && file !== ".env.example") {
    flagged.push(file);
    continue;
  }
  try {
    if (!(await stat(file)).isFile()) continue;
    if (/AIza[0-9A-Za-z_-]{30,}/.test(await readFile(file, "utf8"))) flagged.push(file);
  } catch (error) {
    if (error.code !== "ENOENT") throw error;
  }
}
if (flagged.length) {
  console.error("Public API key or private env file detected (values redacted):\n" + flagged.join("\n"));
  process.exitCode = 1;
} else {
  console.log("Tracked files contain no Google API key values or private env files.");
}
