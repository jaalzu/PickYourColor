// src/features/Toolbar/components/ColorPicker/ColorInputButton/ColorCircle.tsx
interface ColorCircleProps {
  color: string;
}

export const ColorCircle = ({ color }: ColorCircleProps) => {
  return (
    <div
      className="w-12 h-12 rounded-sm "
      style={{ backgroundColor: color }}
    />
  );
};