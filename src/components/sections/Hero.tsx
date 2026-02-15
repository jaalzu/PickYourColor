import { Button } from '../ui/button/Button';
import { Navbar } from '../layout/Navbar';
import { Gradient } from '../ui/Gradient';
import { useColorStore } from '../../store/useColorStore'; // Importamos el store

export const Hero = () => {
  // Consumimos el idioma del store
  const lang = useColorStore((state) => state.lang);
  const primaryColor = useColorStore((state) => state.colors.primary);

  const scrollToHowItWorks = () => {
    const element = document.getElementById('how-it-works');
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 50,
        behavior: 'smooth'
      });
    }
  };

  // Diccionario de textos
  const content = {
    es: {
      title: 'Probá tus colores en segundos, no horas.',
      subtitle: 'Elegí tus colores sobre una web real. Usá la toolbar para aplicar y visualizar tus elecciones en tiempo real.',
      primaryBtn: 'Comenzar',
      secondaryBtn: 'Saber más'
    },
    en: {
      title: 'Visualize your colors in seconds, not hours.',
      subtitle: 'Choose your colors on a real website. Use the toolbar to apply and preview your choices in real time.',
      primaryBtn: 'Get Started',
      secondaryBtn: 'Learn More'
    }
  };

  const { title, subtitle, primaryBtn, secondaryBtn } = content[lang];

  return (
    <section
      className="min-h-screen lg:min-h-[90vh] flex flex-col relative overflow-visible"
    >
      <Navbar />

      <div className="flex-1 flex items-start justify-center px-4 pt-15 md:pt-25 relative z-10">
        <div className="max-w-sm md:max-w-2xl text-center">
          
          <h1
            className="font-mono text-5xl md:text-5xl lg:text-[67px] leading-[1] font-bold mb-6"
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
            <Button variant="primary" padding="16px 60px" borderRadius="5px">
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
