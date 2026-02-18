// src/hooks/useLang.ts
import { useColorStore } from '../store/useColorStore';

export function useLang<T>(content: { es: T; en: T }): T {
  const lang = useColorStore((state) => state.lang);
  return content[lang];
}