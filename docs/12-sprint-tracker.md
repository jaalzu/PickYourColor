# 12 - Sprint Tracker

## 🎯 Tu TODO operativo

Este es el documento que vas a usar **todos los días**.  
Tachá cada checkbox cuando completes la tarea.

---

# ============================================

# ETAPA 0: SETUP COMPLETO   listoooooooooo ya lo terminaste crack

# ============================================

# 1. Crear proyecto con Vite + React + TypeScript

npm create vite@latest pickyourcolor -- --template react-ts

# 2. Entrar al proyecto

cd pickyourcolor

# 3. Instalar dependencias base

npm install

# 4. Instalar Zustand (state management)

npm install zustand

# 4.5 Instalar Zod (validación de inputs)

npm install zod

# 5. Instalar Tailwind CSS

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# 5.5 Instalar tinycolor2 (utils de color)

npm install tinycolor2

# 6. Testing unitario

npm install -D vitest @testing-library/react @testing-library/jest-dom @vitejs/plugin-react jsdom

# 7. Playwright (E2E)

npm install -D @playwright/test

# 8. Axe (accesibilidad)

npm install -D @axe-core/playwright

# 9. Abrir proyecto

code .

# ============================================

# ¡LISTO! Ahora seguí con la configuración

# ===

---

## 🎨 Etapa 1: Base visual

**Objetivo:** UI básica con inputs y preview funcionando.

### Layout base

- [✅ ] Crear `App.tsx` con layout de 2 columnas (sidebar + preview)
- [ ✅] Sidebar: contenedor para inputs y controles
- [✅ ] Preview: contenedor para UI de ejemplo
- [ ✅] Header con título del proyecto

### Inputs de color

- [ ✅] Crear ColorInput.tsx
- [✅ ] 5 inputs (background, text, primary, secondary, accent)
- [ ✅] Cada input muestra el HEX actual
- [✅ ] Validación básica de HEX en `onChange`
- [✅ ] Input con `data-testid` para testing

### Preview UI

- [ ✅] Crear `PreviewUI.tsx` en `/components/preview/`
- [✅ ] Navbar de ejemplo (con background y text)
- [✅ ] 2-3 Cards de ejemplo
- [ ✅] Botones con primary, secondary, accent
- [ ✅] Párrafo de texto de ejemplo
- [ ✅] Todo actualiza en tiempo real al cambiar input

### Validación

- [✅ ] Crear /utils/color.ts
- [ ✅] Función isValidHex(value) - usa tinycolor(value).isValid()
- [ ✅] Mostrar error visual si es inválido
- [ ✅] No romper UI si el input es inválido



---


## 🧰 Etapa 1.5: Toolbar System (CORE)

**Objetivo:**  
Construir el sistema central de interacción de la app.  
El toolbar debe permitir **modificar colores, deshacer/rehacer acciones, randomizar y exportar el resultado**, funcionando de forma sólida tanto en desktop como en mobile.

Esta etapa es **bloqueante**: no se continúan nuevas features ni secciones hasta que el toolbar funcione perfectamente.

---

### 🧱 Definición del Toolbar

El **Toolbar** es el contenedor único de:

- Inputs de color: 
  - background
  - text
  - primary
  - secondary
  - accent
- Acciones:
  - randomize
  - undo
  - redo
  - export
- Output:
  - exportar paleta como:
    - CSS variables
    - SCSS variables
    - Tailwind config

---

### 🖥️ Comportamiento en Desktop

- [✅ ] Toolbar flotante fijo en la parte inferior
- [ ✅] Siempre visible (no se oculta con scroll)
- [✅ ] No bloquea el preview
- [✅ ] Layout horizontal claro y compacto
- [ ✅] Acciones principales accesibles en 1 click

---

### 📱 Comportamiento en Mobile

- [✅ ] Toolbar colapsado por defecto
- [ ✅] Botón sticky inferior para expandir / colapsar
- [ ✅] Al expandirse:
  - ocupa todo el ancho de la pantalla
  - se organiza en grilla vertical

#### Grid del toolbar (mobile)

- [✅ ] Fila 1: Text / Background
- [ ✅] Fila 2: Primary / Secondary
- [✅ ] Fila 3: Accent / Randomize
- [✅ ] Fila 4: Undo / Redo
- [✅ ] Fila 5: Export

---

### 🎨 Inputs de color (integración)

- [✅ ] Todos los inputs leen desde Zustand
- [✅ ] Todos los inputs escriben en el store
- [ ] Validación HEX en tiempo real
- [ ] Error visual sin romper el estado
- [ ✅] Locks visibles y accesibles desde el toolbar

---

### 🔄 Acciones del Toolbar

#### Randomize
- [✅ ] Botón visible en toolbar
- [ ✅] Respeta locks
- [ ✅] Shortcut Space (desktop)

#### Undo / Redo
- [ ]✅ Botones visibles en toolbar
- [ ✅] Disabled cuando no hay historial
- [ ✅] Estado sincronizado con el store

---

### 📤 Export

- [✅ ] Botón de export en toolbar
- [ ✅] Modal o panel con opciones:
  - [✅ ] CSS Variables
  - [ ✅] SCSS Variables
  - [ ✅] Tailwind Config
- [ ✅] Botón “Copy to clipboard”
- [ ✅] Feedback visual al copiar (toast o label)

---

### ♿ Accesibilidad

- [ ✅] Todos los botones con `aria-label`
- [✅ ] Focus visible en todos los controles
- [ ✅] Mobile: botones con tamaño táctil adecuado

---

### ✅ Criterio de éxito

- [ ✅] Puedo cambiar cualquier color desde el toolbar
- [ ✅] Puedo randomizar y volver atrás sin errores
- [ ✅] Puedo exportar la paleta y pegarla en un proyecto real
- [ ✅] El toolbar funciona igual de bien en desktop y mobile
- [ ✅] El toolbar se siente como el **centro del producto**

---

**Commit sugerido:**  
`feat(toolbar): add core toolbar system`



## 🧠 Etapa 2: Estado y randomización

**Objetivo:** Zustand funcionando + randomize con locks.

### Store de Zustand

- [ ✅] Crear `usePaletteStore.ts` en `/stores/`
- [ ✅] Definir shape del state (ver `04-data-and-state.md`):
  ```ts
  palette: {
    (background, text, primary, secondary, accent);
  }
  locks: {
    (background, text, primary, secondary, accent);
  }
  theme: "light" | "dark";
  ```
- [ ✅] Acción `setColor(key, value)`
- [ ✅] Acción `toggleLock(key)`

### Randomización básica

- [ ✅] Crear `randomizer.ts` en `/utils/`
- [ ✅] Función `randomizePalette()` que genera 5 colores random
- [ ✅] Acción `randomize()` en el store

### Randomización con tinycolor2

- [✅ ] Generar colores usando tinycolor2
- [ ✅] Asegurar formato #RRGGBB
- [ ✅] Evitar colores inválidos

### Integrar Zustand con UI

- [✅ ] `ColorInput.tsx` lee del store (`palette[key]`)
- [ ✅] `ColorInput.tsx` llama a `setColor()` en `onChange`
- [ ✅] `PreviewUI.tsx` lee colores del store

### Shortcut Space

- [ ✅] Crear hook `useShortcuts.ts` en `/hooks/`
- [ ✅] Escuchar evento `keydown` con `Space`
- [✅ ] Llamar a `randomize()` al presionar Space
- [✅ ] Prevenir scroll de página (e.preventDefault)

### Lock buttons

- [ ✅] Crear `LockButton.tsx` en `/components/palette/`
- [ ✅] Icono de candado (locked/unlocked)
- [✅ ] Llama a `toggleLock()` del store
- [✅ ] Estado visual: locked = candado cerrado

### Randomize respeta locks

- [✅ ] Modificar `randomizePalette()` para aceptar `locks` como param
- [ ✅] Si color está locked → no cambia
- [✅ ] Si todos están locked → no randomiza nada (edge case)

**Commit:** `feat(state): add zustand store and randomization`

**Criterio de éxito:**  
✅ Presiono Space → todos los colores cambian  
✅ Lockeo un color → ese color NO cambia al randomizar  
✅ Lockeo todo → randomize no hace nada  
✅ Estado está centralizado en Zustand

---

## 🔄 Etapa 3: Undo / Redo

**Objetivo:** Historial confiable de 10 pasos.

### Estructura de historial

- [✅ ] Agregar al store:
  ```ts
  history: {
    past: PaletteSnapshot[],  // max 10
    future: PaletteSnapshot[]
  }
  ```
- [ ✅] Definir type `PaletteSnapshot` (palette + locks + theme)

### Helper de snapshot

- [ ✅] Crear `_saveSnapshot()` en el store
- [ ✅] Guarda snapshot en `history.past`
- [ ✅] Limita a 10 elementos (FIFO)
- [ ✅] Limpia `history.future`

### Acción undo

- [ ✅] Implementar `undo()` en el store
- [ ✅] Si `past.length === 0` → no hace nada
- [ ✅] Mueve `current` a `future`
- [ ✅] Restaura último elemento de `past`

### Acción redo

- [ ✅] Implementar `redo()` en el store
- [ ✅] Si `future.length === 0` → no hace nada
- [ ✅] Mueve `current` a `past`
- [ ✅] Restaura primer elemento de `future`

### Integrar snapshots

- [ ✅] Llamar `_saveSnapshot()` antes de `randomize()`
- [ ✅] Llamar `_saveSnapshot()` al cambiar color manualmente (con debounce)

### UI de undo/redo

- [ ✅] Botones de undo/redo en la UI
- [ ✅] Disabled cuando no hay historial
- [ ✅] Shortcuts `Ctrl+Z` y `Ctrl+Shift+Z` (opcional)

### Edge case: cambio después de undo

- [ ✅] Test: undo → cambio nuevo → future se limpia

**Commit:** `feat(history): add undo/redo system`

**Criterio de éxito:**  
✅ Hago 5 cambios → puedo volver 5 pasos atrás  
✅ Hago undo → puedo hacer redo  
✅ Hago undo + cambio nuevo → redo se deshabilita  
✅ Historial no crece más de 10 pasos

---

## 💾 Etapa 4: Persistencia local

**Objetivo:** Guardar estado en localStorage.

### Middleware persist

- [ ✅] Instalar (si no viene con Zustand): `npm install zustand`
- [ ✅] Envolver store con `persist()`
- [ ✅] Key: `'realtime-colors-state'`
- [✅ ] Persistir: palette, locks, theme, history

### Debounce para auto-save

- [ ✅] Crear `useDebounce.ts` en `/hooks/`
- [ ✅] Configurar debounce de 500ms en persist middleware
- [ ✅] Evitar guardado en cada keystroke

### Test de reload

- [✅ ] Cambiar colores
- [ ✅] Esperar 600ms
- [ ✅] Recargar página (`F5`)
- [ ✅] Verificar que el estado se restauró

### Botón Reset


**Commit:** `feat(persistence): add localStorage integration`

**Criterio de éxito:**  
✅ Cambio colores → recargo página → todo sigue igual  
✅ Historial persiste entre reloads  
✅ Reset limpia todo y vuelve a default

---

## ♿ Etapa 5: Accesibilidad

**Objetivo:** WCAG AA completo.

<!-- ### Contrast checker

- [ ] En /utils/color.ts:
- [ ] calculateContrast(colorA, colorB) - usa tinycolor.readability()
- [ ] Crear `ContrastIndicator.tsx` en `/components/palette/`
- [ ] getContrastLevel() → fail | warn | passt
- [ ] Tooltip con ratio exacto (ej: "4.8:1") -->

### ARIA labels

- [✅ ] Todos los inputs tienen `aria-label`
- [ ✅] Lock buttons tienen `aria-label` dinámico
- [✅ ] Randomize button tiene `aria-label="Randomize colors (Space)"`

### Testing con axe

- [ ] Instalar `@axe-core/playwright`
- [ ] Correr axe en la página
- [ ] Corregir violaciones críticas

**Commit:** `feat(a11y): add accessibility features`

**Criterio de éxito:**  
✅ Puedo usar toda la app solo con teclado  
✅ Contrast checker funciona correctamente  
✅ axe DevTools no reporta errores críticos  
✅ ARIA labels en todos los elementos

---

## 🧪 Etapa 6: Testing

**Objetivo:** Tests de lógica y E2E.

### Setup de Vitest

- [ ] `npm install -D vitest @testing-library/react @testing-library/jest-dom`
- [ ] Crear `vitest.config.js`
- [ ] Crear `src/test/setup.ts`
- [ ] Script `"test": "vitest"` en package.json

### Tests de color utils

- [ ] Test: `isValidHex()` valida correctamente
- [ ] Test: `calculateContrast()` blanco y negro = 21
- [ ] Test: `calculateContrast()` mismo color = 1
- [ ] Test: `calculateContrast()` bajo contraste < 4.5

### Tests de randomizer

- [ ] Test: `randomizePalette()` respeta locks
- [ ] Test: `randomizePalette()` no cambia nada si todo locked
- [ ] Test: genera colores válidos (HEX de 6 chars)

### Tests del store

- [ ] Test: `setColor()` actualiza correctamente
- [ ] Test: `toggleLock()` funciona
- [ ] Test: `undo()` restaura estado anterior
- [ ] Test: `redo()` vuelve adelante
- [ ] Test: cambio después de undo limpia future
- [ ] Test: límite de 10 snapshots funciona

### Setup de Playwright

- [ ] `npm install -D @playwright/test`
- [ ] `npx playwright install`
- [ ] Crear `playwright.config.ts`
- [ ] Script `"test:e2e": "playwright test"` en package.json

### Tests E2E críticos

- [ ] Test: randomize con Space cambia colores
- [ ] Test: lock + randomize respeta locked
- [ ] Test: undo/redo funciona
- [ ] Test: persistencia en reload
- [ ] Test: navegación con teclado
- [ ] Test: no hay violaciones de a11y (axe)

### Edge cases

- [ ] Test: randomize con todo locked no hace nada
- [ ] Test: input inválido no actualiza estado

**Commit:** `test: add vitest and playwright tests`

**Criterio de éxito:**  
✅ `npm test` pasa todos los tests  
✅ `npm run test:e2e` pasa todos los E2E  
✅ Cobertura de lógica core > 70%

---

## ✨ Etapa 7: Polish (opcional)

**Objetivo:** Detalles finales.

### UX improvements

- [ ] Mensajes de error claros
- [ ] Tooltips en hover (opcional)
- [ ] Loading states (si aplica)

### Performance

- [ ] Lazy load de componentes (si es necesario)
- [ ] Code splitting (si el bundle es muy grande)

### Deploy

- [ ] Crear cuenta en Vercel/Netlify
- [ ] Conectar repo de GitHub
- [ ] Deploy automático en push a main
- [ ] Verificar que funciona en producción

### README

- [ ] Screenshot del proyecto
- [ ] Link a demo live
- [ ] Instrucciones de instalación
- [ ] Features principales
- [ ] Stack técnico

### Lighthouse

- [ ] Correr Lighthouse
- [ ] Score > 90 en Performance
- [ ] Score > 90 en Accessibility
- [ ] Score > 90 en Best Practices
- [ ] Score > 90 en SEO

**Commit:** `chore: polish and deploy`

**Criterio de éxito:**  
✅ App publicada y accesible  
✅ README profesional  
✅ Lighthouse score > 90

---

## 📊 Progreso general

```
[ ] Etapa 0: Setup (0/10)
[ ] Etapa 1: Base visual (0/15)
[ ] Etapa 2: Randomización (0/13)
[ ] Etapa 3: Undo/redo (0/10)
[ ] Etapa 4: Persistencia (0/5)
[ ] Etapa 5: Accesibilidad (0/8)
[ ] Etapa 6: Testing (0/15)
[ ] Etapa 7: Polish (0/8)
```

**Total de tareas:** ~84

---

## 🎯 Próximo paso

👉 **Empezá por la Etapa 0: Setup**

Tachá cada checkbox a medida que lo completes.  
Commitea después de cada sección terminada.

**¡A codear! 🚀**
