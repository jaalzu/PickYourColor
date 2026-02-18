import { useState, useRef } from 'react';
import { ColorCircle } from './ColorCircle';
import { LockButton } from './LockButton';
import { Tooltip } from '../../../../../components/ui/Tooltip';
import type { ColorInputBaseProps } from './ColorInputBase';

interface ColorInputDesktopProps extends ColorInputBaseProps {
  isSelected: boolean;
}

export const ColorInputButton = ({ colorKey, label, color, isSelected, onClick }: ColorInputDesktopProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLButtonElement>(null);

  return (
    <Tooltip content={`${label}: ${color.toUpperCase()}`} side="top">
      <button
        ref={ref}
        onClick={() => ref.current && onClick(ref.current)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label={`Select ${label} color`}
        aria-pressed={isSelected}
        className="group flex flex-col items-center w-full h-full px-2 py-2.5 gap-1.5 transition-all duration-200"
        style={{
          backgroundColor: isSelected ? `${color}40` : isHovered ? `${color}23` : 'transparent',
        }}
      >
        <span className="text-[12.5px] font-medium text-white tracking-wider">{label}</span>
        <ColorCircle color={color} />
        <div className="flex w-full items-center justify-between px-0.5">
          <LockButton colorKey={colorKey} />
        </div>
      </button>
    </Tooltip>
  );
};