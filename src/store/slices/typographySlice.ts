import type { StateCreator } from 'zustand';
import type { FontKey, TypographySettings } from '../../types';
import type { ColorSlice } from './colorSlice';
import type { HistorySlice } from './historySlice';

export const FONT_STACKS: Record<FontKey, string> = {
  figtree: "'Figtree', sans-serif",
  inter: "'Inter', sans-serif",
  spaceGrotesk: "'Space Grotesk', sans-serif",
  montserrat: "'Montserrat', sans-serif",
  playfair: "'Playfair Display', serif",
  merriweather: "'Merriweather', serif",
  lora: "'Lora', serif",
  caveat: "'Caveat', cursive",
  roboto: "'Roboto', sans-serif",
  openSans: "'Open Sans', sans-serif",
  lato: "'Lato', sans-serif",
  poppins: "'Poppins', sans-serif",
  raleway: "'Raleway', sans-serif",
  nunito: "'Nunito', sans-serif",
  ubuntu: "'Ubuntu', sans-serif",
  oswald: "'Oswald', sans-serif",
  playpenSans: "'Playpen Sans', cursive",
  rubik: "'Rubik', sans-serif",
  quicksand: "'Quicksand', sans-serif",
  dancingScript: "'Dancing Script', cursive",
  pacifico: "'Pacifico', cursive",
  Cinzel: "'Cinzel', serif",
  BebasNeue: "'Bebas Neue', sans-serif",
  georgia: "Georgia, 'Times New Roman', serif",
  system: "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  mono: "'Courier New', Courier, monospace",
};

export const TYPOGRAPHY_OPTIONS: Array<{ key: FontKey; label: string }> = [
  { key: 'figtree', label: 'Figtree' },
  { key: 'inter', label: 'Inter' },
  { key: 'spaceGrotesk', label: 'Space Grotesk' },
  { key: 'montserrat', label: 'Montserrat' },
  { key: 'playfair', label: 'Playfair Display' },
  { key: 'merriweather', label: 'Merriweather' },
  { key: 'lora', label: 'Lora' },
  { key: 'caveat', label: 'Caveat' },
  { key: 'roboto', label: 'Roboto' },
  { key: 'openSans', label: 'Open Sans' },
  { key: 'lato', label: 'Lato' },
  { key: 'poppins', label: 'Poppins' },
  { key: 'raleway', label: 'Raleway' },
  { key: 'nunito', label: 'Nunito' },
  { key: 'ubuntu', label: 'Ubuntu' },
  { key: 'oswald', label: 'Oswald' },
  { key: 'playpenSans', label: 'Playpen Sans' },
  { key: 'rubik', label: 'Rubik' },
  { key: 'quicksand', label: 'Quicksand' },
  { key: 'dancingScript', label: 'Dancing Script' },
  { key: 'pacifico', label: 'Pacifico' },
  { key: 'Cinzel', label: 'Cinzel' },
  { key: 'BebasNeue', label: 'Bebas Neue' },
  { key: 'georgia', label: 'Georgia' },
  { key: 'system', label: 'System' },
  { key: 'mono', label: 'Mono' },
];

export const BODY_TYPOGRAPHY_OPTIONS = TYPOGRAPHY_OPTIONS.filter(
  (option) => option.key !== 'caveat' && option.key !== 'dancingScript' && option.key !== 'pacifico' && option.key !== 'BebasNeue'
);

export const TYPE_SCALE_OPTIONS = [
  { value: 1.065, label: 'Minor Third (1.065)' },
  { value: 1.125, label: 'Major Second (1.125)' },
  { value: 1.200, label: 'Minor Third (1.200)' },
  { value: 1.250, label: 'Major Third (1.250)' },
  { value: 1.333, label: 'Perfect Fourth (1.333)' },
  { value: 1.414, label: 'Augmented Fourth (1.414)' },
  { value: 1.500, label: 'Perfect Fifth (1.500)' },
  { value: 1.618, label: 'Golden Ratio (1.618)' },
];

export const DEFAULT_TYPOGRAPHY: TypographySettings = {
  headingFont: 'figtree',
  bodyFont: 'figtree',
  headingScale: 1.25,
  bodyScale: 1.0,
};

export interface TypographySlice {
  typography: TypographySettings;
  setHeadingFont: (font: FontKey) => void;
  setBodyFont: (font: FontKey) => void;
  setHeadingScale: (scale: number) => void;
  setBodyScale: (scale: number) => void;
  randomizeTypography: () => void;
}

type CombinedState = ColorSlice & TypographySlice & HistorySlice;

const randomOption = <T,>(items: T[], current?: T): T => {
  const candidates = current ? items.filter((item) => item !== current) : items;
  const fallback = items[0];
  if (!fallback) {
    throw new Error('randomOption requires at least one item');
  }

  return candidates[Math.floor(Math.random() * candidates.length)] ?? fallback;
};

export const createTypographySlice: StateCreator<
  CombinedState,
  [],
  [],
  TypographySlice
> = (set, get) => ({
  typography: DEFAULT_TYPOGRAPHY,

  setHeadingFont: (font) => {
    const { colors, typography, saveHistory } = get();
    if (typography.headingFont === font) return;

    saveHistory({ colors: { ...colors }, typography: { ...typography } });
    set((state) => ({
      typography: { ...state.typography, headingFont: font },
    }));
  },

  setBodyFont: (font) => {
    const { colors, typography, saveHistory } = get();
    if (typography.bodyFont === font) return;

    saveHistory({ colors: { ...colors }, typography: { ...typography } });
    set((state) => ({
      typography: { ...state.typography, bodyFont: font },
    }));
  },

  setHeadingScale: (scale) => {
    const nextScale = Number(scale.toFixed(3));
    const { colors, typography, saveHistory } = get();
    if (typography.headingScale === nextScale) return;

    saveHistory({ colors: { ...colors }, typography: { ...typography } });
    set((state) => ({
      typography: { ...state.typography, headingScale: nextScale },
    }));
  },

  setBodyScale: (scale) => {
    const nextScale = Number(scale.toFixed(3));
    const { colors, typography, saveHistory } = get();
    if (typography.bodyScale === nextScale) return;

    saveHistory({ colors: { ...colors }, typography: { ...typography } });
    set((state) => ({
      typography: { ...state.typography, bodyScale: nextScale },
    }));
  },

  randomizeTypography: () => {
    const { colors, typography, saveHistory } = get();
    const fontKeys = TYPOGRAPHY_OPTIONS.map((option) => option.key);
    const bodyFontKeys = BODY_TYPOGRAPHY_OPTIONS.map((option) => option.key);
    const typeScales = TYPE_SCALE_OPTIONS.map((option) => option.value);
    const nextTypography: TypographySettings = {
      headingFont: randomOption(fontKeys, typography.headingFont),
      bodyFont: randomOption(bodyFontKeys, typography.bodyFont),
      headingScale: randomOption(typeScales, typography.headingScale),
      bodyScale: randomOption(typeScales, typography.bodyScale),
    };

    saveHistory({ colors: { ...colors }, typography: { ...typography } });
    set({ typography: nextTypography });
  },
});
