import type { StateCreator } from 'zustand';

export type LangSlice = {
  lang: 'es' | 'en';
  setLang: (lang: 'es' | 'en') => void;
};

export const createLangSlice: StateCreator<LangSlice> = (set) => ({
  lang: 'es', // Idioma por defecto
  setLang: (lang) => set({ lang }),
});