import { useThemeSync } from './hooks/useThemeSync';
import { Toolbar } from './features/Toolbar/components/Toolbar';
// import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { HowItWorks } from './components/sections/HowItWorks';
import { Features } from './components/sections/Features';
import { Pricing } from './components/sections/Pricing';
import { Companies } from './components/sections/Companies';
import { Testimonials } from './components/sections/Testimonials';
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
      <HowItWorks />
      <Features />
      <Pricing />
      <Testimonials />
      <Companies />
      <Toolbar />
    </>
  );
}

export default App;