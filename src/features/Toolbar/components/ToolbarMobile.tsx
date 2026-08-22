// src/features/Toolbar/components/ToolbarMobile.tsx
import { useState } from 'react';
import { LanguageIcon } from '@heroicons/react/24/outline';
import { ColorInputMobile } from './ColorPicker/ColorInputButton/ColorInputMobile';
import { ColorPickerModal } from './ColorPicker/ColorPickerModal/ColorPickerModal';
import { RandomizeButton } from './Actions/RandomizeButton';
import { UndoRedoButtons } from './Actions/UndoRedoButtons';
import { ThemeToggleButton } from './Actions/ThemeToggleButton';
import { ExportButton } from './Actions/ExportButton';
import { ShareButton } from './Actions/ShareButton';
import { useToolbarLogic } from '../hooks/useToolbarLogic';
import { useColorStore } from '../../../store/useColorStore';
import { TypographyToolbarPanel } from './Typography/TypographyToolbarPanel';
import { useToolbarTextContent } from '../hooks/useToolbarTextContent';

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
  const [toolbarMode, setToolbarMode] = useState<'colors' | 'typography'>('colors');
  const t = useToolbarTextContent();

  return (
    <>
      <div className="fixed inset-x-0 bottom-0 z-50 flex flex-col pointer-events-none">
        <div className={`flex flex-col w-full pointer-events-auto ${isShaking ? 'animate-feedback-mobile' : ''}`}>
          
          <div className={`
            bg-[#1a1a2e] transition-all duration-200 
            overflow-hidden 
            ${isToolbarOpen ? 'max-h-[95vh] opacity-100' : 'max-h-0 opacity-0'}
          `}>
            {toolbarMode === 'typography' ? (
              <TypographyToolbarPanel compact onBack={() => setToolbarMode('colors')} />
            ) : (
              <>
                <div className="grid grid-cols-2">
                  <ColorInputMobile
                    colorKey="text"
                    label={t.colorKeys.text}
                    color={colors.text}
                    onClick={(el) => handleColorSelect('text', el)}
                  />
                  <ColorInputMobile
                    colorKey="background"
                    label={t.colorKeys.background}
                    color={colors.background}
                    onClick={(el) => handleColorSelect('background', el)}
                  />
                  <ColorInputMobile
                    colorKey="primary"
                    label={t.colorKeys.primary}
                    color={colors.primary}
                    onClick={(el) => handleColorSelect('primary', el)}
                  />
                  <ColorInputMobile
                    colorKey="secondary"
                    label={t.colorKeys.secondary}
                    color={colors.secondary}
                    onClick={(el) => handleColorSelect('secondary', el)}
                  />
                  <ColorInputMobile
                    colorKey="accent"
                    label={t.colorKeys.accent}
                    color={colors.accent}
                    onClick={(el) => handleColorSelect('accent', el)}
                  />
                  <div className="flex flex-col border border-white/10">
                    <RandomizeButton />
                  </div>
                  <div className="flex flex-col border border-white/10">
                    <RandomizeButton />
                  </div>
                  <button
                    className="col-span-2 flex flex-col items-center justify-center gap-1 border border-white/10 py-4 hover:bg-white/5 transition-colors"
                    onClick={() => {
                      handleCloseModal();
                      setToolbarMode('typography');
                    }}
                    aria-label={t.typography.openAria}
                  >
                    <LanguageIcon className="w-6 h-6 text-white" />
                    <span className="font-mono text-[16px] text-white">{t.typography.openLabel}</span>
                  </button>
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
              </>
            )}
          </div>

          <button 
            onClick={toggleToolbar}
            className="font-mono w-full bg-[#1a1a2e] text-white py-3 font-bold text-[24px] tracking-widest border-t border-white/10"
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
