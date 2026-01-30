// src/features/Toolbar/components/ToolbarDesktop.tsx
import { ColorInputButton } from './ColorPicker/ColorInputButton/ColorInputDesktop';
import { ColorPickerModal } from './ColorPicker/ColorPickerModal/ColorPickerModal';
import { RandomizeButton } from './Actions/RandomizeButton';
import { UndoRedoButtons } from './Actions/UndoRedoButtons';
import { ExportButton } from './Actions/ExportButton';
import { COLOR_CONFIG } from '../constants/colorConfig';
import { useToolbarLogic } from '../hooks/useToolbarLogic';

export const ToolbarDesktop = () => {
  const { colors, selectedColor, modalPosition, handleColorSelect, handleCloseModal } = useToolbarLogic();

  return (
    <>
      <div className="fixed bottom-3 left-1/2 transform -translate-x-1/2 z-50 w-[99vw] max-w-[1150px]">
        <div className="bg-[#1a1a2e] border border-white/20 rounded-[8px] h-22 flex items-center overflow-hidden">
          
          {/* Colores */}
          {COLOR_CONFIG.map(({ key, label, width }) => (
            <div key={key} className={`flex items-center h-full ${width}`}>
              <ColorInputButton
                colorKey={key}
                label={label}
                color={colors[key]}
                isSelected={selectedColor === key}
                onClick={(buttonElement) => handleColorSelect(key, buttonElement)}
              />
              {/* Línea divisora de colores */}
              <div className="w-px h-full bg-white/20" />
            </div>
          ))}

          {/* Botón Aleatorio */}
          <div className="flex  h-full ">
            <RandomizeButton />
            <div className="w-px h-full bg-white/20" />
          </div>

          {/* Botones Undo/Redo */}
          <div className="flex h-full">
            <UndoRedoButtons />
            <div className="w-px h-full bg-white/20"  />
          </div>

          {/* Botón Exportar */}
          <div className="flex h-full">
            <ExportButton />
          </div>

        </div>
      </div>

      {selectedColor && modalPosition && (
        <ColorPickerModal
          colorKey={selectedColor}
          position={modalPosition}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};