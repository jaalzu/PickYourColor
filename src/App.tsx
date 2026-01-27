import { useThemeSync } from './features/Palette/hooks/useThemeSync';
import { ColorToolbar } from './features/Palette/components/ColorToolbar';
import { PreviewPanel } from './features/Palette/components/PreviewPanel';

function App() {
  useThemeSync();

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-background)' }}>
      <header className="p-6">
        <h1 className="text-3xl font-bold text-center" style={{ color: 'var(--color-text)' }}>
          🎨 Pick Your Color
        </h1>
      </header>

      <div className="max-w-5xl mx-auto px-4 py-8">
        <PreviewPanel />
      </div>

      <ColorToolbar />
    </div>
  );
}

export default App;