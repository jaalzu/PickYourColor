interface ToolbarPillProps {
  label: string;
  isSelected: boolean;
  onClick: () => void;
  size?: "sm" | "md";
  className?: string;
}

const SIZE_CLASSES: Record<"sm" | "md", string> = {
  sm: "px-2 py-1 text-[10px]",
  md: "px-3 py-1.5 text-[11px]",
};

export const ToolbarPill = ({
  label,
  isSelected,
  onClick,
  size = "md",
  className = "",
}: ToolbarPillProps) => (
  <button
    type="button"
    aria-pressed={isSelected}
    onClick={onClick}
    className={`rounded-md font-mono font-semibold transition-colors ${SIZE_CLASSES[size]} ${
      isSelected
        ? "bg-white text-black"
        : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
    } ${className}`}
  >
    {label}
  </button>
);
