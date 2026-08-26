// src/features/Toolbar/components/ui/ToolbarPickerModal.tsx
import * as Popover from "@radix-ui/react-popover";
import { useState, type ReactNode } from "react";
import { CheckIcon } from "@heroicons/react/24/outline";
import { Tooltip } from "../../../../components/ui/Tooltip";

interface ToolbarPickerOption {
  key: string;
  label: string;
}

interface ToolbarPickerModalProps {
  icon: ReactNode;
  tooltip: string;
  groupLabel: string;
  value: string;
  options: ToolbarPickerOption[];
  onChange: (value: string) => void;
}

export const ToolbarPickerModal = ({
  icon,
  tooltip,
  groupLabel,
  value,
  options,
  onChange,
}: ToolbarPickerModalProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Tooltip content={tooltip}>
        <Popover.Trigger asChild>
          <button
            aria-label={tooltip}
            className="flex w-full items-center justify-center gap-0.5 rounded-md py-2 text-white/90 transition-colors hover:bg-white/10 hover:text-white active:bg-white/10"
          >
            <span className="flex h-6 w-6 items-center justify-center [&>svg]:h-6 [&>svg]:w-6">
              {icon}
            </span>
          </button>
        </Popover.Trigger>
      </Tooltip>

      <Popover.Portal>
        <Popover.Content
          side="right"
          sideOffset={16}
          align="start"
          collisionPadding={12}
          className="z-60 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95"
        >
          <div className="max-h-[320px] w-56 overflow-y-auto rounded-[10px] bg-[#1f1f1f] p-1.5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08),0_8px_24px_rgba(0,0,0,0.35)] scrollbar-none">
            <div className="px-2 pb-1.5 pt-1 font-mono text-[9px] uppercase tracking-wider text-white/40">
              {groupLabel}
            </div>
            {options.map((opt) => (
              <button
                key={opt.key}
                onClick={() => {
                  onChange(opt.key);
                  setOpen(false);
                }}
                className={`flex w-full items-center justify-between rounded-[6px] px-2.5 py-1.5 text-left font-mono text-[11px] transition-colors ${
                  opt.key === value
                    ? "bg-white text-black"
                    : "text-white/70 hover:bg-white/10 hover:text-white"
                }`}
              >
                {opt.label}
                {opt.key === value && <CheckIcon className="h-3.5 w-3.5" />}
              </button>
            ))}
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};
