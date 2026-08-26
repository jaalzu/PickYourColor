// src/features/Toolbar/components/ui/FontSearchPickerModal.tsx
import * as Popover from "@radix-ui/react-popover";
import { useState } from "react";
import {
  ArrowPathIcon,
  ArrowTopRightOnSquareIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { CheckIcon } from "@heroicons/react/24/outline";
import { Tooltip } from "../../../../components/ui/Tooltip";
import { useGoogleFontsList } from "../../hooks/useGoogleFontsList";

interface FontSearchPickerModalProps {
  icon: React.ReactNode;
  tooltip: string;
  groupLabel: string;
  value: string;
  defaultValue: string;
  onChange: (family: string) => void;
  excludedFamilies?: string[];
}

export const FontSearchPickerModal = ({
  icon,
  tooltip,
  groupLabel,
  value,
  defaultValue,
  onChange,
  excludedFamilies = [],
}: FontSearchPickerModalProps) => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const { fonts, loading, failed, isPopularDefault } =
    useGoogleFontsList(query);

  const results = fonts.filter((f) => !excludedFamilies.includes(f.family));

  const handleReset = () => {
    onChange(defaultValue);
    setQuery("");
  };

  return (
    <Popover.Root
      open={open}
      onOpenChange={(o) => {
        setOpen(o);
        if (!o) setQuery("");
      }}
    >
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
          <div className="w-64 rounded-[10px] bg-[#1f1f1f] p-1.5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08),0_8px_24px_rgba(0,0,0,0.35)]">
            {/* Header: label + reset */}
            <div className="flex items-center justify-between px-1 pb-1.5 pt-1">
              <span className="font-mono text-[9px] uppercase tracking-wider text-white/40">
                {groupLabel}
              </span>
              <button
                onClick={handleReset}
                className="flex items-center gap-1 rounded px-1.5 py-0.5 font-mono text-[9px] text-white/40 transition-colors hover:bg-white/10 hover:text-white"
                aria-label={`Reset ${groupLabel} to default`}
              >
                <ArrowPathIcon className="h-2.5 w-2.5" />
                Reset
              </button>
            </div>

            {/* Buscador */}
            <div className="mb-1.5 flex items-center gap-1.5 rounded-md bg-white/5 px-2 py-1.5">
              <MagnifyingGlassIcon className="h-3.5 w-3.5 shrink-0 text-white/40" />
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ingresa el nombre de la fuente (Google)"
                className="min-w-0 flex-1 bg-transparent font-mono text-[11px] text-white outline-none placeholder:text-white/30"
              />
            </div>

            <div className="max-h-[280px] overflow-y-auto scrollbar-none">
              {isPopularDefault &&
                !loading &&
                !failed &&
                results.length > 0 && (
                  <div className="px-2 pb-1 pt-0.5 font-mono text-[8px] uppercase tracking-wider text-white/30">
                    Más populares
                  </div>
                )}

              {loading && (
                <div className="px-2 py-3 text-center font-mono text-[10px] text-white/30">
                  Cargando fuentes…
                </div>
              )}

              {failed && !loading && (
                <div className="px-2 py-3 text-center font-mono text-[10px] leading-relaxed text-red-400/80">
                  No se pudo cargar la lista de Google Fonts.
                  <br />
                  Revisá la consola y tu API key.
                </div>
              )}

              {!loading &&
                !failed &&
                results.map((f) => (
                  <button
                    key={f.family}
                    onClick={() => {
                      onChange(f.family);
                      setOpen(false);
                    }}
                    className={`flex w-full items-center justify-between rounded-[6px] px-2.5 py-1.5 text-left font-mono text-[11px] transition-colors ${
                      f.family === value
                        ? "bg-white text-black"
                        : "text-white/70 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {f.family}
                    {f.family === value && (
                      <CheckIcon className="h-3.5 w-3.5" />
                    )}
                  </button>
                ))}

              {!loading && !failed && query.trim() && results.length === 0 && (
                <div className="px-2 py-3 text-center font-mono text-[10px] text-white/30">
                  No se encontraron fuentes
                </div>
              )}
            </div>

            <a
              href={`https://fonts.google.com/specimen/${encodeURIComponent(value)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 flex items-center justify-center gap-1 rounded-md border-t border-white/10 px-2 py-1.5 font-mono text-[9px] text-white/40 transition-colors hover:text-white"
            >
              Ver "{value}" en Google Fonts
              <ArrowTopRightOnSquareIcon className="h-2.5 w-2.5" />
            </a>
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};
