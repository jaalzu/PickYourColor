import { Bars3Icon } from '@heroicons/react/24/outline';
import { Button } from '../ui/Button';
import { PuzzlePiece } from '../ui/PuzzlePiece';


export const Hero = () => {
  return (
    <section
      className="min-h-screen lg:min-h-[90vh] flex flex-col relative overflow-hidden"
      style={{ backgroundColor: 'var(--color-background)' }}
    >
      {/* Navbar */}
      <nav className="w-full flex justify-between items-center px-6 md:px-12 pt-4 z-20">
  {/* Logo Container */}
  <div className="flex items-center gap-2">
    {/* SVG Icon */}
   <svg 
  viewBox="0 0 256 256" 
  className="w-7  h-7  md:w-8 md:h-8"
>
  <defs>
    <linearGradient id="rainbow-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style={{ stopColor: 'var(--color-primary)' }} />
      <stop offset="33%" style={{ stopColor: 'var(--color-secondary)' }} />
      <stop offset="66%" style={{ stopColor: 'var(--color-accent)' }} />
      <stop offset="100%" style={{ stopColor: 'var(--color-primary)' }} />
    </linearGradient>
  </defs>
  
  <path 
    d="M 228 0 C 172.772 0 128 44.772 128 100 L 128 0 L 0 0 L 0 28 C 0 83.228 44.772 128 100 128 L 0 128 L 0 256 L 28 256 C 83.228 256 128 211.228 128 156 L 128 256 L 256 256 L 256 228 C 256 172.772 211.228 128 156 128 L 256 128 L 256 0 Z" 
    fill="url(#rainbow-gradient)" 
  />
</svg>

    <span 
      className="text-lg md:text-xl font-black tracking-tighter"
      style={{ color: 'var(--color-text)' }}
    >
      PICKYOURCOLOR
    </span>
  </div>

  {/* Menu Icon */}
  <button className="p-1">
    <Bars3Icon 
      className="w-8 h-8" 
      style={{ color: 'var(--color-text)' }} 
    />
  </button>
</nav>

      {/* Contenedor principal*/}
      <div className="flex-1 flex items-start justify-center px-4 pt-15 md:pt-22 relative">
        
       <div className="absolute 
    left-6 bottom-20           
    lg:left-8 lg:top-1/6 lg:bottom-auto   /* Desktop: Arriba a la izquierda */
    space-y-4 z-0 opacity-50 lg:opacity-100"
  >
    <PuzzlePiece colorVar="primary" className="rotate-12 lg:rotate-0" />
    <PuzzlePiece colorVar="secondary" className="-rotate-6 lg:rotate-0" />
  </div>

  {/* Bloque Derecho (Desktop)*/}
  <div className="absolute 
    right-4 bottom-30        
    lg:right-8 lg:top-1/4 lg:bottom-auto  /* Desktop: Arriba a la derecha */
    space-y-4 z-0 opacity-50 lg:opacity-100"
  >
    <PuzzlePiece colorVar="accent" className="-rotate-12 lg:rotate-0" />
    <PuzzlePiece colorVar="primary" className="rotate-6 lg:rotate-0" />
  </div>

        {/* Content */}
        <div className="max-w-sm md:max-w-2xl text-center z-10">
          <h1
            className="text-5xl md:text-5xl lg:text-[67px] leading-[1.150] md:leading-[1.2] font-bold mb-6 px-4 md:px-0"
            style={{ color: 'var(--color-text)' }}
          >
            Visualizá tus colores en un sitio web de verdad.
          </h1>

          <p
            className="text-xl md:text-2xl mb-10 max-w-sm mx-auto px-5 md:max-w-lg md:px-5 "
            style={{ color: 'var(--color-text)', opacity: 1 }}
          >
            ¿No estás seguro de qué colores elegir? Usá la toolbar y probalos al
            instante.
            <span className="hidden md:inline"> (o pulsa el espacio)</span>
          </p>

          <div className="flex flex-row gap-5 justify-center items-center">
            <Button 
              variant="primary" 
              padding="13px 50px" 
              borderRadius="5px" 
              opacity={1}
            >
              Get Started
            </Button>
            <Button 
              variant="secondary" 
              padding="13px 19px" 
              borderRadius="5px" 
              opacity={0.9}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};