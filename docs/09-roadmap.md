# 09 - Roadmap

## Etapas cerradas, objetivos concretos

Cada etapa es **completable** y te deja con algo funcional.

---

## ✅ Etapa 0: Setup (no se codea nada todavía)

**Objetivo:** Tener la estructura lista para empezar a codear sin fricción.

### Tareas
- [x] Definir documentos de planificación
- [ ] Crear repo en GitHub
- [ ] Inicializar proyecto (Vite + React o Astro)
- [ ] Instalar dependencias: Zustand, Tailwind, Vitest, Playwright,zod
- [ ] Configurar scripts de dev, build, test
- [ ] Crear estructura de carpetas base
- [ ] Configurar ESLint + Prettier
- [ ] Primer commit: "chore: project setup"

**Criterio de éxito:**
- `npm run dev` abre una página en blanco
- `npm test` corre sin errores (aunque no haya tests)
- Estructura de carpetas clara

---

## 🎯 Etapa 1: Base visual (sin estado complejo)

**Objetivo:** Layout básico con inputs de color y preview UI.

### Tareas
- [ ] Layout principal (header, sidebar, preview)
- [ ] 5 inputs de color (background, text, primary, secondary, accent)
- [ ] Preview UI estático (navbar, cards, buttons, text)
- [ ] Theme toggle (botón que cambia clase CSS)
- [ ] Validación básica de HEX en inputs

**Criterio de éxito:**
- Puedo ingresar un HEX y ver el preview actualizado
- Theme toggle cambia de light a dark
- Todo se ve bien visualmente (sin bugs de layout)

**No incluye todavía:** randomize, locks, undo/redo

---

## 🧠 Etapa 2: Estado y randomización

**Objetivo:** Integrar Zustand, hacer que randomize funcione.

### Tareas
- [ ] Crear store de Zustand con shape de state
- [ ] Implementar `setColor()`
- [ ] Implementar `randomize()` básico (sin locks)
- [ ] Conectar inputs al store
- [ ] Shortcut `Space` para randomize
- [ ] Implementar locks (UI + lógica)
- [ ] Randomize respeta locks

**Criterio de éxito:**
- Presiono Space → colores cambian al azar
- Lockeo un color → ese color no cambia al randomizar
- Estado está centralizado en Zustand

**No incluye todavía:** undo/redo, persistencia

---

## 🔄 Etapa 3: Undo / Redo

**Objetivo:** Historial confiable de 10 pasos.

### Tareas
- [ ] Agregar `history` al store (past, future)
- [ ] Implementar `_saveSnapshot()` helper
- [ ] Implementar `undo()`
- [ ] Implementar `redo()`
- [ ] Botones UI para undo/redo (disabled cuando no aplica)
- [ ] Límite de 10 snapshots en `past`
- [ ] Limpiar `future` al hacer cambio después de undo

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
- [ ] Integrar middleware `persist` de Zustand
- [ ] Configurar debounce de 500ms para auto-save
- [ ] Testear reload de página → estado se restaura
- [ ] Botón "Reset" para limpiar localStorage

**Criterio de éxito:**
- Cambio colores → recargo página → todo sigue igual
- localStorage guarda: palette, locks, theme, history
- Reset vuelve a valores default

---

## ♿ Etapa 5: Accesibilidad

**Objetivo:** WCAG AA completo.

### Tareas
- [ ] Implementar cálculo de contrast ratio
- [ ] Indicadores visuales (fail/warn/pass) en cada input
- [ ] ARIA labels en todos los inputs y botones
- [ ] Navegación completa por teclado (tab order lógico)
- [ ] Focus visible en todos los interactivos
- [ ] Live regions para anuncios (randomize, lock, etc.)
- [ ] Correr axe DevTools → corregir errores

**Criterio de éxito:**
- Puedo usar la app solo con teclado
- Contrast checker muestra indicadores correctos
- axe DevTools no reporta errores críticos
- Lector de pantalla funciona (testear manualmente)

---

## 🧪 Etapa 6: Testing

**Objetivo:** Tests de lógica y E2E básicos.

### Tareas de lógica (Vitest)
- [ ] Tests de color utils (validación, contrast)
- [ ] Tests de randomizer con locks
- [ ] Tests de undo/redo (todos los edge cases)
- [ ] Tests del store (setColor, toggleLock, etc.)

### Tareas E2E (Playwright)
- [ ] Setup de Playwright
- [ ] Test: randomize con Space
- [ ] Test: lock + randomize
- [ ] Test: undo/redo
- [ ] Test: persistencia en reload
- [ ] Test: navegación con teclado
- [ ] Test: accesibilidad (axe)

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
2. Etapa 2: Randomización + locks
3. Etapa 3: Undo/redo
4. Etapa 5: Accesibilidad

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