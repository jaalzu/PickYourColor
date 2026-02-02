import { useThemeSync } from './hooks/useThemeSync';
import { Toolbar } from './features/Toolbar/components/Toolbar';
// import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/HeroSection/Hero';
import { useKeyboardShortcuts } from './hooks/useKeyboardShortcuts';
import { useURLSync } from './hooks/useURLSync';

function App() {
  useThemeSync();
useKeyboardShortcuts(); 
 useURLSync();
  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      <Toolbar />
    </>
  );
}

export default App;