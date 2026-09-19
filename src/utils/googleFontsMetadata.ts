// src/utils/googleFontsMetadata.ts
export interface GoogleFontMeta {
  family: string;
  category: string;
}

let cache: GoogleFontMeta[] | null = null;
let pending: Promise<GoogleFontMeta[]> | null = null;

export const fetchGoogleFonts = async (): Promise<GoogleFontMeta[]> => {
  if (cache) return cache;
  if (pending) return pending;

  const apiKey = import.meta.env.VITE_GOOGLE_FONTS_API_KEY as string | undefined;
  const apiUrl = `https://www.googleapis.com/webfonts/v1/webfonts?key=${apiKey}&sort=popularity`;

  if (!apiKey) {
    console.warn(
      "[googleFonts] VITE_GOOGLE_FONTS_API_KEY no está definida. " +
        "Verificá que .env esté en la raíz con VITE_GOOGLE_FONTS_API_KEY=... y reiniciá el dev server (vite necesita restart para leer .env).",
    );
    return [];
  }

  pending = fetch(apiUrl)
    .then(async (res) => {
      if (!res.ok) {
        const body = await res.text().catch(() => "");
        // 403 acá casi siempre es: API no habilitada en Cloud Console,
        // o la key tiene restricciones de referrer que bloquean tu localhost.
        throw new Error(`[googleFonts] API respondió ${res.status}: ${body}`);
      }
      return res.json();
    })
    .then((json: { items: { family: string; category: string }[] }) => {
      const fonts: GoogleFontMeta[] = json.items.map((f) => ({
        family: f.family,
        category: f.category,
      }));
      console.info(`[googleFonts] ${fonts.length} fuentes cargadas.`);
      cache = fonts;
      return fonts;
    })
    .catch((err) => {
      console.error(err);
      pending = null;
      return [];
    });

  return pending;
};
