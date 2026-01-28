# 02 - Scope

**Scope** significa *alcance*: qué cosas **entran** en el producto y, por omisión, qué cosas **quedan afuera**. Es el límite que evita que el proyecto se descontrole.

Este scope está ordenado por **valor para el usuario**, no por complejidad técnica.

---

## ✅ Qué ENTRA

### Core absoluto (razón de existir del producto)

* [ ] Paleta de 5 colores: background, text, primary, secondary, accent
* [ ] Inputs de color (HEX con validación)
* [ ] Preview UI realista (navbar, cards, buttons, text)
* [ ] Toolbar central con todos los inputs y acciones
  - Inputs de color (background, text, primary, secondary, accent)
  - Acciones: randomize, undo, redo
  - Export de paleta listo para usar

---

### Creatividad y flow

* [ ] Randomize con `Space`
* [ ] Lock individual por color (máximo 4 locks simultáneos)

---

### Calidad visual y criterio

* [ ] Contrast checker con indicadores visuales (WCAG)

---

### Helpers de experiencia

* [ ] Theme toggle: Light / Dark
* [ ] Undo / Redo (10 pasos máximo)

---

### Comportamiento responsive (toolbar)

* [ ] Desktop: toolbar flotante inferior siempre visible
* [ ] Mobile: toolbar colapsable con botón sticky inferior
* [ ] Layout en grilla optimizado para uso con pulgar

---



### Output del producto (valor tangible)

* [ ] Export de paleta en formatos reales:
  - CSS variables
  - SCSS variables
  - Tailwind config
* [ ] Copy to clipboard con feedback visual

---




### Infraestructura invisible

* [ ] Persistencia automática en localStorage

---

## ♿ Accesibilidad

* [ ] Navegación por teclado
* [ ] ARIA labels
* [ ] Contrast ratio calculator (WCAG)
* [ ] Indicadores visuales claros (fail / warn / pass)

---

## 🧪 Testing

* [ ] Tests de lógica (Vitest)
* [ ] Tests E2E críticos (Playwright)


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