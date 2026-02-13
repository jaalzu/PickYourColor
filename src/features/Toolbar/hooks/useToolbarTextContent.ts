// src/features/Toolbar/hooks/useToolbarContent.ts
import { useColorStore } from '../../../store/useColorStore';
import { toolbarContent } from '../constants/textContent';

export const useToolbarTextContent = () => {
  const lang = useColorStore((state) => state.lang);
  return toolbarContent[lang];
};