// src/features/Toolbar/components/Actions/UndoRedoButtons.tsx
import { ArrowUturnLeftIcon, ArrowUturnRightIcon } from '@heroicons/react/24/outline';

interface UndoRedoButtonsProps {
  className?: string;
}

export const UndoRedoButtons = ({ className = "" }: UndoRedoButtonsProps) => {
  return (
    <div className={`flex items-center h-full ${className}`}>
      <button
        className="flex flex-col items-center justify-center gap-1 px-3 h-full hover:bg-white/5 transition-colors flex-1"
        onClick={() => {/* TODO: undo */}}
      >
        <ArrowUturnLeftIcon className="w-6 h-6 text-white" />
        <span className="text-[12px] text-white uppercase">Undo</span>
      </button>
      
      <div className="w-px h-10 bg-gray-600" />
      
      <button
        className="flex flex-col items-center justify-center gap-1 px-3 h-full hover:bg-white/5 transition-colors flex-1"
        onClick={() => {/* TODO: redo */}}
      >
        <ArrowUturnRightIcon className="w-6 h-6 text-white" />
        <span className="text-[12px] text-white uppercase">Redo</span>
      </button>
    </div>
  );
};