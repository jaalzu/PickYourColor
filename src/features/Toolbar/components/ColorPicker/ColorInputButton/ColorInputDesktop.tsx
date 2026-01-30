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
  const [isHovered, setIsHovered] = useState(false);
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
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="
        flex flex-col items-center 
        w-full h-full 
        px-2 py-2 gap-1.5
        transition-all duration-200
      "
      style={{
        backgroundColor: isHovered ? `${color}15` : 'transparent', // 15 = ~8% opacity
      }}
    >
      {/* 1. Texto primero */}
      <span className="text-[11px] font-bold text-white uppercase truncate">
        {label}
      </span>
      
      {/* 2. Color debajo usando todo el largo */}
      <ColorCircle color={color}/>
      
      {/* 3. Candado y Accesibilidad con justify-between */}
      <div className="flex w-full items-center justify-between px-0.5">
        <LockButton isLocked={isLocked} onToggle={() => setIsLocked(!isLocked)} />
        <AccessibilityBadge level={accessibilityLevel} />
      </div>
    </button>
  );
};