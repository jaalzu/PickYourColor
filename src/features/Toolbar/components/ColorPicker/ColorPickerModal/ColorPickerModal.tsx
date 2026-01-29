// src/features/Toolbar/components/ColorPicker/ColorPickerModal/ColorPickerModal.tsx
import { ColorPickerContent } from './ColorPickerContent';
import { useColorPickerLogic } from './useColorPickerLogic';
import type { ColorKey } from '../../../../../types';

interface ColorPickerModalProps {
  colorKey: ColorKey;  
  onClose: () => void;
}

export const ColorPickerModal = ({ colorKey, onClose }: ColorPickerModalProps) => {
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
      className="fixed inset-0 z-40"
      onClick={() => startClosing(onClose)}
    >
      <div
        className="fixed bottom-32 left-1/2 transform -translate-x-1/2 transition-all duration-200"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible 
            ? 'translateX(-50%) translateY(0)' 
            : 'translateX(-50%) translateY(20px)',
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