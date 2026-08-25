// src/features/Toolbar/components/Actions/UndoRedoButtons.tsx
import {
  ArrowUturnLeftIcon,
  ArrowUturnRightIcon,
} from "@heroicons/react/24/outline";
import { useColorStore } from "../../../../store/useColorStore";
import { Tooltip } from "../../../../components/ui/Tooltip";
import { useToolbarTextContent } from "../../hooks/useToolbarTextContent";
import { ToolbarIconButton } from "../ui/ToolbarIconButton";

interface UndoRedoButtonsProps {
  className?: string;
  showLabel?: boolean;
  variant?: "default" | "grouped";
  // Si se pasan, el componente ignora el historial global del store
  // y usa este historial "local" en su lugar (ej: undo scoped a Typography).
  onUndo?: () => void;
  onRedo?: () => void;
  canUndo?: boolean;
  canRedo?: boolean;
}

export const UndoRedoButtons = ({
  className = "",
  showLabel = true,
  variant = "default",
  onUndo,
  onRedo,
  canUndo,
  canRedo,
}: UndoRedoButtonsProps) => {
  const { undo, redo, past, future } = useColorStore();
  const t = useToolbarTextContent().undoRedo;

  const isScoped = onUndo !== undefined || onRedo !== undefined;
  const handleUndo = onUndo ?? undo;
  const handleRedo = onRedo ?? redo;
  const undoDisabled = isScoped ? !canUndo : past.length === 0;
  const redoDisabled = isScoped ? !canRedo : future.length === 0;

  if (variant === "grouped") {
    return (
      <div
        className={`flex flex-col gap-0.5 p-0.5 rounded-lg bg-white/[0.04] ${className}`}
      >
        <ToolbarIconButton
          icon={<ArrowUturnLeftIcon />}
          label={showLabel ? t.undoLabel : undefined}
          tooltip={t.tooltip}
          ariaLabel={t.undoAria}
          onClick={handleUndo}
          disabled={undoDisabled}
          size="sm"
        />
        <ToolbarIconButton
          icon={<ArrowUturnRightIcon />}
          label={showLabel ? t.redoLabel : undefined}
          tooltip={t.tooltip}
          ariaLabel={t.redoAria}
          onClick={handleRedo}
          disabled={redoDisabled}
          size="sm"
        />
      </div>
    );
  }

  return (
    <Tooltip content={t.tooltip}>
      <div className={`flex flex-col items-center w-full ${className}`}>
        <button
          className="flex flex-col items-center justify-center gap-1 py-2 w-full hover:bg-white/5 transition-colors flex-1 disabled:opacity-25 disabled:cursor-not-allowed"
          onClick={handleUndo}
          disabled={undoDisabled}
          aria-label={t.undoAria}
        >
          <ArrowUturnLeftIcon className="w-5 h-5 text-white" />
          {showLabel && (
            <span className="text-[10px] text-white font-mono">
              {t.undoLabel}
            </span>
          )}
        </button>
        <div className="h-px w-full self-stretch bg-white/20" />
        <button
          className="flex flex-col items-center justify-center gap-1 py-2 w-full hover:bg-white/5 transition-colors flex-1 disabled:opacity-25 disabled:cursor-not-allowed"
          onClick={handleRedo}
          disabled={redoDisabled}
          aria-label={t.redoAria}
        >
          <ArrowUturnRightIcon className="w-5 h-5 text-white" />
          {showLabel && (
            <span className="font-mono text-[10px] text-white">
              {t.redoLabel}
            </span>
          )}
        </button>
      </div>
    </Tooltip>
  );
};
