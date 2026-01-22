# 05 - User Flow

## Flujo 1: Quick Start (randomizar hasta encontrar algo)

1. Usuario abre la app
2. Ve una paleta default
3. Presiona `Space`
4. Ve una nueva paleta aleatoria
5. Si le gusta → listo
6. Si no → vuelve a presionar `Space`
7. Repite hasta estar satisfecho

**Duración esperada:** < 30 segundos

---

## Flujo 2: Refinar con locks

1. Usuario randomiza varias veces
2. Encuentra un color que le gusta (ej: primary)
3. Hace click en el candado de ese color
4. Presiona `Space` otra vez
5. El primary se mantiene, el resto cambia
6. Lockea otro color si quiere
7. Sigue randomizando hasta tener todo

**Duración esperada:** 1-2 minutos

---

## Flujo 3: Ajuste manual + contrast check

1. Usuario tiene una paleta casi lista
2. Quiere ajustar el `text` manualmente
3. Click en el input de text
4. Ingresa un HEX (ej: `#333333`)
5. Ve el preview actualizado instantáneamente
6. Mira el contrast checker
7. Si está en rojo → ajusta hasta obtener verde
8. Listo

**Duración esperada:** 30 segundos - 1 minuto

---

## Flujo 4: Explorar theme (light/dark)

1. Usuario tiene una paleta en light mode
2. Click en el toggle de theme
3. Ve la paleta invertida (background ↔ text)
4. Decide si funciona en dark
5. Si no → ajusta colores manualmente
6. Si sí → guarda mentalmente la paleta

**Duración esperada:** 15 segundos

---

## Flujo 5: Undo/Redo (corregir error)

1. Usuario randomiza
2. Le gustaba la paleta anterior
3. Presiona `Ctrl + Z` (o botón undo)
4. Vuelve a la paleta anterior
5. Si se arrepiente → `Ctrl + Shift + Z` (redo)

**Duración esperada:** 5 segundos

---

## Flujo 6: Persistencia (volver después)

1. Usuario cierra la pestaña
2. Vuelve al día siguiente
3. La app restaura la última paleta guardada
4. Continúa trabajando desde donde dejó

---

## Puntos de fricción a evitar

- ❌ Delays en actualización de preview
- ❌ Locks que no funcionan
- ❌ Undo/redo que pierde el estado
- ❌ Contrast checker que no es claro
- ❌ Inputs de color que aceptan valores inválidos
- ❌ Theme toggle que no invierte bien los colores

---

## Happy path vs Edge cases

### Happy path
Usuario randomiza, lockea, ajusta, listo.

### Edge cases
- Lockear 5 colores (no debería poder)
- Randomizar con todo lockeado (no hace nada)
- Undo sin historial (botón disabled)
- Input con valor inválido (no se aplica)