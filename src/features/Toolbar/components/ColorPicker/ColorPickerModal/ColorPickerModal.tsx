// src/features/Toolbar/components/ColorPicker/ColorPickerModal/ColorPickerModal.tsx
import { ColorPickerContent } from './ColorPickerContent';
import { useColorPickerLogic } from './useColorPickerLogic';
import type { ColorKey } from '../../../../../types';

interface ColorPickerModalProps {
  colorKey: ColorKey;
  position: { x: number; y: number } | null;
  onClose: () => void;
}

export const ColorPickerModal = ({ colorKey, position, onClose }: ColorPickerModalProps) => {
  const {
    currentColor,
    isVisible,
    format,
    formattedColor,
    handleColorChange,
    handleCopy,
    toggleFormat,
    startClosing,
  } = useColorPickerLogic(colorKey);

  // Desktop: posicionado según botón
  // Mobile: centrado
  const positionStyles = position
    ? {
        left: `${position.x}px`,
        transform: 'translateX(-50%)',
        bottom: '120px',
      }
    : {
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
      };

  return (
    <div
      className="fixed inset-0 z-60"
      onClick={() => startClosing(onClose)}
    >
      <div
        className="fixed transition-all duration-200"
        style={{
          ...positionStyles,
          opacity: isVisible ? 1 : 0,
        }}
      >
        <ColorPickerContent
          colorKey={colorKey}
          currentColor={currentColor}
          formattedColor={formattedColor}
          format={format}
          onColorChange={handleColorChange}
          onCopy={handleCopy}
          onToggleFormat={toggleFormat}
          onClose={() => startClosing(onClose)}
        />
      </div>
    </div>
  );
};