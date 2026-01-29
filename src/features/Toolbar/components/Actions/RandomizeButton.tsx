// src/features/Toolbar/components/Actions/RandomizeButton.tsx
import { Squares2X2Icon } from '@heroicons/react/24/outline';

export const RandomizeButton = () => {
  return (
    <button
      className="flex flex-col items-center justify-center gap-1 px-5 h-full hover:bg-white/5 transition-colors"
      onClick={() => {/* TODO: lógica */}}
    >
      <Squares2X2Icon className="w-6 h-6 text-white" />
      <span className="text-[12px] text-white uppercase">Aleatorio</span>
    </button>
  );
};