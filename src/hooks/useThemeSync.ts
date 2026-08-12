import { useEffect } from 'react';
import { useColorStore } from '../store/useColorStore';
import { FONT_STACKS } from '../store/slices/typographySlice';
import { loadGoogleFont } from '../utils/googleFonts';

export const useThemeSync = () => {
  const colors = useColorStore((state) => state.colors);
  const typography = useColorStore((state) => state.typography);

  useEffect(() => {
    loadGoogleFont(typography.headingFont);
    loadGoogleFont(typography.bodyFont);

    const root = document.documentElement;
    Object.entries(colors).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}`, value);
    });
    root.style.setProperty('--font-heading', FONT_STACKS[typography.headingFont]);
    root.style.setProperty('--font-body', FONT_STACKS[typography.bodyFont]);
    root.style.setProperty('--heading-scale', String(typography.headingScale));
    root.style.setProperty('--body-scale', String(typography.bodyScale));
  }, [colors, typography]);
};
