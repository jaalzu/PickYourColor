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
  { key: 'georgia', label: 'Georgia' },
  { key: 'system', label: 'System' },
  { key: 'mono', label: 'Mono' },
];

export const BODY_TYPOGRAPHY_OPTIONS = TYPOGRAPHY_OPTIONS.filter(
  (option) => option.key !== 'caveat'
);

export const TYPE_SCALE_OPTIONS = [
  { value: 1.06, label: '1.060 - Compact' },
  { value: 1.18, label: '1.180 - Balanced' },
  { value: 1.3, label: '1.300 - Editorial' },
  { value: 1.42, label: '1.420 - Display' },
  { value: 1.55, label: '1.550 - Dramatic' },
];

export const DEFAULT_TYPOGRAPHY: TypographySettings = {
  headingFont: 'figtree',
  bodyFont: 'figtree',
  typeScale: 1.06,
};

export interface TypographySlice {
  typography: TypographySettings;
  setHeadingFont: (font: FontKey) => void;
  setBodyFont: (font: FontKey) => void;
  setTypeScale: (scale: number) => void;
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

  setTypeScale: (scale) => {
    const nextScale = Number(scale.toFixed(3));
    const { colors, typography, saveHistory } = get();
    if (typography.typeScale === nextScale) return;

    saveHistory({ colors: { ...colors }, typography: { ...typography } });
    set((state) => ({
      typography: { ...state.typography, typeScale: nextScale },
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
      typeScale: randomOption(typeScales, typography.typeScale),
    };

    saveHistory({ colors: { ...colors }, typography: { ...typography } });
    set({ typography: nextTypography });
  },
});
