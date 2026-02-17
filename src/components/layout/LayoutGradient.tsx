import { Hero } from '../sections/Hero';
import { HowItWorks } from '../sections/HowItWorks';

export const LayoutGradient = () => {
  return (
    <div className="relative overflow-hidden">
      
      {/* blob primary — izquierda */}
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          background: 'var(--color-primary)',
          width: '700px',
          height: '700px',
          top: '200px',
          left: '-150px',
          filter: 'blur(120px)',
          opacity: 0.5,
          zIndex: 0,
          animation: 'fadeIn 1.5s ease-in',
        }}
      />

      {/* blob secondary — centro abajo */}
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          background: 'var(--color-secondary)',
          width: '700px',
          height: '700px',
          top: '350px',
          left: '50%',
          transform: 'translateX(-50%)',
          filter: 'blur(120px)',
          opacity: 0.5,
          zIndex: 0,
        }}
      />

      {/* blob accent — derecha */}
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          background: 'var(--color-accent)',
          width: '700px',
          height: '700px',
          top: '200px',
          right: '-150px',
          filter: 'blur(120px)',
          opacity: 0.5,
          zIndex: 0,
        }}
      />

      {/* noise overlay */}
     {/* noise overlay */}
<svg
  className="absolute inset-0 w-full h-full pointer-events-none"
  style={{ 
    opacity: 0.3, 
    zIndex: 1,
    maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)',
    WebkitMaskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)',
  }}
>
  <filter id="noise">
    <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch" />
  </filter>
  <rect width="100%" height="100%" filter="url(#noise)" />
</svg>

      <div className="relative z-10">
        <Hero />
        <HowItWorks />
      </div>
    </div>
  );
};