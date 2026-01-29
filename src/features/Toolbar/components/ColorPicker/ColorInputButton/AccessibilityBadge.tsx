import { CheckIcon, MinusCircleIcon, XCircleIcon } from '@heroicons/react/24/outline';
import type { ContrastLevel } from '../../../utils/contrastChecker';

interface AccessibilityBadgeProps {
  level: ContrastLevel;
}

export const AccessibilityBadge = ({ level }: AccessibilityBadgeProps) => {
  const config = {
    AAA: { 
      Icon: CheckIcon, 
      label: 'AAA', 
      color: 'text-green-400' 
    },
    AA: { 
      Icon: MinusCircleIcon, 
      label: 'AA', 
      color: 'text-yellow-400' 
    },
    Fail: { 
      Icon: XCircleIcon, 
      label: 'Fail', 
      color: 'text-red-600' 
    },
  };

  const { Icon, label, color } = config[level];

  return (
    <div className="relative group">
      <Icon className={`w-4 h-4 ${color}`} />
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 px-2 py-1 bg-gray-900 text-white text-[13px]  opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap">
        {label}
      </div>
    </div>
  );
};