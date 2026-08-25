// src/utils/googleFonts.ts
// Ya no depende de un mapa hardcodeado de query strings — arma la URL
// directo desde el nombre de familia (funciona con cualquier Google Font).
const loadedFonts = new Set<string>();

export const loadGoogleFont = (
  fontFamily: string,
  weights = "300;400;500;600;700",
) => {
  if (!fontFamily || loadedFonts.has(fontFamily)) return;

  const linkId = `google-font-${fontFamily.replace(/\s+/g, "-").toLowerCase()}`;
  if (document.getElementById(linkId)) {
    loadedFonts.add(fontFamily);
    return;
  }

  const familyParam = encodeURIComponent(fontFamily).replace(/%20/g, "+");
  const link = document.createElement("link");
  link.id = linkId;
  link.rel = "stylesheet";
  link.href = `https://fonts.googleapis.com/css2?family=${familyParam}:wght@${weights}&display=swap`;
  document.head.appendChild(link);
  loadedFonts.add(fontFamily);
};
