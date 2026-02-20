import paletteImg from '../../assets/resources/palette.webp';
import systemImg from '../../assets/resources/system.webp';
import accessImg from '../../assets/resources/access.webp';
import contrastImg from '../../assets/resources/contrast.webp';
import { Button } from '../ui/button/Button';
import { useLang } from '../../hooks/useLang';

export const Resources = () => {
  const current = useLang({
    es: { 
      title: 'Mejora tus habilidades con recursos gratuitos',
      btnText: 'Ver todos los artículos',
      cards: [
        { text: 'Psicología del color aplicada.', link: 'https://www.colorpsychology.org/', img: paletteImg },
        { text: 'Material Design color system.', link: 'https://m2.material.io/design/color', img: systemImg },
        { text: 'Accesibilidad en el diseño web.', link: 'https://webaim.org/', img: accessImg },
{ text: 'Las leyes del diseño UX.', link: 'https://lawsofux.com/', img: contrastImg }
      ]
    },
    en: { 
      title: 'Level Up your skills with free resources',
      btnText: 'View all articles',
      cards: [
        { text: 'Color psychology in design.', link: 'https://www.colorpsychology.org/', img: paletteImg },
        { text: 'Material Design color system.', link: 'https://m2.material.io/design/color', img: systemImg },
        { text: 'Web accessibility standards.', link: 'https://webaim.org/', img: accessImg },
{ text: 'The laws of UX design.', link: 'https://lawsofux.com/', img: contrastImg }
      ]
    }
  });

  return (
    <section className="py-18 px-6 md:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left mb-10 gap-3">
        <h2
          className="text-2xl md:text-3xl font-medium max-w-md" 
          style={{ color: 'var(--color-text)' }}
        >
          {current.title}
        </h2>
        <Button variant="primary" padding="10px 20px" borderRadius="5px">
          {current.btnText}
        </Button>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
        {current.cards.map((card, i) => (
          <a 
            key={i}
            href={card.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col group"
          >
            <div className="w-full aspect-video rounded-[10px] mb-3 overflow-hidden bg-zinc-800">
              <img
                src={card.img}
                alt={card.text}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
              />
            </div>
            <p
              className="text-sm md:text-lg group-hover:opacity-70 transition-opacity"
              style={{ color: 'var(--color-text)' }}
            >
              {card.text}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
};