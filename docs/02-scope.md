# 02 - Scope

## ✅ Qué ENTRA

### Features core
- [ ] Paleta de 5 colores: background, text, primary, secondary, accent
- [ ] Inputs de color (HEX con validación)
- [ ] Randomize con `Space`
- [ ] Lock individual por color (máximo 4 locks simultáneos)
- [ ] Theme toggle: Light / Dark
- [ ] Contrast checker con indicadores visuales
- [ ] Undo / Redo (10 pasos máximo)
- [ ] Persistencia automática en localStorage
- [ ] Preview UI realista (navbar, cards, buttons, text)

### Accesibilidad
- [ ] Navegación por teclado
- [ ] ARIA labels
- [ ] Contrast ratio calculator (WCAG)
- [ ] Indicadores visuales claros (fail/warn/pass)

### Testing
- [ ] Tests de lógica (Vitest)
- [ ] Tests E2E críticos (Playwright)

---

## ❌ Qué NO ENTRA

### Features descartadas (conscientemente)
- ❌ Backend / base de datos
- ❌ Usuarios y autenticación
- ❌ Guardado en la nube
- ❌ Compartir links (permalink)
- ❌ Animaciones de transición
- ❌ Colaboración en tiempo real
- ❌ Historial infinito de cambios
- ❌ Export a PNG/SVG
- ❌ Font picker avanzado
- ❌ Color blindness simulator
- ❌ Responsive preview modes

### ¿Por qué NO?
- **No son core** para el problema principal
- **Agregan complejidad** sin valor proporcional
- **Tiempo limitado** para implementar
- **Scope creep**: el enemigo de terminar proyectos

---

## Criterios de decisión

Preguntarse antes de agregar algo:
1. ¿Es absolutamente necesario para probar una paleta?
2. ¿Aprendo algo técnicamente valioso al implementarlo?
3. ¿Cuánto tiempo me va a llevar vs el valor que aporta?

**Si no hay 3 síes claros → NO ENTRA**