// src/features/Toolbar/hooks/useGoogleFontsList.ts
import { useEffect, useMemo, useState } from "react";
import {
  fetchGoogleFonts,
  type GoogleFontMeta,
} from "../../../utils/googleFontsMetadata";

const POPULAR_COUNT = 40;

export const useGoogleFontsList = (query: string) => {
  const [fonts, setFonts] = useState<GoogleFontMeta[]>([]);
  const [loading, setLoading] = useState(true);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetchGoogleFonts().then((list) => {
      if (cancelled) return;
      setFonts(list);
      setFailed(list.length === 0);
      setLoading(false);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const filtered = useMemo(() => {
    if (!query.trim()) return fonts.slice(0, POPULAR_COUNT); // ya viene ordenado por popularidad (sort=popularity)
    const q = query.toLowerCase();
    return fonts.filter((f) => f.family.toLowerCase().includes(q)).slice(0, 60);
  }, [fonts, query]);

  return {
    fonts: filtered,
    loading,
    failed,
    total: fonts.length,
    isPopularDefault: !query.trim(),
  };
};
