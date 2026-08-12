import { useEffect, useState } from 'react';
import { ArrowLeftIcon, ClipboardIcon, CheckIcon, Squares2X2Icon } from '@heroicons/react/24/outline';
import { Tooltip } from '../../../../components/ui/Tooltip';
import { useColorStore } from '../../../../store/useColorStore';
import { TYPOGRAPHY_OPTIONS, TYPE_SCALE_OPTIONS } from '../../../../store/slices/typographySlice';
import { loadGoogleFont } from '../../../../utils/googleFonts';
import type { FontKey } from '../../../../types';
import { UndoRedoButtons } from '../Actions/UndoRedoButtons';
import { useToolbarTextContent } from '../../hooks/useToolbarTextContent';

interface TypographyToolbarPanelProps {
  onBack: () => void;
  compact?: boolean;
}

export const TypographyToolbarPanel = ({ onBack, compact = false }: TypographyToolbarPanelProps) => {
  const {
    typography,
    setHeadingFont,
    setBodyFont,
    setHeadingScale,
    setBodyScale,
    randomizeTypography,
  } = useColorStore();
  const t = useToolbarTextContent().typography;
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    loadGoogleFont(typography.headingFont);
    loadGoogleFont(typography.bodyFont);
  }, [typography.headingFont, typography.bodyFont]);

  const handleCopyTypography = () => {
    const text = `Heading Font: ${typography.headingFont}\nBody Font: ${typography.bodyFont}\nHeading Scale: ${typography.headingScale}\nBody Scale: ${typography.bodyScale}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const fieldClass = compact
    ? 'flex flex-col gap-2 border border-white/10 p-4'
    : 'flex h-full flex-1 min-w-0 flex-col justify-center gap-1.5 px-3';

  return (
    <div className={compact ? 'flex flex-col' : 'flex h-full w-full items-center'}>
      <Tooltip content={t.backLabel}>
        <button
          className={`${compact ? 'py-4' : 'h-full px-4'} flex items-center justify-center gap-2 hover:bg-white/5 transition-colors`}
          onClick={onBack}
          aria-label={t.backAria}
        >
          <ArrowLeftIcon className="h-6 w-6 text-white" />
          <span className="font-mono text-[16px] md:text-[12.5px] text-white">{t.backLabel}</span>
        </button>
      </Tooltip>

      <div className={compact ? 'grid grid-cols-1' : 'w-px h-full bg-white/20'} />

      <label className={fieldClass}>
        <span className="font-mono text-[10px] uppercase text-white/55">Heading Font</span>
        <select
          className="h-8 rounded-[4px] border border-white/20 bg-[#1f1f34] px-2 font-mono text-xs text-white outline-none focus:border-white/50"
          value={typography.headingFont}
          onChange={(event) => setHeadingFont(event.target.value as FontKey)}
        >
          {TYPOGRAPHY_OPTIONS.map((option) => (
            <option key={option.key} value={option.key}>
              {option.label}
            </option>
          ))}
        </select>
      </label>

      <div className={compact ? '' : 'w-px h-full bg-white/20'} />

      <label className={fieldClass}>
        <span className="font-mono text-[10px] uppercase text-white/55">Heading Scale</span>
        <select
          className="h-8 rounded-[4px] border border-white/20 bg-[#1f1f34] px-2 font-mono text-xs text-white outline-none focus:border-white/50"
          value={typography.headingScale}
          onChange={(event) => setHeadingScale(Number(event.target.value))}
        >
          {TYPE_SCALE_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>

      <div className={compact ? '' : 'w-px h-full bg-white/20'} />

      <label className={fieldClass}>
        <span className="font-mono text-[10px] uppercase text-white/55">Body Font</span>
        <select
          className="h-8 rounded-[4px] border border-white/20 bg-[#1f1f34] px-2 font-mono text-xs text-white outline-none focus:border-white/50"
          value={typography.bodyFont}
          onChange={(event) => setBodyFont(event.target.value as FontKey)}
        >
          {TYPOGRAPHY_OPTIONS.filter((option) => option.key !== 'caveat' && option.key !== 'dancingScript' && option.key !== 'pacifico' && option.key !== 'BebasNeue').map((option) => (
            <option key={option.key} value={option.key}>
              {option.label}
            </option>
          ))}
        </select>
      </label>

      <div className={compact ? '' : 'w-px h-full bg-white/20'} />

      <label className={fieldClass}>
        <span className="font-mono text-[10px] uppercase text-white/55">Body Scale</span>
        <select
          className="h-8 rounded-[4px] border border-white/20 bg-[#1f1f34] px-2 font-mono text-xs text-white outline-none focus:border-white/50"
          value={typography.bodyScale}
          onChange={(event) => setBodyScale(Number(event.target.value))}
        >
          {TYPE_SCALE_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>

      <div className={compact ? '' : 'w-px h-full bg-white/20'} />

      <Tooltip content="Copy typography details">
        <button
          className={`${compact ? 'py-4' : 'h-full px-4'} flex items-center justify-center gap-1 hover:bg-white/5 transition-colors`}
          onClick={handleCopyTypography}
          aria-label="Copy typography details"
        >
          {copied ? <CheckIcon className="h-5 w-5 text-green-400" /> : <ClipboardIcon className="h-5 w-5 text-white" />}
          <span className="font-mono text-[14px] md:text-[11.5px] text-white">{copied ? 'Copied' : 'Copy'}</span>
        </button>
      </Tooltip>

      <div className={compact ? 'border-t border-white/10 my-1' : 'w-px h-full bg-white/20'} />

      <Tooltip content={t.randomTooltip}>
        <button
          className={`${compact ? 'py-4' : 'h-full px-4'} flex items-center justify-center gap-1 hover:bg-white/5 transition-colors`}
          onClick={randomizeTypography}
          aria-label={t.randomTooltip}
        >
          <Squares2X2Icon className="h-5 w-5 text-white" />
          <span className="font-mono text-[14px] md:text-[11.5px] text-white">{t.randomLabel}</span>
        </button>
      </Tooltip>

      <div className={compact ? 'border-t border-white/10' : 'w-px h-full bg-white/20'} />

      <UndoRedoButtons className={compact ? 'w-full py-4' : ''} />
    </div>
  );
};
