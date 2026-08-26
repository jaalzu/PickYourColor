// src/features/Toolbar/components/Actions/ThemeToggleButton.tsx
import { useEffect } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { useColorStore } from "../../../../store/useColorStore";
import { useToolbarTextContent } from "../../hooks/useToolbarTextContent";
import { ToolbarIconButton } from "../ui/ToolbarIconButton";

interface ThemeToggleButtonProps {
  className?: string;
  showLabel?: boolean;
}

export const ThemeToggleButton = ({
  className = "",
  showLabel = true,
}: ThemeToggleButtonProps) => {
  const themeMode = useColorStore((state) => state.themeMode);
  const toggleTheme = useColorStore((state) => state.toggleTheme);
  const setColor = useColorStore((state) => state.setColor);
  const t = useToolbarTextContent().theme;

  useEffect(() => {
    if (themeMode === "light") {
      setColor("background", "#FFFFFF");
      setColor("text", "#000000");
    } else {
      setColor("background", "#1a1a2e");
      setColor("text", "#FFFFFF");
    }
  }, [themeMode, setColor]);

  return (
    <ToolbarIconButton
      icon={themeMode === "light" ? <MoonIcon /> : <SunIcon />}
      label={
        showLabel
          ? themeMode === "light"
            ? t.labelDark
            : t.labelLight
          : undefined
      }
      tooltip={t.tooltip}
      ariaLabel={themeMode === "light" ? t.ariaToDark : t.ariaToLight}
      onClick={toggleTheme}
      className={className}
    />
  );
};
