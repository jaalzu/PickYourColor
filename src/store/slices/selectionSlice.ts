// src/store/slices/selectionSlice.ts
import type { StateCreator } from 'zustand';
import tinycolor from 'tinycolor2';
import type { ColorKey, ColorScheme } from '../../types';
import type { ColorSlice } from './colorSlice';
import type { HistorySlice } from './historySlice';
import type { ThemeSlice } from './themeSlice';

export interface SelectionSlice {
  lockedColors: ColorKey[];
  toggleLock: (key: ColorKey) => void;
  randomizeColors: () => void;
}

export const createSelectionSlice: StateCreator<
  ColorSlice & SelectionSlice & HistorySlice & ThemeSlice,
  [],
  [],
  SelectionSlice
> = (set, get) => ({
  lockedColors: [],

  toggleLock: (key: ColorKey) => {
    const { lockedColors } = get();
    const isLocked = lockedColors.includes(key);
    set({
      lockedColors: isLocked 
        ? lockedColors.filter((k: ColorKey) => k !== key) 
        : [...lockedColors, key]
    });
  },

  randomizeColors: () => {
    const { colors, lockedColors, saveHistory, themeMode } = get();
    
    saveHistory({ ...colors });

    const newColors: ColorScheme = { ...colors };

    (Object.keys(colors) as ColorKey[]).forEach((key: ColorKey) => {
      if (!lockedColors.includes(key)) {
        let finalColor: string;

        if (key === 'background') {
  if (themeMode === 'light') {
    finalColor = tinycolor({
      h: Math.random() * 360,
      s: Math.random() * 3 + 1,
      l: Math.random() * 10 + 85,
    }).toHexString();
  } else {
    finalColor = tinycolor({
      h: Math.random() * 360,
      s: Math.random() * 3 + 1,  
      l: Math.random() * 15 + 10,
    }).toHexString();
  }
}
        else if (key === 'text') {
          if (themeMode === 'light') {
            finalColor = tinycolor({
              h: Math.random() * 360,
              s: Math.random() * 12,
              l: Math.random() * 20 + 10,
            }).toHexString();
          } else {
            finalColor = tinycolor({
              h: Math.random() * 360,
              s: Math.random() * 12,
              l: Math.random() * 15 + 80,
            }).toHexString();
          }
        } 
        else {
          const tempColor = tinycolor.random();
          if (tempColor.getBrightness() > 230) {
            finalColor = tempColor.darken(20).toHexString();
          } else {
            finalColor = tempColor.toHexString();
          }
        }

        newColors[key] = finalColor;
      }
    });

    set({ colors: newColors });
  },
});