// src/features/Toolbar/components/ColorPicker/ColorPickerModal/useColorPickerLogic.ts
import { useState, useEffect, useCallback } from 'react';
import { useColorStore } from '../../../../../store/useColorStore';
import tinycolor from 'tinycolor2';
import type { ColorKey } from '../../../../../types';

export const useColorPickerLogic = (colorKey: ColorKey) => {
  const { colors, setColor } = useColorStore();
  const [isVisible, setIsVisible] = useState(false);
  const [format, setFormat] = useState<'HEX' | 'RGB'>('HEX');
  
  const currentColorFromStore = colors[colorKey];
  // Este estado local permite que el arrastre sea fluido sin llenar el historial
  const [localColor, setLocalColor] = useState(currentColorFromStore);

  // Animación de entrada
  useEffect(() => { 
    setIsVisible(true); 
  }, []);

  // Sincronizar local cuando el store cambie externamente (Undo, Redo, Randomize)
  useEffect(() => { 
    setLocalColor(currentColorFromStore); 
  }, [currentColorFromStore]);

  /**
   * Persiste el color local en el store global.
   * Al ejecutarse solo al final (mouseup), el sistema de Undo guarda un único paso.
   */
  const commitColor = useCallback(() => {
    // Evitamos disparar el saveHistory si el color no cambió realmente
    if (localColor !== colors[colorKey]) {
      setColor(colorKey, localColor);
    }
  }, [colorKey, localColor, colors, setColor]);

  // Listener global para detectar cuando el usuario termina de arrastrar fuera del modal
  useEffect(() => {
    const handleGlobalUp = () => {
      commitColor();
    };
    
    window.addEventListener('mouseup', handleGlobalUp);
    window.addEventListener('touchend', handleGlobalUp);

    return () => {
      window.removeEventListener('mouseup', handleGlobalUp);
      window.removeEventListener('touchend', handleGlobalUp);
    };
  }, [commitColor]);

  const handleColorChange = (newColor: string) => {
    setLocalColor(newColor); // Cambio visual inmediato (60fps)
  };
  
  const getFormattedColor = () => {
    if (format === 'HEX') return localColor;
    const rgb = tinycolor(localColor).toRgb();
    return `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
  };

  const startClosing = (onClose: () => void) => {
    commitColor(); // Aseguramos el último cambio antes de cerrar
    setIsVisible(false);
    setTimeout(onClose, 200);
  };

  return {
    currentColor: localColor,
    isVisible,
    format,
    formattedColor: getFormattedColor(),
    handleColorChange,
    handleCopy: () => navigator.clipboard.writeText(getFormattedColor()),
    toggleFormat: () => setFormat(prev => (prev === 'HEX' ? 'RGB' : 'HEX')),
    startClosing,
  };
};