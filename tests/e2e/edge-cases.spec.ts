// tests/e2e/edge-cases.spec.ts
import { test, expect } from '@playwright/test';

test('randomized colors should be valid hex', async ({ page }) => {
  await page.goto('/');
  
  await page.keyboard.press('Space');
  await page.waitForTimeout(500);
  
  // Abrir primary para ver el HEX
  await page.locator('button', { hasText: 'PRIMARY' }).click();
  await page.waitForTimeout(300);
  
  const hexInput = page.locator('input[type="text"]').first();
  const value = await hexInput.inputValue();
  
  // Debe ser HEX válido (#RRGGBB)
  expect(value).toMatch(/^#[0-9A-Fa-f]{6}$/);
});



test('complete user flow: randomize → lock → randomize → undo → export', async ({ page }) => {
  await page.goto('/');
  
  // 1. Randomize
  await page.keyboard.press('Space');
  await page.waitForTimeout(500);
  
  // 2. Lock primary
  const primaryBtn = page.locator('button', { hasText: 'PRIMARY' }).first();
  const lockBtn = primaryBtn.locator('[aria-label*="Lock"]');
  await lockBtn.click({ force: true });
  
  const lockedColor = await primaryBtn.locator('div').first().evaluate(
    (el) => window.getComputedStyle(el).backgroundColor
  );
  
  // 3. Randomize again
  await page.keyboard.press('Space');
  await page.waitForTimeout(500);
  
  // Primary no cambió
  const afterSecondRandom = await primaryBtn.locator('div').first().evaluate(
    (el) => window.getComputedStyle(el).backgroundColor
  );
  expect(afterSecondRandom).toBe(lockedColor);
  
  // 4. Undo
  await page.locator('[aria-label*="Undo"]').click();
  await page.waitForTimeout(300);
  
  // 5. Export
  await page.locator('[aria-label*="Export"]').click();
  await page.waitForTimeout(300);
  
  // Verificar que el modal abrió
  await expect(page.locator('text=Export Palette')).toBeVisible();
});