import { useState } from 'react';
import { useColorStore } from '../../../store/useColorStore';
import { ColorSquare } from './ColorPicker/ColorSquare';
import { ColorPickerModal } from './ColorPicker/ColorPickerModal';

type ColorKey = 'background' | 'text' | 'primary' | 'secondary' | 'accent';

export const ToolbarMobile = () => {
  const colors = useColorStore((state) => state.colors);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState<ColorKey | null>(null);

  const colorConfig = [
    { key: 'text' as ColorKey, label: 'Text' },
    { key: 'background' as ColorKey, label: 'Background' },
    { key: 'primary' as ColorKey, label: 'Primary' },
    { key: 'secondary' as ColorKey, label: 'Secondary' },
    { key: 'accent' as ColorKey, label: 'Accent' },
  ];

  return (
    <>
      {/* Botón para expandir/colapsar */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 z-50 w-14 h-14 rounded-full bg-blue-500 text-white shadow-2xl flex items-center justify-center text-2xl"
      >
        {isOpen ? '×' : '🎨'}
      </button>

      {/* Toolbar expandido */}
      {isOpen && (
        <div className="fixed inset-x-0 bottom-0 z-40 bg-white dark:bg-gray-800 rounded-t-3xl shadow-2xl p-6 pb-8">
          <div className="grid grid-cols-2 gap-4">
            {colorConfig.map(({ key, label }) => (
              <ColorSquare
                key={key}
                label={label}
                color={colors[key]}
                onClick={() => {
                  setSelectedColor(key);
                  setIsOpen(false);
                }}
              />
            ))}
          </div>
        </div>
      )}

      {selectedColor && (
        <ColorPickerModal
          colorKey={selectedColor}
          onClose={() => setSelectedColor(null)}
        />
      )}
    </>
  );
};