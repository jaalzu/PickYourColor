// src/features/Toolbar/constants/colorConfig.ts
import type { ColorKey } from '../../../types';

export const COLOR_CONFIG: Array<{ 
  key: ColorKey; 
  label: string; 
  width: string;  
}> = [
  { key: 'text', label: 'Text', width: 'flex-[1]' },           
  { key: 'background', label: 'Background', width: 'flex-[1.3]' }, 
  { key: 'primary', label: 'Primary', width: 'flex-[1.150]' },
  { key: 'secondary', label: 'Secondary', width: 'flex-[1.2]' },
  { key: 'accent', label: 'Accent', width: 'flex-[1.1]' },
];
