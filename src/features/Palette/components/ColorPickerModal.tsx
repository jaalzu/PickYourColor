// src/features/Palette/components/ColorPickerModal.tsx
import { HexColorPicker } from 'react-colorful';
import { usePaletteStore } from '../../../store/usePaletteStore';

interface ColorPickerModalProps {
  colorKey: 'background' | 'text' | 'primary' | 'secondary' | 'accent';
  onClose: () => void;
}

export const ColorPickerModal = ({ colorKey, onClose }: ColorPickerModalProps) => {
  const { colors, setColor } = usePaletteStore();
  const currentColor = colors[colorKey];

  const handleCopy = () => {
    navigator.clipboard.writeText(currentColor);
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl max-w-sm w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold" style={{ color: 'var(--color-text)' }}>
            {colorKey.charAt(0).toUpperCase() + colorKey.slice(1)}
          </h3>
          <button
            onClick={onClose}
            className="text-2xl hover:opacity-70"
            style={{ color: 'var(--color-text)' }}
          >
            ×
          </button>
        </div>

        <HexColorPicker
          color={currentColor}
          onChange={(newColor) => setColor(colorKey, newColor)}
          className="w-full mb-4"
        />

        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={currentColor}
              onChange={(e) => setColor(colorKey, e.target.value)}
              className="flex-1 px-3 py-2 border rounded-lg"
              style={{ color: 'var(--color-text)' }}
            />
            <button
              onClick={handleCopy}
              className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition"
            >
              📋
            </button>
          </div>

          <div
            className="w-full h-12 rounded-lg border-2 border-gray-200"
            style={{ backgroundColor: currentColor }}
          />
        </div>
      </div>
    </div>
  );
};