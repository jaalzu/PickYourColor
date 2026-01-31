// src/features/Toolbar/components/Actions/RandomizeButton.tsx
import { Squares2X2Icon } from '@heroicons/react/24/outline';
import { useColorStore } from '../../../../store/useColorStore';

export const RandomizeButton = ({ className = "" }: { className?: string }) => {
  const randomize = useColorStore((state) => state.randomizeColors);

  return (
    <button
      className={`flex flex-col items-center justify-center gap-1 px-5 h-full hover:bg-white/5 transition-colors ${className}`}
      onClick={randomize}
    >
      <Squares2X2Icon className="w-6 h-6 text-white" />
      <span className="text-[12px] text-white tracking-wide uppercase font-bold">
        Aleatorio
      </span>
    </button>
  );
};