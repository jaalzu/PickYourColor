# 01 - Overview

## ¿Qué es este proyecto?

Una herramienta web para **probar paletas de colores en una UI real**, de forma inmediata y sin fricciones.

### Propósito

Resolver el problema de elegir colores para interfaces:
- Las paletas estáticas no muestran cómo se verán en uso real
- Probar colores en Figma/XD lleva tiempo
- Necesitás ver contrast, armonía y legibilidad **instantáneamente**

### Qué NO es

- ❌ No es un editor de diseño completo
- ❌ No es un generador de branding
- ❌ No es Figma/Adobe XD
- ❌ No tiene usuarios, cuentas ni colaboración

### Objetivo técnico (para vos)

- Manejar estado complejo en frontend (Zustand)
- Randomización controlada con locks
- Undo/Redo confiable
- Accesibilidad real (WCAG)
- Testing pragmático (Vitest + Playwright)

---

## Stack técnico

- **Framework**: React (en Astro o Vite)
- **State**: Zustand
- **Persistencia**: localStorage
- **Testing**: Vitest + Playwright
- **Styling**: Tailwind (probablemente)

---

## Filosofía del proyecto

1. **Scope controlado**: No agregar features "porque sí"
2. **UX instantánea**: Cero delays, cero animaciones innecesarias
3. **Accesibilidad primero**: No es opcional
4. **Código defendible**: Testing y estructura clara