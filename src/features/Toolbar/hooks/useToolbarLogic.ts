// src/features/Toolbar/hooks/useToolbarLogic.ts
import { useState } from 'react';
import { useColorStore } from '../../../store/useColorStore';
import type { ColorKey } from '../../../types';

export const useToolbarLogic = () => {
  const colors = useColorStore((state) => state.colors);
  const [selectedColor, setSelectedColor] = useState<ColorKey | null>(null);
  const [modalPosition, setModalPosition] = useState<{ x: number; y: number } | null>(null);

  const handleColorSelect = (key: ColorKey, buttonElement: HTMLElement) => {
    const rect = buttonElement.getBoundingClientRect();
    
    setModalPosition({
      x: rect.left + rect.width / 2, // Centro del botón
      y: rect.top, // Top del botón
    });
    
    setSelectedColor(key);
  };

  const handleCloseModal = () => {
    setSelectedColor(null);
    setModalPosition(null);
  };

  return {
    colors,
    selectedColor,
    modalPosition,
    handleColorSelect,
    handleCloseModal,
  };
};