// src/store/slices/selectionSlice.ts
import type { StateCreator } from 'zustand';
import tinycolor from 'tinycolor2';
import type { ColorKey, ColorScheme } from '../../types';
import type { ColorSlice } from './colorSlice';
import type { HistorySlice } from './historySlice';

export interface SelectionSlice {
  lockedColors: ColorKey[];
  toggleLock: (key: ColorKey) => void;
  randomizeColors: () => void;
}

// Agregamos HistorySlice a la intersección del StateCreator
export const createSelectionSlice: StateCreator<
  ColorSlice & SelectionSlice & HistorySlice,
  [],
  [],
  SelectionSlice
> = (set, get) => ({
  lockedColors: [],

  toggleLock: (key) => {
    const { lockedColors } = get();
    const isLocked = lockedColors.includes(key);
    set({
      lockedColors: isLocked 
        ? lockedColors.filter((k) => k !== key) 
        : [...lockedColors, key]
    });
  },

  randomizeColors: () => {
    // Traemos saveHistory del store
    const { colors, lockedColors, saveHistory } = get();
    
    // 1. Guardamos el estado actual en el historial ANTES de cambiar nada
    saveHistory({ ...colors });

    // 2. Creamos una copia de los colores para trabajar
    const newColors: ColorScheme = { ...colors };

    (Object.keys(colors) as ColorKey[]).forEach((key) => {
      if (!lockedColors.includes(key)) {
        let finalColor: string;

        if (key === 'background') {
          finalColor = tinycolor({
            h: Math.random() * 360,
            s: Math.random() * 10 + 10, 
            l: Math.random() * 5 + 85,  
          }).toHexString();
        } 
        else if (key === 'text') {
          finalColor = tinycolor({
            h: Math.random() * 360,
            s: Math.random() * 10,      
            l: Math.random() * 15 + 10, 
          }).toHexString();
        } 
        else {
          const tempColor = tinycolor.random();
          if (tempColor.getBrightness() > 230) {
            finalColor = tempColor.darken(20).toHexString();
          } else {
            finalColor = tempColor.toHexString();
          }
        }

        // 3. Actualizamos la copia local, NO el store todavía
        newColors[key] = finalColor;
      }
    });

    // 4. Aplicamos todos los colores de una vez
    set({ colors: newColors });
  },
});