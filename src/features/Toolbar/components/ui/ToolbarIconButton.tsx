// src/features/Toolbar/components/ui/ToolbarIconButton.tsx
import type { ReactNode } from "react";
import { Tooltip } from "../../../../components/ui/Tooltip";

interface ToolbarIconButtonProps {
  icon: ReactNode;
  label?: string;
  tooltip: string;
  ariaLabel: string;
  onClick?: () => void;
  disabled?: boolean;
  active?: boolean;
  tone?: "default" | "success" | "danger";
  size?: "sm" | "md";
  className?: string;
}

const TONE_CLASSES: Record<"default" | "success" | "danger", string> = {
  default: "text-white/90 hover:text-white",
  success: "text-green-500 hover:text-green-500",
  danger: "text-red-500 hover:text-red-400",
};

const TONE_HOVER_BG: Record<"default" | "success" | "danger", string> = {
  default: "hover:bg-white/10 active:bg-white/10",
  success: "hover:bg-white/10 active:bg-white/10",
  danger: "hover:bg-red-500/10 active:bg-red-500/10",
};

// +1px por lado en ambos tamaños respecto a la versión anterior
const ICON_SIZE: Record<"sm" | "md", string> = {
  sm: "[&>svg]:w-[18px] [&>svg]:h-[18px]",
  md: "[&>svg]:w-6 [&>svg]:h-6",
};

export const ToolbarIconButton = ({
  icon,
  label,
  tooltip,
  ariaLabel,
  onClick,
  disabled = false,
  active = false,
  tone = "default",
  size = "md",
  className = "",
}: ToolbarIconButtonProps) => (
  <Tooltip content={tooltip}>
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      aria-pressed={active}
      className={`
        flex flex-col items-center justify-center gap-0.5 w-full py-2 rounded-md
        transition-colors duration-150 ${TONE_HOVER_BG[tone]}
        disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:active:bg-transparent
        ${TONE_CLASSES[tone]} ${active ? "bg-white/10" : ""} ${className}
      `}
    >
      <span className={`flex items-center justify-center ${ICON_SIZE[size]}`}>
        {icon}
      </span>
      {label && (
        <span className="font-mono text-[9px] leading-none tracking-wide">
          {label}
        </span>
      )}
    </button>
  </Tooltip>
);
