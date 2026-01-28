// src/store/slices/colorSlice.ts
import type { StateCreator } from 'zustand';
import type { ColorScheme, ColorKey } from '../../types';  // ← Desde raíz

export interface ColorSlice {
  colors: ColorScheme;
  setColor: (key: ColorKey, value: string) => void;
}

export const createColorSlice: StateCreator<ColorSlice> = (set) => ({
  colors: {
    background: '#ffffff',
    text: '#000000',
    primary: '#3b82f6',
    secondary: '#8b5cf6',
    accent: '#ec4899',
  },
  setColor: (key, value) =>
    set((state) => ({
      colors: { ...state.colors, [key]: value },
    })),
});