import { useState, useEffect } from 'react';
import { LinkIcon, CheckIcon } from '@heroicons/react/24/outline';

export const ShareButton = ({ className = "" }: { className?: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
    } catch (err) {
      console.error("Error al copiar:", err);
    }
  };

  useEffect(() => {
    if (copied) {
      const timeout = setTimeout(() => setCopied(false), 2000);
      return () => clearTimeout(timeout);
    }
  }, [copied]);

  return (
    <button
  aria-label="Copy page URL"
  className={`flex flex-col items-center justify-center gap-1 w-22 h-full hover:bg-white/5 transition-colors ${className}`}
  onClick={handleCopy}
>
      {copied ? (
        <CheckIcon className="w-6 h-6 text-green-500" />
      ) : (
        <LinkIcon className="w-6 h-6 text-white" />
      )}
      <span className={`text-[12px] tracking-wide  ${copied ? 'text-green-500' : 'text-white'}`}>
        {copied ? 'Copiado' : 'Copiar URL'}
      </span>
    </button>
  );
};