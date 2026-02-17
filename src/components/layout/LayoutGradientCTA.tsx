import { CTA } from '../sections/CTA';
import { Footer } from '../sections/Footer';

export const LayoutGradientCTA = () => {
  return (
    <div 
      className="relative overflow-hidden"
      style={{
        background: `linear-gradient(to top, var(--color-primary) 0%, var(--color-background) 80%)`
      }}
    >
      <div className="relative z-10">
        <CTA />
        <Footer />
      </div>
    </div>
  );
};