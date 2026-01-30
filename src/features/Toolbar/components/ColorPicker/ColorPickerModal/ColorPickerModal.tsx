// src/features/Toolbar/components/ColorPicker/ColorPickerModal/ColorPickerModal.tsx
import { ColorPickerContent } from './ColorPickerContent';
import { useColorPickerLogic } from './useColorPickerLogic';
import type { ColorKey } from '../../../../../types';

interface ColorPickerModalProps {
  colorKey: ColorKey;
  position: { x: number; y: number };
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

  return (
    <div
      className="fixed inset-0 z-40 "
      onClick={() => startClosing(onClose)}
    >
<div
  className="fixed transition-all duration-200"
  style={{
    left: `${position.x}px`,
    bottom: '120px',
    transform: isVisible 
      ? 'translateX(-50%) translateY(0)' 
      : 'translateX(-50%) translateY(20px)',
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
