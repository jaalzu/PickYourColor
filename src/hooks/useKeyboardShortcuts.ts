import { useEffect } from "react";
import { useColorStore } from "../store/useColorStore";

export const useKeyboardShortcuts = () => {
  const { undo, redo, randomizeColors } = useColorStore();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const isTyping =
        document.activeElement instanceof HTMLInputElement ||
        document.activeElement instanceof HTMLTextAreaElement;

      // --- RANDOMIZE (Espacio) ---
      if (e.code === "Space" && !isTyping) {
        e.preventDefault();
        randomizeColors();
      }

      // --- UNDO (Ctrl/Cmd + Z) ---
      if (
        (e.ctrlKey || e.metaKey) &&
        e.key.toLowerCase() === "z" &&
        !e.shiftKey
      ) {
        e.preventDefault();
        undo();
      }

      // --- REDO (Ctrl/Cmd + Y  O  Ctrl/Cmd + Shift + Z) ---
      const isRedo =
        ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "y") ||
        ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === "z");

      if (isRedo) {
        e.preventDefault();
        redo();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [undo, redo, randomizeColors]);
};
