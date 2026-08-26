// src/features/Toolbar/components/ColorPicker/ColorPickerModal/useColorPickerLogic.ts
import { useState, useEffect, useCallback } from "react";
import { useColorStore } from "../../../../../store/useColorStore";
import tinycolor from "tinycolor2";
import type { ColorKey } from "../../../../../types";

export const useColorPickerLogic = (colorKey: ColorKey) => {
  const { colors, setColor } = useColorStore();
  const [isVisible, setIsVisible] = useState(false);
  const [format, setFormat] = useState<"HEX" | "RGB">("HEX");

  const currentColorFromStore = colors[colorKey];
  const [localColor, setLocalColor] = useState(currentColorFromStore);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    setLocalColor(currentColorFromStore);
  }, [currentColorFromStore]);

  const commitColor = useCallback(() => {
    if (localColor !== colors[colorKey]) {
      setColor(colorKey, localColor);
    }
  }, [colorKey, localColor, colors, setColor]);

  useEffect(() => {
    const handleGlobalUp = () => commitColor();
    window.addEventListener("mouseup", handleGlobalUp);
    window.addEventListener("touchend", handleGlobalUp);
    return () => {
      window.removeEventListener("mouseup", handleGlobalUp);
      window.removeEventListener("touchend", handleGlobalUp);
    };
  }, [commitColor]);

  const handleColorChange = (newColor: string) => {
    setLocalColor(newColor);
  };

  const getFormattedColor = () => {
    // HEX se deja crudo (localColor) a propósito: si acá pasáramos por
    // tinycolor en cada keystroke, tipear un hex a mano se "corrige" solo
    // a mitad de escritura y salta a negro con valores incompletos.
    if (format === "HEX") return localColor;

    // RGB sí se deriva siempre de tinycolor, y acá estaba el bug:
    // se armaba "rgb(r,g,b)" sin el canal alpha, aunque el color local
    // (visible en el preview y ya persistido en el store) sí lo tuviera.
    const { r, g, b, a } = tinycolor(localColor).toRgb();
    return a < 1
      ? `rgba(${r}, ${g}, ${b}, ${a.toFixed(2)})`
      : `rgb(${r}, ${g}, ${b})`;
  };

  const startClosing = (onClose: () => void) => {
    commitColor();
    setIsVisible(false);
    setTimeout(onClose, 200);
  };

  return {
    currentColor: localColor,
    isVisible,
    format,
    formattedColor: getFormattedColor(),
    handleColorChange,
    handleCopy: () => navigator.clipboard.writeText(getFormattedColor()),
    toggleFormat: () => setFormat((prev) => (prev === "HEX" ? "RGB" : "HEX")),
    startClosing,
  };
};
