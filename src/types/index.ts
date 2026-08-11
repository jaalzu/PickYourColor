export type ColorKey = 'background' | 'text' | 'primary' | 'secondary' | 'accent';

export interface ColorScheme {
  background: string;
  text: string;
  primary: string;
  secondary: string;
  accent: string;
}

export type FontKey =
  | 'figtree'
  | 'inter'
  | 'spaceGrotesk'
  | 'montserrat'
  | 'playfair'
  | 'merriweather'
  | 'lora'
  | 'caveat'
  | 'georgia'
  | 'system'
  | 'mono';

export interface TypographySettings {
  headingFont: FontKey;
  bodyFont: FontKey;
  typeScale: number;
}

export interface VisualState {
  colors: ColorScheme;
  typography: TypographySettings;
}
