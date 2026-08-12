// src/store/useColorStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { createColorSlice, type ColorSlice } from './slices/colorSlice';
import { createSelectionSlice, type SelectionSlice } from './slices/selectionSlice';
import { createHistorySlice, type HistorySlice } from './slices/historySlice';
import { createThemeSlice, type ThemeSlice } from './slices/themeSlice';
import { createUISlice, type UISlice } from './slices/uiSlice';
import { createLangSlice, type LangSlice } from './slices/langSlice'; 
import { createTypographySlice, type TypographySlice } from './slices/typographySlice';

type ColorStore = ColorSlice & SelectionSlice & HistorySlice & ThemeSlice & UISlice & LangSlice & TypographySlice;

export const useColorStore = create<ColorStore>()(
  persist(
    (...a) => ({
      ...createColorSlice(...a),
      ...createSelectionSlice(...a),
      ...createHistorySlice(...a),
      ...createThemeSlice(...a),
      ...createUISlice(...a),
      ...createLangSlice(...a), // 
      ...createTypographySlice(...a),
    }),
    {
      name: 'pickyourcolor-storage',
      partialize: (state) => ({
        colors: state.colors,
        typography: state.typography,
        themeMode: state.themeMode,
        lang: state.lang, // 4. Agrego al partialize para que persista el idioma
      }),
    }
  )
);
