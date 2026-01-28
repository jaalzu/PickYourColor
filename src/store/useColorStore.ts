// src/store/useColorStore.ts
import { create } from 'zustand';
import type { ColorSlice } from './slices/colorSlice';
import { createColorSlice } from './slices/colorSlice';

type ColorStore = ColorSlice;

export const useColorStore = create<ColorStore>()((...a) => ({
  ...createColorSlice(...a),
}));