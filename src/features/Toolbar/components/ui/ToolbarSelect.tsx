// src/features/Toolbar/components/ui/ToolbarSelect.tsx
interface ToolbarSelectOption {
  value: string;
  label: string;
}

interface ToolbarSelectProps {
  value: string;
  onChange: (value: string) => void;
  options: ToolbarSelectOption[];
  ariaLabel?: string;
  className?: string;
}

export const ToolbarSelect = ({
  value,
  onChange,
  options,
  ariaLabel,
  className = "",
}: ToolbarSelectProps) => (
  <select
    aria-label={ariaLabel}
    value={value}
    onChange={(e) => onChange(e.target.value)}
    className={`h-8 rounded-md border border-white/10 bg-white/5 px-2 font-mono text-[11px] text-white outline-none
      transition-colors hover:bg-white/10 focus:border-white/30 ${className}`}
  >
    {options.map((opt) => (
      <option
        key={opt.value}
        value={opt.value}
        className="bg-[#2c2c2c] text-white"
      >
        {opt.label}
      </option>
    ))}
  </select>
);
