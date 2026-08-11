// src/store/slices/historySlice.ts
import type { StateCreator } from 'zustand';
import type { VisualState } from '../../types';
import type { ColorSlice } from './colorSlice';
import type { SelectionSlice } from './selectionSlice';
import type { TypographySlice } from './typographySlice';

export interface HistorySlice {
  past: VisualState[];
  future: VisualState[];
  undo: () => void;
  redo: () => void;
  saveHistory: (currentState: VisualState) => void;
}

export const createHistorySlice: StateCreator<
  ColorSlice & SelectionSlice & TypographySlice & HistorySlice,
  [],
  [],
  HistorySlice
> = (set, get) => ({
  past: [],
  future: [],

  saveHistory: (currentState) => {
  const { past } = get();
  // Limitamos a los últimos 10 estados
  const newPast = [...past, currentState].slice(-10);
  set({ 
    past: newPast, 
    future: [] 
  });
},

  undo: () => {
    const { past, colors, typography, future } = get();
    if (past.length === 0) return;

    const previous = past[past.length - 1];
    if (!previous) return;
    const newPast = past.slice(0, past.length - 1);

    set({
      past: newPast,
      colors: previous.colors,
      typography: previous.typography,
      future: [{ colors, typography }, ...future]
    });
  },

  redo: () => {
    const { past, colors, typography, future } = get();
    if (future.length === 0) return;

    const next = future[0];
    if (!next) return;
    const newFuture = future.slice(1);

    set({
      past: [...past, { colors, typography }],
      colors: next.colors,
      typography: next.typography,
      future: newFuture
    });
  },
});
