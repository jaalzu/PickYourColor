// src/features/Toolbar/hooks/useToolbarLogic.ts
import { useState } from 'react';
import { useColorStore } from '../../../store/useColorStore';
import type { ColorKey } from '../../../types';

export const useToolbarLogic = () => {
  const colors = useColorStore((state) => state.colors);
  const [selectedColor, setSelectedColor] = useState<ColorKey | null>(null);
  const [modalPosition, setModalPosition] = useState<{ x: number; y: number } | null>(null);
  const [isToolbarOpen, setIsToolbarOpen] = useState(false);

  // Para desktop: con posición del botón
  const handleColorSelect = (key: ColorKey, buttonElement?: HTMLElement) => {
    if (buttonElement) {
      const rect = buttonElement.getBoundingClientRect();
      setModalPosition({
        x: rect.left + rect.width / 2,
        y: rect.top,
      });
    } else {
      // Mobile: modal centrado
      setModalPosition(null);
    }
    
    setSelectedColor(key);
  };

  // Para mobile: seleccionar y cerrar toolbar
  const handleColorSelectAndClose = (key: ColorKey) => {
    handleColorSelect(key); 
    setIsToolbarOpen(false);
  };

  const handleCloseModal = () => {
    setSelectedColor(null);
    setModalPosition(null);
  };

  const toggleToolbar = () => {
    setIsToolbarOpen(!isToolbarOpen);
  };

  return {
    colors,
    selectedColor,
    modalPosition,
    isToolbarOpen,
    handleColorSelect,
    handleColorSelectAndClose,
    handleCloseModal,
    toggleToolbar,
  };
};