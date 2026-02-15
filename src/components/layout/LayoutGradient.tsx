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

      <div className="relative z-10">
        <Hero />
        <HowItWorks />
      </div>
    </div>
  );
};