// src/features/Toolbar/constants/colorConfig.ts
import type { ColorKey } from '../../../types';

export const COLOR_CONFIG: Array<{ 
  key: ColorKey; 
  width: string; 
}> = [
  { key: 'text', width: 'flex-[1.2]' },          
  { key: 'background', width: 'flex-[1.3]' }, 
  { key: 'primary', width: 'flex-[1.2]' },
  { key: 'secondary', width: 'flex-[1.2]' },
  { key: 'accent', width: 'flex-[1]' },
];