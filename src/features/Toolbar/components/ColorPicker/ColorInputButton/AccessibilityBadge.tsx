// src/features/Toolbar/components/ColorPicker/ColorInputButton/AccessibilityBadge.tsx
import type { ContrastLevel } from '../../../utils/contrastChecker';

interface AccessibilityBadgeProps {
  level: ContrastLevel;
}

export const AccessibilityBadge = ({ level }: AccessibilityBadgeProps) => {
  const config = {
    AAA: { icon: '✓', label: 'AAA', color: 'text-green-500' },
    AA: { icon: '−', label: 'AA', color: 'text-yellow-500' },
    Fail: { icon: '✕', label: 'Fail', color: 'text-red-500' },
  };

  const { icon, label, color } = config[level];

  return (
    <div className="relative group">
      <span className={`text-xs ${color}`}>{icon}</span>
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap">
        {label}
      </div>
    </div>
  );
};