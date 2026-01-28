// src/features/Toolbar/components/ColorPicker/ColorInputButton/LockButton.tsx
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
      className="text-xs text-gray-400 hover:text-white transition"
    >
      {isLocked ? '🔒' : '🔓'}
    </button>
  );
};