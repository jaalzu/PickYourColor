// src/features/Toolbar/components/ToolbarDesktop.tsx
import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { ColorInputButton } from "./ColorPicker/ColorInputButton/ColorInputDesktop";
import { ColorPickerModal } from "./ColorPicker/ColorPickerModal/ColorPickerModal";
import { RandomizeButton } from "./Actions/RandomizeButton";
import { UndoRedoButtons } from "./Actions/UndoRedoButtons";
import { ExportButton } from "./Actions/ExportButton";
import { ShareButton } from "./Actions/ShareButton";
import { ThemeToggleButton } from "./Actions/ThemeToggleButton";
import { useToolbarTextContent } from "../hooks/useToolbarTextContent";

import { COLOR_KEYS } from "../constants/colorConfig";
import { useToolbarLogic } from "../hooks/useToolbarLogic";
import { useColorStore } from "../../../store/useColorStore";
import { TypographyToolbarPanel } from "./Typography/TypographyToolbarPanel";
import { ToolbarDivider } from "./ui/ToolbarDivider";
import { ToolbarIconButton } from "./ui/ToolbarIconButton";

export const ToolbarDesktop = () => {
  const {
    colors,
    selectedColor,
    triggerElement,
    handleColorSelect,
    handleCloseModal,
  } = useToolbarLogic();
  const isToolbarShaking = useColorStore((state) => state.isToolbarShaking);
  const [toolbarMode, setToolbarMode] = useState<"colors" | "typography">(
    "colors",
  );
  const [isVisible, setIsVisible] = useState(true);
  const t = useToolbarTextContent();

  return (
    <>
      <div className="fixed left-3 top-[72px] z-50">
        <div
          className={`w-[62px] flex flex-col items-stretch overflow-hidden rounded-lg bg-[#2c2c2c]
  shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08),2px_1px_4px_rgba(0,0,0,0.2)]
  ${isToolbarShaking ? "animate-simple-shake" : ""}`}
          style={{ fontFamily: '"Figtree", sans-serif' }}
        >
          {/* Ocultar/mostrar: arriba de todo, siempre visible, fuera del bloque colapsable */}
          <div className="px-1.5 pt-2">
            <ToolbarIconButton
              icon={isVisible ? <EyeSlashIcon /> : <EyeIcon />}
              tooltip={isVisible ? "Ocultar toolbar" : "Mostrar toolbar"}
              ariaLabel={isVisible ? "Ocultar toolbar" : "Mostrar toolbar"}
              onClick={() => setIsVisible((v) => !v)}
              size="sm"
              tone="danger"
            />
          </div>
          <ToolbarDivider />

          <div
            className={`overflow-hidden ${
              isVisible
                ? "transition-none max-h-[2000px] opacity-100"
                : "transition-all duration-300 ease-in-out max-h-0 opacity-0"
            }`}
          >
            <div key={toolbarMode} className="animate-toolbar-fade">
              {toolbarMode === "typography" ? (
                <TypographyToolbarPanel
                  compact
                  onBack={() => setToolbarMode("colors")}
                />
              ) : (
                <>
                  <div className="flex flex-col gap-1 px-1.5 py-2">
                    {COLOR_KEYS.map((key) => (
                      <ColorInputButton
                        key={key}
                        colorKey={key}
                        label={t.colorKeys[key]}
                        color={colors[key]}
                        isSelected={selectedColor === key}
                        onClick={(buttonElement) =>
                          handleColorSelect(key, buttonElement)
                        }
                      />
                    ))}
                  </div>

                  <ToolbarDivider />

                  <div className="flex flex-col gap-1 px-1.5 py-2">
                    <RandomizeButton showLabel={false} />
                    <UndoRedoButtons variant="grouped" showLabel={false} />
                    <ExportButton showLabel={false} />
                    <ThemeToggleButton showLabel={false} />
                    <ShareButton showLabel={false} />
                  </div>

                  <ToolbarDivider />

                  {/* Trigger de Typography: abajo de todo, dentro del bloque colapsable */}
                  <div className="px-1.5 py-2">
                    <ToolbarIconButton
                      icon={
                        <span className="font-mono text-[15px] font-bold leading-none">
                          Aa
                        </span>
                      }
                      tooltip={t.typography.openLabel}
                      ariaLabel={t.typography.openAria}
                      onClick={() => {
                        handleCloseModal();
                        setToolbarMode("typography");
                      }}
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {selectedColor && (
        <ColorPickerModal
          colorKey={selectedColor}
          open={!!selectedColor}
          onClose={handleCloseModal}
          triggerElement={triggerElement}
        />
      )}
    </>
  );
};
