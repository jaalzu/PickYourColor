import { useLang } from "../../hooks/useLang";

export const HowItWorks = () => {
  const { title, subtitle, steps } = useLang({
    es: {
      title: "¿Cómo funciona?",
      subtitle: "Obtené un sistema de color funcional en 4 pasos\u00A0simples.",
      steps: [
        {
          number: "01",
          title: "Base neutral",
          description: "Elegí texto y fondo. Definen legibilidad y contraste.",
        },
        {
          number: "02",
          title: "Primary y Secondary",
          description: "Acciones principales y secundarias de tu interfaz.",
        },
        {
          number: "03",
          title: "Color Accent",
          description: "Énfasis en highlights, íconos y micro-interacciones.",
        },
        {
          number: "04",
          title: "Exportá y compartí",
          description: "CSS, SCSS o Tailwind — o compartí el link directo.",
        },
      ],
    },
    en: {
      title: "How Does it Work?",
      subtitle: "Build a functional color system in 4 simple\u00A0steps.",
      steps: [
        {
          number: "01",
          title: "Base",
          description:
            "Pick text and background. Defines readability and contrast.",
        },
        {
          number: "02",
          title: "Primary & Secondary",
          description: "Main and supporting actions across your interface.",
        },
        {
          number: "03",
          title: "Accent",
          description: "Emphasis for highlights, icons and micro-interactions.",
        },
        {
          number: "04",
          title: "Export & share",
          description: "CSS, SCSS or Tailwind — or just share the link.",
        },
      ],
    },
  });

  return (
    <section id="how-it-works" className="px-5 py-20 md:py-12 md:mb-10">
      <div className="relative max-w-7xl mx-auto">
        <div
          className="absolute inset-0 rounded-[13px]"
          style={{
            backgroundColor:
              "color-mix(in srgb, var(--color-secondary) 6%, transparent)",
          }}
        />

        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start p-8 md:p-12 rounded-[13px]" style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04), 0 0 8px rgba(0,0,0,0.03)" }}>
          {/* Izquierda: título + subtítulo */}
          <div>
            <h2
              className="text-3xl md:text-4xl font-bold mb-4 leading-tight"
              style={{ color: "var(--color-text)" }}
            >
              {title}
            </h2>
            <p
              className="text-lg leading-relaxed"
              style={{ color: "var(--color-text)", opacity: 0.75 }}
            >
              {subtitle}
            </p>
          </div>

          {/* Derecha: 4 puntos numerados */}
          <div className="flex flex-col gap-10">
            {steps.map((step) => (
              <div key={step.title} className="flex items-start gap-4">
                <span
                  className="text-2xl font-bold leading-none shrink-0 tabular-nums"
                  style={{ color: "var(--color-accent)" }}
                >
                  {step.number}
                </span>
                <div>
                  <h3
                    className="font-semibold text-lg mb-1"
                    style={{ color: "var(--color-text)" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-base leading-relaxed"
                    style={{ color: "var(--color-text)", opacity: 0.6 }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
