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

  const sizeClass = "w-[18px] h-[18px] md:w-3.5 md:h-3.5";

  // Función unificada para manejar la acción y liberar el foco
  const handleToggle = (e: React.MouseEvent | React.KeyboardEvent) => {
    e.stopPropagation();

    // Si es teclado y es "Espacio", prevenimos el scroll por defecto
    if ("key" in e && e.key === " ") {
      e.preventDefault();
    }

    toggleLock(colorKey);

    // CRUCIAL: Quitamos el foco del botón para que el "Espacio"
    // vuelva a activar el randomize global en la siguiente pulsación.
    (e.currentTarget as HTMLElement).blur();
  };

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={handleToggle}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          handleToggle(e);
        }
      }}
      aria-pressed={isLocked}
      data-testid={`lock-${colorKey}`}
      aria-label={isLocked ? "Unlock color" : "Lock color"}
      className="text-gray-400 hover:text-white transition-all duration-200 cursor-pointer opacity-100 md:opacity-0 group-hover:opacity-100 outline-none"
    >
      {isLocked ? (
        <LockClosedIcon className={sizeClass} />
      ) : (
        <LockOpenIcon className={sizeClass} />
      )}
    </div>
  );
};
