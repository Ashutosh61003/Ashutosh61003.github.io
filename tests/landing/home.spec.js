import { test, expect } from "@playwright/test";
for (const [width, height] of [
  [1440, 900],
  [390, 844],
  [320, 568],
  [844, 390],
]) {
  test(`minimal homepage fits ${width}×${height} without scrolling`, async ({
    page,
  }) => {
    const errors = [];
    page.on("pageerror", (error) => errors.push(error.message));
    await page.setViewportSize({ width, height });
    await page.goto("/");
    await expect(
      page.getByRole("heading", { name: "Ashutosh Srivastava" }),
    ).toBeVisible();
    await expect(page.getByRole("link", { name: "Ashutosh Srivastava — open portfolio" })).toBeVisible();
    await page.mouse.wheel(0, 900);
    expect(
      await page.evaluate(() => ({
        height: document.documentElement.scrollHeight,
        width: document.documentElement.scrollWidth,
        scroll: scrollY,
        body: document.body.scrollTop,
      })),
    ).toEqual({ height, width, scroll: 0, body: 0 });
    await expect(page.locator(".landing-portrait")).toHaveCSS(
      "border-radius",
      "50%",
    );
    expect(errors).toEqual([]);
  });
}
test("theme switches immediately and the latest portrait remains preloaded", async ({
  page,
}) => {
  await page.goto("/");
  await page.waitForFunction(() =>
    [...document.querySelectorAll(".landing-portrait img")].every(
      (i) => i.complete && i.naturalWidth,
    ),
  );
  const images = [];
  page.on("request", (r) => {
    if (r.resourceType() === "image") images.push(r.url());
  });
  await page.getByRole("button", { name: "Switch to dark mode" }).click();
  await expect(page.locator("body")).toHaveCSS(
    "background-color",
    "rgb(4, 4, 4)",
  );
  await expect(page.locator(".landing-portrait-dark")).toHaveCSS(
    "opacity",
    "1",
  );
  await expect(page.locator(".landing-portrait-dark")).toHaveAttribute(
    "src",
    "/images/ashutosh-dark-studio.webp",
  );
  expect(images).toEqual([]);
  await page.reload();
  await expect(
    page.getByRole("button", { name: "Switch to light mode" }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Switch to light mode" }).click();
  await expect(page.locator("body")).toHaveCSS(
    "background-color",
    "rgb(252, 252, 252)",
  );
});
test("the name opens the blue portfolio and its existing links work", async ({
  page,
}) => {
  await page.goto("/");
  await page
    .getByRole("link", { name: "Ashutosh Srivastava — open portfolio" })
    .click();
  await expect(page).toHaveURL(/\/portfolio$/);
  await expect(
    page.getByRole("heading", {
      name: "I turn messy product ideas into shipped systems.",
    }),
  ).toBeVisible();
  await expect(page.locator("html")).toHaveClass(/portfolio-mode/);
  expect(
    await page
      .locator("h1")
      .first()
      .evaluate((el) => getComputedStyle(el).color),
  ).toBe("rgb(6, 31, 111)");
  await page.goto("/portfolio/work");
  await expect(page.locator(".work-page")).toBeVisible();
  await page.goto("/portfolio/projects");
  await expect(page.locator(".projects-page")).toBeVisible();
  await page.goto("/portfolio/contact");
  await expect(page.locator(".contact-page")).toBeVisible();
});
test("retired personal pages return to the minimal homepage", async ({
  page,
}) => {
  for (const route of [
    "/about",
    "/opinions",
    "/beliefs",
    "/projects",
    "/story",
    "/connect",
    "/messages",
    "/spaces",
    "/admin",
    "/dreams",
    "/opinions/old-entry",
  ]) {
    await page.goto(route);
    await expect(page).toHaveURL("http://127.0.0.1:5177/");
    await expect(page.getByRole("link", { name: "Ashutosh Srivastava — open portfolio" })).toBeVisible();
  }
});

test("mobile intro and page menu fit and support closing and navigation", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await expect(page.locator(".landing-intro")).toBeVisible();
  const portrait = await page.locator(".landing-portrait").boundingBox();
  const intro = await page.locator(".landing-intro").boundingBox();
  const dock = await page.locator(".mobile-dock").boundingBox();
  expect(portrait.y).toBeGreaterThan(280);
  expect(intro.y + intro.height).toBeLessThan(dock.y);
  await page.getByRole("button", { name: "Open page menu" }).click();
  await expect(page.getByRole("navigation", { name: "All pages" })).toBeVisible();
  await expect(page.getByRole("button", { name: "Close page menu", exact: true }).last()).toHaveAttribute("aria-expanded", "true");
  await page.keyboard.press("Escape");
  await expect(page.getByRole("button", { name: "Open page menu" })).toBeFocused();
  await page.getByRole("button", { name: "Open page menu" }).click();
  await page.getByRole("navigation", { name: "All pages" }).getByRole("link", { name: "Portfolio", exact: true }).click();
  await expect(page).toHaveURL(/\/portfolio$/);
});
