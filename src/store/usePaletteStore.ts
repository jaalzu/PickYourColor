import { create } from 'zustand';
import type { ColorSlice } from './slices/colorSlice';
import { createColorSlice } from './slices/colorSlice';

type PaletteStore = ColorSlice;

export const usePaletteStore = create<PaletteStore>()((...a) => ({
  ...createColorSlice(...a),
}));