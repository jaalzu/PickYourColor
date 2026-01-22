# 06 - Undo / Redo

## Objetivo

Sistema confiable de deshacer/rehacer con límite de 10 pasos.

---

## Qué acciones entran al historial

### SÍ crean snapshot
- ✅ Randomize completo
- ✅ Edición manual de color (con debounce de 500ms)
- ✅ Toggle theme (light ↔ dark)
- ✅ Reset de paleta

### NO crean snapshot
- ❌ Toggle de lock (discutible, pero es solo metadata)
- ❌ Cada keystroke en input de color
- ❌ Undo/Redo en sí mismos

---

## Estructura de datos

```typescript
interface History {
  past: PaletteSnapshot[];    // máximo 10
  future: PaletteSnapshot[];  // se limpia al hacer cambio nuevo
}

interface PaletteSnapshot {
  palette: {
    background: string;
    text: string;
    primary: string;
    secondary: string;
    accent: string;
  };
  locks: {
    background: boolean;
    text: boolean;
    primary: boolean;
    secondary: boolean;
    accent: boolean;
  };
  theme: 'light' | 'dark';
  timestamp: number;  // para debugging
}
```

---

## Flujo de undo

### Estado inicial
```
past: [A, B, C]
current: D
future: []
```

### Usuario hace undo
1. Se guarda `current` en `future`
2. Se saca el último elemento de `past` y se hace `current`

```
past: [A, B]
current: C
future: [D]
```

### Usuario hace undo otra vez
```
past: [A]
current: B
future: [C, D]
```

---

## Flujo de redo

### Estado inicial (después de 2 undos)
```
past: [A]
current: B
future: [C, D]
```

### Usuario hace redo
1. Se guarda `current` en `past`
2. Se saca el primer elemento de `future` y se hace `current`

```
past: [A, B]
current: C
future: [D]
```

---

## Edge case crítico: cambio después de undo

### Estado inicial
```
past: [A, B]
current: C
future: [D, E]
```

### Usuario edita un color (acción nueva)
1. Se guarda `C` en `past`
2. **Se LIMPIA `future` por completo** ❗
3. El nuevo estado `F` se vuelve `current`

```
past: [A, B, C]
current: F
future: []  // ← ya no podés hacer redo a D o E
```

**Esto es estándar en editores y lo esperado por usuarios.**

---

## Límite de 10 pasos

### Qué pasa cuando `past` tiene 10 elementos

```
past: [A, B, C, D, E, F, G, H, I, J]  // 10 elementos
current: K
```

### Usuario hace un cambio nuevo (L)
1. Se guarda `K` en `past`
2. Se elimina el **primer** elemento de `past` (A)

```
past: [B, C, D, E, F, G, H, I, J, K]  // sigue siendo 10
current: L
```

**FIFO**: First In, First Out.

---

## Cuándo se guarda snapshot

### Debounce para edición manual
```js
let timeoutId;

function onColorChange(color) {
  clearTimeout(timeoutId);
  
  timeoutId = setTimeout(() => {
    saveSnapshot();  // solo después de 500ms sin cambios
  }, 500);
}
```

### Inmediato para randomize
```js
function randomize() {
  saveSnapshot();  // antes de cambiar el estado
  generateNewPalette();
}
```

---

## UI (opcional)

### Botones
- `← Undo` → disabled si `past.length === 0`
- `Redo →` → disabled si `future.length === 0`

### Indicador visual (opcional)
Mostrar `past.length` y `future.length`:
```
Undo (3) | Redo (2)
```

---

## Testing crítico

### Tests de undo/redo

1. **Undo básico**
   - Hacer 3 cambios
   - Undo → debería volver al estado anterior
   - Verificar que `past` disminuyó

2. **Redo básico**
   - Hacer undo
   - Redo → debería volver al estado más reciente
   - Verificar que `future` disminuyó

3. **Cambio después de undo limpia future**
   - Hacer undo
   - Hacer cambio nuevo
   - Verificar que `future === []`

4. **Límite de 10**
   - Hacer 15 cambios
   - Verificar que `past.length === 10`
   - Verificar que el primer cambio ya no existe

5. **Undo sin historial**
   - Estado inicial
   - Intentar undo → no debería romper nada

---

## Implementación en Zustand

```typescript
const usePaletteStore = create<PaletteState>()(
  persist(
    (set, get) => ({
      palette: DEFAULT_PALETTE,
      locks: DEFAULT_LOCKS,
      theme: 'light',
      history: { past: [], future: [] },

      // Helper: guardar snapshot
      _saveSnapshot: () => {
        const { palette, locks, theme, history } = get();
        const snapshot = { palette, locks, theme, timestamp: Date.now() };
        
        const newPast = [...history.past, snapshot].slice(-10); // límite de 10
        
        set({
          history: { past: newPast, future: [] }  // limpia future
        });
      },

      undo: () => {
        const { history, palette, locks, theme } = get();
        if (history.past.length === 0) return;  // no hay nada que deshacer

        const previous = history.past[history.past.length - 1];
        const newPast = history.past.slice(0, -1);
        const newFuture = [{ palette, locks, theme, timestamp: Date.now() }, ...history.future];

        set({
          palette: previous.palette,
          locks: previous.locks,
          theme: previous.theme,
          history: { past: newPast, future: newFuture }
        });
      },

      redo: () => {
        const { history, palette, locks, theme } = get();
        if (history.future.length === 0) return;  // no hay nada que rehacer

        const next = history.future[0];
        const newFuture = history.future.slice(1);
        const newPast = [...history.past, { palette, locks, theme, timestamp: Date.now() }];

        set({
          palette: next.palette,
          locks: next.locks,
          theme: next.theme,
          history: { past: newPast, future: newFuture }
        });
      }
    }),
    { name: 'realtime-colors-state' }
  )
);
```