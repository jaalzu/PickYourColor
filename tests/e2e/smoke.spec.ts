// tests/e2e/smoke.spec.ts
import { test, expect } from "@playwright/test";

test("should load the page", async ({ page }) => {
  await page.goto("/");

  // Verificar que el toolbar existe
  await expect(page.locator("text=Primary")).toBeVisible();
  await expect(page.locator("text=Secondary")).toBeVisible();
  await expect(page.locator("text=Accent")).toBeVisible();
});

test("should have color inputs", async ({ page }) => {
  await page.goto("/");

  const buttons = await page.locator("button").all();

  expect(buttons.length).toBeGreaterThan(5);
});
