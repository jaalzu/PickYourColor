// src/features/Toolbar/components/ColorPicker/ColorInputButton/ColorInputMobile.tsx
import { ColorSwatchButton } from "./ColorSwatchButton";
import type { ColorInputBaseProps } from "./ColorInputBase";

// showTooltip=false: en touch no hay hover real, y el tooltip mal anclado
// es mi sospechoso #1 del "input viejo" al final del toolbar.
export const ColorInputMobile = (props: ColorInputBaseProps) => (
  <ColorSwatchButton {...props} size="lg" showTooltip={false} />
);
