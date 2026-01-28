// src/features/Toolbar/constants/colorConfig.ts
import type { ColorKey } from '../../../types';

export const COLOR_CONFIG: Array<{ 
  key: ColorKey; 
  label: string; 
  width: string;  // ← NUEVO
}> = [
  { key: 'text', label: 'Text', width: 'flex-[0.8]' },           // Más chico
  { key: 'background', label: 'Background', width: 'flex-[1.5]' }, // Más grande
  { key: 'primary', label: 'Primary', width: 'flex-1' },
  { key: 'secondary', label: 'Secondary', width: 'flex-[1.3]' },
  { key: 'accent', label: 'Accent', width: 'flex-1' },
];