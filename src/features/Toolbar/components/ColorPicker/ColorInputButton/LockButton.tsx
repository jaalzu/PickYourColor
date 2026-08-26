// src/features/Toolbar/components/ColorPicker/ColorInputButton/LockButton.tsx
import { LockClosedIcon, LockOpenIcon } from "@heroicons/react/24/outline";
import { useColorStore } from "../../../../../store/useColorStore";
import type { ColorKey } from "../../../../../types";

interface LockButtonProps {
  colorKey: ColorKey;
}

export const LockButton = ({ colorKey }: LockButtonProps) => {
  const isLocked = useColorStore((state) =>
    state.lockedColors.includes(colorKey),
  );
  const toggleLock = useColorStore((state) => state.toggleLock);

  const handleToggle = (e: React.MouseEvent | React.KeyboardEvent) => {
    e.stopPropagation();
    if ("key" in e && e.key === " ") e.preventDefault();
    toggleLock(colorKey);
    (e.currentTarget as HTMLElement).blur();
  };

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={handleToggle}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && handleToggle(e)}
      aria-pressed={isLocked}
      data-testid={`lock-${colorKey}`}
      aria-label={isLocked ? "Unlock color" : "Lock color"}
      className="rounded-md p-2 text-gray-400 outline-none transition-colors hover:bg-white/10 hover:text-white active:bg-white/10 cursor-pointer"
    >
      {isLocked ? (
        <LockClosedIcon className="w-4 h-4" />
      ) : (
        <LockOpenIcon className="w-4 h-4" />
      )}
    </div>
  );
};
