// src/features/Toolbar/hooks/useThemeSuggestions.ts
import { useColorStore } from '../../../store/useColorStore';

export const useThemeSuggestions = () => {
  const themeMode = useColorStore((state) => state.themeMode);
  const setColor = useColorStore((state) => state.setColor);
  
  const applyThemeSuggestion = () => {
    if (themeMode === 'light') {
      // Colores para tema claro
      setColor('background', '#FFFFFF');
      setColor('text', '#000000');
    } else {
      // Colores para tema oscuro
      setColor('background', '#1a1a2e');
      setColor('text', '#FFFFFF');
    }
  };
  
  return { applyThemeSuggestion };
};