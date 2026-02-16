import { CTA } from '../sections/CTA';
import { Footer } from '../sections/Footer';

export const LayoutGradientCTA = () => {
  return (
    <div className="relative overflow-hidden">
      {/* blob primary — izquierda */}
<div
  className="absolute pointer-events-none bottom-[470px] md:bottom-[340px]"
  style={{
    background: 'var(--color-secondary)',
    width: 'clamp(300px, 50vw, 800px)',
    height: '150px',
    borderRadius: '20%',
    left: '-100px',
    filter: 'blur(60px)',
    opacity: 0.7,
    zIndex: 0,
  }}
/>

{/* blob secondary — centro */}
<div
  className="absolute pointer-events-none bottom-[470px] md:bottom-[340px]"
  style={{
    background: 'var(--color-accent)',
    width: 'clamp(200px, 40vw, 600px)',
    height: '150px',
    borderRadius: '20%',
    left: '50%',
    transform: 'translateX(-50%)',
    filter: 'blur(60px)',
    opacity: 0.55,
    zIndex: 0,
  }}
/>

{/* blob accent — derecha */}
<div
  className="absolute pointer-events-none bottom-[470px] md:bottom-[340px]"
  style={{
    background: 'var(--color-primary)',
    width: 'clamp(300px, 50vw, 800px)',
    height: '150px',
    borderRadius: '20%',
    right: '-50px',
    filter: 'blur(60px)',
    opacity: 0.7,
    zIndex: 0,
  }}
/>
      <div className="relative z-10">
        <CTA />
        <Footer />
      </div>
    </div>
  );
};