// src/features/Toolbar/components/ColorPicker/ColorInputButton/ColorCircle.tsx
interface ColorCircleProps {
  color: string;
}

function hexToRgba(hex: string, alpha: number) {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)

  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}


export const ColorCircle = ({ color }: ColorCircleProps) => {
  return (
    <div
      className="w-full h-8 rounded-full border border-white/20"
      style={{ 
        backgroundColor: color,
boxShadow: `0 4px 12px ${hexToRgba(color, 0.43)}`
      }}
    />
  );
};