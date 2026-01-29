import { useThemeSync } from './hooks/useThemeSync';
import { Toolbar } from './features/Toolbar/components/Toolbar';
// import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/HeroSection/Hero';

function App() {
  useThemeSync();

  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      <Toolbar />
    </>
  );
}

export default App;