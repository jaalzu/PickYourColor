import { useState, useEffect } from 'react';
import { LinkIcon, CheckIcon } from '@heroicons/react/24/outline';
import { Tooltip } from '../../../../components/ui/Tooltip';
import { useToolbarTextContent } from '../../hooks/useToolbarTextContent';

export const ShareButton = ({ className = "" }: { className?: string }) => {
  const [copied, setCopied] = useState(false);
  const t = useToolbarTextContent().copyUrl;

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
        <Tooltip content={t.tooltip}>

    <button
  aria-label={t.aria}
  className={`flex flex-col items-center justify-center gap-1 w-22 h-full hover:bg-white/5 transition-colors ${className}`}
  onClick={handleCopy}
>
      {copied ? (
        <CheckIcon className="w-6 h-6 text-green-500" />
      ) : (
        <LinkIcon className="w-6 h-6 text-white" />
      )}
      <span className={`text-[16px] md:text-[12.5px] font-mono  ${copied ? 'text-green-500' : 'text-white'}`}>
        {t.label}
      </span>
    </button>
        </Tooltip>
  );
};