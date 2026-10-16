import { test, expect } from "@playwright/test";
const initial = () => ({ goals: [], steps: [], pinnedStepId: null });
async function mock(
  context,
  shared = { data: initial(), revision: 0 },
  faults = {},
) {
  await context.route("**/mock-dreams", async (route) => {
    const body = route.request().postDataJSON();
    const reply = (data, status = 200) =>
      route.fulfill({
        status,
        contentType: "application/json",
        body: JSON.stringify(data),
      });
    if (body.action === "read") return reply(shared);
    if (body.action === "unlock")
      return body.password === "test-only-password"
        ? reply({ token: "test-session", expiresAt: Date.now() + 3600000 })
        : reply({ error: "Incorrect password." }, 401);
    if (!route.request().headers().authorization)
      return reply({ error: "Unauthorized" }, 401);
    if (body.action === "save") {
      if (faults.failSave)
        return reply({ error: "Network unavailable. Retry." }, 500);
      if (body.revision !== shared.revision)
        return reply({ error: "Another device saved changes." }, 409);
      shared.data = body.data;
      shared.revision++;
      return reply(shared);
    }
  });
  return shared;
}
async function unlock(page) {
  await page.getByRole("button", { name: "Edit", exact: true }).click();
  await page.getByLabel("Password", { exact: true }).fill("test-only-password");
  await page.getByRole("button", { name: "Enable editing" }).click();
  await expect(
    page.getByRole("button", { name: "Done", exact: true }),
  ).toBeVisible();
}
async function addGoal(page, title = "Learn product design") {
  await page.getByRole("button", { name: "Add goal", exact: true }).click();
  await page.getByLabel("Title", { exact: true }).fill(title);
  await page.getByRole("button", { name: "Save goal" }).click();
  await expect(page.getByRole("dialog")).toHaveCount(0);
}
async function addStep(page, title = "Read the fundamentals") {
  await page.getByRole("button", { name: "Add step", exact: true }).click();
  await page.getByLabel("Title", { exact: true }).fill(title);
  await page.getByLabel("Minutes").fill("20");
  await page.getByRole("button", { name: "Save step", exact: true }).click();
  await expect(page.getByRole("dialog")).toHaveCount(0);
}
test("empty state, backend password error, add/edit/complete/reopen and persistence", async ({
  page,
  context,
}) => {
  await mock(context);
  await page.goto("/Dreams");
  await expect(page.getByText("Start with a dream.")).toBeVisible();
  await expect(page.locator(".navbar")).toHaveCount(0);
  expect(
    await page.locator("h1").evaluate((el) => getComputedStyle(el).color),
  ).toBe("rgb(48, 45, 41)");
  await page.getByRole("button", { name: "Edit", exact: true }).click();
  await page.getByLabel("Password", { exact: true }).fill("wrong");
  await page.getByRole("button", { name: "Enable editing" }).click();
  await expect(
    page.getByRole("dialog").getByText("Incorrect password."),
  ).toBeVisible();
  await page.getByLabel("Password", { exact: true }).fill("test-only-password");
  await page.getByRole("button", { name: "Enable editing" }).click();
  await addGoal(page);
  await addStep(page);
  await expect(page.locator(".dr-summary")).toContainText("20 min");
  await page
    .getByRole("button", {
      name: "Complete Read the fundamentals",
      exact: true,
    })
    .click();
  await expect(page.locator(".dr-summary")).toContainText("1/1");
  await page
    .getByRole("button", { name: "Reopen Read the fundamentals", exact: true })
    .click();
  await expect(page.locator(".dr-summary")).toContainText("0/1");
  await page.reload();
  await expect(page.locator(".dr-step-card")).toContainText(
    "Read the fundamentals",
  );
  await page.getByRole("button", { name: "Done", exact: true }).click();
  await expect(
    page.getByRole("button", {
      name: "Complete Read the fundamentals",
      exact: true,
    }),
  ).toBeDisabled();
  expect(
    await page.locator('meta[name="robots"]').getAttribute("content"),
  ).toBe("noindex, nofollow");
});
test("manual time and resource notes persist without automatic lookup", async ({
  page,
  context,
}) => {
  await mock(context);
  await page.goto("/dreams/");
  await unlock(page);
  await addGoal(page);
  await page.getByRole("button", { name: "Add step", exact: true }).click();
  await page.getByLabel("Title", { exact: true }).fill("Watch my saved lesson");
  await page.getByLabel("Link optional").fill("https://youtu.be/abcdefghijk");
  await page.getByLabel("Minutes").fill("75");
  await page.getByLabel("Notes optional").fill("Keep this learning.");
  await expect(
    page.getByRole("button", { name: /YouTube details/ }),
  ).toHaveCount(0);
  await page.getByRole("button", { name: "Save step", exact: true }).click();
  await expect(page.locator(".dr-summary")).toContainText("1h 15m");
  await page.getByRole("button", { name: "Done", exact: true }).click();
  await page.locator(".dr-step-open").click();
  await expect(page.getByText("Keep this learning.")).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Open resource" }),
  ).toHaveAttribute("href", "https://youtu.be/abcdefghijk");
});
test("failed save keeps form and can retry", async ({ page, context }) => {
  const faults = {};
  await mock(context, undefined, faults);
  await page.goto("/Dreams");
  await unlock(page);
  await page.getByRole("button", { name: "Add goal", exact: true }).click();
  await page.getByLabel("Title", { exact: true }).fill("Keep my input");
  faults.failSave = true;
  await page.getByRole("button", { name: "Save goal" }).click();
  await expect(page.getByLabel("Title", { exact: true })).toHaveValue(
    "Keep my input",
  );
  faults.failSave = false;
  // Close the form to access the persistent retry banner.
  await page.getByRole("button", { name: "Close", exact: true }).click();
  await page.getByRole("button", { name: "Retry save" }).click();
  await expect(page.locator(".dr-goal")).toContainText("Keep my input");
});
test("two devices sync on focus and reject conflicting edits", async ({
  browser,
}) => {
  const shared = { data: initial(), revision: 0 };
  const a = await browser.newContext(),
    b = await browser.newContext();
  await mock(a, shared);
  await mock(b, shared);
  const first = await a.newPage(),
    second = await b.newPage();
  await first.goto("/Dreams");
  await second.goto("/Dreams");
  await unlock(first);
  await unlock(second);
  await second.getByRole("button", { name: "Add goal", exact: true }).click();
  await second.getByLabel("Title", { exact: true }).fill("Device two draft");
  await addGoal(first, "Device one goal");
  await second.getByRole("button", { name: "Save goal" }).click();
  await expect(second.getByLabel("Title", { exact: true })).toHaveValue(
    "Device two draft",
  );
  await second.getByRole("button", { name: "Close", exact: true }).click();
  await second.getByRole("button", { name: "Load latest" }).click();
  await expect(second.locator(".dr-goal")).toContainText("Device one goal");
  expect(shared.data.goals).toHaveLength(1);
  await addStep(first, "Synced lesson");
  await second.evaluate(() => window.dispatchEvent(new Event("focus")));
  await expect(second.locator(".dr-step-open")).toContainText("Synced lesson");
  await a.close();
  await b.close();
});
for (const width of [360, 390, 768, 1440])
  test(`layout at ${width}px`, async ({ page, context }) => {
    await page.setViewportSize({ width, height: 900 });
    const shared = {
      data: {
        goals: [
          {
            id: "g",
            title: "Learn product design",
            description: "A thoughtful foundation.",
            accent: "sage",
            order: 0,
            archived: false,
          },
        ],
        steps: [
          {
            id: "s",
            goalId: "g",
            title: "Read the fundamentals",
            notes: "",
            url: "",
            kind: "article",
            durationMinutes: 20,
            plannedDate: "",
            completed: true,
            completedThrough: 0,
            metadata: null,
            order: 0,
          },
          {
            id: "t",
            goalId: "g",
            title: "Practice a little each day",
            notes: "",
            url: "",
            kind: "task",
            durationMinutes: 30,
            plannedDate: "",
            completed: false,
            completedThrough: 0,
            metadata: null,
            order: 1,
          },
        ],
        pinnedStepId: null,
      },
      revision: 0,
    };
    await mock(context, shared);
    await page.goto("/Dreams/");
    await expect(page.locator(".dr-goal")).toBeVisible();
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
    await page.screenshot({
      path: `/tmp/dreams-${width}-overview.png`,
      fullPage: true,
    });
    await page.locator(".dr-goal-open").click();
    await expect(page.locator(".dr-step-card").first()).toBeVisible();
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
    await page.screenshot({
      path: `/tmp/dreams-${width}-path.png`,
      fullPage: true,
    });
    await page.locator(".dr-step-open").last().click();
    await expect(page.getByRole("dialog")).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(page.getByRole("dialog")).toHaveCount(0);
    if (width <= 700) {
      await page
        .getByRole("button", { name: "Your goals", exact: true })
        .click();
      await expect(page.locator(".dr-goal")).toBeVisible();
    }
  });
test("portfolio retains blue theme and navigation", async ({
  page,
  context,
}) => {
  await mock(context);
  await page.goto("/");
  await expect(page.locator("html")).not.toHaveClass(/dreams-mode/);
  await expect(page.locator("nav").first()).toBeVisible();
  await expect(page.getByRole("link", { name: /dreams/i })).toHaveCount(0);
  expect(
    await page
      .locator("h1")
      .first()
      .evaluate((el) => getComputedStyle(el).color),
  ).toBe("rgb(6, 31, 111)");
  await page.screenshot({
    path: "/tmp/dreams-portfolio-regression.png",
    fullPage: false,
  });
});

test("reorder, pin, dates, archive/restore and deletion", async ({
  page,
  context,
}) => {
  const shared = await mock(context);
  await page.goto("/Dreams");
  await unlock(page);
  await addGoal(page);
  await addStep(page, "First lesson");
  await addStep(page, "Second lesson");
  await page
    .getByRole("button", { name: "Move Second lesson up", exact: true })
    .click();
  await expect(page.locator(".dr-step-open").first()).toContainText(
    "Second lesson",
  );
  await page
    .locator(".dr-step-open")
    .filter({ hasText: "First lesson" })
    .click();
  await page
    .getByLabel("Planned date optional")
    .fill(new Date().toLocaleDateString("en-CA"));
  await page.getByRole("button", { name: "Save step", exact: true }).click();
  await page.getByRole("button", { name: "Today", exact: true }).click();
  await expect(page.locator(".dr-step-open")).toHaveCount(1);
  await page.locator(".dr-step-open").click();
  await page.getByRole("button", { name: "Pin as next", exact: true }).click();
  await expect(page.locator(".dr-continue")).toContainText("First lesson");
  await page.getByRole("button", { name: "Edit goal", exact: true }).click();
  await page.getByRole("button", { name: "Archive goal", exact: true }).click();
  await expect(page.locator(".dr-goal")).toHaveCount(0);
  await page.getByRole("button", { name: "Archived", exact: true }).click();
  await page.getByRole("button", { name: "Edit goal", exact: true }).click();
  await page.getByRole("button", { name: "Restore goal", exact: true }).click();
  await page.getByRole("button", { name: "Active", exact: true }).click();
  await page.getByRole("button", { name: "Edit goal", exact: true }).click();
  await page.getByRole("button", { name: "Delete goal", exact: true }).click();
  await page.getByRole("button", { name: "Keep it", exact: true }).click();
  await expect(page.getByRole("dialog")).toContainText("Your goal");
  await page.getByRole("button", { name: "Delete goal", exact: true }).click();
  await page.getByRole("button", { name: "Delete", exact: true }).click();
  await expect(page.locator(".dr-goal")).toHaveCount(0);
  expect(shared.data.steps).toHaveLength(0);
  expect(shared.data.pinnedStepId).toBe(null);
});
test("editing expires automatically", async ({ page, context }) => {
  await mock(context);
  await page.addInitScript(() =>
    sessionStorage.setItem(
      "dreams-edit",
      JSON.stringify({ token: "test-session", expiresAt: Date.now() + 1200 }),
    ),
  );
  await page.goto("/Dreams");
  await expect(
    page.getByRole("button", { name: "Done", exact: true }),
  ).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Edit", exact: true }),
  ).toBeVisible({ timeout: 4000 });
  await expect(
    page.getByText("Edit session ended. Unlock again to save your changes."),
  ).toBeVisible();
});

test("retry saves the latest form text after a failure", async ({
  page,
  context,
}) => {
  const faults = {};
  await mock(context, undefined, faults);
  await page.goto("/Dreams");
  await unlock(page);
  await page.getByRole("button", { name: "Add goal", exact: true }).click();
  await page.getByLabel("Title", { exact: true }).fill("Original draft");
  faults.failSave = true;
  await page.getByRole("button", { name: "Save goal", exact: true }).click();
  await expect(
    page.getByRole("dialog").getByText("Network unavailable. Retry."),
  ).toBeVisible();
  await page.getByLabel("Title", { exact: true }).fill("Updated draft");
  faults.failSave = false;
  await page
    .getByRole("dialog")
    .getByRole("button", { name: "Retry save", exact: true })
    .click();
  await expect(page.locator(".dr-goal")).toContainText("Updated draft");
});
