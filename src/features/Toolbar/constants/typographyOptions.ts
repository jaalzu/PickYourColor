// src/features/Toolbar/constants/typographyOptions.ts
import {
  TYPOGRAPHY_OPTIONS,
  BODY_TYPOGRAPHY_OPTIONS,
  TYPE_SCALE_OPTIONS,
} from "../../../store/slices/typographySlice";

export const HEADING_FONT_OPTIONS = TYPOGRAPHY_OPTIONS.map((o) => ({
  key: o.key,
  label: o.label,
}));

// Reusa BODY_TYPOGRAPHY_OPTIONS del slice en vez de refiltrar acá —
// una sola fuente de verdad para qué fuentes quedan excluidas en body.
export const BODY_FONT_OPTIONS = BODY_TYPOGRAPHY_OPTIONS.map((o) => ({
  key: o.key,
  label: o.label,
}));

export const SCALE_OPTIONS = TYPE_SCALE_OPTIONS.map((o) => ({
  key: String(o.value),
  label: o.label,
}));
