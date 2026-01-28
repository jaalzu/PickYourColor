// src/features/Toolbar/components/ColorPicker/ColorInputButton/ColorInputButton.tsx
import { useState } from 'react';
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
  onClick: () => void;
}

export const ColorInputButton = ({
  colorKey,
  label,
  color,
  isSelected,
  onClick,
}: ColorInputButtonProps) => {
  const [isLocked, setIsLocked] = useState(false);
  const accessibilityLevel = useColorAccessibility(colorKey);

  return (
    <button
      onClick={onClick}
      className={`
        flex items-center gap-2 lg:gap-4 px-2 lg:px-4 h-full transition-colors w-full
        ${isSelected ? 'bg-blue-500/20' : 'hover:bg-white/5'}
      `}
    >
      <ColorCircle color={color} />
      
      <div className="flex flex-col items-start gap-0.5 lg:gap-1 flex-1 min-w-0">
        <span className="text-[10px] lg:text-xs font-medium text-white uppercase truncate">
          {label}
        </span>
        <div className="flex items-center gap-2 lg:gap-4">
          <LockButton isLocked={isLocked} onToggle={() => setIsLocked(!isLocked)} />
          <AccessibilityBadge level={accessibilityLevel} />
        </div>
      </div>
    </button>
  );
};