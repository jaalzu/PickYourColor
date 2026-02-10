// src/features/Toolbar/components/ColorPicker/ColorInputButton/ColorInputMobile.tsx
import { LockButton } from './LockButton';
import type { ColorKey } from '../../../../../types';
// import { useColorAccessibility } from '../../../hooks/useColorAccessibility';
// import { AccessibilityBadge } from './AccessibilityBadge';
import { Tooltip } from '../../../../../components/ui/Tooltip';

interface ColorInputMobileProps {
  colorKey: ColorKey;
  label: string;
  color: string;
  onClick: () => void;
}

export const ColorInputMobile = ({ colorKey, label, color, onClick }: ColorInputMobileProps) => {
 
  // const accessibilityLevel = useColorAccessibility(colorKey);

  return (
        <Tooltip content={`${label}: ${color.toUpperCase()}`} side="top">
    <div className="flex flex-col w-full h-full">
      <div 
  onClick={onClick}
  className="group relative flex flex-col items-center justify-between px-3 py-1 h-25 w-full cursor-pointer"
  style={{backgroundColor: color}}
  role="button"
  tabIndex={0}
  onKeyDown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      onClick();
    }
  }}
>
        <div className="flex-1 flex items-center justify-center">
          <span className="text-[18px] font-medium text-white tracking-wider">
            {label}
          </span>
        </div>

        <div className="flex w-full items-center justify-between">
          <div onClick={(e) => e.stopPropagation()}>
           
            <LockButton colorKey={colorKey} />
          </div>
          
          {/* <AccessibilityBadge level={accessibilityLevel} /> */}
        </div>
      </div>
    </div>
        </Tooltip>

  );
};