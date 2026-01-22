# 08 - Testing

## Objetivo

Testing pragmático: cubrir lo crítico, no buscar 100% coverage.

---

## Setup inicial

### Instalar dependencias
```bash
npm install -D vitest @testing-library/react @testing-library/jest-dom
npm install -D @playwright/test
```

### Scripts en package.json
```json
{
  "scripts": {
    "test": "vitest",
    "test:ui": "vitest --ui",
    "test:e2e": "playwright test",
    "test:e2e:ui": "playwright test --ui"
  }
}
```

### Configuración de Vitest
```js
// vitest.config.js
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
  },
});
```

---

## 1. Tests de lógica (Vitest)

### Color utils

```js
// src/utils/color.test.ts
import { describe, it, expect } from 'vitest';
import { isValidHex, hexToRgb, calculateContrast } from './color';

describe('isValidHex', () => {
  it('valida HEX de 6 dígitos', () => {
    expect(isValidHex('#FF5733')).toBe(true);
    expect(isValidHex('#fff')).toBe(false);
    expect(isValidHex('FF5733')).toBe(false);
  });
});

describe('calculateContrast', () => {
  it('calcula ratio correcto entre blanco y negro', () => {
    const ratio = calculateContrast('#FFFFFF', '#000000');
    expect(ratio).toBeCloseTo(21, 1);  // ratio máximo es 21:1
  });

  it('detecta fail para bajo contraste', () => {
    const ratio = calculateContrast('#FFFFFF', '#F0F0F0');
    expect(ratio).toBeLessThan(4.5);
  });
});
```

### Randomizer

```js
// src/utils/randomizer.test.ts
describe('randomizePalette', () => {
  it('respeta locks', () => {
    const initial = {
      background: '#fff',
      text: '#000',
      primary: '#FF5733',
      secondary: '#2563eb',
      accent: '#10b981',
    };

    const locks = {
      background: false,
      text: false,
      primary: true,  // locked
      secondary: false,
      accent: false,
    };

    const result = randomizePalette(initial, locks);

    expect(result.primary).toBe('#FF5733');  // no cambió
    expect(result.background).not.toBe('#fff');  // cambió
  });

  it('no cambia nada si todo está locked', () => {
    const initial = { /* ... */ };
    const locksAll = {
      background: true,
      text: true,
      primary: true,
      secondary: true,
      accent: true,
    };

    const result = randomizePalette(initial, locksAll);

    expect(result).toEqual(initial);
  });
});
```

### Store (Zustand)

```js
// src/stores/palette.test.ts
import { renderHook, act } from '@testing-library/react';
import { usePaletteStore } from './palette';

describe('usePaletteStore', () => {
  it('actualiza color correctamente', () => {
    const { result } = renderHook(() => usePaletteStore());

    act(() => {
      result.current.setColor('primary', '#FF5733');
    });

    expect(result.current.palette.primary).toBe('#FF5733');
  });

  it('toggle lock funciona', () => {
    const { result } = renderHook(() => usePaletteStore());

    act(() => {
      result.current.toggleLock('primary');
    });

    expect(result.current.locks.primary).toBe(true);

    act(() => {
      result.current.toggleLock('primary');
    });

    expect(result.current.locks.primary).toBe(false);
  });
});
```

### Undo/Redo

```js
describe('undo/redo', () => {
  it('undo restaura estado anterior', () => {
    const { result } = renderHook(() => usePaletteStore());

    const initialColor = result.current.palette.primary;

    act(() => {
      result.current.setColor('primary', '#123456');
    });

    expect(result.current.palette.primary).toBe('#123456');

    act(() => {
      result.current.undo();
    });

    expect(result.current.palette.primary).toBe(initialColor);
  });

  it('redo vuelve al estado después de undo', () => {
    const { result } = renderHook(() => usePaletteStore());

    act(() => {
      result.current.setColor('primary', '#AABBCC');
    });

    act(() => {
      result.current.undo();
    });

    act(() => {
      result.current.redo();
    });

    expect(result.current.palette.primary).toBe('#AABBCC');
  });

  it('cambio después de undo limpia future', () => {
    const { result } = renderHook(() => usePaletteStore());

    act(() => {
      result.current.setColor('primary', '#111111');
    });

    act(() => {
      result.current.undo();
    });

    expect(result.current.history.future.length).toBeGreaterThan(0);

    act(() => {
      result.current.setColor('primary', '#222222');
    });

    expect(result.current.history.future.length).toBe(0);
  });

  it('límite de 10 pasos funciona', () => {
    const { result } = renderHook(() => usePaletteStore());

    // Hacer 15 cambios
    for (let i = 0; i < 15; i++) {
      act(() => {
        result.current.setColor('primary', `#${i.toString().padStart(6, '0')}`);
      });
    }

    expect(result.current.history.past.length).toBeLessThanOrEqual(10);
  });
});
```

---

## 2. Tests E2E (Playwright)

### Setup de Playwright
```bash
npx playwright install
```

### playwright.config.ts
```ts
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  use: {
    baseURL: 'http://localhost:4321',
  },
  webServer: {
    command: 'npm run dev',
    port: 4321,
    reuseExistingServer: true,
  },
});
```

### Test 1: Randomize básico

```js
// e2e/randomize.spec.ts
import { test, expect } from '@playwright/test';

test('randomize cambia los colores', async ({ page }) => {
  await page.goto('/');

  const initialBg = await page.locator('[data-testid="bg-input"]').inputValue();

  await page.keyboard.press('Space');

  const newBg = await page.locator('[data-testid="bg-input"]').inputValue();

  expect(newBg).not.toBe(initialBg);
});
```

### Test 2: Lock + Randomize

```js
test('lock respeta colores bloqueados', async ({ page }) => {
  await page.goto('/');

  // Lockear primary
  await page.click('[data-testid="lock-primary"]');

  const lockedPrimary = await page.locator('[data-testid="primary-input"]').inputValue();

  // Randomizar
  await page.keyboard.press('Space');

  const newPrimary = await page.locator('[data-testid="primary-input"]').inputValue();

  expect(newPrimary).toBe(lockedPrimary);  // no cambió
});
```

### Test 3: Undo/Redo

```js
test('undo y redo funcionan', async ({ page }) => {
  await page.goto('/');

  const initialColor = await page.locator('[data-testid="primary-input"]').inputValue();

  // Cambiar color
  await page.fill('[data-testid="primary-input"]', '#FF5733');

  // Undo
  await page.click('[data-testid="undo-btn"]');

  const afterUndo = await page.locator('[data-testid="primary-input"]').inputValue();
  expect(afterUndo).toBe(initialColor);

  // Redo
  await page.click('[data-testid="redo-btn"]');

  const afterRedo = await page.locator('[data-testid="primary-input"]').inputValue();
  expect(afterRedo).toBe('#FF5733');
});
```

### Test 4: Persistencia en reload

```js
test('localStorage persiste al recargar', async ({ page }) => {
  await page.goto('/');

  // Cambiar color
  await page.fill('[data-testid="primary-input"]', '#AABBCC');

  // Esperar a que se guarde (debounce)
  await page.waitForTimeout(600);

  // Recargar página
  await page.reload();

  const persistedColor = await page.locator('[data-testid="primary-input"]').inputValue();

  expect(persistedColor).toBe('#AABBCC');
});
```

### Test 5: Contrast checker

```js
test('contrast checker muestra indicador correcto', async ({ page }) => {
  await page.goto('/');

  // Setear colores con bajo contraste
  await page.fill('[data-testid="bg-input"]', '#FFFFFF');
  await page.fill('[data-testid="text-input"]', '#F0F0F0');

  const indicator = await page.locator('[data-testid="contrast-indicator-text"]');

  await expect(indicator).toHaveClass(/fail/);  // rojo

  // Cambiar a alto contraste
  await page.fill('[data-testid="text-input"]', '#000000');

  await expect(indicator).toHaveClass(/pass/);  // verde
});
```

---

## 3. Accesibility tests (axe)

```js
// e2e/a11y.spec.ts
import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('no tiene violaciones de accesibilidad', async ({ page }) => {
  await page.goto('/');

  const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

  expect(accessibilityScanResults.violations).toEqual([]);
});

test('navegación con teclado funciona', async ({ page }) => {
  await page.goto('/');

  // Primer input debe estar enfocado al presionar Tab
  await page.keyboard.press('Tab');

  const focused = await page.locator(':focus');
  await expect(focused).toHaveAttribute('data-testid', 'bg-input');
});
```

---

## Edge cases críticos a testear

### 1. Lock all colors + randomize
```js
test('randomize con todo locked no hace nada', async ({ page }) => {
  await page.goto('/');

  // Lockear todos
  await page.click('[data-testid="lock-background"]');
  await page.click('[data-testid="lock-text"]');
  await page.click('[data-testid="lock-primary"]');
  await page.click('[data-testid="lock-secondary"]');
  await page.click('[data-testid="lock-accent"]');

  const initialBg = await page.locator('[data-testid="bg-input"]').inputValue();

  await page.keyboard.press('Space');

  const newBg = await page.locator('[data-testid="bg-input"]').inputValue();

  expect(newBg).toBe(initialBg);  // no cambió
});
```

### 2. Input con valor inválido
```js
test('input inválido no actualiza el estado', async ({ page }) => {
  await page.goto('/');

  const initialColor = await page.locator('[data-testid="primary-input"]').inputValue();

  await page.fill('[data-testid="primary-input"]', 'invalid');
  await page.locator('[data-testid="primary-input"]').blur();

  // Debería mostrar error o revertir al valor anterior
  const currentColor = await page.locator('[data-testid="primary-input"]').inputValue();

  expect(currentColor).toBe(initialColor);
});
```

---

## Estrategia de mocks

### Eyedropper API (no disponible en tests)
```js
// src/utils/eyedropper.ts
export const useEyedropper = () => {
  if (!('EyeDropper' in window)) {
    return null;  // no disponible
  }

  return new window.EyeDropper();
};

// En tests, mockear:
global.EyeDropper = undefined;
```

---

## Cobertura esperada

**No buscar 100%, buscar confianza.**

### Mínimo aceptable
- ✅ Lógica core: 80%+
- ✅ Componentes críticos: 70%+
- ✅ E2E happy paths: 100%

### Qué NO testear obsesivamente
- ❌ Estilos CSS
- ❌ Componentes puramente visuales sin lógica
- ❌ Edge cases extremadamente raros

---

## Checklist de testing

- [ ] `npm test` corre sin errores
- [ ] Tests de color utils (validación, conversión, contraste)
- [ ] Tests de randomizer con locks
- [ ] Tests de undo/redo (lógica completa)
- [ ] Test E2E: randomize con Space
- [ ] Test E2E: lock + randomize
- [ ] Test E2E: undo/redo
- [ ] Test E2E: persistencia en reload
- [ ] Test E2E: navegación con teclado
- [ ] Test de accesibilidad con axe
- [ ] Edge cases críticos cubiertos