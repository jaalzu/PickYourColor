import { useMemo } from "react";
import avtrImage from "../../assets/avtr.webp";
import { useColorStore } from "../../store/useColorStore";
import { CompanyIcon, type IconName } from "../icons/MainIcons";
import { useLang } from "../../hooks/useLang";
import { useTestimonialsScroll } from "../../hooks/useTestimonialsScroll";

const content = {
  es: {
    title: "Experiencias reales de usuarios reales",
    testimonials: [
      {
        brand: "LINUX OS",
        iconId: "linux" as IconName,
        name: "Linus Torvalds",
        role: "Creator",
        comment:
          "Eficiencia pura. La interfaz es directa, sin fricciones, y la lógica de navegación es completamente impecable.",
      },
      {
        brand: "META",
        iconId: "meta" as IconName,
        name: "Mark Zuckerberg",
        role: "CEO",
        comment:
          "Días enteros de trabajo y dolores de cabeza eliminados en tan solo unos pocos minutos de uso.",
      },
      {
        brand: "VERCEL",
        iconId: "vercel" as IconName,
        name: "Guillermo Rauch",
        role: "CEO",
        comment:
          "Por error presioné el espacio y de repente ya tenía la paleta de colores perfecta para mi sitio.",
      },
      {
        brand: "VUE.JS",
        iconId: "vue" as IconName,
        name: "Evan You",
        role: "Creator",
        comment:
          "Una herramienta directa, simple y completamente sin ruido. La ejecución es impecable desde el primer uso.",
      },
      {
        brand: "GITHUB",
        iconId: "github" as IconName,
        name: "Nat Friedman",
        role: "Ex CEO",
        comment:
          "La velocidad con la que logré armar una paleta coherente y funcional me dejó absolutamente sin palabras.",
      },
      {
        brand: "FIGMA",
        iconId: "figma" as IconName,
        name: "Dylan Field",
        role: "CEO",
        comment:
          "Nunca pensé que elegir colores para un proyecto podía ser algo tan rápido, claro e intuitivo.",
      },
      {
        brand: "TAILWIND",
        iconId: "tailwind" as IconName,
        name: "Adam Wathan",
        role: "Creator",
        comment:
          "Ver los colores aplicados en una web real en tiempo real cambia completamente cómo uno trabaja con paletas.",
      },
    ],
  },
  en: {
    title: "Real experiences from real users",
    testimonials: [
      {
        brand: "LINUX OS",
        iconId: "linux" as IconName,
        name: "Linus Torvalds",
        role: "Creator",
        comment:
          "Pure efficiency. Direct interface with zero friction, and impeccable navigation logic from start to finish.",
      },
      {
        brand: "META",
        iconId: "meta" as IconName,
        name: "Mark Zuckerberg",
        role: "CEO",
        comment:
          "Entire days of work and headaches completely eliminated in just a few minutes of actual use.",
      },
      {
        brand: "VERCEL",
        iconId: "vercel" as IconName,
        name: "Guillermo Rauch",
        role: "CEO",
        comment:
          "I accidentally pressed space and suddenly I already had the perfect color palette for my site.",
      },
      {
        brand: "VUE.JS",
        iconId: "vue" as IconName,
        name: "Evan You",
        role: "Creator",
        comment:
          "A direct, simple tool with absolutely no noise. Impeccable execution from the very first interaction.",
      },
      {
        brand: "GITHUB",
        iconId: "github" as IconName,
        name: "Nat Friedman",
        role: "Ex CEO",
        comment:
          "The speed at which I built a coherent and functional palette left me completely speechless.",
      },
      {
        brand: "FIGMA",
        iconId: "figma" as IconName,
        name: "Dylan Field",
        role: "CEO",
        comment:
          "Never thought choosing colors for a project could be this fast, clear, and genuinely intuitive.",
      },
      {
        brand: "TAILWIND",
        iconId: "tailwind" as IconName,
        name: "Adam Wathan",
        role: "Creator",
        comment:
          "Seeing colors applied on a real website in real time completely changes how you work with palettes.",
      },
    ],
  },
};

export const Testimonials = () => {
  const { primary, secondary, accent } = useColorStore((state) => state.colors);
  const { title, testimonials } = useLang(content);
  const { scrollRef, handleMouseEnter, handleMouseLeave, handleMouseDown } =
    useTestimonialsScroll();

  const cardColors = [
    primary,
    secondary,
    accent,
    primary,
    secondary,
    accent,
    primary,
  ];
  const doubled = useMemo(
    () => [...testimonials, ...testimonials],
    [testimonials],
  );

  return (
    <section className="py-10 md:py-19 w-full overflow-hidden relative">
      <h2
        className="text-4xl md:text-5xl font-bold text-center mb-8 max-w-xs md:max-w-md lg:max-w-2xl mx-auto"
        style={{ color: "var(--color-text)" }}
      >
        {title}
      </h2>

      <div
        className="hidden md:block absolute left-0 top-0 h-full w-44 z-20 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, var(--color-background) 40%, transparent)",
        }}
      />
      <div
        className="hidden md:block absolute right-0 top-0 h-full w-44 z-20 pointer-events-none"
        style={{
          background:
            "linear-gradient(to left, var(--color-background) 40%, transparent)",
        }}
      />

      <div
        ref={scrollRef}
        className="flex gap-4 md:gap-6 overflow-x-auto no-scrollbar px-6 md:px-24"
        style={{ cursor: "grab" }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseDown}
      >
        {doubled.map((t, i) => (
          <div
            key={i}
            className="relative flex flex-col justify-between flex-shrink-0"
            style={{
              width: "20.2rem",
              maxWidth: "72svw",
              minHeight: "24rem",
              padding: "2rem",
              borderRadius: "1.5rem",
            }}
          >
            <div
              className="absolute inset-0"
              style={{
                backgroundColor: cardColors[i % cardColors.length],
                opacity: 0.2,
                borderRadius: "1.5rem",
                zIndex: 0,
              }}
            />

            <div className="relative z-10 flex flex-col gap-6">
              <div
                className="flex items-center gap-3"
                style={{ color: "var(--color-text)" }}
              >
                <CompanyIcon name={t.iconId} size={28} />
                <span className="font-black text-lg tracking-tight uppercase">
                  {t.brand}
                </span>
              </div>
              <p
                className="text-xl leading-[1.3] italic font-medium"
                style={{ color: "var(--color-text)" }}
              >
                "{t.comment}"
              </p>
            </div>

            <div className="relative z-10 flex items-center gap-3 mt-8">
              <div className="w-10 h-10 rounded-full overflow-hidden shrink-0">
                <img
                  loading="lazy"
                  src={avtrImage}
                  alt={t.name}
                  className="w-full h-full object-cover grayscale"
                />
              </div>
              <div style={{ color: "var(--color-text)" }}>
                <h3 className="font-bold text-base leading-none mb-1">
                  {t.name}
                </h3>
                <p className="text-xs uppercase tracking-[0.08em] font-bold">
                  {t.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
