// src/types/index.ts
export type ColorKey =
  | "background"
  | "text"
  | "primary"
  | "secondary"
  | "accent";

export interface ColorScheme {
  background: string;
  text: string;
  primary: string;
  secondary: string;
  accent: string;
}

// Antes era una unión cerrada de ~34 valores. Ahora acepta cualquier
// nombre de familia de Google Fonts (o los valores curados de siempre,
// que también son strings válidos). El autocompletado en el editor se
// pierde, pero es el trade-off necesario para fuentes dinámicas.
export type FontKey = string;

export interface TypographySettings {
  headingFont: FontKey;
  bodyFont: FontKey;
  headingScale: number;
  bodyScale: number;
}

export interface VisualState {
  colors: ColorScheme;
  typography: TypographySettings;
}
