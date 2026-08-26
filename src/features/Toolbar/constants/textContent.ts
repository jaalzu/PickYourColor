// src/features/Toolbar/constants/content.ts

export const toolbarContent = {
  es: {
    colorKeys: {
      text: "Texto",
      background: "Fondo",
      primary: "Primario",
      secondary: "Secundario",
      accent: "Acento",
    },
    export: {
      label: "Exportar",
      tooltip: "Exportar paleta",
      aria: "Exportar paleta de colores",
    },
    randomize: {
      label: "Aleatorio",
      tooltip: "Generar colores aleatorios (Espacio)",
      aria: "Aleatorizar todos los colores",
    },
    typography: {
      openLabel: "Fuentes",
      backLabel: "Colores",
      headingLabel: "Headings",
      bodyLabel: "Body",
      scaleLabel: "Type scale",
      randomLabel: "Aleatorio",
      randomTooltip: "Generar fuentes aleatorias",
      openAria: "Abrir controles de fuentes",
      backAria: "Volver a controles de color",
    },
    copyUrl: {
      label: "Copiar URL",
      labelCopied: "Copiado",
      tooltip: "Copiar URL para compartir",
      aria: "Copiar URL de la página",
    },
    theme: {
      labelDark: "Dark",
      labelLight: "Light",
      tooltip: "Cambiar modo oscuro/claro",
      ariaToDark: "Cambiar a modo oscuro",
      ariaToLight: "Cambiar a modo claro",
    },
    undoRedo: {
      tooltip: "Deshacer/Rehacer cambios",
      undoLabel: "Deshacer",
      redoLabel: "Rehacer",
      undoAria: "Deshacer último cambio",
      redoAria: "Rehacer último cambio",
    },
    colorPicker: {
      tooltip: (label: string, color: string) =>
        `${label}: ${color.toUpperCase()}`,
      aria: (label: string) => `Seleccionar color ${label}`,
    },
  },
  en: {
    // en inglés:
    colorKeys: {
      text: "Text",
      background: "Background",
      primary: "Primary",
      secondary: "Secondary",
      accent: "Accent",
    },
    export: {
      label: "Export",
      tooltip: "Export palette",
      aria: "Export color palette",
    },
    randomize: {
      label: "Random",
      tooltip: "Generate random colors (Spacebar)",
      aria: "Randomize all colors",
    },
    typography: {
      openLabel: "Fonts",
      backLabel: "Colors",
      headingLabel: "Headings",
      bodyLabel: "Body",
      scaleLabel: "Type scale",
      randomLabel: "Random",
      randomTooltip: "Generate random fonts (Spacebar)",
      openAria: "Open font controls",
      backAria: "Back to color controls",
    },
    copyUrl: {
      label: "Copy URL",
      labelCopied: "Copied",
      tooltip: "Copy shareable URL",
      aria: "Copy page URL",
    },
    theme: {
      labelDark: "Dark",
      labelLight: "Light",
      tooltip: "Toggle dark/light mode",
      ariaToDark: "Switch to dark mode",
      ariaToLight: "Switch to light mode",
    },
    undoRedo: {
      tooltip: "Undo/Redo changes",
      undoLabel: "Undo",
      redoLabel: "Redo",
      undoAria: "Undo last change",
      redoAria: "Redo last change",
    },
    colorPicker: {
      tooltip: (label: string, color: string) =>
        `${label}: ${color.toUpperCase()}`,
      aria: (label: string) => `Select ${label} color`,
    },
  },
} as const;
