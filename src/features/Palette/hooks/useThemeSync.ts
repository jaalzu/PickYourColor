import { useEffect } from 'react';
import { usePaletteStore } from '../../../store/usePaletteStore';

export const useThemeSync = () => {
  const colors = usePaletteStore((state) => state.colors);

  useEffect(() => {
    const root = document.documentElement;
    Object.entries(colors).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}`, value);
    });
  }, [colors]);
};