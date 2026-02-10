// src/store/useColorStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { createColorSlice, type ColorSlice } from './slices/colorSlice';
import { createSelectionSlice, type SelectionSlice } from './slices/selectionSlice';
import { createHistorySlice, type HistorySlice } from './slices/historySlice';
import { createThemeSlice, type ThemeSlice } from './slices/themeSlice';
import { createUISlice, type UISlice } from './slices/uiSlice';

type ColorStore = ColorSlice & SelectionSlice & HistorySlice & ThemeSlice & UISlice;

export const useColorStore = create<ColorStore>()(
  persist(
    (...a) => ({
      ...createColorSlice(...a),
      ...createSelectionSlice(...a),
      ...createHistorySlice(...a),
      ...createThemeSlice(...a),
      ...createUISlice(...a),
    }),
    {
      name: 'pickyourcolor-storage',
      partialize: (state) => ({
        colors: state.colors,
        themeMode: state.themeMode,
      }),
    }
  )
);