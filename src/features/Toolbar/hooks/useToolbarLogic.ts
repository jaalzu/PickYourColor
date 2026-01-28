// src/features/Toolbar/hooks/useToolbarLogic.ts
import { useState } from 'react';
import { useColorStore } from '../../../store/useColorStore';
import type { ColorKey } from '../../../types';

export const useToolbarLogic = () => {
  const colors = useColorStore((state) => state.colors);
  const [selectedColor, setSelectedColor] = useState<ColorKey | null>(null);

  const handleColorSelect = (key: ColorKey) => {
    setSelectedColor(key);
  };

  const handleCloseModal = () => {
    setSelectedColor(null);
  };

  return {
    colors,
    selectedColor,
    handleColorSelect,
    handleCloseModal,
  };
};