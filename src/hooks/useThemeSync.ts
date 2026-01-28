import { useEffect } from 'react';
import { useColorStore } from '../store/useColorStore';

export const useThemeSync = () => {
  const colors = useColorStore((state) => state.colors);

  useEffect(() => {
    const root = document.documentElement;
    Object.entries(colors).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}`, value);
    });
  }, [colors]);
};