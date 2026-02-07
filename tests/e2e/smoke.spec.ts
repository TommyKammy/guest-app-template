import { expect, test } from "@playwright/test";

test("homepage renders", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText("Ship guest apps faster")).toBeVisible();
});
