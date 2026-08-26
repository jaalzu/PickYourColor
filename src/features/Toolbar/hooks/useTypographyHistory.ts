// src/features/Toolbar/hooks/useTypographyHistory.ts
import { useState } from "react";
import type { TypographySettings } from "../../../types";

export const useTypographyHistory = (
  typography: TypographySettings,
  applyTypography: (t: TypographySettings) => void,
) => {
  const [past, setPast] = useState<TypographySettings[]>([]);
  const [future, setFuture] = useState<TypographySettings[]>([]);

  // Envolvé cualquier cambio de typography con esto: guarda el estado
  // ANTES de mutar, así el undo puede volver a él.
  const withHistory = (mutate: () => void) => {
    setPast((p) => [...p, typography]);
    setFuture([]);
    mutate();
  };

  const undo = () => {
    if (past.length === 0) return;
    const prev = past[past.length - 1];
    setFuture((f) => [typography, ...f]);
    setPast((p) => p.slice(0, -1));
    applyTypography(prev);
  };

  const redo = () => {
    if (future.length === 0) return;
    const next = future[0];
    setPast((p) => [...p, typography]);
    setFuture((f) => f.slice(1));
    applyTypography(next);
  };

  return {
    withHistory,
    undo,
    redo,
    canUndo: past.length > 0,
    canRedo: future.length > 0,
  };
};
