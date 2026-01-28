// src/components/sections/Hero.tsx
import { Button } from '../../ui/Button';
import { PuzzlePiece } from '../../ui/PuzzlePiece';

export const Hero = () => {
  return (
    <section
      className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
      style={{ backgroundColor: 'var(--color-background)' }}
    >
      {/* Decorative puzzle pieces */}
      <div className="hidden lg:block absolute left-8 top-1/4 space-y-4">
        <PuzzlePiece colorVar="primary" />
        <PuzzlePiece colorVar="secondary" />
      </div>

      <div className="hidden lg:block absolute right-8 top-1/3 space-y-4">
        <PuzzlePiece colorVar="accent" />
        <PuzzlePiece colorVar="primary" />
      </div>

      {/* Content */}
      <div className="max-w-2xl text-center z-10">
        <h1
          className="text-2xl md:text-4xl lg:text-[25px] leading-[31px] font-normal mb-4"
          style={{ color: 'var(--color-text)' }}
        >
          Visualizá tus colores en un sitio web de verdad.
        </h1>

        <p
          className="text-base md:text-lg mb-8"
          style={{ color: 'var(--color-text)', opacity: 0.8 }}
        >
          ¿No estás seguro de qué colores elegir? Usá la toolbar y probalos al
          instante.
          <span className="hidden md:inline"> (o pulsa el espacio)</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="primary">Get Started</Button>
          <Button variant="secondary">Learn More</Button>
        </div>
      </div>
    </section>
  );
};