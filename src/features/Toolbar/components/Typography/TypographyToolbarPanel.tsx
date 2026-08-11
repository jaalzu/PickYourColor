import { ArrowLeftIcon, LanguageIcon, Squares2X2Icon } from '@heroicons/react/24/outline';
import { Tooltip } from '../../../../components/ui/Tooltip';
import { useColorStore } from '../../../../store/useColorStore';
import { TYPOGRAPHY_OPTIONS } from '../../../../store/slices/typographySlice';
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
    setTypeScale,
    randomizeTypography,
  } = useColorStore();
  const t = useToolbarTextContent().typography;

  const fieldClass = compact
    ? 'flex flex-col gap-2 border border-white/10 p-4'
    : 'flex h-full min-w-[210px] flex-col justify-center gap-2 px-5';

  return (
    <div className={compact ? 'flex flex-col' : 'flex h-full w-full'}>
      <Tooltip content={t.backLabel}>
        <button
          className={`${compact ? 'py-4' : 'h-full px-5'} flex items-center justify-center gap-2 hover:bg-white/5 transition-colors`}
          onClick={onBack}
          aria-label={t.backAria}
        >
          <ArrowLeftIcon className="h-6 w-6 text-white" />
          <span className="font-mono text-[16px] md:text-[12.5px] text-white">{t.backLabel}</span>
        </button>
      </Tooltip>

      <div className={compact ? 'grid grid-cols-1' : 'w-px h-full bg-white/20'} />

      <label className={fieldClass}>
        <span className="font-mono text-[11px] uppercase text-white/55">{t.headingLabel}</span>
        <select
          className="h-9 rounded-[4px] border border-white/20 bg-[#1f1f34] px-3 font-mono text-sm text-white outline-none focus:border-white/50"
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
        <span className="font-mono text-[11px] uppercase text-white/55">{t.bodyLabel}</span>
        <select
          className="h-9 rounded-[4px] border border-white/20 bg-[#1f1f34] px-3 font-mono text-sm text-white outline-none focus:border-white/50"
          value={typography.bodyFont}
          onChange={(event) => setBodyFont(event.target.value as FontKey)}
        >
          {TYPOGRAPHY_OPTIONS.filter((option) => option.key !== 'caveat').map((option) => (
            <option key={option.key} value={option.key}>
              {option.label}
            </option>
          ))}
        </select>
      </label>

      <div className={compact ? '' : 'w-px h-full bg-white/20'} />

      <label className={fieldClass}>
        <span className="flex items-center justify-between gap-4 font-mono text-[11px] uppercase text-white/55">
          {t.scaleLabel}
          <span className="text-white">{Math.round(typography.typeScale * 100)}%</span>
        </span>
        <input
          className="accent-white"
          type="range"
          min="0.9"
          max="1.25"
          step="0.01"
          value={typography.typeScale}
          onChange={(event) => setTypeScale(Number(event.target.value))}
        />
      </label>

      <div className={compact ? '' : 'w-px h-full bg-white/20'} />

      <Tooltip content={t.randomTooltip}>
        <button
          className={`${compact ? 'py-4' : 'h-full px-5'} flex items-center justify-center gap-1 hover:bg-white/5 transition-colors`}
          onClick={randomizeTypography}
          aria-label={t.randomTooltip}
        >
          <Squares2X2Icon className="h-6 w-6 text-white" />
          <span className="font-mono text-[16px] md:text-[12.5px] text-white">{t.randomLabel}</span>
        </button>
      </Tooltip>

      <div className={compact ? 'border-t border-white/10' : 'w-px h-full bg-white/20'} />

      <UndoRedoButtons className={compact ? 'w-full py-4' : ''} />

      {!compact && (
        <>
          <div className="w-px h-full bg-white/20" />
          <div className="flex h-full flex-1 items-center justify-center px-4 text-white/35">
            <LanguageIcon className="h-6 w-6" />
          </div>
        </>
      )}
    </div>
  );
};
