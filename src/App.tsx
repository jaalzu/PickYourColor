import { useThemeSync } from './hooks/useThemeSync';
import { Toolbar } from './features/Toolbar/components/Toolbar';
// import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { HowItWorks } from './components/sections/HowItWorks';
import { Features } from './components/sections/Features';
import { Pricing } from './components/sections/Pricing';
import { Companies } from './components/sections/Companies';
import { Testimonials } from './components/sections/Testimonials';
import { CTA } from './components/sections/CTA';
import { FAQ } from './components/sections/FAQ';
import { Footer } from './components/sections/Footer';
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
      <Companies />
      <Pricing />
      <Testimonials />
      <CTA />
      <FAQ />
      <Footer />
      <Toolbar />
    </>
  );
}

export default App;