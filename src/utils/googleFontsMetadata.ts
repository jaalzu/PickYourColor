// src/utils/googleFontsMetadata.ts
export interface GoogleFontMeta {
  family: string;
  category: string;
}

let cache: GoogleFontMeta[] | null = null;
let pending: Promise<GoogleFontMeta[]> | null = null;

const API_KEY = import.meta.env.VITE_GOOGLE_FONTS_API_KEY;
const API_URL = `https://www.googleapis.com/webfonts/v1/webfonts?key=${API_KEY}&sort=popularity`;

export const fetchGoogleFonts = async (): Promise<GoogleFontMeta[]> => {
  if (cache) return cache;
  if (pending) return pending;

  if (!API_KEY) {
    console.warn(
      "[googleFonts] VITE_GOOGLE_FONTS_API_KEY no está definida. " +
        "Reiniciá el dev server después de agregarla al .env.",
    );
    return [];
  }

  pending = fetch(API_URL)
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
