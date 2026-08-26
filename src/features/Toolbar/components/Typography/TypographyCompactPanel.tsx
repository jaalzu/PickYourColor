// src/features/Toolbar/components/Typography/TypographyCompactPanel.tsx
import {
  CheckIcon,
  ChevronLeftIcon,
  ClipboardIcon,
} from "@heroicons/react/24/outline";
import DiceIcon from "../../../../assets/features/dice.svg?react";
import type { FontKey, TypographySettings } from "../../../../types";
import { UndoRedoButtons } from "../Actions/UndoRedoButtons";
import { ToolbarIconButton } from "../ui/ToolbarIconButton";
import { ToolbarPickerModal } from "../ui/ToolbarPickerModal";
import { FontSearchPickerModal } from "../ui/FontSearchPickerModal";
import { ToolbarDivider } from "../ui/ToolbarDivider";
import { ScaleIcon } from "../ui/ScaleIcon";
import { SCALE_OPTIONS } from "../../constants/typographyOptions";
import { useTypographyCopy } from "../../hooks/useTypographyCopy";
import { useTypographyHistory } from "../../hooks/useTypographyHistory";
import { useToolbarTextContent } from "../../hooks/useToolbarTextContent";
import { DEFAULT_TYPOGRAPHY } from "../../../../store/slices/typographySlice";

// Fuentes cursivas/display que no queremos como opción de body — misma
// exclusión que ya vivía en BODY_TYPOGRAPHY_OPTIONS, pero ahora aplicada
// también contra resultados de búsqueda dinámica.
const BODY_EXCLUDED = [
  "caveat",
  "dancingScript",
  "pacifico",
  "BebasNeue",
  "Caveat",
  "Dancing Script",
  "Pacifico",
  "Bebas Neue",
];

interface TypographyCompactPanelProps {
  typography: TypographySettings;
  onBack?: () => void;
  setHeadingFont: (font: FontKey) => void;
  setBodyFont: (font: FontKey) => void;
  setHeadingScale: (scale: number) => void;
  setBodyScale: (scale: number) => void;
  randomizeTypography: () => void;
}

export const TypographyCompactPanel = ({
  typography,
  onBack,
  setHeadingFont,
  setBodyFont,
  setHeadingScale,
  setBodyScale,
  randomizeTypography,
}: TypographyCompactPanelProps) => {
  const t = useToolbarTextContent().typography;
  const { copied, copyDetails } = useTypographyCopy(typography);

  const applyTypography = (next: TypographySettings) => {
    setHeadingFont(next.headingFont);
    setBodyFont(next.bodyFont);
    setHeadingScale(next.headingScale);
    setBodyScale(next.bodyScale);
  };

  const { withHistory, undo, redo, canUndo, canRedo } = useTypographyHistory(
    typography,
    applyTypography,
  );

  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-1 px-1.5 py-2">
        <span className="text-center font-mono text-[9px] uppercase tracking-wider text-white/40">
          Heading
        </span>
        <FontSearchPickerModal
          icon={
            <span className="font-mono text-[15px] font-bold leading-none">
              Aa
            </span>
          }
          tooltip="Heading font"
          groupLabel="Heading font"
          value={typography.headingFont}
          defaultValue={DEFAULT_TYPOGRAPHY.headingFont}
          onChange={(v) => withHistory(() => setHeadingFont(v))}
        />
        <ToolbarPickerModal
          icon={<ScaleIcon />}
          tooltip="Heading scale"
          groupLabel="Heading scale"
          value={String(typography.headingScale)}
          options={SCALE_OPTIONS}
          onChange={(v) => withHistory(() => setHeadingScale(Number(v)))}
        />
      </div>

      <div className="flex flex-col gap-1 px-1.5 py-2">
        <span className="text-center font-mono text-[9px] uppercase tracking-wider text-white/40">
          Body
        </span>
        <FontSearchPickerModal
          icon={
            <span className="font-mono text-[13px] font-medium leading-none">
              Aa
            </span>
          }
          tooltip="Body font"
          groupLabel="Body font"
          value={typography.bodyFont}
          defaultValue={DEFAULT_TYPOGRAPHY.bodyFont}
          onChange={(v) => withHistory(() => setBodyFont(v))}
          excludedFamilies={BODY_EXCLUDED}
        />
        <ToolbarPickerModal
          icon={<ScaleIcon />}
          tooltip="Body scale"
          groupLabel="Body scale"
          value={String(typography.bodyScale)}
          options={SCALE_OPTIONS}
          onChange={(v) => withHistory(() => setBodyScale(Number(v)))}
        />
      </div>

      <ToolbarDivider />

      <div className="flex flex-col gap-1 px-1.5 py-2">
        <ToolbarIconButton
          icon={copied ? <CheckIcon /> : <ClipboardIcon />}
          tooltip="Copy typography details"
          ariaLabel="Copy typography details"
          onClick={copyDetails}
          tone={copied ? "success" : "default"}
        />
        <ToolbarIconButton
          icon={<DiceIcon />}
          tooltip={t.randomTooltip}
          ariaLabel={t.randomTooltip}
          onClick={() => withHistory(randomizeTypography)}
        />
        {/* Ahora usa el historial LOCAL — solo pisa heading/body font/scale,
            nunca toca colors, a diferencia del undo/redo del panel de Colores */}
        <UndoRedoButtons
          variant="grouped"
          showLabel={false}
          onUndo={undo}
          onRedo={redo}
          canUndo={canUndo}
          canRedo={canRedo}
        />
      </div>

      <ToolbarDivider />

      <div className="px-1.5 py-2">
        <ToolbarIconButton
          icon={<ChevronLeftIcon />}
          tooltip={t.backLabel}
          ariaLabel={t.backAria}
          onClick={onBack}
        />
      </div>
    </div>
  );
};
