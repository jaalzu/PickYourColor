// src/features/Toolbar/components/ColorPicker/ColorInputButton/ColorInputMobile.tsx
import { LockButton } from './LockButton';
import type { ColorKey } from '../../../../../types';
// import { useColorAccessibility } from '../../../hooks/useColorAccessibility';
// import { AccessibilityBadge } from './AccessibilityBadge';

interface ColorInputMobileProps {
  colorKey: ColorKey;
  label: string;
  color: string;
  onClick: () => void;
}

export const ColorInputMobile = ({ colorKey, label, color, onClick }: ColorInputMobileProps) => {
  // Eliminamos el useState de isLocked
  // const accessibilityLevel = useColorAccessibility(colorKey);

  return (
    <div className="flex flex-col w-full h-full">
      <button
        onClick={onClick}
        className="group relative flex flex-col items-center justify-between px-3 py-1 h-25 w-full"
        style={{ backgroundColor: color }}
      >
        <div className="flex-1 flex items-center justify-center">
          <span className="text-[18px] font-medium text-white tracking-wider">
            {label}
          </span>
        </div>

        <div className="flex w-full items-center justify-between">
          <div onClick={(e) => e.stopPropagation()}>
            {/* Solo pasamos colorKey, el store maneja el resto */}
            <LockButton colorKey={colorKey} />
          </div>
          
          {/* <AccessibilityBadge level={accessibilityLevel} /> */}
        </div>
      </button>
    </div>
  );
};