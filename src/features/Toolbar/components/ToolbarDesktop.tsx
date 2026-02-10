// src/features/Toolbar/components/ToolbarDesktop.tsx
import { ColorInputButton } from './ColorPicker/ColorInputButton/ColorInputDesktop';
import { ColorPickerModal } from './ColorPicker/ColorPickerModal/ColorPickerModal';
import { RandomizeButton } from './Actions/RandomizeButton';
import { UndoRedoButtons } from './Actions/UndoRedoButtons';
import { ExportButton } from './Actions/ExportButton';
import { ShareButton } from './Actions/ShareButton';
import { ThemeToggleButton } from './Actions/ThemeToggleButton';

import { COLOR_CONFIG } from '../constants/colorConfig';
import { useToolbarLogic } from '../hooks/useToolbarLogic';

export const ToolbarDesktop = () => {
 const { colors, selectedColor, triggerElement, handleColorSelect, handleCloseModal } = useToolbarLogic();



  return (
    <>
      <div className="toolbar-container fixed bottom-3 left-1/2 transform -translate-x-1/2 z-50 w-[99vw] max-w-[1150px]">
        <div className="bg-[#131322] border border-white/20 rounded-[6px] h-23 flex items-center overflow-hidden">
          
          {/* Colores */}
          {COLOR_CONFIG.map(({ key, label, width }) => (
            <div key={key} className={`flex items-center  h-full ${width}`}>
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
            {/* Línea divisora añadida aquí */}
            <div className="w-px h-full bg-white/20" />
          </div>


{/* Botón Theme Toggle */}
<div className="flex h-full">
  <ThemeToggleButton />
  <div className="w-px h-full bg-white/20" />
</div>

          {/* Botón Share */}
          <div className="flex h-full">
            <ShareButton />
          </div>

        </div>
      </div>

      {selectedColor  && (
     <ColorPickerModal
          colorKey={selectedColor}
          open={!!selectedColor}
          onClose={handleCloseModal}
          triggerElement={triggerElement}
        />
      )}
    </>
  );
};