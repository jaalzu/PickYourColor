// src/store/useColorStore.ts
import { create } from 'zustand';
import { createColorSlice, type ColorSlice } from './slices/colorSlice';
import { createSelectionSlice, type SelectionSlice } from './slices/selectionSlice';
import { createHistorySlice, type HistorySlice } from './slices/historySlice';

// Combinamos los tres tipos en uno solo
type ColorStore = ColorSlice & SelectionSlice & HistorySlice;

export const useColorStore = create<ColorStore>()((...a) => ({
  ...createColorSlice(...a),
  ...createSelectionSlice(...a),
  ...createHistorySlice(...a), // ¡Fundamental agregar el history aquí!
}));