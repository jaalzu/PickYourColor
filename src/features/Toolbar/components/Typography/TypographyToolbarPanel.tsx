// src/features/Toolbar/components/Typography/TypographyToolbarPanel.tsx
import { useColorStore } from "../../../../store/useColorStore";
import { TypographyCompactPanel } from "./TypographyCompactPanel";
import { TypographyHorizontalPanel } from "./TypographyHorizontalPanel";

interface TypographyToolbarPanelProps {
  onBack?: () => void;
  compact?: boolean;
}

export const TypographyToolbarPanel = ({
  onBack,
  compact = false,
}: TypographyToolbarPanelProps) => {
  const {
    typography,
    setHeadingFont,
    setBodyFont,
    setHeadingScale,
    setBodyScale,
    randomizeTypography,
  } = useColorStore();

  const Panel = compact ? TypographyCompactPanel : TypographyHorizontalPanel;

  return (
    <Panel
      typography={typography}
      onBack={onBack}
      setHeadingFont={setHeadingFont}
      setBodyFont={setBodyFont}
      setHeadingScale={setHeadingScale}
      setBodyScale={setBodyScale}
      randomizeTypography={randomizeTypography}
    />
  );
};
