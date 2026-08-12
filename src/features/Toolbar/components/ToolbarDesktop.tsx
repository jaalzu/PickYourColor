import { useState } from 'react';
import { LanguageIcon } from '@heroicons/react/24/outline';
import { ColorInputButton } from './ColorPicker/ColorInputButton/ColorInputDesktop';
import { ColorPickerModal } from './ColorPicker/ColorPickerModal/ColorPickerModal';
import { RandomizeButton } from './Actions/RandomizeButton';
import { UndoRedoButtons } from './Actions/UndoRedoButtons';
import { ExportButton } from './Actions/ExportButton';
import { ShareButton } from './Actions/ShareButton';
import { ThemeToggleButton } from './Actions/ThemeToggleButton';
import { useToolbarTextContent } from '../hooks/useToolbarTextContent';

import { COLOR_CONFIG } from '../constants/colorConfig';
import { useToolbarLogic } from '../hooks/useToolbarLogic';
import { useColorStore } from '../../../store/useColorStore';
import { Tooltip } from '../../../components/ui/Tooltip';
import { TypographyToolbarPanel } from './Typography/TypographyToolbarPanel';

export const ToolbarDesktop = () => {
  const { colors, selectedColor, triggerElement, handleColorSelect, handleCloseModal } = useToolbarLogic();
  const isToolbarShaking = useColorStore((state) => state.isToolbarShaking);
  const [toolbarMode, setToolbarMode] = useState<'colors' | 'typography'>('colors');
const t = useToolbarTextContent();

  return (
    <>
      {/* CONTENEDOR POSICIONADOR */}
      <div className="fixed bottom-3 left-1/2 -translate-x-1/2 z-50 w-[99vw] max-w-[1450px]">
        
        {/* CONTENEDOR ANIMADO  */}
        <div 
          className={`bg-[#131322] border border-white/20 rounded-[6px] h-23 flex items-center overflow-hidden ${
            isToolbarShaking ? 'animate-simple-shake' : ''
          }`}
        >
          {toolbarMode === 'typography' ? (
            <TypographyToolbarPanel onBack={() => setToolbarMode('colors')} />
          ) : (
            <>
              {COLOR_CONFIG.map(({ key, width }) => (
                <div key={key} className={`flex items-center h-full ${width}`}>
                  <ColorInputButton
                    colorKey={key}
                    label={t.colorKeys[key]}
                    color={colors[key]}
                    isSelected={selectedColor === key}
                    onClick={(buttonElement) => handleColorSelect(key, buttonElement)}
                  />
                  <div className="w-px h-full bg-white/20" />
                </div>
              ))}

              <div className="flex h-full">
                <Tooltip content={t.typography.openLabel}>
                  <button
                    className="flex flex-col items-center justify-center gap-1 px-5 h-full hover:bg-white/5 transition-colors"
                    onClick={() => {
                      handleCloseModal();
                      setToolbarMode('typography');
                    }}
                    aria-label={t.typography.openAria}
                  >
                    <LanguageIcon className="w-6 h-6 text-white" />
                    <span className="font-mono text-[16px] md:text-[12.5px] text-white">{t.typography.openLabel}</span>
                  </button>
                </Tooltip>
                <div className="w-px h-full bg-white/20" />
              </div>

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
            </>
          )}
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
