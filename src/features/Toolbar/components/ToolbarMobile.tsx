// src/features/Toolbar/components/ToolbarMobile.tsx
import { useState } from 'react';
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
    setIsToolbarOpen,
    handleColorSelect,
    handleCloseModal,
    triggerElement,
  } = useToolbarLogic();

  const isShaking = useColorStore((state) => state.isToolbarShaking);
  const [toolbarMode, setToolbarMode] = useState<'colors' | 'typography'>('colors');
  const t = useToolbarTextContent();

  const handleColorsTab = () => {
    if (isToolbarOpen && toolbarMode === 'colors') {
      setIsToolbarOpen(false);
    } else {
      handleCloseModal();
      setToolbarMode('colors');
      setIsToolbarOpen(true);
    }
  };

  const handleFontsTab = () => {
    if (isToolbarOpen && toolbarMode === 'typography') {
      setIsToolbarOpen(false);
    } else {
      handleCloseModal();
      setToolbarMode('typography');
      setIsToolbarOpen(true);
    }
  };

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
                </div>

                <div className="flex flex-col">
                  {/* Deshacer/Rehacer - full width */}
                  <div className="border-t border-white/10">
                    <UndoRedoButtons className="w-full py-4" />
                  </div>
                  <div className="grid grid-cols-2 divide-x divide-white/10 border-t border-white/10">
                    <ThemeToggleButton className="w-full py-4" />
                    <ExportButton className="w-full py-4" />
                  </div>
                  <div className="border-t border-white/10">
                    <ShareButton className="w-full py-4" />
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Colors | Fonts tabs - replaces TOOLBAR */}
          <div className="grid grid-cols-2 divide-x divide-white/10 bg-[#1a1a2e] border-t border-white/10">
            <button
              onClick={handleColorsTab}
              aria-label={t.typography.backLabel}
              className={`font-mono py-3 font-extrabold text-[16px] tracking-widest transition-colors ${isToolbarOpen && toolbarMode === 'colors' ? 'bg-white/10 text-white' : 'text-white hover:bg-white/5'}`}
              style={{ color: '#ffffff' }}
            >
              {t.typography.backLabel.toUpperCase()}
            </button>
            <button
              onClick={handleFontsTab}
              aria-label={t.typography.openLabel}
              className={`font-mono py-3 font-extrabold text-[16px] tracking-widest transition-colors ${isToolbarOpen && toolbarMode === 'typography' ? 'bg-white/10 text-white' : 'text-white hover:bg-white/5'}`}
              style={{ color: '#ffffff' }}
            >
              {t.typography.openLabel.toUpperCase()}
            </button>
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
