import type { StateCreator } from 'zustand';

export interface ColorSlice {
  colors: {
    background: string;
    text: string;
    primary: string;
    secondary: string;
    accent: string;
  };
  setColor: (key: keyof ColorSlice['colors'], value: string) => void;
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