// src/features/Toolbar/components/Export/ExportOption.tsx
import { ToolbarPill } from "../ui/ToolbarPill";

interface ExportOptionProps {
  label: string;
  isSelected: boolean;
  onClick: () => void;
}

export const ExportOption = ({
  label,
  isSelected,
  onClick,
}: ExportOptionProps) => (
  <ToolbarPill
    label={label}
    isSelected={isSelected}
    onClick={onClick}
    size="md"
  />
);
