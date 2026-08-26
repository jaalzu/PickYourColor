// src/features/Toolbar/components/ColorPicker/ColorInputButton/ColorInputDesktop.tsx
import { ColorSwatchButton } from "./ColorSwatchButton";
import type { ColorInputBaseProps } from "./ColorInputBase";

interface ColorInputDesktopProps extends ColorInputBaseProps {
  isSelected: boolean;
}

export const ColorInputButton = (props: ColorInputDesktopProps) => (
  <ColorSwatchButton {...props} size="sm" />
);
