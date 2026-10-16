// Prompts locally without echoing the password or writing it to shell history.
import { webcrypto } from "node:crypto";
import { writeFile } from "node:fs/promises";
import { createInterface } from "node:readline/promises";
import { Writable } from "node:stream";
let muted = false;
const output = new Writable({
  write(chunk, encoding, callback) {
    if (!muted) process.stdout.write(chunk, encoding);
    callback();
  },
});
const prompt = createInterface({
  input: process.stdin,
  output,
  terminal: true,
});
process.stdout.write("Dreams edit password (hidden): ");
muted = true;
const password = await prompt.question("");
muted = false;
process.stdout.write("\n");
if (!password || password.length > 256) {
  prompt.close();
  throw new Error("Enter a password between 1 and 256 characters.");
}
process.stdout.write("YouTube API key (optional, hidden): ");
muted = true;
const youtube = (await prompt.question("")).trim();
muted = false;
process.stdout.write("\n");
prompt.close();
const salt = Buffer.from(
  webcrypto.getRandomValues(new Uint8Array(24)),
).toString("hex");
const key = await webcrypto.subtle.importKey(
  "raw",
  new TextEncoder().encode(password),
  "PBKDF2",
  false,
  ["deriveBits"],
);
const hash = Buffer.from(
  await webcrypto.subtle.deriveBits(
    {
      name: "PBKDF2",
      hash: "SHA-256",
      salt: new TextEncoder().encode(salt),
      iterations: 600000,
    },
    key,
    256,
  ),
).toString("hex");
const secret = Buffer.from(
  webcrypto.getRandomValues(new Uint8Array(48)),
).toString("hex");
await writeFile(
  ".env.dreams.secrets",
  `DREAMS_PASSWORD_SALT=${salt}\nDREAMS_PASSWORD_HASH=${hash}\nDREAMS_TOKEN_SECRET=${secret}\nDREAMS_ALLOWED_ORIGINS=https://ashutoshsrivastava.me,http://localhost:5173,http://127.0.0.1:5173\n${youtube ? `YOUTUBE_API_KEY=${youtube}\n` : ""}`,
  { mode: 0o600, flag: "wx" },
);
console.log(
  "Created .env.dreams.secrets (ignored by Git). Upload with the setup commands in DREAMS_SETUP.md.",
);
