// src/features/Toolbar/components/Actions/RandomizeButton.tsx
import DiceIcon from "../../../../assets/features/dice.svg?react";
import { useColorStore } from "../../../../store/useColorStore";
import { useToolbarTextContent } from "../../hooks/useToolbarTextContent";
import { ToolbarIconButton } from "../ui/ToolbarIconButton";

interface RandomizeButtonProps {
  className?: string;
  showLabel?: boolean;
}

export const RandomizeButton = ({
  className = "",
  showLabel = true,
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
      className={className}
    />
  );
};
