// src/features/Toolbar/components/Actions/UndoRedoButtons.tsx
import { ArrowUturnLeftIcon, ArrowUturnRightIcon } from '@heroicons/react/24/outline';
import { useColorStore } from '../../../../store/useColorStore';

interface UndoRedoButtonsProps {
  className?: string;
}

export const UndoRedoButtons = ({ className = "" }: UndoRedoButtonsProps) => {
  // Extraemos las acciones y los arrays para controlar el estado visual
  const { undo, redo, past, future } = useColorStore();

  return (
    <div className={`flex items-center h-full ${className}`}>
      <button
        className="flex flex-col items-center justify-center gap-1 px-3 h-full hover:bg-white/5 transition-colors flex-1 disabled:opacity-25 disabled:cursor-not-allowed"
        onClick={undo}
        disabled={past.length === 0}
        title="Deshacer (Ctrl+Z)"
      >
        <ArrowUturnLeftIcon className="w-6 h-6 text-white" />
        <span className="text-[12px] text-white">Undo</span>
      </button>
      
      <div className="w-px h-10 bg-gray-600" />
      
      <button
        className="flex flex-col items-center justify-center gap-1 px-3 h-full hover:bg-white/5 transition-colors flex-1 disabled:opacity-25 disabled:cursor-not-allowed"
        onClick={redo}
        disabled={future.length === 0}
        title="Rehacer (Ctrl+Y)"
      >
        <ArrowUturnRightIcon className="w-6 h-6 text-white" />
        <span className="text-[12px] text-white tracking-wide">Redo</span>
      </button>
    </div>
  );
};