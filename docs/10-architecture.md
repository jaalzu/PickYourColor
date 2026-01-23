# 10 - Architecture (Vite + React + TypeScript + Atomic Design)

## 📁 Estructura de carpetas completa

PickYourColor/
├── public/
│   └── favicon.ico
│
├── src/
│   ├── components/
│   │   ├── ui/                          # Componentes reutilizables pequeños
│   │   │   ├── Button/
│   │   │   │   ├── Button.tsx
│   │   │   │   └── index.ts
│   │   │   ├── Input/
│   │   │   │   ├── Input.tsx
│   │   │   │   └── index.ts
│   │   │   ├── Badge/
│   │   │   │   ├── Badge.tsx
│   │   │   │   └── index.ts
│   │   │   ├── Card/
│   │   │   │   ├── Card.tsx
│   │   │   │   └── index.ts
│   │   │   └── ColorInput/
│   │   │       ├── ColorInput.tsx
│   │   │       └── index.ts
│   │   │
│   │   ├── features/                    # Features específicos
│   │   │   ├── ColorPicker/             # Input de color individual con lock
│   │   │   │   ├── ColorPicker.tsx
│   │   │   │   └── index.ts
│   │   │   ├── ColorPanel/              # Panel flotante con los 5 pickers
│   │   │   │   ├── ColorPanel.tsx
│   │   │   │   └── index.ts
│   │   │   ├── ColorControls/           # Randomize, undo/redo, export
│   │   │   │   ├── ColorControls.tsx
│   │   │   │   └── index.ts
│   │   │   └── ContrastIndicator/
│   │   │       ├── ContrastIndicator.tsx
│   │   │       └── index.ts
│   │   │
│   │   ├── layout/                      # Layout principal
│   │   │   ├── Navbar/
│   │   │   │   ├── Navbar.tsx
│   │   │   │   └── index.ts
│   │   │   ├── Footer/
│   │   │   │   ├── Footer.tsx
│   │   │   │   └── index.ts
│   │   │   └── MainLayout/
│   │   │       ├── MainLayout.tsx
│   │   │       └── index.ts
│   │   │
│   │   └── sections/                    # Secciones de la landing page
│   │       ├── HeroSection/             # Hero con título y descripción
│   │       │   ├── HeroSection.tsx
│   │       │   └── index.ts
│   │       ├── FeaturesSection/         # Cómo funciona / features
│   │       │   ├── FeaturesSection.tsx
│   │       │   └── index.ts
│   │       ├── TestimonialsSection/     # Reviews/comments
│   │       │   ├── TestimonialsSection.tsx
│   │       │   └── index.ts
│   │       ├── PricingSection/          # Planes de pricing
│   │       │   ├── PricingSection.tsx
│   │       │   └── index.ts
│   │       └── CTASection/              # Call to action final
│   │           ├── CTASection.tsx
│   │           └── index.ts
│   │
│   ├── store/
│   │   ├── slices/
│   │   │   ├── paletteSlice.ts          # colors, updateColor
│   │   │   ├── locksSlice.ts            # locks, toggleLock
│   │   │   ├── historySlice.ts          # history, undo, redo
│   │   │   └── uiSlice.ts               # theme, scheme selector, etc
│   │   ├── usePaletteStore.ts           # Combine all slices
│   │   └── types.ts
│   │
│   ├── utils/
│   │   ├── colors.ts                    # Color conversions, validation, contrast
│   │   ├── randomize.ts                 # Random generation por scheme
│   │   └── constants.ts
│   │
│   ├── hooks/
│   │   ├── useKeyboardShortcuts.ts      # Space → randomize, Ctrl+Z/Y
│   │   ├── useLocalStorage.ts           # Persist palette
│   │   └── useColorSync.ts              # Sync colores con CSS custom properties
│   │
│   ├── types/
│   │   ├── palette.ts
│   │   └── index.ts
│   │
│   ├── styles/
│   │   └── index.css
│   │
│   ├── App.tsx                          # Navbar + Sections + Footer
│   ├── main.tsx
│   └── vite-env.d.ts
│
├── tests/
│   ├── unit/
│   │   ├── utils/
│   │   │   ├── colors.test.ts
│   │   │   └── randomize.test.ts
│   │   └── store/
│   │       └── paletteSlice.test.ts
│   ├── e2e/
│   │   ├── color-sync.spec.ts
│   │   ├── randomize.spec.ts
│   │   └── accessibility.spec.ts
│   └── setup.ts
│
├── docs/
├── .gitignore
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
├── playwright.config.ts
├── vitest.config.ts
└── README.md
---

## 🧬 Responsabilidades por nivel (Atomic Design)

### **Atoms** — Bloques básicos
- ✅ **NO conocen el store**
- ✅ **Solo reciben props**
- ✅ **Reutilizables en cualquier proyecto**
- ✅ **No tienen lógica de negocio**

**Ejemplos:**
- `Button.tsx` → botón genérico
- `Input.tsx` → input genérico
- `Icon.tsx` → iconos SVG
- `Badge.tsx` → badge para indicadores (🔴🟡🟢)

---

### **Molecules** — Combinación de atoms
- ✅ **Pueden conocer el store** (si es necesario)
- ✅ **Lógica específica del feature**
- ✅ **Combinan atoms para formar una unidad funcional**

**Ejemplos:**
- `ColorInput.tsx` → Input + Badge (contrast) + validación
- `LockButton.tsx` → Button + Icon + lógica de lock
- `ContrastIndicator.tsx` → Badge + cálculo de contrast
- `ThemeToggle.tsx` → Button + Icon + lógica de theme

---

### **Organisms** — Secciones completas
- ✅ **Conocen el store**
- ✅ **Componen molecules + atoms**
- ✅ **Tienen lógica compleja**

**Ejemplos:**
- `ColorPalette.tsx` → Todos los ColorInput juntos
- `PaletteControls.tsx` → Randomize, Undo, Redo, Reset
- `PreviewUI.tsx` → Navbar, Cards, Buttons de preview

---

### **Templates** (opcional)
- ✅ **Layout completo de la página**
- ✅ **Compose organisms**

**Ejemplo:**
- `AppLayout.tsx` → Sidebar + Preview (2 columnas)

---

## 📂 Separación por responsabilidades

### `/stores` → Estado global

**Un solo store** con **slices para organizar**:
- `paletteSlice.ts` → palette + setColor + setPalette
- `locksSlice.ts` → locks + toggleLock + getLockedCount
- `themeSlice.ts` → theme + toggleTheme + setTheme
- `historySlice.ts` → history + undo + redo + saveSnapshot

**Todos se combinan en:**
- `usePaletteStore.ts` → Store principal (combina slices con Zustand)

**Por qué un solo store:**
- Todo el estado está relacionado (palette, locks, theme, history)
- Las acciones interactúan entre sí
- Más fácil de debuggear
- Persist funciona mejor

---

### `/utils` → Lógica pura (sin side effects)

**Organizado por dominio:**

#### `utils/color/`
- `validation.ts` → `isValidHex()`, `normalizeHex()`
- `conversion.ts` → `hexToRgb()`, `rgbToHsl()`, `hslToRgb()`, `rgbToHex()`
- `contrast.ts` → `calculateContrast()`, `getLuminance()`, `getContrastLevel()`
- `index.ts` → Re-exporta todo

#### `utils/randomizer/`
- `schemes.ts` → Funciones por esquema (monochrome, analogous, etc.)
- `randomizer.ts` → `randomizePalette()` (lógica principal)
- `index.ts` → Re-exporta todo

#### `utils/constants.ts`
- `DEFAULT_PALETTE`
- `DEFAULT_LOCKS`
- `HISTORY_LIMIT`
- etc.

---

### `/hooks` → Custom hooks

- `useShortcuts.ts` → Escucha `Space` y dispara randomize
- `useDebounce.ts` → Debounce genérico (para auto-save)
- `useColorSync.ts` → Sincroniza colores del store con CSS custom properties

---

### `/types` → Types compartidos

- `palette.ts` → `Palette`, `ColorKey`, `Locks`
- `history.ts` → `PaletteSnapshot`, `History`
- `index.ts` → Barrel export

---

## 🔄 Flujo de datos

```
User action (click, keyboard)
        ↓
Atom/Molecule (Button, Input)
        ↓
Organism (ColorPalette, PaletteControls)
        ↓
Store action (setColor, randomize, undo)
        ↓
Store state actualizado
        ↓
Todos los componentes re-renderizan
        ↓
useColorSync actualiza CSS custom properties
        ↓
Preview UI se actualiza instantáneamente
```

---

## 📦 Barrel exports (index.ts)

**Por qué usar `index.ts` en cada carpeta:**
- ✅ Imports más limpios
- ✅ Exports controlados (no exponer internals)
- ✅ Refactors más fáciles

**Ejemplo:**

```ts
// components/atoms/Button/index.ts
export { Button } from './Button';
export type { ButtonProps } from './Button';

// Uso:
import { Button } from '@/components/atoms/Button';
// en lugar de:
import { Button } from '@/components/atoms/Button/Button';
```

---

## 🎯 Convenciones de naming

### Archivos
- Componentes: `PascalCase.tsx`
- Utils: `camelCase.ts`
- Stores/Hooks: `useCamelCase.ts`
- Types: `camelCase.ts`
- Tests: `*.test.ts` o `*.spec.ts`

### Carpetas
- Componentes: `PascalCase/`
- Utils/Types: `camelCase/`

### Variables
- Constantes: `UPPER_SNAKE_CASE`
- Funciones: `camelCase`
- Componentes: `PascalCase`
- Types/Interfaces: `PascalCase`

### Data attributes (para testing)
```tsx
<input data-testid="bg-input" />
<button data-testid="lock-primary" />
<button data-testid="randomize-btn" />
```

---

## 📍 Dónde vive qué lógica

### Cálculo de contrast ratio
**Dónde:** `/utils/color/contrast.ts`  
**Por qué:** Es lógica pura, no depende del store.

```ts
export function calculateContrast(hex1: string, hex2: string): number {
  const lum1 = getLuminance(hex1);
  const lum2 = getLuminance(hex2);
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  return (brightest + 0.05) / (darkest + 0.05);
}
```

---

### Randomización de paleta
**Dónde:** `/utils/randomizer/randomizer.ts`  
**Por qué:** Es lógica compleja que merece archivo propio.

```ts
export function randomizePalette(
  current: Palette,
  locks: Locks
): Palette {
  // Genera nueva paleta respetando locks
  // ...
}
```

**Llamada desde:** Store action `randomize()`

```ts
// stores/usePaletteStore.ts
randomize: () => {
  const { palette, locks } = get();
  const newPalette = randomizePalette(palette, locks);
  set({ palette: newPalette });
  get().saveSnapshot(); // Guardar en historial
}
```

---

### Validación de HEX
**Dónde:** `/utils/color/validation.ts`

```ts
export function isValidHex(hex: string): boolean {
  return /^#[0-9A-F]{6}$/i.test(hex);
}
```

**Usada en:** `ColorInput.tsx` (antes de llamar al store)

```tsx
// components/molecules/ColorInput/ColorInput.tsx
const handleBlur = () => {
  if (isValidHex(inputValue)) {
    setColor(colorKey, inputValue);
  } else {
    setInputValue(palette[colorKey]); // revertir
  }
};
```

---

### Auto-save a localStorage
**Dónde:** Middleware de Zustand (configurado en el store)

```ts
// stores/usePaletteStore.ts
export const usePaletteStore = create(
  persist(
    (set, get) => ({ /* ... */ }),
    { name: 'realtime-colors-state' }
  )
);
```

---

## 🧪 Testing por capa

### Atoms → NO testear (muy simples)
```tsx
// Button.tsx es tan simple que no necesita test unitario
// Se testea implícitamente en E2E
```

### Molecules → Testear si tienen lógica
```tsx
// tests/unit/components/ColorInput.test.tsx
describe('ColorInput', () => {
  it('valida HEX antes de actualizar store', () => {
    // ...
  });
});
```

### Organisms → Testear integración
```tsx
// tests/unit/components/ColorPalette.test.tsx
describe('ColorPalette', () => {
  it('renderiza 5 inputs correctamente', () => {
    // ...
  });
});
```

### Utils → SIEMPRE testear (crítico)
```ts
// tests/unit/utils/color.test.ts
describe('calculateContrast', () => {
  it('blanco y negro = 21', () => {
    expect(calculateContrast('#FFFFFF', '#000000')).toBeCloseTo(21, 1);
  });
});
```

### Store → SIEMPRE testear
```ts
// tests/unit/stores/usePaletteStore.test.ts
describe('usePaletteStore', () => {
  it('setColor actualiza correctamente', () => {
    // ...
  });
  
  it('undo/redo funciona correctamente', () => {
    // ...
  });
});
```

### E2E → Flows completos
```ts
// tests/e2e/randomize.spec.ts
test('randomize respeta locks', async ({ page }) => {
  // ...
});
```

---

## 📍 Imports con path aliases

**Configurar en `tsconfig.json`:**

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

**Configurar en `vite.config.ts`:**

```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
```

**Uso:**

```tsx
// ✅ Bueno
import { Button } from '@/components/atoms/Button';
import { usePaletteStore } from '@/stores/usePaletteStore';
import { isValidHex } from '@/utils/color';

// ❌ Malo (paths relativos largos)
import { Button } from '../../../components/atoms/Button';
```

---

## 🔗 Dependencias entre capas

```
Templates → Organisms → Molecules → Atoms
    ↓           ↓           ↓         ↓
  Stores  →  Stores  →  (Stores)  →  ❌
    ↓           ↓           ↓         ↓
  Utils   →  Utils   →   Utils   →  ❌
    ↓           ↓           ↓         ↓
  Hooks   →  Hooks   →   Hooks   →  ❌
```

**Reglas:**
- ✅ Atoms **NO** conocen stores (solo props)
- ✅ Molecules **PUEDEN** conocer stores (si es necesario)
- ✅ Organisms **SÍ** conocen stores
- ✅ Utils **NUNCA** importan de components/stores
- ✅ Stores **PUEDEN** usar utils
- ✅ Hooks **PUEDEN** usar stores y utils

---

## 🚀 Comandos para crear estructura

```bash
# Desde la raíz del proyecto (realtime-colors/)

# Componentes (Atomic Design)
mkdir -p src/components/atoms/{Button,Input,Icon,Badge}
mkdir -p src/components/molecules/{ColorInput,LockButton,ContrastIndicator,ThemeToggle}
mkdir -p src/components/organisms/{ColorPalette,PaletteControls,PreviewUI}
mkdir -p src/components/templates/AppLayout

# Stores
mkdir -p src/stores/slices

# Utils
mkdir -p src/utils/{color,randomizer}

# Hooks, Types, Styles
mkdir -p src/{hooks,types,styles}

# Tests
mkdir -p tests/{unit/{utils,stores},e2e}

# Docs
mkdir -p docs

# Crear index.ts en cada carpeta de componente
touch src/components/atoms/Button/index.ts
touch src/components/atoms/Input/index.ts
touch src/components/atoms/Icon/index.ts
touch src/components/atoms/Badge/index.ts

touch src/components/molecules/ColorInput/index.ts
touch src/components/molecules/LockButton/index.ts
touch src/components/molecules/ContrastIndicator/index.ts
touch src/components/molecules/ThemeToggle/index.ts

touch src/components/organisms/ColorPalette/index.ts
touch src/components/organisms/PaletteControls/index.ts
touch src/components/organisms/PreviewUI/index.ts

touch src/components/templates/AppLayout/index.ts

# Crear archivos de utils
touch src/utils/color/{validation,conversion,contrast,index}.ts
touch src/utils/randomizer/{schemes,randomizer,index}.ts
touch src/utils/constants.ts

# Crear archivos de types
touch src/types/{palette,history,index}.ts

# Crear archivos de stores
touch src/stores/slices/{paletteSlice,locksSlice,themeSlice,historySlice}.ts
touch src/stores/{usePaletteStore,types}.ts

# Crear archivos de hooks
touch src/hooks/{useShortcuts,useDebounce,useColorSync}.ts

# Crear archivo de styles
touch src/styles/index.css
```

---

## ✅ Checklist de arquitectura

- [ ] Estructura de carpetas creada según Atomic Design
- [ ] Cada componente en su carpeta con `index.ts`
- [ ] Path aliases configurados (`@/`)
- [ ] Utils separados por dominio (`color/`, `randomizer/`)
- [ ] Store separado en slices por responsabilidad
- [ ] Types en carpeta dedicada (`/types`)
- [ ] Tests separados de `src/` (en `/tests`)
- [ ] Barrel exports en cada carpeta de componente
- [ ] Data-testid en todos los elementos interactivos
- [ ] Convenciones de naming consistentes

---

## 🎯 Separación de concerns (ejemplos)

### ✅ BUENO

```tsx
// components/molecules/ColorInput/ColorInput.tsx
import { useState } from 'react';
import { usePaletteStore } from '@/stores/usePaletteStore';
import { isValidHex } from '@/utils/color';
import { Input } from '@/components/atoms/Input';
import { ColorKey } from '@/types';

interface ColorInputProps {
  colorKey: ColorKey;
}

export function ColorInput({ colorKey }: ColorInputProps) {
  const { palette, setColor } = usePaletteStore();
  const [inputValue, setInputValue] = useState(palette[colorKey]);

  const handleBlur = () => {
    if (isValidHex(inputValue)) {
      setColor(colorKey, inputValue);
    } else {
      setInputValue(palette[colorKey]); // revertir
    }
  };

  return (
    <Input
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      onBlur={handleBlur}
      data-testid={`${colorKey}-input`}
    />
  );
}
```

---

### ❌ MALO

```tsx
// components/molecules/ColorInput/ColorInput.tsx (NO HACER ESTO)
export function ColorInput() {
  // ❌ Lógica de randomización acá (no es responsabilidad del input)
  const randomize = () => {
    const newColor = '#' + Math.random().toString(16).slice(2, 8);
    setColor('primary', newColor);
  };

  // ❌ Validación inline repetida (debería estar en utils)
  const isValid = (hex: string) => {
    return hex.match(/^#[0-9A-F]{6}$/i);
  };

  return <input onClick={randomize} />;
}
```

**Por qué está mal:**
- Randomización es responsabilidad del store, no del input
- Validación debería estar en `/utils/color/validation.ts`
- Mezcla de responsabilidades

---

## 📚 Exportaciones (convención)

### Named exports (preferido para utils y componentes)
```ts
// utils/color/validation.ts
export function isValidHex(hex: string): boolean { }
export function normalizeHex(hex: string): string { }

// utils/color/index.ts
export * from './validation';
export * from './conversion';
export * from './contrast';
```

### Default export (solo para componentes principales)
```tsx
// App.tsx
export default function App() { }

// main.tsx
import App from './App';
```

---

## 🎯 ¿Listo para empezar?

Con esta estructura:
- ✅ **Modular** → cada cosa en su lugar
- ✅ **Escalable** → fácil agregar features
- ✅ **Testeable** → separación clara de responsabilidades
- ✅ **Mantenible** → Atomic Design + barrel exports
- ✅ **Profesional** → estructura que se usa en empresas reales

**Próximo paso:** Crear la estructura con los comandos de arriba y empezar con la Etapa 0 del sprint tracker (setup completo).