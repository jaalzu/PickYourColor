import { useThemeSync } from './hooks/useThemeSync';
import { Toolbar } from './features/Toolbar/components/Toolbar';
import { Resources } from './components/sections/Resources';
import { Features } from './components/sections/Features';
import { Pricing } from './components/sections/Pricing';
import { Companies } from './components/sections/Companies';
import { Testimonials } from './components/sections/Testimonials';
import { FAQ } from './components/sections/FAQ';
import { useKeyboardShortcuts } from './hooks/useKeyboardShortcuts';
import { useURLSync } from './hooks/useURLSync';
import { LayoutHeroHowItWorks } from './components/layout/LayoutHeroHowItWorks';
import { LayoutFooterCTA } from './components/layout/LayoutFooterCTA';


function App() {
  useThemeSync();
  useKeyboardShortcuts(); 
  useURLSync();
  return (
    <>
        <main>
      <LayoutHeroHowItWorks />
      <Companies />
      <Features />
      <Pricing />
      <Testimonials />
      <Resources />
      <FAQ />
          </main>
      <LayoutFooterCTA />
      <Toolbar />
    </>
  );
}

export default App;