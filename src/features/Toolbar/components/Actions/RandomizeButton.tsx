// src/features/Toolbar/components/Actions/RandomizeButton.tsx
import { Squares2X2Icon } from '@heroicons/react/24/outline';
import { useColorStore } from '../../../../store/useColorStore';
import { Tooltip } from '../../../../components/ui/Tooltip';

export const RandomizeButton = ({ className = "" }: { className?: string }) => {
  const randomize = useColorStore((state) => state.randomizeColors);

  return (
        <Tooltip content="Generate random colors (Space)">
    <button
      aria-label="Randomize all colors" 
      className={`flex flex-col items-center justify-center gap-1 px-5 h-full hover:bg-white/5 transition-colors ${className}`}
      onClick={randomize}
    >
      <Squares2X2Icon className="w-6 h-6 text-white" />
      <span className="font-mono text-[16px] md:text-[12.5px] text-white ">
        Aleatorio
      </span>
    </button>
        </Tooltip>
  );
};