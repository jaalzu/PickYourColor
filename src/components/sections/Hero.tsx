import { Button } from '../ui/button/Button';
import { Navbar } from '../layout/Navbar';
import { Gradient } from '../ui/Gradient';
import { useColorStore } from '../../store/useColorStore'; // Importamos el store

export const Hero = () => {
  // Consumimos el idioma del store
  const lang = useColorStore((state) => state.lang);

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
      title: 'Visualizá tus colores en un sitio web de verdad.',
      subtitle: '¿No estás seguro de qué colores elegir? Usá la toolbar y probalos al instante.',
      primaryBtn: 'Comenzar',
      secondaryBtn: 'Saber más'
    },
    en: {
      title: 'Visualize your colors on a real website.',
      subtitle: "Not sure which colors to choose? Use the toolbar and test them instantly.",
      primaryBtn: 'Get Started',
      secondaryBtn: 'Learn More'
    }
  };

  const { title, subtitle, primaryBtn, secondaryBtn } = content[lang];

  return (
    <section
      className="min-h-screen lg:min-h-[90vh] flex flex-col relative"
      style={{ backgroundColor: 'var(--color-background)' }}
    >
      <Navbar />
      
      <Gradient />

      <div className="flex-1 flex items-start justify-center px-4 pt-15 md:pt-17 relative z-10">
        <div className="max-w-sm md:max-w-2xl text-center">
          <h1 className="font-mono text-5xl md:text-5xl lg:text-[67px] leading-[1] font-bold mb-6" style={{ color: 'var(--color-text)' }}>
            {title}
          </h1>
          <p className="font-sans text-xl md:text-2xl mb-10 max-w-sm mx-auto md:max-w-lg" style={{ color: 'var(--color-text)' }}>
            {subtitle}
          </p>

          <div className="flex flex-row gap-5 justify-center items-center">
            <Button variant="primary" padding="13px 50px" borderRadius="5px">
              {primaryBtn}
            </Button>
            <Button variant="secondary" padding="13px 19px" borderRadius="5px" opacity={0.7} onClick={scrollToHowItWorks}>
              {secondaryBtn}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};