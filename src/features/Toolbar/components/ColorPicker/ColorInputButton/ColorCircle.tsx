// src/features/Toolbar/components/ColorPicker/ColorInputButton/ColorCircle.tsx
interface ColorCircleProps {
  color: string;
}

export const ColorCircle = ({ color }: ColorCircleProps) => {
  return (
    <div
      className="w-10 h-10 rounded-full "
      style={{ backgroundColor: color }}
    />
  );
};