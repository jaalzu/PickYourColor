// src/features/Toolbar/components/ColorPicker/ColorInputButton/ColorCircle.tsx
interface ColorCircleProps {
  color: string;
  size?: number;
}

export const ColorCircle = ({ color, size = 24 }: ColorCircleProps) => (
  <div
    className="rounded-[2px] border border-white/30"
    style={{ backgroundColor: color, width: size, height: size }}
  />
);
