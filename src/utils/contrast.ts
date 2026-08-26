// src/utils/contrast.ts
import tinycolor from "tinycolor2";

export interface ContrastResult {
  ratio: number;
  aaNormal: boolean; // texto normal, 4.5:1
  aaLarge: boolean; // texto grande, 3:1
  aaaNormal: boolean; // AAA, 7:1
}

export const getContrast = (
  foreground: string,
  background: string,
): ContrastResult => {
  const ratio = tinycolor.readability(foreground, background);
  return {
    ratio: Math.round(ratio * 100) / 100,
    aaNormal: tinycolor.isReadable(foreground, background, {
      level: "AA",
      size: "small",
    }),
    aaLarge: tinycolor.isReadable(foreground, background, {
      level: "AA",
      size: "large",
    }),
    aaaNormal: tinycolor.isReadable(foreground, background, {
      level: "AAA",
      size: "small",
    }),
  };
};
