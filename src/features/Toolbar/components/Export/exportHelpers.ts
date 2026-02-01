// src/features/Toolbar/utils/exportHelpers.ts
import type { ColorScheme } from '../../../../types/index';

export const exportToCSS = (colors: ColorScheme): string => {
  return `:root {
  --color-background: ${colors.background};
  --color-text: ${colors.text};
  --color-primary: ${colors.primary};
  --color-secondary: ${colors.secondary};
  --color-accent: ${colors.accent};
}`;
};

export const exportToSCSS = (colors: ColorScheme): string => {
  return `$color-background: ${colors.background};
$color-text: ${colors.text};
$color-primary: ${colors.primary};
$color-secondary: ${colors.secondary};
$color-accent: ${colors.accent};`;
};

export const exportToTailwind = (colors: ColorScheme): string => {
  return `module.exports = {
  theme: {
    extend: {
      colors: {
        background: '${colors.background}',
        text: '${colors.text}',
        primary: '${colors.primary}',
        secondary: '${colors.secondary}',
        accent: '${colors.accent}',
      }
    }
  }
}`;
};