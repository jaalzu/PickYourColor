import type { ColorKey } from '../../../../../types';
import { LockButton } from './LockButton';

export interface ColorInputBaseProps {
  colorKey: ColorKey;
  label: string;
  color: string;
  onClick: (element: HTMLElement) => void;
}

export { LockButton };