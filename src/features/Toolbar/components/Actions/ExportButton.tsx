// src/features/Toolbar/components/Actions/ExportButton.tsx
import { useState } from 'react';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import { ExportModal } from '../Export/ExportModal';

interface ExportButtonProps {
  className?: string;
}

export const ExportButton = ({ className = "" }: ExportButtonProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        className={`flex flex-col items-center justify-center gap-1 px-4 h-full hover:bg-white/5 transition-colors ${className}`}
        onClick={() => setIsModalOpen(true)}
        aria-label="Export color palette"
      >
        <ArrowDownTrayIcon className="w-6 h-6 text-white" />
        <span className="font-mono text-[16px] md:text-[12.5px] text-white ">Exportar</span>
      </button>

      {isModalOpen && <ExportModal onClose={() => setIsModalOpen(false)} />}
    </>
  );
};