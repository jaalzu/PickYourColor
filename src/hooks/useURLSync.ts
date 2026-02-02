// src/hooks/useURLSync.ts
import { useEffect } from 'react';
import { useColorStore } from '../store/useColorStore';
import type { ColorKey } from '../types';

// Orden fijo para consistencia
const COLOR_ORDER: ColorKey[] = ['text', 'background', 'primary', 'secondary', 'accent'];

const encodeColorsToURL = (colors: Record<ColorKey, string>): string => {
  return COLOR_ORDER
    .map(key => colors[key].replace('#', ''))
    .join('-');
};

const decodeColorsFromURL = (encoded: string): Partial<Record<ColorKey, string>> | null => {
  const parts = encoded.split('-');
  
  if (parts.length !== 5) return null;
  
  const colors: Partial<Record<ColorKey, string>> = {};
  COLOR_ORDER.forEach((key, index) => {
    const hex = parts[index];
    // Validar que sea hex válido (6 caracteres)
    if (/^[0-9A-Fa-f]{6}$/.test(hex)) {
      colors[key] = `#${hex}`;
    }
  });
  
  return Object.keys(colors).length === 5 ? colors : null;
};

export const useURLSync = () => {
  const { colors, setColor } = useColorStore();

  // Cargar desde URL al montar (solo una vez)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const encoded = params.get('colors');
    
    if (encoded) {
      const decoded = decodeColorsFromURL(encoded);
      if (decoded) {
        Object.entries(decoded).forEach(([key, value]) => {
          setColor(key as ColorKey, value);
        });
      }
      
      // Limpiar URL después de cargar
      window.history.replaceState({}, '', window.location.pathname);
    }
  }, []);

  // Actualizar URL cuando cambien colores (debounce)
  useEffect(() => {
    const timer = setTimeout(() => {
      const encoded = encodeColorsToURL(colors);
      const url = new URL(window.location.href);
      url.searchParams.set('colors', encoded);
      window.history.replaceState({}, '', url);
    }, 1000);

    return () => clearTimeout(timer);
  }, [colors]);
};