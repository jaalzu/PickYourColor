// src/store/useColorStore.ts
import { create } from 'zustand';
import { createColorSlice, type ColorSlice } from './slices/colorSlice';
import { createSelectionSlice, type SelectionSlice } from './slices/selectionSlice';

type ColorStore = ColorSlice & SelectionSlice;

export const useColorStore = create<ColorStore>()((...a) => ({
  ...createColorSlice(...a),
  ...createSelectionSlice(...a),
}));