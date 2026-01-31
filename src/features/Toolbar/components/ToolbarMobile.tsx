// src/features/Toolbar/components/ToolbarMobile.tsx
import { ColorInputMobile } from './ColorPicker/ColorInputButton/ColorInputMobile';
import { ColorPickerModal } from './ColorPicker/ColorPickerModal/ColorPickerModal';
import { RandomizeButton } from './Actions/RandomizeButton';
import { UndoRedoButtons } from './Actions/UndoRedoButtons';
import { ExportButton } from './Actions/ExportButton';
import { useToolbarLogic } from '../hooks/useToolbarLogic';

export const ToolbarMobile = () => {
  const { 
    colors, 
    selectedColor,
    modalPosition,
    isToolbarOpen,
    handleColorSelect,
    handleColorSelectAndClose,
    handleCloseModal,
    toggleToolbar 
  } = useToolbarLogic();

  return (
    <>
      <div className="fixed inset-x-0 bottom-0 z-50 flex flex-col pointer-events-none">
        
        <div className={`
          bg-[#1a1a2e] transition-all duration-200 
          pointer-events-auto overflow-hidden 
          ${isToolbarOpen ? 'max-h-[95vh] opacity-100' : 'max-h-0 opacity-0'}
        `}>
          <div className="grid grid-cols-2 gap-[8px] p-2">
            
            <div className=" border border-white/10">
              <ColorInputMobile 
                colorKey="text" 
                label="Text" 
                color={colors.text} 
                onClick={() => handleColorSelect('text')}              />
            </div>
            <div className=" border border-white/10">
              <ColorInputMobile 
                colorKey="background" 
                label="Background" 
                color={colors.background} 
                onClick={() => handleColorSelect('background')} 
              />
            </div>

            <div className=" border border-white/10">
              <ColorInputMobile 
                colorKey="primary" 
                label="Primary" 
                color={colors.primary} 
                onClick={() => handleColorSelect('primary')} 
              />
            </div>
            <div className="border border-white/10 ">
              <ColorInputMobile 
                colorKey="secondary" 
                label="Secondary" 
                color={colors.secondary} 
                onClick={() => handleColorSelect('secondary')} 
              />
            </div>

            <div className=" border border-white/10">
              <ColorInputMobile 
                colorKey="accent" 
                label="Accent" 
                color={colors.accent} 
                onClick={() => handleColorSelect('accent')} 
              />
            </div>
            
            <div className=" p-1 flex flex-col justify-end border border-white/10">
              <RandomizeButton className="w-full" />
            </div>

                  <div className="col-span-2 grid grid-cols-2 divide-x divide-white/20"> 
          <div className="">
            <UndoRedoButtons className="w-full" />
          </div>
          <div className="">
            <ExportButton className="w-full p-3" />
          </div>
        </div>
          </div>
        </div>

        <button 
          onClick={toggleToolbar}
          className="pointer-events-auto w-full bg-[#1a1a2e] text-white py-6 font-bold text-[16px] tracking-widest uppercase border-t border-white/20"
        >
          TOOLBAR
        </button>
      </div>

      {/* Modal - centrado en mobile */}
      {selectedColor && (
        <ColorPickerModal
          colorKey={selectedColor}
          position={modalPosition}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};