// src/store/useColorStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { createColorSlice, type ColorSlice } from './slices/colorSlice';
import { createSelectionSlice, type SelectionSlice } from './slices/selectionSlice';
import { createHistorySlice, type HistorySlice } from './slices/historySlice';

type ColorStore = ColorSlice & SelectionSlice & HistorySlice;

export const useColorStore = create<ColorStore>()(
  persist(
    (...a) => ({
      ...createColorSlice(...a),
      ...createSelectionSlice(...a),
      ...createHistorySlice(...a),
    }),
    {
      name: 'pickyourcolor-storage',
      partialize: (state) => ({
        colors: state.colors,
      }),
    }
  )
);