// src/features/Toolbar/components/ColorPicker/ColorInputButton/ColorInputDesktop.tsx
import { useState, useRef } from 'react';
import { ColorCircle } from './ColorCircle';
import { AccessibilityBadge } from './AccessibilityBadge';
import { LockButton } from './LockButton';
import { useColorAccessibility } from '../../../hooks/useColorAccessibility';
import type { ColorKey } from '../../../../../types';

interface ColorInputButtonProps {
  colorKey: ColorKey;
  label: string;
  color: string;
  isSelected: boolean;
  onClick: (buttonElement: HTMLElement) => void; 
}

export const ColorInputButton = ({
  colorKey,
  label,
  color,
  onClick,
}: ColorInputButtonProps) => {
  const [isLocked, setIsLocked] = useState(false);
  const accessibilityLevel = useColorAccessibility(colorKey);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    if (buttonRef.current) {
      onClick(buttonRef.current);
    }
  };

  return (
    <button
      ref={buttonRef}
      onClick={handleClick}
      className="
        flex items-center gap-1.5 lg:gap-4
        px-3 lg:px-4 h-full w-full
        transition-colors
        hover:bg-white/5
        "
    >
      <ColorCircle color={color} />
      
      <div className="flex flex-col items-center gap-2 lg:gap-2 flex-1 min-w-0">
        <span className="mt-2 text-[13.5px] font-medium text-white uppercase truncate">
          {label}
        </span>
        <div className="flex w-full items-center justify-between">
          <LockButton isLocked={isLocked} onToggle={() => setIsLocked(!isLocked)} />
          <AccessibilityBadge level={accessibilityLevel} />
        </div>
      </div>
    </button>
  );
};