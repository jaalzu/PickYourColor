import { usePaletteStore } from '../../../store/usePaletteStore';
import { isValidHex } from '../utils/colorValidation';

interface ColorInputProps {
  label: string;
  colorKey: 'background' | 'text' | 'primary' | 'secondary' | 'accent';
}

export const ColorInput = ({ label, colorKey }: ColorInputProps) => {
  const { colors, setColor } = usePaletteStore();
  const value = colors[colorKey];
  const isValid = isValidHex(value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(colorKey, e.target.value);
  };

  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium" style={{ color: 'var(--color-text)' }}>
        {label}
      </label>
      <div className="flex gap-2 items-center">
        <input
          type="text"
          value={value}
          onChange={handleChange}
          data-testid={`color-input-${colorKey}`}
          className={`flex-1 px-3 py-2 rounded border ${
            isValid ? 'border-gray-300' : 'border-red-500'
          }`}
          placeholder="#000000"
        />
        <div
          className="w-10 h-10 rounded border border-gray-300"
          style={{ backgroundColor: isValid ? value : '#cccccc' }}
        />
      </div>
      {!isValid && (
        <span className="text-xs text-red-500">Invalid HEX color</span>
      )}
    </div>
  );
};