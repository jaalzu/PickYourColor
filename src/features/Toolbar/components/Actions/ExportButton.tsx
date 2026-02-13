// src/features/Toolbar/components/Actions/ExportButton.tsx
import { useState } from 'react';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import { ExportModal } from '../Export/ExportModal';
import { Tooltip } from '../../../../components/ui/Tooltip';
import { useToolbarTextContent } from '../../hooks/useToolbarTextContent';


interface ExportButtonProps {
  className?: string;
}

export const ExportButton = ({ className = "" }: ExportButtonProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const t = useToolbarTextContent().export;

  

  return (
    <>
      <Tooltip content={t.tooltip}>
        <button
          className={`flex flex-col items-center justify-center gap-1 px-4 h-full hover:bg-white/5 transition-colors ${className}`}
          onClick={() => setIsModalOpen(true)}
          aria-label={t.aria}
        >
          <ArrowDownTrayIcon className="w-6 h-6 text-white" />
          <span className="font-mono text-[16px] md:text-[12.5px] text-white">{t.label}</span>
        </button>
      </Tooltip>

      <ExportModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};