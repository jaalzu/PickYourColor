// src/features/Toolbar/components/ColorPicker/ColorInputButton/ColorSwatchButton.tsx
import { useRef } from "react";
import { ColorCircle } from "./ColorCircle";
import { Tooltip } from "../../../../../components/ui/Tooltip";
import type { ColorInputBaseProps } from "./ColorInputBase";

interface ColorSwatchButtonProps extends ColorInputBaseProps {
  isSelected?: boolean;
  size?: "sm" | "lg";
  showTooltip?: boolean;
  className?: string;
}

export const ColorSwatchButton = ({
  color,
  label,
  onClick,
  isSelected = false,
  size = "sm",
  showTooltip = true,
  className = "",
}: ColorSwatchButtonProps) => {
  const ref = useRef<HTMLButtonElement>(null);
  const sizeClasses = size === "lg" ? "h-20 py-2 rounded-lg flex-col gap-2" : "py-2 rounded-md";
  const circleSize = size === "lg" ? 32 : 25;

  const button = (
    <button
      ref={ref}
      onClick={() => ref.current && onClick(ref.current)}
      aria-label={`Select ${label} color`}
      aria-pressed={isSelected}
      className={`flex items-center justify-center w-full transition-colors duration-150 hover:bg-white/10 ${
        isSelected ? "bg-white/10" : ""
      } ${sizeClasses} ${className}`}
    >
      <ColorCircle color={color} size={circleSize} />
      {size === "lg" && (
        <span className="font-mono text-[9px] leading-none tracking-wide text-white/90">{label}</span>
      )}
    </button>
  );

  if (!showTooltip) return button;

  return (
    <Tooltip content={`${label}: ${color.toUpperCase()}`} side="top">
      {button}
    </Tooltip>
  );
};
