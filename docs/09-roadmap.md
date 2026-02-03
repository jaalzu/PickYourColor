# 09 - Roadmap

## Etapas cerradas, objetivos concretos

Cada etapa es **completable** y te deja con algo funcional.

---

## ✅ Etapa 0: Setup (no se codea nada todavía)

**Objetivo:** Tener la estructura lista para empezar a codear sin fricción.

### Tareas
- [x] Definir documentos de planificación
- [x ] Crear repo en GitHub
- [ x] Inicializar proyecto (Vite + React o Astro)
- [ x] Instalar dependencias: Zustand, Tailwind, Vitest, Playwright,zod
- [x ] Configurar scripts de dev, build, test
- [ x] Crear estructura de carpetas base
- [x ] Configurar ESLint + Prettier
- [ x] Primer commit: "chore: project setup"

**Criterio de éxito:**
- `npm run dev` abre una página en blanco
- `npm test` corre sin errores (aunque no haya tests)
- Estructura de carpetas clara

---

## 🎯 Etapa 1: Base visual (sin estado complejo)

**Objetivo:** Layout básico con inputs de color y preview UI.

### Tareas
- [ ] Layout principal (header, sidebar, preview)
- [ x] 5 inputs de color (background, text, primary, secondary, accent)
- [x ] Preview UI estático (navbar, cards, buttons, text)
- [ ] Theme toggle (botón que cambia clase CSS)
- [ ] Validación básica de HEX en inputs

**Criterio de éxito:**
- Puedo ingresar un HEX y ver el preview actualizado
- Theme toggle cambia de light a dark
- Todo se ve bien visualmente (sin bugs de layout)

**No incluye todavía:** randomize, locks, undo/redo

---



## 🧰 Etapa 1.5: Toolbar System (CORE)

**Objetivo:**  
Construir el sistema central de interacción del producto.  
El toolbar es el punto único desde donde el usuario **modifica, controla y exporta** la paleta.

Esta etapa es **bloqueante**: no se continúa con nuevas features hasta que el toolbar sea sólido, usable y confiable.

---

### Definición del Toolbar

El toolbar concentra **todas las acciones operativas**:

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
- Output:
  - exportar paleta como:
    - CSS variables
    - SCSS variables
    - Tailwind config

---

### Comportamiento en Desktop

- [ x] Toolbar flotante en la parte inferior
- [x ] Siempre visible
- [x ] No bloquea el preview
- [x ] Layout claro y compacto
- [ x] Acciones accesibles en un solo click

---

### Comportamiento en Mobile

- [x ] Toolbar colapsado por defecto
- [x ] Botón sticky inferior para expandir / colapsar
- [x ] Al expandirse ocupa todo el ancho de la pantalla
- [ x] Organización en grilla vertical

#### Grid del toolbar (mobile)

- [x ] Fila 1: Text / Background
- [x ] Fila 2: Primary / Secondary
- [x ] Fila 3: Accent / Randomize
- [x ] Fila 4: Undo / Redo
- [x ] Fila 5: Export

---

### Integración con estado

- [ x] Todos los inputs leen desde Zustand
- [x ] Todos los inputs escriben en el store
<!-- - [ ] Validación HEX en tiempo real -->
- [ x] Locks visibles y accesibles desde el toolbar

---

### Export

- [ x] Panel o modal de export
- [x ] Opciones:
  - CSS Variables
  - SCSS Variables
  - Tailwind Config
- [x ] Botón “Copy to clipboard”
- [ x] Feedback visual al copiar

---

### Criterio de éxito

- [ x] Puedo cambiar cualquier color desde el toolbar
- [ x] Puedo randomizar y volver atrás sin errores
- [x ] Puedo exportar la paleta y usarla en un proyecto real
- [x ] El toolbar funciona igual de bien en desktop y mobile
- [ x] El toolbar se siente como el centro del producto

**Commit sugerido:**  
`feat(toolbar): add core toolbar system`






## 🧠 Etapa 2: Estado y randomización

**Objetivo:** Integrar Zustand, hacer que randomize funcione.

### Tareas
- [ x] Crear store de Zustand con shape de state
- [x ] Implementar `setColor()`
- [x ] Implementar `randomize()` básico (sin locks)
- [x ] Conectar inputs al store
- [ x] Shortcut `Space` para randomize
- [ x] Implementar locks (UI + lógica)
- [ x] Randomize respeta locks

**Criterio de éxito:**
- Presiono Space → colores cambian al azar
- Lockeo un color → ese color no cambia al randomizar
- Estado está centralizado en Zustand

**No incluye todavía:** undo/redo, persistencia

---

## 🔄 Etapa 3: Undo / Redo

**Objetivo:** Historial confiable de 10 pasos.

### Tareas
- [x ] Agregar `history` al store (past, future)
- [ x] Implementar `_saveSnapshot()` helper
- [ x] Implementar `undo()`
- [ x] Implementar `redo()`
- [x ] Botones UI para undo/redo (disabled cuando no aplica)
- [x ] Límite de 10 snapshots en `past`
- [x ] Limpiar `future` al hacer cambio después de undo

**Criterio de éxito:**
- Hago 5 cambios → puedo volver 5 pasos atrás con undo
- Hago undo → puedo volver adelante con redo
- Hago undo + cambio nuevo → redo se deshabilita
- Historial no crece infinitamente (máximo 10)

**No incluye todavía:** persistencia en localStorage

---

## 💾 Etapa 4: Persistencia local

**Objetivo:** Guardar estado en localStorage.

### Tareas
- [ x] Integrar middleware `persist` de Zustand
- [ x] Configurar debounce de 500ms para auto-save
- [ x] Testear reload de página → estado se restaura

**Criterio de éxito:**
- Cambio colores → recargo página → todo sigue igual
- localStorage guarda: palette, locks, theme, history

---

## ♿ Etapa 5: Accesibilidad

**Objetivo:** WCAG AA completo.

### Tareas
- [ ] Implementar cálculo de contrast ratio
- [ ] Indicadores visuales (fail/warn/pass) en cada input
- [ x] ARIA labels en todos los inputs y botones
- [x ] Focus visible en todos los interactivos

**Criterio de éxito:**
- Puedo usar la app solo con teclado
- Contrast checker muestra indicadores correctos
- axe DevTools no reporta errores críticos
- Lector de pantalla funciona (testear manualmente)

---

## 🧪 Etapa 6: Testing

**Objetivo:** Tests de lógica y E2E básicos.

### Tareas de lógica (Vitest)
- [x ] Tests de color utils (validación, contrast)
- [x ] Tests de randomizer con locks
- [x ] Tests de undo/redo (todos los edge cases)
- [x ] Tests del store (setColor, toggleLock, etc.)

### Tareas E2E (Playwright)
- [ x] Setup de Playwright
- [ x] Test: randomize con Space
- [ x] Test: lock + randomize
- [ x] Test: undo/redo
- [ x] Test: persistencia en reload

**Criterio de éxito:**
- `npm test` pasa todos los tests
- `npm run test:e2e` pasa todos los E2E
- Cobertura de lógica core > 80%

---

## ✨ Etapa 7: Polish & Deploy (opcional)

**Objetivo:** Detalles finales y publicar.

### Tareas
- [ ] Mejorar copy/UX de mensajes de error
- [ ] Agregar tooltips en hover (opcional)
- [ ] Optimizar performance (lazy loading, code splitting)
- [ ] Correr Lighthouse → score > 90
- [ ] Deploy en Vercel/Netlify
- [ ] README con screenshots y demo link

**Criterio de éxito:**
- App publicada y accesible
- README claro y profesional
- Lighthouse score > 90 en todas las categorías

---

## 📊 Resumen de prioridades

### Must-have (core)
1. Etapa 1: Base visual
2. Etapa 1.5: Toolbar System
3. Etapa 2: Randomización + locks
4. Etapa 3: Undo/redo
4. Etapa 4: Export
5. Etapa 5: Accesibilidad


### Nice-to-have (pero importante)
- Etapa 4: Persistencia
- Etapa 6: Testing

### Optional (si sobra tiempo)
- Etapa 7: Polish & deploy

---

## Estimación de tiempo (rough)

| Etapa | Tiempo estimado |
|-------|----------------|
| 0: Setup | 1-2 horas |
| 1: Base visual | 3-4 horas |
| 2: Randomización | 4-5 horas |
| 3: Undo/redo | 3-4 horas |
| 4: Persistencia | 1-2 horas |
| 5: Accesibilidad | 4-6 horas |
| 6: Testing | 6-8 horas |
| 7: Polish | 2-4 horas |
| **Total** | **24-35 horas** |

**Esto es un proyecto de ~1 semana a tiempo completo.**

---

## Cómo usar este roadmap

1. **No saltar etapas** → cada una depende de la anterior
2. **Commitear al final de cada etapa** → para tener checkpoints
3. **Si te trabás en algo, seguir** → podés volver después
4. **No agregar features que no están acá** → scope creep mata proyectos

---

## Checklist de finalización

Al terminar todo, deberías poder:

- ✅ Abrir la app y ver una paleta por defecto
- ✅ Presionar Space y ver una nueva paleta
- ✅ Lockear 2 colores y randomizar → esos 2 no cambian
- ✅ Hacer undo/redo sin bugs
- ✅ Recargar la página → estado se mantiene
- ✅ Navegar toda la app solo con teclado
- ✅ Ver indicadores de contrast correctos
- ✅ Correr tests → todos pasan
- ✅ Deploy → link funcional

**Si todo eso funciona → proyecto completo ✅**