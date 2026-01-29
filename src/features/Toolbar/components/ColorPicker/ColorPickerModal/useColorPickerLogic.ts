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
  const [localColor, setLocalColor] = useState(currentColorFromStore);

  useEffect(() => { setIsVisible(true); }, []);
  useEffect(() => { setLocalColor(currentColorFromStore); }, [currentColorFromStore]);

  const commitColor = useCallback(() => {
    setLocalColor(prev => {
      setColor(colorKey, prev);
      return prev;
    });
  }, [colorKey, setColor]);

  useEffect(() => {
    const handleGlobalUp = () => commitColor();
    
    window.addEventListener('mouseup', handleGlobalUp);
    window.addEventListener('touchend', handleGlobalUp);

    return () => {
      window.removeEventListener('mouseup', handleGlobalUp);
      window.removeEventListener('touchend', handleGlobalUp);
    };
  }, [commitColor]);

  const handleColorChange = (newColor: string) => setLocalColor(newColor);
  
  const getFormattedColor = () => {
    if (format === 'HEX') return localColor;
    const rgb = tinycolor(localColor).toRgb();
    return `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
  };

  return {
    currentColor: localColor,
    isVisible,
    format,
    formattedColor: getFormattedColor(),
    handleColorChange,
    handleCopy: () => navigator.clipboard.writeText(getFormattedColor()),
    toggleFormat: () => setFormat(format === 'HEX' ? 'RGB' : 'HEX'),
    startClosing: (onClose: () => void) => {
      commitColor(); 
      setIsVisible(false);
      setTimeout(onClose, 200);
    },
  };
};