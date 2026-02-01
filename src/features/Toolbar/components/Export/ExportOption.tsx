// src/features/Toolbar/components/Export/ExportOption.tsx
interface ExportOptionProps {
  label: string;
  isSelected: boolean;
  onClick: () => void;
}

export const ExportOption = ({ label, isSelected, onClick }: ExportOptionProps) => {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1 text-[10px] border border-white/20 font-bold rounded transition-all ${
        isSelected 
          ? 'bg-white text-black' 
          : 'bg-white/10 text-gray-400 hover:bg-white/20'
      }`}
    >
      {label}
    </button>
  );
};