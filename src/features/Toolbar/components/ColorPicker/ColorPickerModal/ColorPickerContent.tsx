// src/features/Toolbar/components/ColorPicker/ColorPickerModal/ColorPickerContent.tsx
import { useState } from 'react';
import { HexColorPicker } from 'react-colorful';
import { ClipboardDocumentIcon, CheckIcon } from '@heroicons/react/24/outline';

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
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    onCopy();
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      className="bg-[#1a1a2e] rounded-lg p-4 shadow-2xl border border-white/10"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Color Picker: Respuesta visual inmediata */}
      <HexColorPicker
        color={currentColor}
        onChange={onColorChange}
        style={{ width: '100%', height: '250px' }}
      />

      {/* Format Toggle: HEX / RGB */}
      <div className="flex items-center gap-3 mt-4">
        <button
          onClick={onToggleFormat}
          className={`px-3 py-1 text-[10px] font-bold rounded transition-all ${
            format === 'HEX' 
              ? 'bg-white text-black' 
              : 'bg-white/10 text-gray-400 hover:bg-white/20'
          }`}
        >
          HEX
        </button>
        <button
          onClick={onToggleFormat}
          className={`px-3 py-1 text-[10px] font-bold rounded transition-all ${
            format === 'RGB' 
              ? 'bg-white text-black' 
              : 'bg-white/10 text-gray-400 hover:bg-white/20'
          }`}
        >
          RGB
        </button>
      </div>

      {/* Input y Clipboard */}
      <div className="flex items-center gap-2 mt-3">
        <input
          type="text"
          value={formattedColor}
          onChange={(e) => onColorChange(e.target.value)}
          spellCheck={false}
          className="flex-1 px-3 py-2 bg-black/40 border border-white/20 rounded-lg text-white text-sm font-mono focus:outline-none focus:border-indigo-500/50 transition-colors"
          readOnly={format === 'RGB'}
        />
        
        <button
          onClick={handleCopy}
          className="p-2.5 bg-white/5 hover:bg-white/10 rounded-lg transition-colors border border-white/5"
          title={`Copy ${format}`}
        >
          {copied ? (
            <CheckIcon className="w-5 h-5 text-green-500" />
          ) : (
            <ClipboardDocumentIcon className="w-5 h-5 text-white/70" />
          )}
        </button>
      </div>

      {/* Preview del color debajo */}
      <div
        className="w-full h-12 rounded-lg mt-4 border border-white/10 shadow-inner transition-colors duration-75"
        style={{ backgroundColor: currentColor }}
      />
    </div>
  );
};