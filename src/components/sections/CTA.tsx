import { Button } from '../ui/button/Button';
import { useLang } from '../../hooks/useLang';

export const CTA = () => {
  const { line1, line2, line3, button } = useLang({
    es: {
      line1: "Todo gran proyecto ",
      line2: "empieza con los",
      line3: "Colores",
      button: "Empezar ahora"
    },
    en: {
      line1: "Every great project  ",
      line2: "Start with the right ",
      line3: "Colors",
      button: "Start Now"
    }
  });

  return (
    <section className="pt-24 pb-5 md:py-23 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl md:text-7xl mb-12 md:mb-11 font-bold  leading-[1.1]" >
          <span style={{ color: 'var(--color-text)' }}>
            {line1}
          </span>
          
          <span className="hidden lg:inline"><br /></span>
          {' '}
          <span style={{ color: 'var(--color-text)' }}>
            {line2}
          </span>
          <br />
          <span style={{ color: 'var(--color-text)', fontFamily: 'Caveat,cursive', fontWeight: 700, fontSize: '4.8rem' }}>
            {line3}
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