// src/hooks/useCopyToClipboard.ts
import { useCallback, useEffect, useState } from "react";

export const useCopyToClipboard = (resetDelay = 2000) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timeout = setTimeout(() => setCopied(false), resetDelay);
    return () => clearTimeout(timeout);
  }, [copied, resetDelay]);

  const copy = useCallback(async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      return true;
    } catch (err) {
      console.error("Clipboard write failed:", err);
      return false;
    }
  }, []);

  return { copied, copy };
};
