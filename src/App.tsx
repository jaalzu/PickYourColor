import { useThemeSync } from './features/Palette/hooks/useThemeSync';
import { ColorToolbar } from './features/Palette/components/ColorToolbar';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/HeroSection/Hero';

function App() {
  useThemeSync();

  return (
    <>
      <Navbar />
      <Hero />
      <ColorToolbar />
    </>
  );
}

export default App;