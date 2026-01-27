import { useThemeSync } from './features/Palette/hooks/useThemeSync';
import { PalettePanel } from './features/Palette/components/PalettePanel';
import { PreviewPanel } from './features/Palette/components/PreviewPanel';

function App() {
  useThemeSync();

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-background)' }}>
      <header className="shadow-lg p-6">
        <h1 className="text-3xl font-bold" style={{ color: 'var(--color-text)' }}>
          🎨 Pick Your Color
        </h1>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          <div className="bg-white/10 backdrop-blur rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-6" style={{ color: 'var(--color-text)' }}>
              Color Controls
            </h2>
            <PalettePanel />
          </div>

          <div className="bg-white/10 backdrop-blur rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-6" style={{ color: 'var(--color-text)' }}>
              Live Preview
            </h2>
            <PreviewPanel />
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;