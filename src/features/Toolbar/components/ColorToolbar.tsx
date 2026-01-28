import { useState } from 'react';
import { useColorStore } from '../../../store/useColorStore';
import { ColorSquare } from './ColorPicker/ColorSquare';
import { ColorPickerModal } from './ColorPicker/ColorPickerModal';

type ColorKey = 'background' | 'text' | 'primary' | 'secondary' | 'accent';

export const ColorToolbar = () => {
  const colors = useColorStore((state) => state.colors);
  const [selectedColor, setSelectedColor] = useState<ColorKey | null>(null);

  const colorConfig = [
    { key: 'primary' as ColorKey, label: 'Primary' },
    { key: 'secondary' as ColorKey, label: 'Secondary' },
    { key: 'accent' as ColorKey, label: 'Accent' },
    { key: 'background' as ColorKey, label: 'Background' },
    { key: 'text' as ColorKey, label: 'Text' },
  ];

  return (
    <>
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-4 flex gap-3">
          {colorConfig.map(({ key, label }) => (
            <ColorSquare
              key={key}
              label={label}
              color={colors[key]}
              onClick={() => setSelectedColor(key)}
            />
          ))}
        </div>
      </div>

      {selectedColor && (
        <ColorPickerModal
          colorKey={selectedColor}
          onClose={() => setSelectedColor(null)}
        />
      )}
    </>
  );
};