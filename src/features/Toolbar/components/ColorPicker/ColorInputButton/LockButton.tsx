// src/features/Toolbar/components/ColorPicker/ColorInputButton/LockButton.tsx
import { LockClosedIcon, LockOpenIcon } from '@heroicons/react/24/outline';

interface LockButtonProps {
  isLocked: boolean;
  onToggle: () => void;
}

export const LockButton = ({ isLocked, onToggle }: LockButtonProps) => {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onToggle();
      }}
      className="text-xs text-gray-200 hover:text-white/50 transition"
    >
       {isLocked ? (
        <LockClosedIcon className="w-3.5 h-3.5" />
      ) : (
        <LockOpenIcon className="w-3.5 h-3.5" />
      )}
    </button>
  );
};