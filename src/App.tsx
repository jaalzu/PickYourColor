import { useThemeSync } from './hooks/useThemeSync';
import { Toolbar } from './features/Toolbar/components/Toolbar';
// import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/HeroSection/Hero';
import { useKeyboardShortcuts } from './hooks/useKeyboardShortcuts';
function App() {
  useThemeSync();
useKeyboardShortcuts(); // Activamos los shortcuts globalmente
  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      <Toolbar />
    </>
  );
}

export default App;