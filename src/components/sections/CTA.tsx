import { Button } from '../ui/button/Button';
import { useColorStore } from '../../store/useColorStore';

export const CTA = () => {
  const lang = useColorStore((state) => state.lang);

  const underlineStyle = (color: string) => ({
    color: 'var(--color-text)',
    display: 'inline',
    backgroundImage: `linear-gradient(color-mix(in srgb, ${color} 80%, transparent), color-mix(in srgb, ${color} 65%, transparent))`,
    backgroundPosition: '0 calc(100% - 1px)',
    backgroundSize: '100% 5px',
    backgroundRepeat: 'no-repeat',
    whiteSpace: 'nowrap'
  });

  const gradientUnderlineStyle = {
    color: 'var(--color-text)',
    display: 'inline',
    backgroundImage: `linear-gradient(90deg, color-mix(in srgb, var(--color-primary) 100%, transparent) 0%, color-mix(in srgb, var(--color-secondary) 100%, transparent) 100%)`,
    backgroundPosition: '0 calc(100% - 1px)',
    backgroundSize: '100% 5px',
    backgroundRepeat: 'no-repeat',
    whiteSpace: 'nowrap'
  };

  const content = {
    es: {
      line1: "Dejá de perder tu ",
      highlight1: "valioso tiempo.",
      line2: "Empezá a crear tu ",
      highlight2: "próxima gran idea.",
      line3: "Y empezá ",
      highlight3: "justo aquí y ahora.",
      button: "Empezar ahora"
    },
    en: {
      line1: "Stop wasting your ",
      highlight1: "precious time.",
      line2: "Start creating your ",
      highlight2: "next big idea.",
      line3: "And start ",
      highlight3: "right here and now.",
      button: "Get Started Now"
    }
  };

  const { line1, highlight1, line2, highlight2, line3, highlight3, button } = content[lang];

  return (
    <section
      className="py-26 px-8 "
      style={{ backgroundColor: 'var(--color-background)' }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl mb-8 md:mb-11" style={{ lineHeight: '1.2' }}>
          {/* Primera línea */}
          <span style={{ color: 'var(--color-text)' }}>
            {line1}
            <span style={underlineStyle('var(--color-primary)')} className='hover-underline'>
              {highlight1}
            </span>
          </span>
          <br />
          {/* Segunda línea */}
          <span style={{ color: 'var(--color-text)' }}>
            {line2}
            <span style={underlineStyle('var(--color-secondary)')} className='hover-underline'>
              {highlight2}
            </span>
          </span>
          <br />
          {/* Tercera línea */}
          <span style={{ color: 'var(--color-text)' }}>
            {line3}
            <span style={gradientUnderlineStyle} className='hover-underline'>
              {highlight3}
            </span>
          </span>
        </h2>

        <Button 
          variant="primary" 
          padding="13px 50px" 
          borderRadius="5px" 
          opacity={1}
        >
          {button}
        </Button>
      </div>
    </section>
  );
};