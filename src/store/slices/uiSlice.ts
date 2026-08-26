// src/store/slices/uiSlice.ts
import type { StateCreator } from "zustand";

export interface UISlice {
  isToolbarShaking: boolean;
  triggerToolbarFeedback: () => void;
  toolbarMode: "colors" | "typography";
  setToolbarMode: (mode: "colors" | "typography") => void;
}

export const createUISlice: StateCreator<UISlice> = (set) => ({
  isToolbarShaking: false,

  triggerToolbarFeedback: () => {
    set({ isToolbarShaking: true });
    setTimeout(() => set({ isToolbarShaking: false }), 400);
  },

  toolbarMode: "colors",
  setToolbarMode: (mode) => set({ toolbarMode: mode }),
});
