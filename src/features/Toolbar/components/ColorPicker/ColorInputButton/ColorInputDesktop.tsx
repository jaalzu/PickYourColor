import { useState, useRef } from 'react';
import { ColorCircle } from './ColorCircle';
import { LockButton } from './LockButton';
import type { ColorKey } from '../../../../../types';
import { Tooltip } from '../../../../../components/ui/Tooltip';


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
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    if (buttonRef.current) {
      onClick(buttonRef.current);
    }
  };

  return (
        <Tooltip content={`${label}: ${color.toUpperCase()}`} side="top">

    <button
    
      ref={buttonRef}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label={`Select ${label} color`}
      className="group flex flex-col items-center w-full h-full px-2 py-2.5 gap-1.5 transition-all duration-200"
      style={{
        backgroundColor: isHovered ? `${color}23` : 'transparent',
      }}
    >
      <span className="text-[12.5px]  font-medium text-white tracking-wider">
        {label}
      </span>

      <ColorCircle color={color}/>
      
      <div className="flex w-full items-center justify-between px-0.5">
        <LockButton colorKey={colorKey} />
      </div>
    </button>
        </Tooltip>

  );
};