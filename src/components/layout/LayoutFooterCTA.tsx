import { CTA } from "../sections/CTA";
import { Footer } from "../sections/Footer";

export const LayoutFooterCTA = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="relative z-10">
        <CTA />
        <Footer />
      </div>
    </div>
  );
};
