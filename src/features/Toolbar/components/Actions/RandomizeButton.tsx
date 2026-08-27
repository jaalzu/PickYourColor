// src/features/Toolbar/components/Actions/RandomizeButton.tsx
import DiceIcon from "../../../../assets/features/dice.svg?react";
import { useColorStore } from "../../../../store/useColorStore";
import { useToolbarTextContent } from "../../hooks/useToolbarTextContent";
import { ToolbarIconButton } from "../ui/ToolbarIconButton";

interface RandomizeButtonProps {
  className?: string;
  showLabel?: boolean;
  size?: "sm" | "md" | "lg";
  iconGap?: string;
}

export const RandomizeButton = ({
  className = "",
  showLabel = true,
  size = "md",
  iconGap = "gap-0.5",
}: RandomizeButtonProps) => {
  const randomize = useColorStore((state) => state.randomizeColors);
  const t = useToolbarTextContent().randomize;

  return (
    <ToolbarIconButton
      icon={<DiceIcon />}
      label={showLabel ? t.label : undefined}
      tooltip={t.tooltip}
      ariaLabel={t.aria}
      onClick={randomize}
      size={size}
      iconGap={iconGap}
      className={className}
    />
  );
};
