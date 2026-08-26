// src/features/Toolbar/components/Actions/ExportButton.tsx
import { useRef, useState } from "react";
import ExportIcon from "../../../../assets/features/export.svg?react";
import { ExportModal } from "../Export/ExportModal";
import { useToolbarTextContent } from "../../hooks/useToolbarTextContent";
import { ToolbarIconButton } from "../ui/ToolbarIconButton";

interface ExportButtonProps {
  className?: string;
  showLabel?: boolean;
}

export const ExportButton = ({
  className = "",
  showLabel = true,
}: ExportButtonProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const triggerRef = useRef<HTMLDivElement>(null);
  const t = useToolbarTextContent().export;

  return (
    <div ref={triggerRef} className="w-full">
      <ToolbarIconButton
        icon={<ExportIcon />}
        label={showLabel ? t.label : undefined}
        tooltip={t.tooltip}
        ariaLabel={t.aria}
        onClick={() => setIsModalOpen(true)}
        className={className}
      />
      <ExportModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        triggerElement={triggerRef.current}
      />
    </div>
  );
};
