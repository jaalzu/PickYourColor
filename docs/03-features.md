# 03 - Features

## 1. Color Inputs

**Qué hace:**
- Permite ingresar colores en formato HEX
- Validación en tiempo real
- Eyedropper API (si el browser lo soporta)
- Botón copy para copiar el HEX

**Campos:**
- Background
- Text
- Primary
- Secondary
- Accent

**Restricciones:**
- Solo HEX válidos (#RRGGBB o #RGB)
- No permite valores inválidos

---

## 2. Randomize

**Qué hace:**
- Genera una nueva paleta aleatoria
- Respeta los colores "lockeados"
- Se activa con `Space`

**Comportamiento:**
- Si no hay locks → randomiza todos los colores
- Si hay locks → randomiza solo los no-lockeados
- Esquema de color: analogous, complementary, triadic, monochrome (rotación automática o fijo)

---

## 3. Lock Colors

**Qué hace:**
- Permite "bloquear" hasta 4 colores
- Los colores lockeados no se modifican en randomize

**UI:**
- Icono de candado en cada color input
- Estado visual: locked / unlocked
- Si intentás lockear un 5to color → error o disable

---

## 4. Contrast Checker

**Qué hace:**
- Calcula contrast ratio entre text y background
- Muestra indicador visual (fail / warn / pass)
- Basado en WCAG 2.1 AA/AAA

**Indicadores:**
- 🔴 Fail: ratio < 4.5
- 🟡 Warn: 4.5 ≤ ratio < 7
- 🟢 Pass: ratio ≥ 7

**Ubicación:**
- En cada color input (pequeño semáforo)

---

## 5. Theme Toggle

**Qué hace:**
- Cambia entre Light y Dark mode
- Invierte background y text
- Persiste en localStorage

**Comportamiento:**
- Toggle manual (botón)
- Al cambiar → actualiza la paleta invertida
- El preview UI se actualiza instantáneamente

---

## 6. Undo / Redo

**Qué hace:**
- Permite deshacer y rehacer cambios
- Máximo 10 pasos en cada dirección

**Shortcuts (opcional):**
- `Ctrl + Z` → Undo
- `Ctrl + Shift + Z` → Redo

**Estados que entran al historial:**
- Randomize
- Edición manual de color
- Lock/Unlock
- Theme toggle

---

## 7. Preview UI

**Qué muestra:**
- Navbar
- Cards
- Buttons (primary, secondary, accent)
- Text blocks
- Formulario de ejemplo

**Actualización:**
- **Instantánea** al cambiar cualquier color
- Sin animaciones, sin delays

---

## 8. Persistencia Local

**Qué se guarda:**
- Última paleta usada
- Estado de locks
- Theme (light/dark)
- Historial de undo/redo

**Cuándo:**
- Auto-save cada vez que cambia el estado
- Con debounce de 500ms

**Qué pasa al recargar:**
- Se restaura el último estado guardado