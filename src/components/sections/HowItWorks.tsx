import { useLang } from "../../hooks/useLang";

export const HowItWorks = () => {
  const { title, subtitle, steps } = useLang({
    es: {
      title: "¿Cómo funciona?",
      subtitle: "Obtené un sistema de color funcional en 4 pasos simples",
      steps: [
        {
          number: "1.",
          title: "Base neutral",
          description:
            "Empezá con dos colores neutros para el texto y el fondo. Definen la legibilidad, el contraste y el confort visual de toda la interfaz.",
        },
        {
          number: "2.",
          title: "Roles Primary y Secondary",
          description:
            "Primary se usa para acciones principales, secciones clave y elementos centrales de la UI. Secondary acompaña acciones secundarias y elementos de menor jerarquía.",
        },
        {
          number: "3.",
          title: "Color Accent",
          description:
            "Agregá un color Accent para énfasis visual. Se usa en highlights, iconos, indicadores, estados de foco y micro-interacciones.",
        },
        {
          number: "4.",
          title: "Exportación e integración",
          description:
            "Exportá tu sistema en variables CSS, tokens SCSS o configuración Tailwind, o compartí el link de la paleta para presentarla en cualquier momento!",
        },
      ],
    },
    en: {
      title: "How Does it Work?",
      subtitle: "Build a functional color system in 4 simple steps",
      steps: [
        {
          number: "1.",
          title: "Base",
          description:
            "Start with two neutral colors: one for text and one for background. These define readability, contrast, and visual comfort across the entire interface.",
        },
        {
          number: "2.",
          title: "Primary & Secondary",
          description:
            "Choose your Primary and Secondary colors. Primary is used for main actions, key sections, and core UI elements. Secondary supports secondary actions and less critical interactions.",
        },
        {
          number: "3.",
          title: "Accent",
          description:
            "Add an Accent color for emphasis. Used for highlights, links, icons, visual indicators, focus states, and micro-interactions.",
        },
        {
          number: "4.",
          title: "Export",
          description:
            "Export your system as CSS variables, SCSS tokens, or Tailwind config, or share the palette link to present it anytime!",
        },
      ],
    },
  });

  return (
    <section id="how-it-works" className="px-5 md:pt-15 pb-15">
      <div className="max-w-7xl mx-auto">
        <div className="p-9 md:px-12 md:pt-12 md:pb-20 rounded-[13px] relative">
          <div
            className="absolute inset-0 rounded-[13px]"
            style={{
              backgroundColor: "var(--color-primary)",
              opacity: 0.8,
              zIndex: 0,
            }}
          />

          <div className="relative z-10">
            <h2
              className=" text-4xl md:text-5xl font-bold text-center mb-3"
              style={{ color: "var(--color-text)" }}
            >
              {title}
            </h2>

            <p
              className="text-xl md:text-2xl text-center font-regular mb-10"
              style={{ color: "var(--color-text)", opacity: 0.8 }}
            >
              {subtitle}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-12 md:gap-y-9">
              {steps.map((step) => (
                <div key={step.title}>
                  <h3 className="text-xl font-bold mb-4">
                    <span style={{ color: "var(--color-accent)" }}>
                      {step.number}
                    </span>{" "}
                    <span style={{ color: "var(--color-text)" }}>
                      {step.title}
                    </span>
                  </h3>
                  <p
                    className="text-lg text-left font-regular"
                    style={{ color: "var(--color-text)" }}
                  >
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
