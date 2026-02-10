import { ColorInputButton } from './ColorPicker/ColorInputButton/ColorInputDesktop';
import { ColorPickerModal } from './ColorPicker/ColorPickerModal/ColorPickerModal';
import { RandomizeButton } from './Actions/RandomizeButton';
import { UndoRedoButtons } from './Actions/UndoRedoButtons';
import { ExportButton } from './Actions/ExportButton';
import { ShareButton } from './Actions/ShareButton';
import { ThemeToggleButton } from './Actions/ThemeToggleButton';

import { COLOR_CONFIG } from '../constants/colorConfig';
import { useToolbarLogic } from '../hooks/useToolbarLogic';
import { useColorStore } from '../../../store/useColorStore';

export const ToolbarDesktop = () => {
  const { colors, selectedColor, triggerElement, handleColorSelect, handleCloseModal } = useToolbarLogic();
  const isToolbarShaking = useColorStore((state) => state.isToolbarShaking);

  return (
    <>
      {/* CONTENEDOR POSICIONADOR (Quieto) */}
      <div className="fixed bottom-3 left-1/2 -translate-x-1/2 z-50 w-[99vw] max-w-[1150px]">
        
        {/* CONTENEDOR ANIMADO (El que hace el shake) */}
        <div 
          className={`bg-[#131322] border border-white/20 rounded-[6px] h-23 flex items-center overflow-hidden ${
            isToolbarShaking ? 'animate-simple-shake' : ''
          }`}
        >
          {COLOR_CONFIG.map(({ key, label, width }) => (
            <div key={key} className={`flex items-center h-full ${width}`}>
              <ColorInputButton
                colorKey={key}
                label={label}
                color={colors[key]}
                isSelected={selectedColor === key}
                onClick={(buttonElement) => handleColorSelect(key, buttonElement)}
              />
              <div className="w-px h-full bg-white/20" />
            </div>
          ))}

          <div className="flex h-full">
            <RandomizeButton />
            <div className="w-px h-full bg-white/20" />
          </div>

          <div className="flex h-full">
            <UndoRedoButtons />
            <div className="w-px h-full bg-white/20" />
          </div>

          <div className="flex h-full">
            <ExportButton />
            <div className="w-px h-full bg-white/20" />
          </div>

          <div className="flex h-full">
            <ThemeToggleButton />
            <div className="w-px h-full bg-white/20" />
          </div>

          <div className="flex h-full">
            <ShareButton />
          </div>
        </div>
      </div>

      {selectedColor && (
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