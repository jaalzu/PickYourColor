import * as Dialog from '@radix-ui/react-dialog';
import { XMarkIcon, ClipboardDocumentIcon, ClipboardDocumentCheckIcon } from '@heroicons/react/24/outline';
import { ExportOption } from './ExportOption';
import { useExportLogic } from './useExportLogic';

interface ExportModalProps {
  open: boolean;
  onClose: () => void;
}

export const ExportModal = ({ open, onClose }: ExportModalProps) => {
  const { 
    selectedFormat, 
    setSelectedFormat, 
    colorFormat, 
    toggleColorFormat, 
    exportCode, 
    copied, 
    handleCopy 
  } = useExportLogic();

  return (
    <Dialog.Root open={open} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-40 bg-black/20 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        
        <Dialog.Content className="fixed bottom-24 md:bottom-38 left-1/2 -translate-x-1/2 z-50 bg-[#1a1a2e] rounded-lg p-5 w-[95vw] md:w-[550px] border border-white/10 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95">
          
          {/* Header */}
          <div className="flex justify-between items-center mb-3">
            <Dialog.Title className="text-sm font-bold text-white uppercase tracking-wide">
              Export Palette
            </Dialog.Title>
            <Dialog.Close asChild>
              <button className="text-gray-400 hover:text-white transition">
                <XMarkIcon className="w-5 h-5" />
              </button>
            </Dialog.Close>
          </div>

          {/* Format Options */}
          <div className="flex items-center gap-3 mb-3 overflow-x-auto pb-1 scrollbar-none">
            <ExportOption label="CSS" isSelected={selectedFormat === 'css'} onClick={() => setSelectedFormat('css')} />
            <ExportOption label="SCSS" isSelected={selectedFormat === 'scss'} onClick={() => setSelectedFormat('scss')} />
            <ExportOption label="TAILWIND" isSelected={selectedFormat === 'tailwind'} onClick={() => setSelectedFormat('tailwind')} />
          </div>

          {/* Color Format Toggle */}
          <div className="flex items-center gap-3 mb-4">
            {['HEX', 'RGB'].map((format) => (
              <button
                key={format}
                onClick={toggleColorFormat}
                className={`px-3 py-1 text-[12px] border border-white/20 font-bold rounded transition-all ${
                  colorFormat === format ? 'bg-white text-black' : 'bg-white/10 text-gray-400 hover:bg-white/20'
                }`}
              >
                {format}
              </button>
            ))}
          </div>

          <div className="relative">
            <pre className="bg-black/40 border border-white/20 rounded-lg p-3 overflow-x-auto text-[14px] text-gray-300 max-h-[65vh] md:max-h-70 scrollbar-none">
              {exportCode}
            </pre>
            
            <button
              onClick={handleCopy}
              className="absolute top-2 right-2 p-1.5 hover:bg-white/10 rounded-lg transition-colors border border-white/20"
              title="Copy to clipboard"
            >
              {copied ? (
                <ClipboardDocumentCheckIcon className="w-5 h-5 text-green-500" />
              ) : (
                <ClipboardDocumentIcon className="w-5 h-5 text-white/70" />
              )}
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};