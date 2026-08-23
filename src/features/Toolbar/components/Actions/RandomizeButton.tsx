// src/features/Toolbar/components/Actions/RandomizeButton.tsx
import DiceIcon from '../../../../assets/features/dice.svg?react';
import { useColorStore } from '../../../../store/useColorStore';
import { Tooltip } from '../../../../components/ui/Tooltip';
import { useToolbarTextContent } from '../../hooks/useToolbarTextContent';

export const RandomizeButton = ({ className = "" }: { className?: string }) => {
  const randomize = useColorStore((state) => state.randomizeColors);
  const t = useToolbarTextContent().randomize;

  return (
        <Tooltip content={t.tooltip}>
    <button
       
      className={`flex flex-col items-center justify-center gap-1 px-5 h-full hover:bg-white/5 transition-colors ${className}`}
      onClick={randomize}
      aria-label={t.aria}
    >
      <DiceIcon className="w-6 h-6 text-white" />
     <span className="font-mono text-[16px] md:text-[12.5px] text-white">
  {t.label}
</span>
    </button>
        </Tooltip>
  );
};