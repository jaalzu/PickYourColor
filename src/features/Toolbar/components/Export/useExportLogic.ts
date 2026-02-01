// src/features/Toolbar/components/Export/useExportLogic.ts
import { exportToCSS, exportToSCSS, exportToTailwind } from '../../components/Export/exportHelpers';
import { useState } from 'react';
import { useColorStore } from '../../../../store/useColorStore';
import tinycolor from 'tinycolor2';
import type { ColorScheme } from '../../../../types';

type ExportFormat = 'css' | 'scss' | 'tailwind';
type ColorFormat = 'HEX' | 'RGB';

export const useExportLogic = () => {
  const colors = useColorStore((state) => state.colors);
  const [selectedFormat, setSelectedFormat] = useState<ExportFormat>('css');
  const [colorFormat, setColorFormat] = useState<ColorFormat>('HEX');
  const [copied, setCopied] = useState(false);

  const convertColors = (colors: ColorScheme): ColorScheme => {
    if (colorFormat === 'HEX') return colors;
    
    // Convertir a RGB
    const converted: any = {};
    Object.entries(colors).forEach(([key, hex]) => {
      const rgb = tinycolor(hex).toRgb();
      converted[key] = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
    });
    return converted;
  };

  const getExportCode = (): string => {
    const convertedColors = convertColors(colors);
    
    switch (selectedFormat) {
      case 'css':
        return exportToCSS(convertedColors);
      case 'scss':
        return exportToSCSS(convertedColors);
      case 'tailwind':
        return exportToTailwind(convertedColors);
    }
  };

  const handleCopy = async () => {
    const code = getExportCode();
    await navigator.clipboard.writeText(code);
    
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleColorFormat = () => {
    setColorFormat(colorFormat === 'HEX' ? 'RGB' : 'HEX');
  };

  return {
    selectedFormat,
    setSelectedFormat,
    colorFormat,
    toggleColorFormat,
    exportCode: getExportCode(),
    copied,
    handleCopy,
  };
};