// src/features/Toolbar/components/ToolbarMobile.tsx
import { ColorSquare } from './ColorPicker/ColorSquare';
import { ColorPickerModal } from './ColorPicker/ColorPickerModal';
import { COLOR_CONFIG } from '../constants/colorConfig';
import { useToolbarLogic } from '../hooks/useToolbarLogic';
import { useToolbarMobileLogic } from '../hooks/useToolbarMobileLogic';

export const ToolbarMobile = () => {
  const { colors, selectedColor, handleColorSelect, handleCloseModal } = useToolbarLogic();
  const { isOpen, toggleToolbar, handleColorSelectAndClose } = useToolbarMobileLogic();

  return (
    <>
      <button
        onClick={toggleToolbar}
        className="fixed bottom-4 right-4 z-50 w-14 h-14 rounded-full bg-blue-500 text-white shadow-2xl flex items-center justify-center text-2xl"
      >
        {isOpen ? '×' : '🎨'}
      </button>

      {isOpen && (
        <div className="fixed inset-x-0 bottom-0 z-40 bg-white dark:bg-gray-800 rounded-t-3xl shadow-2xl p-6 pb-8">
          <div className="grid grid-cols-2 gap-4">
            {COLOR_CONFIG.map(({ key, label }) => (
              <ColorSquare
                key={key}
                label={label}
                color={colors[key]}
                onClick={() => handleColorSelectAndClose(key, handleColorSelect)}
              />
            ))}
          </div>
        </div>
      )}

      {selectedColor && (
        <ColorPickerModal
          colorKey={selectedColor}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};