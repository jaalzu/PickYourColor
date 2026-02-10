// src/store/slices/uiSlice.ts
import type { StateCreator } from 'zustand';

export interface UISlice {
  showToolbarPulse: boolean;
  triggerToolbarPulse: () => void;
}

export const createUISlice: StateCreator<UISlice> = (set) => ({
  showToolbarPulse: false,
  
  triggerToolbarPulse: () => {
    set({ showToolbarPulse: true });
    setTimeout(() => set({ showToolbarPulse: false }), 600);
  },
});