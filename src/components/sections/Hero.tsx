import { Button } from '../ui/button/Button';
import { Navbar } from '../layout/Navbar';
import { useColorStore } from '../../store/useColorStore';
import { useLang } from '../../hooks/useLang';

export const Hero = () => {
  const primaryColor = useColorStore((state) => state.colors.primary);

  const { title, subtitle, primaryBtn, secondaryBtn } = useLang({
    es: {
      title: 'Obten los colores de tu marca en segundos, no horas.',
      subtitle: 'Elegí tus colores sobre una web real. Usá la toolbar para aplicar y visualizar tus elecciones en tiempo real.',
      primaryBtn: 'Comenzar',
      secondaryBtn: 'Saber más'
    },
    en: {
      title: 'Get your colors brand in seconds, not hours.',
      subtitle: 'Choose your colors on a real website. Use the toolbar to apply and preview your choices in real time.',
      primaryBtn: 'Get Started',
      secondaryBtn: 'Learn More'
    }
  });

  const scrollToHowItWorks = () => {
    const element = document.getElementById('how-it-works');
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 50,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      className="min-h-[92vh] lg:min-h-[90vh] flex flex-col relative overflow-visible"
    >
      <Navbar />

      <div className="flex-1 flex items-start justify-center px-4 pt-15 md:pt-20 relative z-10">
        <div className="max-w-sm md:max-w-4xl text-center">
          
          <h1
            className=" text-5xl md:text-5xl lg:text-[77px] leading-[1] font-bold mb-8"
            style={{ color: 'var(--color-text)' }}
          >
            {title}
          </h1>

          <p
            className=" text-lg md:text-xl mb-10 max-w-sm mx-auto md:max-w-lg"
            style={{ color: 'var(--color-text)' }}
          >
            {subtitle}
          </p>

          <div className="flex flex-col gap-3 justify-center items-center">
            <Button variant="primary" padding="12px 60px" borderRadius="5px" effect="stars">
              {primaryBtn}
            </Button>

            <span
              onClick={scrollToHowItWorks}
              className="hero-learn-more font-mono text-sm cursor-pointer"
              style={{
                color: 'var(--color-text)',
                '--primary-color': primaryColor,
              } as React.CSSProperties}
            >
              {secondaryBtn}
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};