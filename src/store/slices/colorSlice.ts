// src/store/slices/colorSlice.ts
import type { StateCreator } from 'zustand';
import type { ColorScheme, ColorKey } from '../../types';
import type { SelectionSlice } from './selectionSlice';
import type { HistorySlice } from './historySlice';
import type { TypographySlice } from './typographySlice';

export interface ColorSlice {
  colors: ColorScheme;
  setColor: (key: ColorKey, value: string) => void;
}

type CombinedState = ColorSlice & SelectionSlice & TypographySlice & HistorySlice;

export const createColorSlice: StateCreator<
  CombinedState,
  [],
  [],
  ColorSlice
> = (set, get) => ({
  colors: {
  background: '#f8fef9',
  text: '#000000',
  primary: '#f63b3b',
  secondary: '#4c00fd',
  accent: '#1aff00',
},
  setColor: (key, value) => {
    const { colors, typography, saveHistory } = get();
    
    if (colors[key] !== value) {
      saveHistory({ colors: { ...colors }, typography: { ...typography } });
      set((state) => ({
        colors: { ...state.colors, [key]: value },
      }));
    }
  },
});
