// src/features/Toolbar/components/ui/ToolbarDropdown.tsx
import { useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

interface ToolbarDropdownOption {
  value: string;
  label: string;
}

interface ToolbarDropdownProps {
  value: string;
  options: ToolbarDropdownOption[];
  onChange: (value: string) => void;
  className?: string;
}

export const ToolbarDropdown = ({
  value,
  options,
  onChange,
  className = "",
}: ToolbarDropdownProps) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node))
        setOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  const selected = options.find((o) => o.value === value);

  return (
    <div ref={ref} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="flex h-full w-full items-center justify-center gap-1 rounded-[4px] bg-white/5 font-mono text-[10px] font-semibold text-white/80 transition-colors hover:bg-white/10"
      >
        <ChevronDownIcon
          className={`h-3 w-3 shrink-0 text-white transition-transform duration-150 ${open ? "rotate-180" : ""}`}
        />
        <span>{selected?.label ?? value}</span>
      </button>

      {open && (
        <div
          role="listbox"
          className="absolute left-0 top-[calc(100%+6px)] z-10 min-w-full overflow-hidden rounded-[10px] border border-white/10 bg-[#1f1f1f] p-1 shadow-xl"
        >
          {options.map((opt) => (
            <button
              key={opt.value}
              type="button"
              role="option"
              aria-selected={opt.value === value}
              onClick={() => {
                onChange(opt.value);
                setOpen(false);
              }}
              className={`block w-full whitespace-nowrap rounded-[6px] px-2.5 py-1.5 text-left font-mono text-[10px] transition-colors ${
                opt.value === value
                  ? "bg-white text-black"
                  : "text-white/70 hover:bg-white/10 hover:text-white"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
