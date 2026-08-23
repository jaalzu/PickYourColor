import { useThemeSync } from "./hooks/useThemeSync";
import { Toolbar } from "./features/Toolbar/components/Toolbar";
import { Resources } from "./components/sections/Resources";
import { Features } from "./components/sections/Features";
import { Pricing } from "./components/sections/Pricing";
import { Testimonials } from "./components/sections/Testimonials";
import { FAQ } from "./components/sections/FAQ";
import { useKeyboardShortcuts } from "./hooks/useKeyboardShortcuts";
import { useURLSync } from "./hooks/useURLSync";
import { Hero } from "./components/sections/Hero";
import { HowItWorks } from "./components/sections/HowItWorks";
import { LayoutFooterCTA } from "./components/layout/LayoutFooterCTA";

function App() {
  useThemeSync();
  useKeyboardShortcuts();
  useURLSync();
  return (
    <>
      <main className="type-scope">
        <Hero />
        <HowItWorks />
        <Features />
        <Pricing />
        <Testimonials />
        <Resources />
        <FAQ />
      </main>
      <div className="type-scope">
        <LayoutFooterCTA />
      </div>
      <Toolbar />
    </>
  );
}

export default App;
