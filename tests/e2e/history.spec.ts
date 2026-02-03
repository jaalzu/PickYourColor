// tests/e2e/history.spec.ts
import { test, expect } from '@playwright/test';

test.describe('History (Undo/Redo)', () => {
  test('should undo after randomize', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const primaryButton = page.locator('button', { hasText: 'PRIMARY' }).first();
    const colorCircle = primaryButton.locator('div').first();
    
    // Color inicial
    const initialColor = await colorCircle.evaluate((el) => 
      window.getComputedStyle(el).backgroundColor
    );

    // Randomize
    await page.keyboard.press('Space');
    await page.waitForTimeout(500);

    // Verificar que cambió
    const randomizedColor = await colorCircle.evaluate((el) => 
      window.getComputedStyle(el).backgroundColor
    );

    expect(randomizedColor).not.toBe(initialColor);

    // Undo
    await page.locator('[aria-label*="Undo"]').click();
    await page.waitForTimeout(500);

    // Debe volver al inicial
    const undoneColor = await colorCircle.evaluate((el) => 
      window.getComputedStyle(el).backgroundColor
    );

    expect(undoneColor).toBe(initialColor);
  });

  test('should redo after undo', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const primaryButton = page.locator('button', { hasText: 'PRIMARY' }).first();
    const colorCircle = primaryButton.locator('div').first();

    // Randomize
    await page.keyboard.press('Space');
    await page.waitForTimeout(500);

    const randomizedColor = await colorCircle.evaluate((el) => 
      window.getComputedStyle(el).backgroundColor
    );

    // Undo
    await page.locator('[aria-label*="Undo"]').click();
    await page.waitForTimeout(500);

    // Redo
    await page.locator('[aria-label*="Redo"]').click();
    await page.waitForTimeout(500);

    // Debe volver al randomizado
    const redoneColor = await colorCircle.evaluate((el) => 
      window.getComputedStyle(el).backgroundColor
    );

    expect(redoneColor).toBe(randomizedColor);
  });
});