// src/features/Toolbar/components/Typography/TypographyHorizontalPanel.tsx
import { CheckIcon, ClipboardIcon } from "@heroicons/react/24/outline";
import DiceIcon from "../../../../assets/features/dice.svg?react";
import { Tooltip } from "../../../../components/ui/Tooltip";
import {
  TYPOGRAPHY_OPTIONS,
  TYPE_SCALE_OPTIONS,
} from "../../../../store/slices/typographySlice";
import type { FontKey, TypographySettings } from "../../../../types";
import { UndoRedoButtons } from "../Actions/UndoRedoButtons";
import { BODY_FONT_OPTIONS } from "../../constants/typographyOptions";
import { useTypographyCopy } from "../../hooks/useTypographyCopy";
import { useToolbarTextContent } from "../../hooks/useToolbarTextContent";

interface TypographyHorizontalPanelProps {
  typography: TypographySettings;
  onBack?: () => void;
  setHeadingFont: (font: FontKey) => void;
  setBodyFont: (font: FontKey) => void;
  setHeadingScale: (scale: number) => void;
  setBodyScale: (scale: number) => void;
  randomizeTypography: () => void;
}

export const TypographyHorizontalPanel = ({
  typography,
  onBack,
  setHeadingFont,
  setBodyFont,
  setHeadingScale,
  setBodyScale,
  randomizeTypography,
}: TypographyHorizontalPanelProps) => {
  const t = useToolbarTextContent().typography;
  const { copied, copyDetails } = useTypographyCopy(typography);
  const fieldClass =
    "flex h-full flex-1 min-w-0 flex-col justify-center gap-1.5 px-3";

  return (
    <div className="flex h-full w-full items-center">
      <label className={fieldClass}>
        <span className="font-mono text-[10px] uppercase text-white/55">
          Heading Font
        </span>
        <select
          className="h-8 rounded-[4px] border border-white/20 bg-[#1f1f34] px-2 font-mono text-xs text-white outline-none focus:border-white/50"
          value={typography.headingFont}
          onChange={(e) => setHeadingFont(e.target.value as FontKey)}
        >
          {TYPOGRAPHY_OPTIONS.map((o) => (
            <option key={o.key} value={o.key}>
              {o.label}
            </option>
          ))}
        </select>
      </label>
      <div className="w-px h-full bg-white/20" />
      <label className={fieldClass}>
        <span className="font-mono text-[10px] uppercase text-white/55">
          Heading Scale
        </span>
        <select
          className="h-8 rounded-[4px] border border-white/20 bg-[#1f1f34] px-2 font-mono text-xs text-white outline-none focus:border-white/50"
          value={typography.headingScale}
          onChange={(e) => setHeadingScale(Number(e.target.value))}
        >
          {TYPE_SCALE_OPTIONS.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </label>
      <div className="w-px h-full bg-white/20" />
      <label className={fieldClass}>
        <span className="font-mono text-[10px] uppercase text-white/55">
          Body Font
        </span>
        <select
          className="h-8 rounded-[4px] border border-white/20 bg-[#1f1f34] px-2 font-mono text-xs text-white outline-none focus:border-white/50"
          value={typography.bodyFont}
          onChange={(e) => setBodyFont(e.target.value as FontKey)}
        >
          {BODY_FONT_OPTIONS.map((o) => (
            <option key={o.key} value={o.key}>
              {o.label}
            </option>
          ))}
        </select>
      </label>
      <div className="w-px h-full bg-white/20" />
      <label className={fieldClass}>
        <span className="font-mono text-[10px] uppercase text-white/55">
          Body Scale
        </span>
        <select
          className="h-8 rounded-[4px] border border-white/20 bg-[#1f1f34] px-2 font-mono text-xs text-white outline-none focus:border-white/50"
          value={typography.bodyScale}
          onChange={(e) => setBodyScale(Number(e.target.value))}
        >
          {TYPE_SCALE_OPTIONS.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </label>
      <div className="w-px h-full bg-white/20" />
      <Tooltip content="Copy typography details">
        <button
          className="h-full px-4 flex items-center justify-center gap-1 hover:bg-white/5 transition-colors"
          onClick={copyDetails}
          aria-label="Copy typography details"
        >
          {copied ? (
            <CheckIcon className="h-5 w-5 text-green-400" />
          ) : (
            <ClipboardIcon className="h-5 w-5 text-white" />
          )}
          <span className="font-mono text-[14px] md:text-[11.5px] text-white">
            {copied ? "Copied" : "Copy"}
          </span>
        </button>
      </Tooltip>
      <div className="w-px h-full bg-white/20" />
      <Tooltip content={t.randomTooltip}>
        <button
          className="h-full px-4 flex items-center justify-center gap-1 hover:bg-white/5 transition-colors"
          onClick={randomizeTypography}
          aria-label={t.randomTooltip}
        >
          <DiceIcon className="h-5 w-5 text-white" />
          <span className="font-mono text-[14px] md:text-[11.5px] text-white">
            {t.randomLabel}
          </span>
        </button>
      </Tooltip>
      <div className="w-px h-full bg-white/20" />
      <UndoRedoButtons />
      {onBack && (
        <>
          <div className="w-px h-full bg-white/20" />
          <button
            onClick={onBack}
            className="h-full px-5 flex items-center justify-center gap-1.5 hover:bg-white/5 transition-colors flex-shrink-0"
            aria-label={t.backAria}
          >
            <span className="font-mono text-[11.5px] font-bold tracking-widest text-white">
              {t.backLabel.toUpperCase()}
            </span>
          </button>
        </>
      )}
    </div>
  );
};
