// src/features/Toolbar/components/ColorPicker/ColorInputButton/ColorInputMobile.tsx
import { useState } from 'react';
import { AccessibilityBadge } from './AccessibilityBadge';
import { LockButton } from './LockButton';
import { useColorAccessibility } from '../../../hooks/useColorAccessibility';
import type { ColorKey } from '../../../../../types';

interface ColorInputMobileProps {
  colorKey: ColorKey;
  label: string;
  color: string;
  onClick: () => void;
}

export const ColorInputMobile = ({ colorKey, label, color, onClick }: ColorInputMobileProps) => {
  const [isLocked, setIsLocked] = useState(false);
  const accessibilityLevel = useColorAccessibility(colorKey);

  return (
    <div className="flex flex-col w-full h-full ">
      <button
  onClick={onClick}
  className="relative flex flex-col items-center justify-between px-3 py-1 h-25 w-full "
  style={{ backgroundColor: color }}
>
  <div className="flex-1 flex items-center justify-center">
    <span className="text-[18px] font-medium text-white  tracking-wider">
      {label}
    </span>
  </div>

  <div className="flex w-full items-center justify-between">
    <div onClick={(e) => e.stopPropagation()}>
      <LockButton 
        isLocked={isLocked} 
        onToggle={() => setIsLocked(!isLocked)} 
      />
    </div>

    <div>
      <AccessibilityBadge level={accessibilityLevel} />
    </div>
  </div>
</button>


    </div>
  );
};