// src/features/Toolbar/components/ToolbarMobile.tsx
import { ColorInputMobile } from './ColorPicker/ColorInputButton/ColorInputMobile';
import { ColorPickerModal } from './ColorPicker/ColorPickerModal/ColorPickerModal';
import { RandomizeButton } from './Actions/RandomizeButton';
import { UndoRedoButtons } from './Actions/UndoRedoButtons';
import { ThemeToggleButton } from './Actions/ThemeToggleButton';

import { ExportButton } from './Actions/ExportButton';
import { ShareButton } from './Actions/ShareButton';
import { useToolbarLogic } from '../hooks/useToolbarLogic';
import { useColorStore } from '../../../store/useColorStore';

export const ToolbarMobile = () => {
  const { 
    colors, 
    selectedColor,
    isToolbarOpen,
    handleColorSelect,
    handleCloseModal,
    triggerElement,
    toggleToolbar 
  } = useToolbarLogic();

const isShaking = useColorStore((state) => state.isToolbarShaking);
  return (
    <>
     <div className="fixed inset-x-0 bottom-0 z-50 flex flex-col pointer-events-none">
        
        <div className={`flex flex-col w-full pointer-events-auto ${isShaking ? 'animate-feedback-mobile' : ''}`}>
          
          <div className={`
            bg-[#1a1a2e] transition-all duration-200 
            overflow-hidden 
            ${isToolbarOpen ? 'max-h-[95vh] opacity-100' : 'max-h-0 opacity-0'}
          `}>
            <div className="grid grid-cols-2">
              <ColorInputMobile colorKey="text" label="Text" color={colors.text} onClick={() =>   handleColorSelect('text')} />
              
              <ColorInputMobile colorKey="background" label="Background" color={colors.background} onClick={() => handleColorSelect('background')} />

              <ColorInputMobile colorKey="primary" label="Primary" color={colors.primary} onClick={() => handleColorSelect('primary')} />

              <ColorInputMobile colorKey="secondary" label="Secondary" color={colors.secondary} onClick={() => handleColorSelect('secondary')} />

              <ColorInputMobile colorKey="accent" label="Accent" color={colors.accent} onClick={() => handleColorSelect('accent')} />

              <div className="flex flex-col border border-white/10">
                <RandomizeButton />
              </div>
            </div>

            <div className="flex flex-col"> 
              <div className="grid grid-cols-2 divide-x divide-white/10 border-b border-white/10">
                <UndoRedoButtons className="w-full py-4" />
                <ThemeToggleButton className="w-full py-4" />
              </div>
              <div className="grid grid-cols-2 divide-x divide-white/10">
                <ExportButton className="w-full py-4" />
                <ShareButton className="w-full py-4" />
              </div>
            </div>
          </div>

          <button 
            onClick={toggleToolbar}
            className="font-mono w-full bg-[#1a1a2e] text-white py-4 font-bold text-[27px] tracking-widest border-t border-white/10"
          >
            TOOLBAR
          </button>
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