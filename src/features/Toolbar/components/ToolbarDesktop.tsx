// src/features/Toolbar/components/ToolbarDesktop.tsx
import { ColorInputButton } from './ColorPicker/ColorInputButton/ColorInputButton';
import { ColorPickerModal } from './ColorPicker/ColorPickerModal';
import { COLOR_CONFIG } from '../constants/colorConfig';
import { useToolbarLogic } from '../hooks/useToolbarLogic';

export const ToolbarDesktop = () => {
  const { colors, selectedColor, handleColorSelect, handleCloseModal } = useToolbarLogic();

  return (
    <>
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 w-[90vw] max-w-[900px]">
        <div className="bg-[#1a1a2e] border border-white/20 rounded-[40px] h-16 lg:h-20 flex items-center px-2">
          {COLOR_CONFIG.map(({ key, label, width }, index) => (
            <div key={key} className={`flex items-center h-full ${width}`}>
              <ColorInputButton
                colorKey={key}
                label={label}
                color={colors[key]}
                isSelected={selectedColor === key}
                onClick={() => handleColorSelect(key)}
              />
              {index < COLOR_CONFIG.length - 1 && (
                <div className="w-px h-10 lg:h-12 bg-gray-600" />
              )}
            </div>
          ))}
        </div>
      </div>

      {selectedColor && (
        <ColorPickerModal
          colorKey={selectedColor}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};