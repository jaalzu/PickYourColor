// src/features/Toolbar/components/Export/ExportModal.tsx
import * as Popover from "@radix-ui/react-popover";
import {
  XMarkIcon,
  ClipboardDocumentIcon,
  ClipboardDocumentCheckIcon,
} from "@heroicons/react/24/outline";
import { ExportOption } from "./ExportOption";
import { ToolbarPill } from "../ui/ToolbarPill";
import { useExportLogic } from "./useExportLogic";

interface ExportModalProps {
  open: boolean;
  onClose: () => void;
  triggerElement?: HTMLElement | null;
}

export const ExportModal = ({
  open,
  onClose,
  triggerElement,
}: ExportModalProps) => {
  const {
    selectedFormat,
    setSelectedFormat,
    colorFormat,
    toggleColorFormat,
    exportCode,
    copied,
    handleCopy,
  } = useExportLogic();

  return (
    <Popover.Root open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
      {triggerElement && (
        <Popover.Anchor virtualRef={{ current: triggerElement }} />
      )}
      <Popover.Portal>
        <Popover.Content
          side="right"
          sideOffset={16}
          align="start"
          collisionPadding={12}
          className="z-60 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="w-[95vw] max-w-[420px] rounded-lg border border-white/10 bg-[#2c2c2c] p-4 shadow-xl">
            <div className="mb-3 flex items-center justify-between">
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-white/60">
                Export Palette
              </span>
              <Popover.Close asChild>
                <button
                  aria-label="Close"
                  className="rounded-md p-1 text-white/50 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <XMarkIcon className="w-4 h-4" />
                </button>
              </Popover.Close>
            </div>

            {/* Selector de formato: fijo, no se mueve ni re-anima al cambiar */}
            <div className="mb-3 flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
              <ExportOption
                label="CSS"
                isSelected={selectedFormat === "css"}
                onClick={() => setSelectedFormat("css")}
              />
              <ExportOption
                label="SCSS"
                isSelected={selectedFormat === "scss"}
                onClick={() => setSelectedFormat("scss")}
              />
              <ExportOption
                label="TAILWIND"
                isSelected={selectedFormat === "tailwind"}
                onClick={() => setSelectedFormat("tailwind")}
              />
            </div>

            <div className="mb-3 flex items-center gap-1.5">
              {(["HEX", "RGB"] as const).map((f) => (
                <ToolbarPill
                  key={f}
                  label={f}
                  isSelected={colorFormat === f}
                  onClick={toggleColorFormat}
                  size="sm"
                />
              ))}
            </div>

            {/* min-h fijo: el salto que veías era el <pre> cambiando de alto según el código.
                Con altura mínima estable, cambiar de CSS a SCSS a Tailwind ya no "empuja" nada. */}
            <div className="relative">
              <pre className="min-h-[240px] max-h-[60vh] overflow-x-auto rounded-md border border-white/10 bg-black/30 p-3 font-mono text-[12px] text-white/70 md:max-h-64 scrollbar-none">
                {exportCode}
              </pre>

              <button
                onClick={handleCopy}
                aria-label="Copy to clipboard"
                className="absolute right-2 top-2 rounded-md p-1.5 text-white/60 transition-colors hover:bg-white/10 hover:text-white"
              >
                {copied ? (
                  <ClipboardDocumentCheckIcon className="w-4 h-4 text-green-500" />
                ) : (
                  <ClipboardDocumentIcon className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};
