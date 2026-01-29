// src/features/Toolbar/components/Actions/ExportButton.tsx
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';

export const ExportButton = () => {
  return (
    <button
      className="flex flex-col items-center  justify-center gap-1 px-5 h-full hover:bg-white/5 transition-colors"
      onClick={() => {/* TODO: export */}}
    >
      <ArrowDownTrayIcon className="w-6 h-6 text-white" />
      <span className="text-[12px] text-white uppercase">Exportar</span>
    </button>
  );
};