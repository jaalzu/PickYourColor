// src/features/Toolbar/components/ColorPicker/ColorInputButton/ColorInputBase.tsx
import type { ColorKey } from "../../../../../types";

export interface ColorInputBaseProps {
  colorKey: ColorKey;
  label: string;
  color: string;
  onClick: (element: HTMLElement) => void;
}
