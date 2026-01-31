// src/store/slices/historySlice.ts
import type { StateCreator } from 'zustand';
import type { ColorScheme } from '../../types';
import type { ColorSlice } from './colorSlice';
import type { SelectionSlice } from './selectionSlice';

export interface HistorySlice {
  past: ColorScheme[];
  future: ColorScheme[];
  undo: () => void;
  redo: () => void;
  saveHistory: (currentState: ColorScheme) => void;
}

export const createHistorySlice: StateCreator<
  ColorSlice & SelectionSlice & HistorySlice,
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
    future: [] // Importante: limpiar el futuro al hacer un cambio manual
  });
},

  undo: () => {
    const { past, colors, future } = get();
    if (past.length === 0) return;

    const previous = past[past.length - 1];
    const newPast = past.slice(0, past.length - 1);

    set({
      past: newPast,
      colors: previous,
      future: [colors, ...future]
    });
  },

  redo: () => {
    const { past, colors, future } = get();
    if (future.length === 0) return;

    const next = future[0];
    const newFuture = future.slice(1);

    set({
      past: [...past, colors],
      colors: next,
      future: newFuture
    });
  },
});