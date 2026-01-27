// src/features/Palette/components/ColorSquare.tsx

interface ColorSquareProps {
  label: string;
  color: string;
  onClick: () => void;
}

export const ColorSquare = ({ label, color, onClick }: ColorSquareProps) => {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center gap-1 hover:opacity-80 transition"
    >
      <div
        className="w-16 h-16 rounded-lg shadow-md border-2 border-gray-200"
        style={{ backgroundColor: color }}
      />
      <span className="text-xs font-medium" style={{ color: 'var(--color-text)' }}>
        {label}
      </span>
    </button>
  );
};