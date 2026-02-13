// src/features/Toolbar/components/Actions/UndoRedoButtons.tsx
import { ArrowUturnLeftIcon, ArrowUturnRightIcon } from '@heroicons/react/24/outline';
import { useColorStore } from '../../../../store/useColorStore';
import { Tooltip } from '../../../../components/ui/Tooltip';
import { useToolbarTextContent } from '../../hooks/useToolbarTextContent';

interface UndoRedoButtonsProps {
  className?: string;
}
export const UndoRedoButtons = ({ className = "" }: UndoRedoButtonsProps) => {
  const { undo, redo, past, future } = useColorStore();
  const t = useToolbarTextContent().undoRedo;
return (
  <Tooltip content={t.tooltip}>
    <div className={`flex items-center h-full ${className}`}>

      <button
        className="flex flex-col items-center justify-center gap-1 px-3 h-full hover:bg-white/5 transition-colors flex-1 disabled:opacity-25 disabled:cursor-not-allowed"
        onClick={undo}
        disabled={past.length === 0}
        aria-label={t.undoAria}
      >
        <ArrowUturnLeftIcon className="w-6 h-6 text-white" />
        <span className="text-[16px] md:text-[12.5px] text-white font-mono">{t.undoLabel}</span>
      </button>

      <div className="w-px self-stretch md:self-auto md:h-10 bg-white/20" />

      <button
        className="flex flex-col items-center justify-center gap-1 px-3 h-full hover:bg-white/5 transition-colors flex-1 disabled:opacity-25 disabled:cursor-not-allowed"
        onClick={redo}
        disabled={future.length === 0}
        aria-label={t.redoAria}
      >
        <ArrowUturnRightIcon className="w-6 h-6 text-white" />
        <span className="font-mono text-[16px] md:text-[12.5px] text-white">{t.redoLabel}</span>
      </button>

    </div>
  </Tooltip>
);
};