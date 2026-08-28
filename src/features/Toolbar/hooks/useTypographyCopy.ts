// src/features/Toolbar/hooks/useTypographyCopy.ts
import { useCopyToClipboard } from "../../../hooks/useCopyToClipboard";
import type { TypographySettings } from "../../../types";

export const useTypographyCopy = (typography: TypographySettings) => {
  const { copied, copy } = useCopyToClipboard();

  const copyDetails = () => {
    const text = `Heading Font: ${typography.headingFont}\nBody Font: ${typography.bodyFont}`;
    copy(text);
  };

  return { copied, copyDetails };
};
