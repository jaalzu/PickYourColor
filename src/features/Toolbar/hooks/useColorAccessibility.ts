// src/features/Toolbar/hooks/useColorAccessibility.ts
import { useMemo } from 'react';
import { useColorStore } from '../../../store/useColorStore';
import { calculateContrast, getContrastLevel, type ContrastLevel } from '../utils/contrastChecker';
import type { ColorKey } from '../../../types';

export const useColorAccessibility = (colorKey: ColorKey): ContrastLevel => {
  const colors = useColorStore((state) => state.colors);
  
  return useMemo(() => {
    // Para text, comparar con background
    if (colorKey === 'text') {
      const contrast = calculateContrast(colors.text, colors.background);
      return getContrastLevel(contrast);
    }
    
    // Para otros colores, comparar con background
    const contrast = calculateContrast(colors[colorKey], colors.background);
    return getContrastLevel(contrast);
  }, [colors, colorKey]);
};