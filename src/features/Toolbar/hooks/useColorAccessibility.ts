// src/features/Toolbar/hooks/useColorAccessibility.ts
import { useMemo } from 'react';
import { useColorStore } from '../../../store/useColorStore';
import { getContrastLevel, type ContrastLevel } from '../utils/contrastChecker';
import type { ColorKey } from '../../../types';

export const useColorAccessibility = (colorKey: ColorKey): ContrastLevel => {
  const colors = useColorStore((state) => state.colors);
  
  return useMemo(() => {
    // Si es el color de fondo, comparamos contra el texto por defecto
    if (colorKey === 'background') {
      return getContrastLevel(colors.background, colors.text);
    }
    
    // Para cualquier otro color (text, primary, etc), comparamos contra el fondo
    return getContrastLevel(colors[colorKey], colors.background);
  }, [colors, colorKey]);
};