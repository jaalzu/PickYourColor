// tests/e2e/lock.spec.ts
import { test, expect } from '@playwright/test';
// tests/e2e/lock.spec.ts
test('should keep locked color when randomizing', async ({ page }) => {
  await page.goto('/');
  await page.waitForLoadState('networkidle');

  const primaryButton = page.locator('button', { hasText: 'PRIMARY' }).first();
  const colorCircle = primaryButton.locator('div').first();
  
  // Buscar por data-testid
  const lockButton = page.locator('[data-testid="lock-primary"]');

  const initialColor = await colorCircle.evaluate((el) => 
    window.getComputedStyle(el).backgroundColor
  );

  // Click con force (por si está oculto)
  await lockButton.click({ force: true });
  await page.waitForTimeout(300);

  const isPressed = await lockButton.getAttribute('aria-pressed');
  expect(isPressed).toBe('true');

  // Randomize
  await page.keyboard.press('Space');
  await page.waitForTimeout(500);

  const afterRandomize = await colorCircle.evaluate((el) => 
    window.getComputedStyle(el).backgroundColor
  );

  expect(afterRandomize).toBe(initialColor);
});