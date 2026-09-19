// src/features/Toolbar/components/ToolbarDesktop.tsx
import { useState, useRef, useCallback, useEffect } from "react";
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
  const toolbarMode = useColorStore((state) => state.toolbarMode);
  const setToolbarMode = useColorStore((state) => state.setToolbarMode);
  const [isVisible, setIsVisible] = useState(true);
  const t = useToolbarTextContent();

  // --- draggable con clamp a viewport ---
  const containerRef = useRef<HTMLDivElement>(null);
  const dragState = useRef({ offsetX: 0, offsetY: 0, dragging: false });
  const [pos, setPos] = useState({ x: 12, y: 72 });
  const [isDragging, setIsDragging] = useState(false);

  const clampToViewport = useCallback((x: number, y: number) => {
    const el = containerRef.current;
    if (!el) return { x, y };
    const rect = el.getBoundingClientRect();
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const pad = 4;
    const maxX = Math.max(pad, vw - rect.width - pad);
    const maxY = Math.max(pad, vh - rect.height - pad);
    return {
      x: Math.min(Math.max(pad, x), maxX),
      y: Math.min(Math.max(pad, y), maxY),
    };
  }, []);

  // re-clamp en resize / cambio de altura (colapsar)
  useEffect(() => {
    const onResize = () => setPos((p) => clampToViewport(p.x, p.y));
    window.addEventListener("resize", onResize);
    // también cuando cambia isVisible/toolbarMode el alto cambia
    const id = requestAnimationFrame(onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(id);
    };
  }, [clampToViewport, isVisible, toolbarMode]);

  useEffect(() => {
    setPos((p) => clampToViewport(p.x, p.y));
  }, [isVisible, toolbarMode, clampToViewport]);

  const onPointerMove = useCallback(
    (e: PointerEvent) => {
      if (!dragState.current.dragging) return;
      const { offsetX, offsetY } = dragState.current;
      const rawX = e.clientX - offsetX;
      const rawY = e.clientY - offsetY;
      setPos(clampToViewport(rawX, rawY));
    },
    [clampToViewport],
  );

  const onPointerUp = useCallback(() => {
    if (!dragState.current.dragging) return;
    dragState.current.dragging = false;
    setIsDragging(false);
  }, []);

  useEffect(() => {
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
    };
  }, [onPointerMove, onPointerUp]);

  const handlePointerDown = (e: React.PointerEvent) => {
    if (e.button !== 0) return;
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    dragState.current = {
      offsetX: e.clientX - rect.left,
      offsetY: e.clientY - rect.top,
      dragging: true,
    };
    setIsDragging(true);
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    e.preventDefault();
  };

  return (
    <>
      <div
        ref={containerRef}
        className="fixed z-50"
        style={{ left: pos.x, top: pos.y, touchAction: "none" }}
      >
        <div
          className={`w-[62px] flex flex-col items-stretch overflow-hidden rounded-lg bg-[#2c2c2c]
  shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08),2px_1px_4px_rgba(0,0,0,0.2)]
  ${isToolbarShaking ? "animate-simple-shake" : ""}`}
          style={{ fontFamily: '"Figtree", sans-serif' }}
        >
          {/* Handle para dragear - no se sale del viewport, choca con bordes */}
          <div
            onPointerDown={handlePointerDown}
            className={`flex items-center justify-center h-5 -mb-1 cursor-grab active:cursor-grabbing select-none touch-none ${isDragging ? "cursor-grabbing opacity-80" : "opacity-60 hover:opacity-100"}`}
            aria-label="Arrastrar toolbar"
            title="Arrastrar"
          >
            <span className="flex flex-col gap-0.5">
              <span className="flex gap-0.5">
                <span className="w-1 h-1 rounded-full bg-white/50" />
                <span className="w-1 h-1 rounded-full bg-white/50" />
                <span className="w-1 h-1 rounded-full bg-white/50" />
              </span>
              <span className="flex gap-0.5">
                <span className="w-1 h-1 rounded-full bg-white/50" />
                <span className="w-1 h-1 rounded-full bg-white/50" />
                <span className="w-1 h-1 rounded-full bg-white/50" />
              </span>
            </span>
          </div>
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
                      size="md"
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
