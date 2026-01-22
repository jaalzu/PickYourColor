# 07 - Accessibility

## Objetivo

Hacer la app **usable por cualquier persona**, incluyendo:
- Usuarios con baja visión
- Usuarios que usan solo teclado
- Usuarios con lectores de pantalla

**Esto no es opcional, es core.**

---

## 1. Contrast Checker (WCAG 2.1)

### Qué se mide
Contrast ratio entre `text` y `background`.

### Fórmula (simplificada)
```
ratio = (L1 + 0.05) / (L2 + 0.05)

donde L1 y L2 son las luminancias relativas de los colores
```

### Niveles WCAG
- **AA Normal**: ratio ≥ 4.5:1
- **AA Large**: ratio ≥ 3:1 (texto >18pt o bold >14pt)
- **AAA Normal**: ratio ≥ 7:1
- **AAA Large**: ratio ≥ 4.5:1

### Indicadores visuales

```
🔴 Fail  → ratio < 4.5
🟡 Warn  → 4.5 ≤ ratio < 7
🟢 Pass  → ratio ≥ 7
```

### Dónde mostrar
- En cada color input (pequeño semáforo)
- Tooltip con el ratio exacto (ej: "4.8:1")

---

## 2. Navegación por teclado

### Tab order lógico
1. Color inputs (background → text → primary → secondary → accent)
2. Lock buttons
3. Randomize button
4. Theme toggle
5. Undo/Redo buttons

### Shortcuts
- `Space` → Randomize
- `Tab` → Navegar entre inputs
- `Enter` → Activar botón enfocado
- `Ctrl + Z` → Undo (opcional)
- `Ctrl + Shift + Z` → Redo (opcional)

### Focus visible
Todos los elementos interactivos deben tener:
```css
:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}
```

---

## 3. ARIA labels y roles

### Color inputs
```jsx
<input
  type="text"
  aria-label="Background color"
  aria-describedby="bg-contrast-hint"
  value={palette.background}
/>

<span id="bg-contrast-hint" className="sr-only">
  Contrast ratio: 12.5:1 (Pass)
</span>
```

### Lock buttons
```jsx
<button
  aria-label={locks.primary ? "Unlock primary color" : "Lock primary color"}
  aria-pressed={locks.primary}
>
  {locks.primary ? <LockIcon /> : <UnlockIcon />}
</button>
```

### Randomize button
```jsx
<button aria-label="Randomize colors (Space)">
  <DiceIcon />
  Randomize
</button>
```

### Theme toggle
```jsx
<button
  aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
  aria-pressed={theme === 'dark'}
>
  {theme === 'dark' ? <MoonIcon /> : <SunIcon />}
</button>
```

---

## 4. Live regions (anuncios)

Para cambios dinámicos, usar `aria-live`:

```jsx
<div
  aria-live="polite"
  aria-atomic="true"
  className="sr-only"
>
  {message}  {/* ej: "Palette randomized" */}
</div>
```

### Cuándo anunciar
- Al randomizar → "New palette generated"
- Al lockear/deslockear → "Primary color locked"
- Al cambiar theme → "Switched to dark mode"
- Al hacer undo/redo → "Palette restored"

---

## 5. Manejo de prefers-reduced-motion

Aunque no hay animaciones, el cambio de colores puede ser brusco.

```css
@media (prefers-reduced-motion: reduce) {
  /* Si en el futuro agregás transitions */
  * {
    transition-duration: 0.01ms !important;
  }
}
```

---

## 6. Color inputs accesibles

### Validación en tiempo real
```jsx
const isValidHex = (hex) => /^#[0-9A-F]{6}$/i.test(hex);

<input
  type="text"
  value={inputValue}
  onChange={(e) => setInputValue(e.target.value)}
  onBlur={() => {
    if (isValidHex(inputValue)) {
      setColor('primary', inputValue);
    } else {
      // Mostrar error
      setError('Invalid HEX color');
    }
  }}
  aria-invalid={!isValidHex(inputValue)}
  aria-errormessage="hex-error"
/>

{!isValidHex(inputValue) && (
  <span id="hex-error" role="alert">
    Invalid HEX format. Use #RRGGBB.
  </span>
)}
```

---

## 7. Botones disabled

### Estados claros
```jsx
<button
  onClick={undo}
  disabled={history.past.length === 0}
  aria-disabled={history.past.length === 0}
>
  Undo
</button>
```

### Styling de disabled
```css
button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
```

---

## 8. Testing de accesibilidad

### Herramientas
- **axe DevTools** (extensión de Chrome)
- **Lighthouse** (auditoría de accesibilidad)
- **WAVE** (Web Accessibility Evaluation Tool)

### Tests automáticos (en Playwright)
```js
import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('should not have accessibility violations', async ({ page }) => {
  await page.goto('/');
  
  const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
  
  expect(accessibilityScanResults.violations).toEqual([]);
});
```

### Tests manuales
- [ ] Navegar toda la app solo con teclado
- [ ] Usar lector de pantalla (NVDA, JAWS, VoiceOver)
- [ ] Verificar contrast en todos los estados
- [ ] Testear con zoom al 200%

---

## Checklist de accesibilidad

- [ ] Todos los inputs tienen labels
- [ ] Tab order es lógico
- [ ] Focus visible en todos los elementos interactivos
- [ ] Contrast ratio cumple AA (mínimo)
- [ ] Botones disabled tienen aria-disabled
- [ ] Live regions anuncian cambios importantes
- [ ] ARIA roles correctos (button, switch, etc.)
- [ ] Sin errores en axe DevTools
- [ ] Usable solo con teclado
- [ ] Funciona con lector de pantalla