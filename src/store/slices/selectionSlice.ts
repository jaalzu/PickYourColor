// src/store/slices/selectionSlice.ts
import type { StateCreator } from 'zustand';
import tinycolor from 'tinycolor2';
import type { ColorKey } from '../../types';
import type { ColorSlice } from './colorSlice';

export interface SelectionSlice {
  lockedColors: ColorKey[];
  toggleLock: (key: ColorKey) => void;
  randomizeColors: () => void;
}

export const createSelectionSlice: StateCreator<
  ColorSlice & SelectionSlice,
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
    const { colors, lockedColors, setColor } = get();
    
    (Object.keys(colors) as ColorKey[]).forEach((key) => {
      if (!lockedColors.includes(key)) {
        let finalColor: string;

        if (key === 'background') {
          // Fondos suaves pero que se notan
          finalColor = tinycolor({
            h: Math.random() * 360,
            s: Math.random() * 10 + 10, 
            l: Math.random() * 5 + 85,  
          }).toHexString();
        } 
        else if (key === 'text') {
          // Texto oscuro para contraste
          finalColor = tinycolor({
            h: Math.random() * 360,
            s: Math.random() * 10,      
            l: Math.random() * 15 + 10, 
          }).toHexString();
        } 
        else {
          // LIBRES: Primary, Secondary, Accent
          // Usamos random() pero con un pequeño ajuste para que no sean 100% blancos
          const tempColor = tinycolor.random();
          
          // Si es demasiado claro (L > 90), lo oscurecemos un toque para que se vea
          if (tempColor.getBrightness() > 230) {
            finalColor = tempColor.darken(20).toHexString();
          } else {
            finalColor = tempColor.toHexString();
          }
        }

        setColor(key, finalColor);
      }
    });
  },
});