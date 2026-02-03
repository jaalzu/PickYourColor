// tests/e2e/persistence.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Persistence', () => {
  test('should restore colors after page reload', async ({ page }) => {
    await page.goto('/');

    // Cambiar primary a rojo
    await page.locator('[aria-label*="Primary"]').click();
    await page.waitForTimeout(200);

    const hexInput = page.locator('input[type="text"]').first();
    await hexInput.fill('#ff0000');
    await page.keyboard.press('Escape');
    await page.waitForTimeout(1000); // Esperar persist debounce

    // Capturar color
    const colorBeforeReload = await page
      .locator('[aria-label*="Primary"]')
      .locator('div[style*="background-color"]')
      .first()
      .evaluate((el) => (el as HTMLElement).style.backgroundColor);

    // Reload
    await page.reload();
    await page.waitForTimeout(500);

    // Verificar que persiste
    const colorAfterReload = await page
      .locator('[aria-label*="Primary"]')
      .locator('div[style*="background-color"]')
      .first()
      .evaluate((el) => (el as HTMLElement).style.backgroundColor);

    expect(colorAfterReload).toBe(colorBeforeReload);
  });

  test('should load colors from URL params', async ({ page }) => {
    // URL con colores específicos
    await page.goto('/?colors=000000-ffffff-ff0000-00ff00-0000ff');
    await page.waitForTimeout(500);

    // Verificar que primary es rojo (#ff0000)
    const primaryColor = await page
      .locator('[aria-label*="Primary"]')
      .locator('div[style*="background-color"]')
      .first()
      .evaluate((el) => (el as HTMLElement).style.backgroundColor);

    // rgb(255, 0, 0) es equivalente a #ff0000
    expect(primaryColor).toBe('rgb(255, 0, 0)');
  });
});