import { useColorStore } from '../../store/useColorStore'; 

export const Resources = () => {
  const lang = useColorStore((state) => state.lang);

  const content = {
    es: { 
      title: 'Level Up your design skills', 
      subtitle: 'Mejorá tus habilidades de diseño.',
      cards: [
        { text: 'Elegí colores que conviertan.', img: 'imagen1.jpg' },
        { text: 'Exportá tu paleta en un click.', img: 'imagen2.jpg' },
        { text: 'Visualización en tiempo real.', img: 'imagen3.jpg' },
      ]
    },
    en: { 
      title: 'Level Up your design skills', 
      subtitle: 'Improve your design skills.',
      cards: [
        { text: 'Choose colors that convert.', img: 'imagen1.jpg' },
        { text: 'Export your palette in one click.', img: 'imagen2.jpg' },
        { text: 'Real-time visualization.', img: 'imagen3.jpg' },
      ]
    }
  };

  const { title, subtitle, cards } = content[lang];

  return (
    <section className="py-24 md:py-40 px-4 max-w-7xl mx-auto text-center">
      <h2 className="font-mono text-3xl md:text-6xl font-bold mb-6" style={{ color: 'var(--color-text)' }}>
        {title}
      </h2>
      <p className="text-xl md:text-2xl mb-20 opacity-60" style={{ color: 'var(--color-text)' }}>
        {subtitle}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        {cards.map((card, i) => (
          <div key={i} className="flex flex-col items-center group">
            <div className="w-full aspect-square bg-gray-100 rounded-[13px] mb-8 overflow-hidden transition-transform group-hover:scale-[1.02]">
               <img src={`/assets/${card.img}`} alt="Level Up" className="w-full h-full object-cover" />
            </div>
            <p className="text-xl font-light leading-snug" style={{ color: 'var(--color-text)' }}>
              {card.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};