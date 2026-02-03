// tests/e2e/randomize.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Randomize Feature', () => {
  test('should randomize colors when pressing Space key', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Esperar a que el toolbar esté visible
    await page.waitForSelector('text=PRIMARY', { timeout: 5000 });

    // Buscar el círculo de color dentro del botón PRIMARY
    const primaryButton = page.locator('button', { hasText: 'Primary' });
    
    // Capturar el color inicial
    const colorCircle = primaryButton.locator('div').first();
    const initialBg = await colorCircle.evaluate((el) => 
      window.getComputedStyle(el).backgroundColor
    );

    console.log('Color inicial:', initialBg);

    // Presionar Space
    await page.keyboard.press('Space');
    await page.waitForTimeout(500);

    // Verificar cambio
    const newBg = await colorCircle.evaluate((el) => 
      window.getComputedStyle(el).backgroundColor
    );

    console.log('Color nuevo:', newBg);
    expect(newBg).not.toBe(initialBg);
  });
});