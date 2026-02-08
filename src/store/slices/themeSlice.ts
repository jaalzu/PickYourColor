// src/store/slices/themeSlice.ts
import type { StateCreator } from 'zustand';

export type ThemeMode = 'light' | 'dark';

export interface ThemeSlice {
  themeMode: ThemeMode;
  toggleTheme: () => void;
  setThemeMode: (mode: ThemeMode) => void;
}

export const createThemeSlice: StateCreator<ThemeSlice> = (set) => ({
  themeMode: 'dark',
  
  toggleTheme: () =>
    set((state) => ({
      themeMode: state.themeMode === 'dark' ? 'light' : 'dark',
    })),
  
  setThemeMode: (mode) =>
    set({ themeMode: mode }),
});