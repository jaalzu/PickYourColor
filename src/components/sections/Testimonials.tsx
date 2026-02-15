import avtrImage from '../../assets/avtr.webp';
import { useColorStore } from '../../store/useColorStore';
import { CompanyIcon, type IconName } from '../icons/MainIcons'; // Asegúrate de la ruta correcta
import { useRef, useEffect } from 'react';

export const Testimonials = () => {
  const lang = useColorStore((state) => state.lang);
  const { primary, secondary, accent } = useColorStore((state) => state.colors);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isPaused = useRef(false);
const themeMode = useColorStore((state) => state.themeMode);
const textColor = themeMode === 'dark' ? '#ffffff' : '#000000';

  const cardColors = [primary, secondary, accent, primary, secondary, accent, primary];

  const content = {
    es: {
      title: "Experiencias reales de usuarios reales",
     testimonials: [
        { brand: "LINUX OS", iconId: "linux" as IconName, name: "Linus Torvalds", role: "Creator", comment: "Eficiencia pura. La interfaz es directa, sin fricciones, y la lógica de navegación es completamente impecable." },
        { brand: "META", iconId: "meta" as IconName, name: "Mark Zuckerberg", role: "CEO", comment: "Días enteros de trabajo y dolores de cabeza eliminados en tan solo unos pocos minutos de uso." },
        { brand: "VERCEL", iconId: "vercel" as IconName, name: "Guillermo Rauch", role: "CEO", comment: "Por error presioné el espacio y de repente ya tenía la paleta de colores perfecta para mi sitio." },
        { brand: "VUE.JS", iconId: "vue" as IconName, name: "Evan You", role: "Creator", comment: "Una herramienta directa, simple y completamente sin ruido. La ejecución es impecable desde el primer uso." },
        { brand: "GITHUB", iconId: "github" as IconName, name: "Nat Friedman", role: "Ex CEO", comment: "La velocidad con la que logré armar una paleta coherente y funcional me dejó absolutamente sin palabras." },
        { brand: "FIGMA", iconId: "figma" as IconName, name: "Dylan Field", role: "CEO", comment: "Nunca pensé que elegir colores para un proyecto podía ser algo tan rápido, claro e intuitivo." },
        { brand: "TAILWIND", iconId: "tailwind" as IconName, name: "Adam Wathan", role: "Creator", comment: "Ver los colores aplicados en una web real en tiempo real cambia completamente cómo uno trabaja con paletas." },
      ]

    },
    en: {
      title: "Real experiences from real users",
     testimonials: [
        { brand: "LINUX OS", iconId: "linux" as IconName, name: "Linus Torvalds", role: "Creator", comment: "Pure efficiency. Direct interface with zero friction, and impeccable navigation logic from start to finish." },
        { brand: "META", iconId: "meta" as IconName, name: "Mark Zuckerberg", role: "CEO", comment: "Entire days of work and headaches completely eliminated in just a few minutes of actual use." },
        { brand: "VERCEL", iconId: "vercel" as IconName, name: "Guillermo Rauch", role: "CEO", comment: "I accidentally pressed space and suddenly I already had the perfect color palette for my site." },
        { brand: "VUE.JS", iconId: "vue" as IconName, name: "Evan You", role: "Creator", comment: "A direct, simple tool with absolutely no noise. Impeccable execution from the very first interaction." },
        { brand: "GITHUB", iconId: "github" as IconName, name: "Nat Friedman", role: "Ex CEO", comment: "The speed at which I built a coherent and functional palette left me completely speechless." },
        { brand: "FIGMA", iconId: "figma" as IconName, name: "Dylan Field", role: "CEO", comment: "Never thought choosing colors for a project could be this fast, clear, and genuinely intuitive." },
        { brand: "TAILWIND", iconId: "tailwind" as IconName, name: "Adam Wathan", role: "Creator", comment: "Seeing colors applied on a real website in real time completely changes how you work with palettes." },
      ]
    }
  };

  const current = content[lang] || content.en;
  const doubled = [...current.testimonials, ...current.testimonials];

  const position = useRef(0);

useEffect(() => {
  const el = scrollRef.current;
  if (!el) return;
  let animId: number;

  setTimeout(() => {
    position.current = el.scrollWidth / 2;
    el.scrollLeft = position.current;
  }, 50);

  const scroll = () => {
    if (!isPaused.current && el) {
      position.current += 0.6;
      el.scrollLeft = Math.floor(position.current);
      if (position.current >= el.scrollWidth) {
        position.current = el.scrollWidth / 2;
        el.scrollLeft = position.current;
      }
    }
    animId = requestAnimationFrame(scroll);
  };

  animId = requestAnimationFrame(scroll);
  return () => cancelAnimationFrame(animId);
}, []);

 return (
    <section className="py-19 w-full overflow-hidden relative">
      <h2
        className="font-mono text-4xl md:text-5xl font-bold text-center mb-12"
        style={{ color: 'var(--color-text)' }}
      >
        {current.title}
      </h2>

      {/* Gradients para el desvanecido lateral */}
      <div className="hidden md:block absolute left-0 top-0 h-full w-44 z-20 pointer-events-none"
        style={{ background: 'linear-gradient(to right, var(--color-background) 40%, transparent)' }} />
      <div className="hidden md:block absolute right-0 top-0 h-full w-44 z-20 pointer-events-none"
        style={{ background: 'linear-gradient(to left, var(--color-background) 40%, transparent)' }} />

      <div
        ref={scrollRef}
        className="flex gap-4 md:gap-6 overflow-x-auto no-scrollbar px-6 md:px-24"
        style={{ cursor: 'grab' }}
        onMouseEnter={() => { isPaused.current = true; }}
        onMouseLeave={() => { isPaused.current = false; }}
        onMouseDown={(e) => {
          const el = scrollRef.current;
          if (!el) return;
          isPaused.current = true;
          const startX = e.pageX - el.offsetLeft;
          const startScroll = el.scrollLeft;
          const onMove = (ev: MouseEvent) => {
            el.scrollLeft = startScroll - (ev.pageX - el.offsetLeft - startX);
          };
          const onUp = () => {
            window.removeEventListener('mousemove', onMove);
            window.removeEventListener('mouseup', onUp);
          };
          window.addEventListener('mousemove', onMove);
          window.addEventListener('mouseup', onUp);
        }}
      >
        {doubled.map((t, i) => {
          const bgColor = cardColors[i % cardColors.length];

          return (
            <div
              key={i}
              className="relative flex flex-col justify-between flex-shrink-0"
              style={{
                width: '20.2rem',
                maxWidth: '72svw',
                minHeight: '24rem',
                padding: '2rem',
                borderRadius: '1.5rem',
              }}
            >
              <div
                className="absolute inset-0"
                style={{
                  backgroundColor: bgColor,
                  opacity: 0.2,
                  borderRadius: '1.5rem',
                  zIndex: 0,
                }}
              />

              <div className="relative z-10 flex flex-col gap-6">
                <div className="flex items-center gap-3" style={{ color: textColor }}>
                  {/* Aquí usamos nuestro componente centralizado */}
                  <CompanyIcon name={t.iconId} size={28} />
                  <span className="font-black text-lg tracking-tight uppercase">{t.brand}</span>
                </div>

                <p className="text-xl md:text-xl leading-[1.3] italic font-medium" style={{ color: textColor }}>
                  "{t.comment}"
                </p>
              </div>

              <div className="relative z-10 flex items-center gap-3 mt-8">
                <div className="w-10 h-10 rounded-full overflow-hidden shrink-0">
                  <img src={avtrImage} alt={t.name} className="w-full h-full object-cover grayscale" />
                </div>
                <div style={{ color: textColor }}>
                  <h4 className="font-bold text-base leading-none mb-1">{t.name}</h4>
                  <p className="text-xs uppercase tracking-[0.08em] font-bold">{t.role}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};