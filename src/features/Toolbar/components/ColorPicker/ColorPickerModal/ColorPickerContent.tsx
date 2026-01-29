// src/features/Toolbar/components/ColorPicker/ColorPickerModal/ColorPickerContent.tsx
import { useState } from 'react'; // Importamos useState para el timer
import { HexColorPicker } from 'react-colorful';
import { ClipboardDocumentIcon, CheckIcon } from '@heroicons/react/24/outline'; // Añadimos CheckIcon

interface ColorPickerContentProps {
  colorKey: string;
  currentColor: string;
  formattedColor: string;
  format: 'HEX' | 'RGB';
  onColorChange: (color: string) => void;
  onCopy: () => void;
  onToggleFormat: () => void;
  onClose: () => void;
}

export const ColorPickerContent = ({
  currentColor,
  formattedColor,
  format,
  onColorChange,
  onCopy,
  onToggleFormat,
}: ColorPickerContentProps) => {
  // Estado local para el check verde
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    onCopy();
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Desaparece tras 2 segundos
  };

  return (
    <div 
      className="bg-[#1a1a2e] rounded-lg p-4"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Color Picker */}
      <HexColorPicker
        color={currentColor}
        onChange={onColorChange}
        style={{ width: '100%', height: '250px' }}
      />

      {/* Format Toggle */}
      <div className="flex items-center gap-3 mt-3">
        <button
          onClick={onToggleFormat}
          className={`px-3 py-1 text-xs  rounded transition ${
            format === 'HEX' 
              ? 'bg-black text-white' 
              : 'bg-white/10 text-gray-300 hover:bg-white/20'
          }`}
        >
          HEX
        </button>
        <button
          onClick={onToggleFormat}
          className={`px-3 py-1 text-xs  rounded transition ${
            format === 'RGB' 
              ? 'bg-black text-white' 
              : 'bg-white/10 text-gray-300 hover:bg-white/20'
          }`}
        >
          RGB
        </button>
      </div>

      <div className="flex items-center gap-2 mt-3">
        <input
          type="text"
          value={formattedColor}
          onChange={(e) => onColorChange(e.target.value)}
          className="flex-1 px-3 py-2 bg-black/5 border border-white/40 rounded-lg text-white text-sm focus:outline-none focus:border-white/30"
          readOnly={format === 'RGB'}
        />
        <button
          onClick={handleCopy}
          className="p-2 bg-[#1a1a2e] hover:bg-white/10 rounded-lg transition"
          title={`Copy ${format}`}
        >
          {copied ? (
            <CheckIcon className="w-5 h-5 text-green-500" />
          ) : (
            <ClipboardDocumentIcon className="w-5 h-5 text-white" />
          )}
        </button>
      </div>

      {/* Color Preview */}
      <div
        className="w-full h-10 rounded-lg mt-3 border border-white/20"
        style={{ backgroundColor: currentColor }}
      />
    </div>
  );
};