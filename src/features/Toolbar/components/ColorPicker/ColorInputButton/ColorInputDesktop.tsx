// src/features/Toolbar/components/ColorPicker/ColorInputButton/ColorInputDesktop.tsx
import { useState, useRef } from 'react';
import { ColorCircle } from './ColorCircle';
import { LockButton } from './LockButton';
// import { useColorAccessibility } from '../../../hooks/useColorAccessibility';
import type { ColorKey } from '../../../../../types';
// import { AccessibilityBadge } from './AccessibilityBadge';

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
  const [isHovered, setIsHovered] = useState(false);
  // const accessibilityLevel = useColorAccessibility(colorKey);
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
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group flex flex-col items-center w-full h-full px-2 py-2.5 gap-1.5 transition-all duration-200"
      style={{
        backgroundColor: isHovered ? `${color}18` : 'transparent',
      }}
    >
      <span className="text-[12.5px] font-medium text-white tracking-wider">
        {label}
      </span>

      <ColorCircle color={color}/>
      
      <div className="flex w-full items-center justify-between px-0.5">
        <LockButton colorKey={colorKey} />
        
        {/* <AccessibilityBadge level={accessibilityLevel}/> */}
      </div>
    </button>
  );
};