// src/features/Toolbar/components/ColorPicker/ColorInputButton/LockButton.tsx
import { LockClosedIcon, LockOpenIcon } from '@heroicons/react/24/outline';
import { useColorStore } from '../../../../../store/useColorStore';
import type { ColorKey } from '../../../../../types';

interface LockButtonProps {
  colorKey: ColorKey; 
}

export const LockButton = ({ colorKey }: LockButtonProps) => {
  const isLocked = useColorStore((state) => state.lockedColors.includes(colorKey));
  const toggleLock = useColorStore((state) => state.toggleLock);

  const sizeClass = "w-[18px] h-[18px] md:w-3.5 md:h-3.5";

  return (
   <button
  type="button"
  onClick={(e) => {
    e.stopPropagation();
    toggleLock(colorKey);
  }}
  aria-pressed={isLocked}
  data-testid={`lock-${colorKey}`}
  aria-label={isLocked ? 'Unlock color' : 'Lock color'}
  className="text-gray-400 hover:text-white transition-all duration-200 cursor-pointer opacity-100 md:opacity-0 group-hover:opacity-100"
>
  {isLocked ? (
    <LockClosedIcon className={sizeClass} />
  ) : (
    <LockOpenIcon className={sizeClass} />
  )}
</button>

  );
};