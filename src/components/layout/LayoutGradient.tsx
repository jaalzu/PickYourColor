import { Hero } from '../sections/Hero';
import { HowItWorks } from '../sections/HowItWorks';
import { Gradient } from '../ui/Gradient';

// src/components/LayoutGradient.tsx
export const LayoutGradient = () => {
  return (
    <div className="relative overflow-hidden"> {/* El overflow-hidden evita scrolls raros por los gradientes */}
      
      {/* El Fondo que conecta ambos */}
      <div
        className="absolute w-full pointer-events-none"
        style={{
          // Lo posicionamos cerca de donde termina el Hero (100vh o 90vh)
          top: '80vh', 
          height: '1300px', // Una altura fija grande para que cubra parte de arriba y parte de abajo
          left: 0,
          transform: 'translateY(-50%)', // Lo centramos justo en la línea divisoria
          background: `
            radial-gradient(ellipse 80% 40% at 20% 50%, var(--color-primary) 0%, transparent 60%),
            radial-gradient(ellipse 60% 40% at 80% 50%, var(--color-secondary) 0%, transparent 60%),
            radial-gradient(ellipse 50% 30% at 50% 50%, var(--color-accent) 0%, transparent 70%)
          `,
          opacity: 0.5,
          zIndex: 0,
        }}
      />

      {/* Las secciones arriba del gradiente */}
      <div className="relative z-10">
        <Hero />
        <HowItWorks />
      </div>
    </div>
  );
};