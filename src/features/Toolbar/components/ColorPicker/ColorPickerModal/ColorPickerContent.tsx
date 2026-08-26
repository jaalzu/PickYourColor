// src/features/Toolbar/components/ColorPicker/ColorPickerModal/ColorPickerContent.tsx
import { useEffect, useState } from "react";
import { HexAlphaColorPicker } from "react-colorful";
import { ClipboardDocumentIcon, CheckIcon } from "@heroicons/react/24/outline";
import tinycolor from "tinycolor2";
import { ColorCircle } from "../ColorInputButton/ColorCircle";
import { LockButton } from "../ColorInputButton/LockButton";
import { ToolbarDropdown } from "../../ui/ToolbarDropdown";
import { ContrastBadge } from "../../ui/ContrastBadge";
import { useColorStore } from "../../../../../store/useColorStore";
import type { ColorKey } from "../../../../../types";
import "./colorPicker.css";

interface ColorPickerContentProps {
  colorKey: ColorKey;
  label: string;
  currentColor: string;
  formattedColor: string;
  format: "HEX" | "RGB";
  onColorChange: (color: string) => void;
  onCopy: () => void;
  onToggleFormat: () => void;
  onClose: () => void;
}

const FORMAT_OPTIONS = [
  { value: "HEX", label: "HEX" },
  { value: "RGB", label: "RGB" },
];

export const ColorPickerContent = ({
  colorKey,
  label,
  currentColor,
  formattedColor,
  format,
  onColorChange,
  onCopy,
  onToggleFormat,
}: ColorPickerContentProps) => {
  const [copied, setCopied] = useState(false);
  const [alphaDraft, setAlphaDraft] = useState(
    String(Math.round(tinycolor(currentColor).getAlpha() * 100)),
  );

  // Solo el par text/background tiene un "contra qué" claro para WCAG.
  // Para primary/secondary/accent no mostramos el badge — no hay un
  // fondo de referencia obvio contra el cual evaluarlos.
  const colors = useColorStore((state) => state.colors);
  const showContrast = colorKey === "text" || colorKey === "background";
  const foreground = colorKey === "text" ? currentColor : colors.text;
  const background =
    colorKey === "background" ? currentColor : colors.background;

  useEffect(() => {
    setAlphaDraft(String(Math.round(tinycolor(currentColor).getAlpha() * 100)));
  }, [currentColor]);

  useEffect(() => {
    if (!copied) return;
    const timeout = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timeout);
  }, [copied]);

  const handleCopy = () => {
    onCopy();
    setCopied(true);
  };

  const commitAlpha = (raw: string) => {
    const parsed = Math.max(
      0,
      Math.min(100, Number(raw.replace(/[^0-9]/g, "")) || 0),
    );
    const next = tinycolor(currentColor)
      .setAlpha(parsed / 100)
      .toHex8String();
    onColorChange(next);
    setAlphaDraft(String(parsed));
  };

  return (
    <div
      className="toolbar-color-picker w-76 rounded-lg border border-white/10 bg-[#2c2c2c] p-4 shadow-md"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Header: preview + label + lock */}
      <div className="flex items-center justify-between pb-3">
        <div className="flex items-center gap-2">
          <ColorCircle color={currentColor} />
          <span className="font-mono text-[13px] uppercase  text-white/100">
            {label}
          </span>
        </div>
        <LockButton colorKey={colorKey} />
      </div>

      {/* Saturación + Hue + Alpha */}
      <HexAlphaColorPicker
        color={currentColor}
        onChange={onColorChange}
        style={{ width: "100%", height: 200 }}
      />

      {/* +2px de separación respecto a los sliders de arriba */}
      <div className="mt-[16px] flex items-center gap-2">
        {/* Dropdown HEX/RGB: 31px alto x 52px ancho */}
        <ToolbarDropdown
          value={format}
          options={FORMAT_OPTIONS}
          onChange={onToggleFormat}
          className="h-[35px] w-[51px] shrink-0"
        />

        {/* Valor + opacidad editable: +1px alto (30px), separados por línea divisora */}
        <div className="flex h-[35px] flex-1 items-stretch overflow-hidden rounded-[4px] bg-white/5">
          <input
            type="text"
            value={formattedColor}
            onChange={(e) => onColorChange(e.target.value)}
            spellCheck={false}
            readOnly={format === "RGB"}
            className="min-w-0 flex-1 bg-transparent px-2.5 font-mono text-sm text-white outline-none transition-colors focus:bg-white/10"
          />
          <div className="w-px shrink-0 bg-white/10" />
          <div className="flex w-13.5 shrink-0 items-center">
            <input
              type="text"
              inputMode="numeric"
              value={alphaDraft}
              onChange={(e) =>
                setAlphaDraft(e.target.value.replace(/[^0-9]/g, ""))
              }
              onBlur={(e) => commitAlpha(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && commitAlpha(alphaDraft)}
              aria-label="Opacity"
              className="w-full bg-transparent px-1 text-right font-mono text-[12px] text-white outline-none focus:text-white"
            />
            <span className="pr-2 font-mono text-[12px] text-white/70">%</span>
          </div>
        </div>

        <button
          onClick={handleCopy}
          aria-label={`Copy ${format}`}
          className="shrink-0 rounded-[4px] p-2 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
        >
          {copied ? (
            <CheckIcon className="h-4 w-4 text-green-500" />
          ) : (
            <ClipboardDocumentIcon className="h-4 w-4" />
          )}
        </button>
      </div>

      {/* Contraste WCAG: al final del todo, evaluando siempre el par text/background */}
      {showContrast && (
        <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-3">
          <span className="font-mono text-[10px] uppercase tracking-wider text-white/40">
            Text / Background
          </span>
          <ContrastBadge foreground={foreground} background={background} />
        </div>
      )}
    </div>
  );
};
