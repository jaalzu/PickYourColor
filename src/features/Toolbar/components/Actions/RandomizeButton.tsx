// src/features/Toolbar/components/Actions/RandomizeButton.tsx
import { Squares2X2Icon } from '@heroicons/react/24/outline';

interface RandomizeButtonProps {
  className?: string;
}

export const RandomizeButton = ({ className = "" }: RandomizeButtonProps) => {
  return (
    <button
      // Tus clases originales + el className para mobile al final
      className={`flex flex-col items-center justify-center gap-1 px-5 h-full hover:bg-white/5 transition-colors ${className}`}
      onClick={() => {/* TODO: lógica */}}
    >
      <Squares2X2Icon className="w-6 h-6 text-white" />
      <span className="text-[12px] text-white tracking-wide">Aleatorio</span>
    </button>
  );
};