// src/features/Toolbar/utils/contrastChecker.ts
import tinycolor from 'tinycolor2';

export type ContrastLevel = 'High' | 'Medium' | 'Fail';

export const getContrastLevel = (color1: string, color2: string): ContrastLevel => {
  const score = tinycolor.readability(color1, color2);
  
  if (score >= 7) return 'High';
  if (score >= 3.5) return 'Medium';
  // Todo lo que esté por debajo de 3.5 (el antiguo Low y Fail) ahora es Fail
  return 'Fail'; 
};