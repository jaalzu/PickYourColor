# Color System — PickYourColor (tinycolor2)

Este archivo reúne **todo** el sistema de color aplicado al proyecto.  
La lógica de negocio (randomización, esquemas, locks, undo/redo, edge cases) es propia.  
La librería **tinycolor2** se usa únicamente como motor matemático para validación, conversión y contraste.

Dependencia:
    npm install tinycolor2

Import (ejemplo de uso en archivos TS):
    import tinycolor from 'tinycolor2'

TIP: tinycolor solo se usa dentro de utilidades de color (`src/shared/color/*`). El resto del proyecto consume esas utilidades.

Tipos base:
    export type Palette = {
      background: string
      text: string
      primary: string
      secondary: string
      accent: string
    }

    export type Locks = Record<keyof Palette, boolean>

    export type ColorScheme =
      | 'monochrome'
      | 'analogous'
      | 'complementary'
      | 'triadic'
      | 'split-complementary'
      | 'tetradic'

UTILIDADES DE COLOR (USANDO TINYCOLOR2)
- Estas funciones están pensadas para vivir en `src/shared/color/color-utils.ts`.
- tinycolor2 encapsula la lógica de bajo nivel; el resto del sistema llama a estas funciones.

isValidHex(hex: string): boolean
    function isValidHex(hex: string): boolean {
      return tinycolor(hex).isValid()
    }

normalizeHex(hex: string): string
    function normalizeHex(hex: string): string {
      // tinycolor devuelve #rrggbb
      return tinycolor(hex).toHexString()
    }

hexToRgb(hex: string): { r: number; g: number; b: number }
    function hexToRgb(hex: string): { r: number; g: number; b: number } {
      const color = tinycolor(hex)
      if (!color.isValid()) throw new Error('Invalid HEX')
      const { r, g, b } = color.toRgb()
      return { r: Math.round(r), g: Math.round(g), b: Math.round(b) }
    }

hexToHsl(hex: string): { h: number; s: number; l: number }
    function hexToHsl(hex: string): { h: number; s: number; l: number } {
      const color = tinycolor(hex)
      if (!color.isValid()) throw new Error('Invalid HEX')
      const { h, s, l } = color.toHsl()
      return { h: Math.round(h), s: Math.round(s * 100), l: Math.round(l * 100) }
    }

hslToHex(h: number, s: number, l: number): string
    function hslToHex(h: number, s: number, l: number): string {
      // tinycolor espera s y l en 0-100 o 0-1; le pasamos 0-100
      return tinycolor({ h, s, l }).toHexString()
    }

calculateContrast(hex1: string, hex2: string): number
    function calculateContrast(hex1: string, hex2: string): number {
      // tinycolor.readability implementa WCAG contrast ratio
      return tinycolor.readability(hex1, hex2)
    }

getContrastLevel(ratio: number): 'fail' | 'warn' | 'pass'
    function getContrastLevel(ratio: number): 'fail' | 'warn' | 'pass' {
      if (ratio >= 7) return 'pass'   // AAA
      if (ratio >= 4.5) return 'warn' // AA
      return 'fail'
    }

Text color suggestion (black/white) — helper
    function bestTextColor(hexBackground: string): string {
      // Devuelve '#000000' o '#FFFFFF' según mejor contraste
      const blackContrast = calculateContrast(hexBackground, '#000000')
      const whiteContrast = calculateContrast(hexBackground, '#FFFFFF')
      return whiteContrast >= blackContrast ? '#FFFFFF' : '#000000'
    }

GENERACIÓN Y ESQUEMAS
- Mantén la lógica de esquema en `src/shared/color/schemes.ts`.
- Las funciones usan HSL y hslToHex (que usa tinycolor internamente) para producir palettes consistentes.

generateMonochrome(baseHue: number): Palette
    function generateMonochrome(baseHue: number): Palette {
      return {
        background: hslToHex(baseHue, 10, 95),
        text: hslToHex(baseHue, 20, 15),
        primary: hslToHex(baseHue, 70, 50),
        secondary: hslToHex(baseHue, 40, 65),
        accent: hslToHex(baseHue, 60, 55),
      }
    }

generateAnalogous(baseHue: number): Palette
    function generateAnalogous(baseHue: number): Palette {
      return {
        background: hslToHex(baseHue, 10, 95),
        text: hslToHex(baseHue, 20, 15),
        primary: hslToHex(baseHue, 70, 50),
        secondary: hslToHex((baseHue + 30) % 360, 60, 55),
        accent: hslToHex((baseHue - 30 + 360) % 360, 65, 60),
      }
    }

generateComplementary(baseHue: number): Palette
    function generateComplementary(baseHue: number): Palette {
      const complement = (baseHue + 180) % 360
      return {
        background: hslToHex(baseHue, 10, 95),
        text: hslToHex(baseHue, 20, 15),
        primary: hslToHex(baseHue, 70, 50),
        secondary: hslToHex(complement, 65, 55),
        accent: hslToHex(complement, 80, 60),
      }
    }

generateTriadic(baseHue: number): Palette
    function generateTriadic(baseHue: number): Palette {
      return {
        background: hslToHex(baseHue, 10, 95),
        text: hslToHex(baseHue, 20, 15),
        primary: hslToHex(baseHue, 70, 50),
        secondary: hslToHex((baseHue + 120) % 360, 65, 55),
        accent: hslToHex((baseHue + 240) % 360, 70, 60),
      }
    }

generateByScheme(scheme: ColorScheme, baseHue: number): Palette
    function generateByScheme(scheme: ColorScheme, baseHue: number): Palette {
      switch (scheme) {
        case 'monochrome': return generateMonochrome(baseHue)
        case 'analogous': return generateAnalogous(baseHue)
        case 'complementary': return generateComplementary(baseHue)
        case 'triadic': return generateTriadic(baseHue)
        default: return generateAnalogous(baseHue)
      }
    }

RANDOMIZADOR (respeta locks)
- Este código vive en `src/shared/color/randomize.ts` y se usa desde el store.

randomizePalette(current: Palette, locks: Locks, scheme?: ColorScheme): Palette
    function randomizePalette(
      current: Palette,
      locks: Locks,
      scheme?: ColorScheme
    ): Palette {
      // Edge: all locked
      if (Object.values(locks).every(Boolean)) return { ...current }

      const selectedScheme = scheme || getRandomScheme()
      const baseHue = Math.floor(Math.random() * 360)
      const generated = generateByScheme(selectedScheme, baseHue)

      // Si solo 1 color libre, armonizamos con los bloqueados
      const freeColors = (Object.keys(locks) as (keyof Palette)[]).filter(k => !locks[k])
      if (freeColors.length === 1) {
        const lockedHue = getAverageHue(current, locks)
        const newHue = (lockedHue + randomOffset()) % 360
        const single = {
          ...current,
          [freeColors[0]]: hslToHex(newHue, randomSat(), randomLight()),
        }
        return single
      }

      return {
        background: locks.background ? current.background : normalizeHex(generated.background),
        text: locks.text ? current.text : normalizeHex(generated.text),
        primary: locks.primary ? current.primary : normalizeHex(generated.primary),
        secondary: locks.secondary ? current.secondary : normalizeHex(generated.secondary),
        accent: locks.accent ? current.accent : normalizeHex(generated.accent),
      }
    }

UTILS AUXILIARES (helpers)
getRandomScheme()
    function getRandomScheme(): ColorScheme {
      const schemes: ColorScheme[] = ['monochrome','analogous','complementary','triadic']
      return schemes[Math.floor(Math.random() * schemes.length)]
    }

randomOffset() // pequeño offset en grados
    function randomOffset(min = 10, max = 40): number {
      return Math.floor(Math.random() * (max - min + 1)) + min
    }

randomSat(), randomLight()
    function randomSat() { return Math.floor(Math.random() * (80 - 40 + 1)) + 40 } // 40-80
    function randomLight() { return Math.floor(Math.random() * (80 - 30 + 1)) + 30 } // 30-80

getAverageHue(current: Palette, locks: Locks): number
    function getAverageHue(current: Palette, locks: Locks): number {
      const hues: number[] = []
      ;(Object.keys(current) as (keyof Palette)[]).forEach(key => {
        if (!locks[key]) return
        try {
          const { h } = hexToHsl(current[key])
          hues.push(h)
        } catch {
          // ignore invalid
        }
      })
      if (hues.length === 0) return Math.floor(Math.random() * 360)
      const sum = hues.reduce((a,b) => a + b, 0)
      return Math.round(sum / hues.length)
    }

NORMALIZACIÓN Y VALIDACIÓN AL HABILITAR INPUT / HYDRATE
- Siempre normalizar lo que viene del input o localStorage con `normalizeHex`.
- Validar con `isValidHex` antes de aplicar al store; si inválido, no escribir y mostrar error UX.

EDGE CASES IMPORTANTES
All colors locked
    if (Object.values(locks).every(Boolean)) {
      // no randomizar, opcional: notificar con aria-live
      return current
    }

Background y text locked (verificar contraste)
    if (locks.background && locks.text) {
      const ratio = calculateContrast(current.background, current.text)
      if (ratio < 4.5) {
        // emitir advertencia en consola y en UI (aria-live), no romper el comportamiento
        console.warn('Locked colors have poor contrast:', ratio)
      }
    }

Very few free colors
- Si solo 1 color libre: generar con `getAverageHue` para mantener armonía.
- Si 2 colores libres: generar con esquema que preserve balance (usar generateByScheme con baseHue cercano al promedio).

INTEGRACIÓN CON ZUSTAND (notas rápidas)
- El store guarda `palette`, `locks`, `theme`, `history`.
- Al hidratar desde localStorage: validar cada color con `isValidHex` y normalizar con `normalizeHex`.
- Antes de push al history: snapshot con palette normalizada.

PRUEBAS (tests unitarios sugeridos - Vitest)
- isValidHex: acepta `#FFFFFF`, `#fff`, rechaza `#GGGGGG`
- normalizeHex: `#abc` -> `#aabbcc`
- calculateContrast('#FFFFFF', '#000000') ≈ 21
- randomizePalette respeta locks
- randomizePalette con todo locked retorna current
- generateByScheme produce hex válidos

EJEMPLOS DE TEST (pseudocódigo)
    describe('calculateContrast', () => {
      it('white vs black = ~21', () => {
        expect(calculateContrast('#FFFFFF', '#000000')).toBeGreaterThan(20)
      })
      it('same color = 1', () => {
        expect(calculateContrast('#FF5733', '#FF5733')).toBeCloseTo(1, 1)
      })
    })

    describe('randomizePalette', () => {
      it('respects locks', () => {
        const initial = { background: '#ffffff', text: '#111111', primary: '#2563eb', secondary: '#10b981', accent: '#f59e0b' }
        const locks = { background: true, text: false, primary: false, secondary: false, accent: false }
        const result = randomizePalette(initial, locks)
        expect(result.background).toBe(initial.background)
      })
      it('no change if all locked', () => {
        const initial = { background: '#ffffff', text: '#111111', primary: '#2563eb', secondary: '#10b981', accent: '#f59e0b' }
        const allLocked = { background: true, text: true, primary: true, secondary: true, accent: true }
        const result = randomizePalette(initial, allLocked)
        expect(result).toEqual(initial)
      })
    })

IMPLEMENTACIÓN RECOMENDADA (resumen práctico)
- tinycolor2 solo en `src/shared/color/*` (color-utils, randomize, contrast, schemes).
- store y UI no importan tinycolor directamente; consumen solo las funciones exportadas por los utils.
- validar y normalizar siempre al poner datos en el store (inputs y hydrate).
- tests sobre utils y store (no sobre tinycolor internals).
- edge cases deben reportar vía `aria-live` para accesibilidad, NO romper el flujo del usuario.

FIN DEL ARCHIVO - Copiá esto tal cual en `docs/color-system.md` o `src/shared/color/README.md`.  
