// src/features/Toolbar/components/ColorPicker/ColorInputButton/ColorCircle.tsx
interface ColorCircleProps {
  color: string;
}

export const ColorCircle = ({ color }: ColorCircleProps) => {
  return (
    <div
      className="w-6 h-6 rounded-full border border-white/20"
      style={{ backgroundColor: color }}
    />
  );
};