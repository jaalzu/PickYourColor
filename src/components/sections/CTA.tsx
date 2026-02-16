import { Button } from '../ui/button/Button';
import { useColorStore } from '../../store/useColorStore';

export const CTA = () => {
  const lang = useColorStore((state) => state.lang);


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
      line1: "Todo gran proyecto ",
      line2: "empieza con los",
      highlight3: "Colores",
      button: "Empezar ahora"
    },
    en: {
      line1: "Every great project  ",
      line2: "Start with the right ",
      highlight3: "Colors",
      button: "Start Now"
    }
  };

  const { line1, line2, highlight3, button } = content[lang];

  return (
    <section
      className="py-23 px-8 "
    >
      <div className="max-w-7xl mx-auto text-center">
      <h2 className="text-5xl md:text-6xl mb-8 md:mb-11" style={{ lineHeight: '1.2' }}>
  <span style={{ color: 'var(--color-text)' }}>
    {line1}
  </span>
  <span className="hidden lg:inline"><br /></span>
  {' '}
  <span style={{ color: 'var(--color-text)' }}>
    {line2}
  </span>
  <br />
  <span style={gradientUnderlineStyle} className='hover-underline'>
    {highlight3}
  </span>
</h2>

        <Button 
          variant="primary" 
          padding="12px 60px" 
          borderRadius="5px" 
          opacity={1}
          effect="stars"
        >
          {button}
        </Button>
      </div>
    </section>
  );
};