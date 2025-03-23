import { test, expect } from "@playwright/test";

const url = "https://rezervacie.porodnicabory.sk/register#firstStepReservation";

test("has title", async ({ page }) => {
  await page.goto(url);

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});
