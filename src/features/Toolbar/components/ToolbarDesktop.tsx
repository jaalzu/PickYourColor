// src/features/Toolbar/components/ToolbarDesktop.tsx
import { ColorInputButton } from './ColorPicker/ColorInputButton/ColorInputDesktop';
import { ColorPickerModal } from './ColorPicker/ColorPickerModal/ColorPickerModal';
import { RandomizeButton } from './Actions/RandomizeButton';
import { UndoRedoButtons } from './Actions/UndoRedoButtons';
import { ExportButton } from './Actions/ExportButton';
import { COLOR_CONFIG } from '../constants/colorConfig';
import { useToolbarLogic } from '../hooks/useToolbarLogic';

export const ToolbarDesktop = () => {
  const { colors, selectedColor, handleColorSelect, handleCloseModal } = useToolbarLogic();

  return (
    <>
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 w-[98vw] max-w-[1100px]">
        <div className="bg-[#1a1a2e] border border-white/30 rounded-[40px] h-18 lg:h-19 flex items-center overflow-hidden">
          {/* Colores */}
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
                <div className="w-px h-full bg-gray-600 z-10" />
              )}
            </div>
          ))}

          {/* Separador */}
          <div className="w-px h-full bg-gray-600 z-10" />

          {/* Randomize */}
          <RandomizeButton />

          {/* Separador */}
          <div className="w-px h-full bg-gray-600 z-10" />

          {/* Undo/Redo */}
          <UndoRedoButtons />

          {/* Separador */}
          <div className="w-px h-full bg-gray-600 z-10" />

          {/* Export */}
          <ExportButton />
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