// src/features/Toolbar/components/ColorPicker/ColorInputButton/LockButton.tsx
import { LockClosedIcon, LockOpenIcon } from '@heroicons/react/24/outline';

interface LockButtonProps {
  isLocked: boolean;
  onToggle: () => void;
}

export const LockButton = ({ isLocked, onToggle }: LockButtonProps) => {
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        onToggle();
      }}
      className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onToggle();
        }
      }}
    >
      {isLocked ? (
        <LockClosedIcon className="w-3.5 h-3.5" />
      ) : (
        <LockOpenIcon className="w-3.5 h-3.5" />
      )}
    </div>
  );
};