// src/features/Toolbar/components/ui/ContrastBadge.tsx
import { getContrast } from "../../../../utils/contrast";

interface ContrastBadgeProps {
  foreground: string;
  background: string;
}

export const ContrastBadge = ({
  foreground,
  background,
}: ContrastBadgeProps) => {
  const { ratio, aaNormal } = getContrast(foreground, background);

  return (
    <div
      className={`flex items-center gap-1 rounded-md px-1.5 py-0.5 font-mono text-[10px] font-semibold ${
        aaNormal
          ? "bg-green-500/15 text-green-400"
          : "bg-red-500/15 text-red-400"
      }`}
      title={`Contrast ratio ${ratio}:1 — ${aaNormal ? "passes" : "fails"} WCAG AA`}
    >
      <span>{ratio.toFixed(1)}</span>
      <span>{aaNormal ? "AA ✓" : "AA ✕"}</span>
    </div>
  );
};
