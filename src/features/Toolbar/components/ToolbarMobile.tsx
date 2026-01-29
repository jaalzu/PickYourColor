// src/features/Toolbar/components/ToolbarMobile.tsx
import { ColorInputMobile } from './ColorPicker/ColorInputButton/ColorInputMobile';
import { ColorPickerModal } from './ColorPicker/ColorPickerModal/ColorPickerModal';
import { RandomizeButton } from './Actions/RandomizeButton';
import { UndoRedoButtons } from './Actions/UndoRedoButtons';
import { ExportButton } from './Actions/ExportButton';
import { useToolbarLogic } from '../hooks/useToolbarLogic';
import { useToolbarMobileLogic } from '../hooks/useToolbarMobileLogic';

export const ToolbarMobile = () => {
  const { colors, selectedColor, handleColorSelect, handleCloseModal } = useToolbarLogic();
  const { isOpen, toggleToolbar, handleColorSelectAndClose } = useToolbarMobileLogic();

  return (
    <>
      <div className="fixed inset-x-0 bottom-0 z-50 flex flex-col pointer-events-none">
        
        <div className={`
          bg-[#1a1a2e] transition-all duration-200 
          pointer-events-auto overflow-hidden border-t border-white/20
          ${isOpen ? 'max-h-[95vh] opacity-100' : 'max-h-0 opacity-0'}
        `}>
          <div className="grid grid-cols-2 gap-[2px] bg-white/30 p-2">
            
            <div className="bg-[#1a1a2e] p-2">
              <ColorInputMobile 
                colorKey="text" 
                label="Text" 
                color={colors.text} 
                onClick={() => handleColorSelectAndClose('text', handleColorSelect)} 
              />
            </div>
            <div className="bg-[#1a1a2e] p-2">
              <ColorInputMobile 
                colorKey="background" 
                label="Background" 
                color={colors.background} 
                onClick={() => handleColorSelectAndClose('background', handleColorSelect)} 
              />
            </div>

            <div className="bg-[#1a1a2e] p-2">
              <ColorInputMobile 
                colorKey="primary" 
                label="Primary" 
                color={colors.primary} 
                onClick={() => handleColorSelectAndClose('primary', handleColorSelect)} 
              />
            </div>
            <div className="bg-[#1a1a2e] p-2">
              <ColorInputMobile 
                colorKey="secondary" 
                label="Secondary" 
                color={colors.secondary} 
                onClick={() => handleColorSelectAndClose('secondary', handleColorSelect)} 
              />
            </div>

            <div className="bg-[#1a1a2e] p-2">
              <ColorInputMobile 
                colorKey="accent" 
                label="Accent" 
                color={colors.accent} 
                onClick={() => handleColorSelectAndClose('accent', handleColorSelect)} 
              />
            </div>
            
            <div className="bg-[#1a1a2e] p-2 flex flex-col justify-end">
              <RandomizeButton className="w-full h-32" />
            </div>

            <div className="col-span-2 grid grid-cols-2 gap-[2px] bg-white/30">
              <div className="bg-[#1a1a2e] p-2">
                <UndoRedoButtons className="h-20 w-full" />
              </div>
              <div className="bg-[#1a1a2e] p-2">
                <ExportButton className="h-20 w-full" />
              </div>
            </div>
          </div>
        </div>

        <button 
          onClick={toggleToolbar}
          className="pointer-events-auto w-full bg-[#1a1a2e] text-white py-6 font-bold text-[16px] tracking-[0.25em] uppercase border-t border-white/20"
        >
          TOOLBAR
        </button>
      </div>

      {/* Modal */}
      {selectedColor && (
        <ColorPickerModal
          colorKey={selectedColor}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};