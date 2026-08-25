// src/features/Toolbar/components/Typography/TypographyToolbarPanel.tsx
import { useEffect } from "react";
import { useColorStore } from "../../../../store/useColorStore";
import { loadGoogleFont } from "../../../../utils/googleFonts";
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

  useEffect(() => {
    loadGoogleFont(typography.headingFont);
    loadGoogleFont(typography.bodyFont);
  }, [typography.headingFont, typography.bodyFont]);

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
