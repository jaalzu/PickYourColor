// src/features/Toolbar/components/ColorPicker/ColorPickerModal/useColorPickerLogic.ts
import { useState, useEffect } from 'react';
import { useColorStore } from '../../../../../store/useColorStore';
import tinycolor from 'tinycolor2';
import type { ColorKey } from '../../../../../types';

type ColorFormat = 'HEX' | 'RGB';

export const useColorPickerLogic = (colorKey: ColorKey) => {
  const { colors, setColor } = useColorStore();
  const [isVisible, setIsVisible] = useState(false);
  const [format, setFormat] = useState<ColorFormat>('HEX');
  const currentColor = colors[colorKey];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleColorChange = (newColor: string) => {
    setColor(colorKey, newColor);
  };

  const getFormattedColor = (): string => {
    if (format === 'HEX') {
      return currentColor;
    }
    const rgb = tinycolor(currentColor).toRgb();
    return `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
  };

  const handleCopy = () => {
    const colorToCopy = getFormattedColor();
    navigator.clipboard.writeText(colorToCopy);
  };

  const toggleFormat = () => {
    setFormat(format === 'HEX' ? 'RGB' : 'HEX');
  };

  const startClosing = (onClose: () => void) => {
    setIsVisible(false);
    setTimeout(onClose, 200);
  };

  return {
    currentColor,
    isVisible,
    format,
    formattedColor: getFormattedColor(),
    handleColorChange,
    handleCopy,
    toggleFormat,
    startClosing,
  };
};