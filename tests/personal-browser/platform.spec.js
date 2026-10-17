import { test, expect } from "@playwright/test";
test.beforeAll(async () => {
  await fetch(
    "http://127.0.0.1:8080/emulator/v1/projects/demo-personal/databases/(default)/documents",
    { method: "DELETE" },
  );
  const response = await fetch(
    "http://127.0.0.1:9099/identitytoolkit.googleapis.com/v1/projects/demo-personal/accounts",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer owner",
      },
      body: JSON.stringify({
        localId: "AvqwmPY304eoBGWcOk536dCWgYq1",
        email: "dreams-editor@ashutoshsrivastava.me",
        password: "emulator-only-password",
        emailVerified: true,
      }),
    },
  );
  if (!response.ok)
    expect((await response.json()).error.message).toMatch(
      /EMAIL_EXISTS|DUPLICATE_LOCAL_ID/,
    );
});
async function ownerLogin(page) {
  await page.goto("/admin");
  await page.getByLabel("Owner password").fill("emulator-only-password");
  await page
    .getByRole("button", { name: "Owner sign-in", exact: true })
    .click();
  await expect(
    page.getByRole("button", { name: "content", exact: true }),
  ).toBeVisible();
}
test("owner can publish connected content, readers browse and filter, and drafts stay private", async ({
  page,
  browser,
}) => {
  await ownerLogin(page);
  await page.getByRole("button", { name: "Import existing projects" }).click();
  await expect(page.getByRole("status")).toContainText("now published");
  await page.getByRole("button", { name: "content", exact: true }).click();
  await page.getByRole("button", { name: "New entry", exact: true }).click();
  await page.getByLabel("Section", { exact: true }).selectOption("beliefs");
  await page
    .getByLabel("Title", { exact: true })
    .fill("Emulator test principle");
  await page
    .getByLabel("Content · Markdown supported", { exact: true })
    .fill("A test principle with **clear reasoning**.");
  await page.getByLabel("Published", { exact: true }).check();
  await page.getByLabel("Featured on homepage").check();
  await page.getByRole("button", { name: "Save entry", exact: true }).click();
  await expect(page.getByRole("status")).toContainText("Saved and published");
  await page.getByRole("button", { name: "New entry", exact: true }).click();
  await page.getByLabel("Title", { exact: true }).fill("Emulator test opinion");
  await page
    .getByLabel("Content · Markdown supported", { exact: true })
    .fill("An opinion connected to the test principle.");
  await page.getByLabel("Emulator test principle").check();
  await page.getByLabel("Published", { exact: true }).check();
  await page.getByRole("button", { name: "Save entry", exact: true }).click();
  await expect(page.getByRole("status")).toContainText("Saved and published");
  const reader = await browser.newPage();
  await reader.goto("/opinions");
  await reader.getByRole("link", { name: "Emulator test opinion" }).click();
  await expect(
    reader.getByRole("heading", { name: "Connected ideas" }),
  ).toBeVisible();
  await reader.getByRole("link", { name: "Emulator test principle" }).click();
  await expect(
    reader.getByRole("link", { name: "Emulator test opinion" }),
  ).toBeVisible();
  await reader.goto("/projects");
  await reader.getByLabel("Category", { exact: true }).selectOption("Research");
  await expect(
    reader.getByRole("link", { name: "Parkinsons Detection" }),
  ).toBeVisible();
  await expect(
    reader.getByRole("link", { name: "SCOPE", exact: false }),
  ).toHaveCount(0);
  await page.getByRole("button", { name: "New entry", exact: true }).click();
  await page.getByLabel("Title", { exact: true }).fill("Private draft");
  await page
    .getByLabel("Content · Markdown supported", { exact: true })
    .fill("This is not public.");
  await page.getByRole("button", { name: "Save entry", exact: true }).click();
  await expect(page.getByRole("status")).toContainText("Saved as a draft");
  await reader.goto("/opinions");
  await expect(reader.getByRole("link", { name: "Private draft" })).toHaveCount(
    0,
  );
  await reader.goto("/");
  await expect(
    reader.getByRole("heading", { name: "Worth a closer look" }),
  ).toBeVisible();
  await reader.close();
});
test("mobile navigation, theme, anonymous access and preserved portfolio", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await expect(
    page.getByRole("heading", { name: "A life in the making." }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Switch to dark mode" }).click();
  await expect(page.locator("html")).toHaveClass(/personal-dark/);
  await page.reload();
  await expect(
    page.getByRole("button", { name: "Switch to light mode" }),
  ).toBeVisible();
  await page.locator(".journal-footer").scrollIntoViewIfNeeded();
  expect(await page.evaluate(() => window.scrollY)).toBeGreaterThan(0);
  await page
    .getByRole("link", { name: "Let’s connect ↗", exact: true })
    .click();
  await expect(
    page.getByRole("heading", { name: "Let’s find common ground." }),
  ).toBeVisible();
  expect(await page.evaluate(() => window.scrollY)).toBe(0);
  await page.goto("/");
  await page.getByRole("button", { name: "Open navigation" }).click();
  await page.getByRole("link", { name: "About", exact: true }).click();
  await expect(
    page.getByRole("heading", { name: "A person behind the work." }),
  ).toBeVisible();
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBeTruthy();
  await page.goto("/messages");
  await expect(
    page.getByRole("button", { name: "Continue with Google" }),
  ).toBeVisible();
  await page.goto("/portfolio");
  await expect(
    page.getByRole("heading", {
      name: "I turn messy product ideas into shipped systems.",
    }),
  ).toBeVisible();
  await page.goto("/portfolio/projects");
  await expect(page.locator(".projects-page")).toBeVisible();
});
test("owner can edit current activity and create, close and archive a discussion", async ({
  page,
}) => {
  await ownerLogin(page);
  await page.getByRole("button", { name: "settings", exact: true }).click();
  await page
    .getByLabel("Currently learning")
    .fill("Emulator-only test activity");
  await page.getByRole("button", { name: "Publish settings" }).click();
  await expect(page.getByRole("status")).toContainText("Settings published");
  await page.getByRole("button", { name: "discussions", exact: true }).click();
  await page.getByRole("button", { name: "New discussion" }).click();
  await page.getByLabel("Title", { exact: true }).fill("Emulator discussion");
  await page
    .getByLabel("Description", { exact: true })
    .fill("A disposable test discussion.");
  await page.getByLabel("Publicly listed").check();
  await page.getByRole("button", { name: "Save discussion" }).click();
  await expect(page.getByRole("status")).toContainText("Discussion saved");
  await page.getByRole("link", { name: "Open & moderate" }).click();
  await page
    .getByRole("button", { name: "Join discussion", exact: true })
    .click();
  await page
    .getByLabel("Contribute to the discussion")
    .fill("A test group message.");
  await page.getByRole("button", { name: "Post to discussion" }).click();
  await expect(
    page.getByText("A test group message.", { exact: true }),
  ).toBeVisible();
  await page.goto("/admin");
  await page.getByRole("button", { name: "discussions", exact: true }).click();
  await page.getByRole("button", { name: "Edit", exact: true }).click();
  await page.getByLabel("Status", { exact: true }).selectOption("Closed");
  await page.getByRole("button", { name: "Save discussion" }).click();
  await page.getByRole("link", { name: "Open & moderate" }).click();
  await expect(
    page.getByText("This discussion is closed to new messages."),
  ).toBeVisible();
  await page.goto("/admin");
  await page.getByRole("button", { name: "discussions", exact: true }).click();
  await page.getByRole("button", { name: "Archive", exact: true }).click();
  await expect(page.getByRole("status")).toContainText(
    "archived and unpublished",
  );
});

test("Google reader can send a private proposal and receive an owner reply in real time", async ({
  page,
  browser,
}) => {
  await page.goto("/messages?idea=1");
  const popupPromise = page.waitForEvent("popup");
  await page.getByRole("button", { name: "Continue with Google" }).click();
  const popup = await popupPromise;
  await popup.getByText("Add new account").click();
  await popup.getByLabel("Email", { exact: true }).fill("reader@example.test");
  await popup.getByLabel("Display name", { exact: true }).fill("Test Reader");
  await popup
    .getByRole("button", { name: "Sign in with Google.com", exact: true })
    .click();
  await page
    .getByLabel("Idea or collaboration title")
    .fill("A test collaboration");
  await page
    .getByLabel("Tell me about it")
    .fill("A private proposal from the emulator.");
  await page.getByRole("button", { name: "Send privately" }).click();
  await expect(
    page.getByText(/A private proposal from the emulator/),
  ).toBeVisible();
  const owner = await browser.newPage();
  await ownerLogin(owner);
  await owner.getByRole("button", { name: "inbox", exact: true }).click();
  await owner.getByRole("button", { name: /Test Reader/ }).click();
  await expect(
    owner.getByText(/A private proposal from the emulator/).last(),
  ).toBeVisible();
  await owner
    .getByLabel("Your message")
    .fill("An owner reply, visible only to this reader.");
  await owner.getByRole("button", { name: "Send privately" }).click();
  await expect(
    page.getByText("An owner reply, visible only to this reader.", {
      exact: true,
    }),
  ).toBeVisible();
  await owner.getByRole("button", { name: "Archive", exact: true }).click();
  await owner.getByLabel("Show archived").check();
  await expect(
    owner.getByRole("button", { name: /Test Reader/ }),
  ).toContainText("Archived");
  await owner.close();
});

test("content pages use bounded cursors and can navigate backwards", async ({
  page,
}) => {
  const writes = Array.from({ length: 24 }, (_, index) => ({
    update: {
      name: `projects/demo-personal/databases/(default)/documents/personalContent/pagination-${index}`,
      fields: {
        type: { stringValue: "opinions" },
        title: { stringValue: `Pagination note ${index}` },
        body: { stringValue: "Emulator-only pagination fixture." },
        summary: { stringValue: "" },
        published: { booleanValue: true },
        featured: { booleanValue: false },
        tags: { arrayValue: { values: [] } },
        relatedIds: { arrayValue: { values: [] } },
        updatedAt: {
          timestampValue: new Date(Date.now() + index * 1000).toISOString(),
        },
      },
    },
  }));
  const result = await fetch(
    "http://127.0.0.1:8080/v1/projects/demo-personal/databases/(default)/documents:commit",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer owner",
      },
      body: JSON.stringify({ writes }),
    },
  );
  expect(result.ok).toBeTruthy();
  await page.goto("/opinions");
  await expect(page.locator(".journal-entries article")).toHaveCount(20);
  await page.getByRole("button", { name: "Next page" }).click();
  await expect(page.getByText("Page 2", { exact: true })).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Emulator test opinion" }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Previous page" }).click();
  await expect(page.locator(".journal-entries article")).toHaveCount(20);
});
