import { defineConfig } from "@playwright/test";
export default defineConfig({
  testDir: "./tests/personal-browser",
  workers: 1,
  fullyParallel: false,
  use: {
    baseURL: "http://127.0.0.1:5176",
    browserName: "chromium",
    headless: true,
  },
  webServer: {
    command:
      "VITE_PERSONAL_EMULATOR=true VITE_FIREBASE_PROJECT_ID=demo-personal npm run dev -- --host 127.0.0.1 --port 5176 --strictPort",
    url: "http://127.0.0.1:5176",
    reuseExistingServer: false,
  },
});
