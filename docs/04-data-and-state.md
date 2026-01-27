# 04 - Data and State

## Estado Global (Zustand)

### Shape del state

```typescript
interface PaletteState {
  // Colores actuales
  palette: {
    background: string;  // HEX
    text: string;
    primary: string;
    secondary: string;
    accent: string;
  };

  // Locks por color
  locks: {
    background: boolean;
    text: boolean;
    primary: boolean;
    secondary: boolean;
    accent: boolean;
  };

  // Theme actual
  theme: 'light' | 'dark';

  // Historial para undo/redo
  history: {
    past: PaletteSnapshot[];  // máximo 10
    future: PaletteSnapshot[];
  };

  // Acciones
  setColor: (key: ColorKey, value: string) => void;
  toggleLock: (key: ColorKey) => void;
  randomize: () => void;
  toggleTheme: () => void;
  undo: () => void;
  redo: () => void;
  reset: () => void;
}

type ColorKey = 'background' | 'text' | 'primary' | 'secondary' | 'accent';

interface PaletteSnapshot {
  palette: PaletteState['palette'];
  locks: PaletteState['locks'];
  theme: PaletteState['theme'];
  timestamp: number;
}
```

---

## Qué es computed vs almacenado

### Almacenado en state
- `palette` → objeto con 5 colores
- `locks` → objeto con 5 booleans
- `theme` → string
- `history` → arrays de snapshots

### Computed (no se guarda)
- Contrast ratio → se calcula on-the-fly
- Color válido → validación en input
- Número de locks activos → `Object.values(locks).filter(Boolean).length`

---

## Persistencia en localStorage

### Qué se guarda
```json
{
  "palette": { ... },
  "locks": { ... },
  "theme": "dark",
  "history": {
    "past": [],
    "future": []
  }
}
```

### Cuándo se guarda
- **Debounce de 500ms** después de cada cambio
- NO se guarda en cada keystroke (performance)
- Se usa middleware de Zustand: `persist`

### Key del localStorage
```
pick-your-color-state
```

---

## Normalización de datos

### Locks
Guardado como objeto para acceso rápido:
```js
locks.primary  // true/false
```

**No como array:**
```js
['primary', 'text']  // ❌ más difícil de buscar
```

### Palette
Siempre HEX de 7 caracteres (`#RRGGBB`):
```js
#FF5733  // ✅
#F53     // ❌ convertir a #FF5533
```

---

## Estrategia de undo/redo

### Cuándo se crea un snapshot
- Al hacer `randomize()`
- Al cambiar un color manualmente (con debounce)
- Al hacer `toggleTheme()`
- Al hacer `toggleLock()` (opcional, debatible)

### Cuándo NO se crea snapshot
- En cada keystroke del input
- Al hacer undo/redo (obvio)

### Límite de historial
- `past`: máximo 10 snapshots
- `future`: se limpia al hacer un cambio nuevo después de undo

---

## Edge cases

### 1. Lock all colors + randomize
**Comportamiento:** No hace nada, muestra mensaje (opcional)

### 2. Undo hasta el inicio
**Comportamiento:** Botón undo se deshabilita

### 3. Redo después de hacer cambio
**Comportamiento:** Se borra el `future` (no podés rehacer algo que ya no existe)

### 4. Reload de página
**Comportamiento:** Se restaura el último estado de localStorage

### 5. localStorage lleno o deshabilitado
**Comportamiento:** La app funciona igual, pero no persiste