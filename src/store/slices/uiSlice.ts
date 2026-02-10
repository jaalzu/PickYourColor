// src/store/slices/uiSlice.ts
import type { StateCreator } from 'zustand';

export interface UISlice {
  isToolbarShaking: boolean;
  triggerToolbarFeedback: () => void;
}

export const createUISlice: StateCreator<UISlice> = (set) => ({
  isToolbarShaking: false,
  
  triggerToolbarFeedback: () => {
    set({ isToolbarShaking: true });
    setTimeout(() => set({ isToolbarShaking: false }), 400);
  },
});