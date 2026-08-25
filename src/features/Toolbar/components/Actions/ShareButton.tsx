// src/features/Toolbar/components/Actions/ShareButton.tsx
import { LinkIcon, CheckIcon } from "@heroicons/react/24/outline";
import { useToolbarTextContent } from "../../hooks/useToolbarTextContent";
import { useCopyToClipboard } from "../../../../hooks/useCopyToClipboard";
import { ToolbarIconButton } from "../ui/ToolbarIconButton";

interface ShareButtonProps {
  className?: string;
  showLabel?: boolean;
}

export const ShareButton = ({
  className = "",
  showLabel = true,
}: ShareButtonProps) => {
  const { copied, copy } = useCopyToClipboard();
  const t = useToolbarTextContent().copyUrl;

  return (
    <ToolbarIconButton
      icon={copied ? <CheckIcon /> : <LinkIcon />}
      label={showLabel ? t.label : undefined}
      tooltip={t.tooltip}
      ariaLabel={t.aria}
      onClick={() => copy(window.location.href)}
      tone={copied ? "success" : "default"}
      className={className}
    />
  );
};
