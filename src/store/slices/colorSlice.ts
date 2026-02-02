// src/store/slices/colorSlice.ts
import type { StateCreator } from 'zustand';
import type { ColorScheme, ColorKey } from '../../types';
import type { SelectionSlice } from './selectionSlice';
import type { HistorySlice } from './historySlice';

export interface ColorSlice {
  colors: ColorScheme;
  setColor: (key: ColorKey, value: string) => void;
}

type CombinedState = ColorSlice & SelectionSlice & HistorySlice;

export const createColorSlice: StateCreator<
  CombinedState,
  [],
  [],
  ColorSlice
> = (set, get) => ({
  colors: {
    background: '#ffffff',
    text: '#000000',
    primary: '#3b82f6',
    secondary: '#8b5cf6',
    accent: '#ec4899',
  },
  setColor: (key, value) => {
    const { colors, saveHistory } = get();
    
    if (colors[key] !== value) {
      saveHistory({ ...colors });
      set((state) => ({
        colors: { ...state.colors, [key]: value },
      }));
    }
  },
});