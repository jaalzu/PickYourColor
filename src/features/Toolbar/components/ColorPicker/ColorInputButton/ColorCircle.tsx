// src/features/Toolbar/components/ColorPicker/ColorInputButton/ColorCircle.tsx
interface ColorCircleProps {
  color: string;
}

export const ColorCircle = ({ color }: ColorCircleProps) => {
  return (
    <div
      className="w-full h-8 rounded-full border border-white/20"
      style={{ 
        backgroundColor: color,
        boxShadow: `0 4px 12px ${color}80` // ← 80 = 50% opacidad en hex
      }}
    />
  );
};