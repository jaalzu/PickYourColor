// src/features/Toolbar/hooks/useToolbarLogic.ts
import { useState } from 'react';
import { useColorStore } from '../../../store/useColorStore';
import type { ColorKey } from '../../../types';

export const useToolbarLogic = () => {
  const colors = useColorStore((state) => state.colors);
  const [selectedColor, setSelectedColor] = useState<ColorKey | null>(null);
  const [triggerElement, setTriggerElement] = useState<HTMLElement | null>(null);
  const [isToolbarOpen, setIsToolbarOpen] = useState(false);

  const handleColorSelect = (key: ColorKey, buttonElement?: HTMLElement) => {
    setTriggerElement(buttonElement || null);
    setSelectedColor(key);
  };

  const handleColorSelectAndClose = (key: ColorKey) => {
    handleColorSelect(key); 
    setIsToolbarOpen(false);
  };

  const handleCloseModal = () => {
    setSelectedColor(null);
    setTriggerElement(null);
  };

  const toggleToolbar = () => {
    setIsToolbarOpen(!isToolbarOpen);
  };

  return {
    colors,
    selectedColor,
    triggerElement,
    isToolbarOpen,
    setIsToolbarOpen,
    handleColorSelect,
    handleColorSelectAndClose,
    handleCloseModal,
    toggleToolbar,
  };
};