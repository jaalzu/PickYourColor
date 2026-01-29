// src/features/Toolbar/components/Actions/ExportButton.tsx
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';

// 1. Definimos que puede recibir className (opcional)
interface ExportButtonProps {
  className?: string;
}

export const ExportButton = ({ className = "" }: ExportButtonProps) => {
  return (
    <button
      // 2. Mantenemos TUS clases originales y le pegamos la que viene por props al final
      className={`flex flex-col items-center justify-center gap-1 px-5 h-full hover:bg-white/5 transition-colors ${className}`}
      onClick={() => {/* TODO: export */}}
    >
      <ArrowDownTrayIcon className="w-6 h-6 text-white" />
      <span className="text-[12px] text-white uppercase">Exportar</span>
    </button>
  );
};