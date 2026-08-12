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
  | 'roboto'
  | 'openSans'
  | 'lato'
  | 'poppins'
  | 'raleway'
  | 'nunito'
  | 'ubuntu'
  | 'oswald'
  | 'playpenSans'
  | 'rubik'
  | 'quicksand'
  | 'dancingScript'
  | 'pacifico'
  | 'Cinzel'
  | 'BebasNeue'
  | 'georgia'
  | 'system'
  | 'mono';

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
