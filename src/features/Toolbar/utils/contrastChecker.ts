// src/features/Toolbar/utils/contrastChecker.ts
import tinycolor from 'tinycolor2';

export type ContrastLevel = 'AAA' | 'AA' | 'Fail';

export const calculateContrast = (color1: string, color2: string): number => {
  const luminance1 = tinycolor(color1).getLuminance();
  const luminance2 = tinycolor(color2).getLuminance();
  
  const lighter = Math.max(luminance1, luminance2);
  const darker = Math.min(luminance1, luminance2);
  
  return (lighter + 0.05) / (darker + 0.05);
};

export const getContrastLevel = (contrast: number): ContrastLevel => {
  if (contrast >= 7) return 'AAA';
  if (contrast >= 4.5) return 'AA';
  return 'Fail';
};