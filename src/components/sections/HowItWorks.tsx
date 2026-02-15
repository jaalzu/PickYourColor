import { useColorStore } from '../../store/useColorStore';

export const HowItWorks = () => {
  const lang = useColorStore((state) => state.lang);

  const content = {
    es: {
      title: '¿Cómo funciona?',
      subtitle: 'Obtené un sistema de color funcional en 4 pasos simples',
      steps: [
        {
          number: "1. Base neutral",
          description: "Empezá con dos colores neutros para el texto y el fondo. Definen la legibilidad, el contraste y el confort visual de toda la interfaz."
        },
        {
          number: "2. Roles Primary y Secondary",
          description: "Primary se usa para acciones principales, secciones clave y elementos centrales de la UI. Secondary acompaña acciones secundarias y elementos de menor jerarquía."
        },
        {
          number: "3. Color Accent",
          description: "Agregá un color Accent para énfasis visual. Se usa en highlights, iconos, indicadores, estados de foco y micro-interacciones."
        },
        {
          number: "4. Exportación e integración",
          description: "Exportá tu sistema en variables CSS, tokens SCSS o configuración Tailwind, o compartí el link de la paleta para presentarla en cualquier momento!"
        }
      ]
    },
    en: {
      title: 'How Does it Work?',
      subtitle: 'Build a functional color system in 4 simple steps',
      steps: [
        {
          number: "1. Neutral base",
          description: "Start with two neutral colors: one for text and one for background. These define readability, contrast, and visual comfort across the entire interface."
        },
        {
          number: "2. Primary & Secondary roles",
          description: "Choose your Primary and Secondary colors. Primary is used for main actions, key sections, and core UI elements. Secondary supports secondary actions and less critical interactions."
        },
        {
          number: "3. Accent color",
          description: "Add an Accent color for emphasis. Used for highlights, links, icons, visual indicators, focus states, and micro-interactions."
        },
        {
          number: "4. Export & integration",
          description: "Export your system as CSS variables, SCSS tokens, or Tailwind config, or share the palette link to present it anytime!"
        }
      ]
    }
  };

  const { title, subtitle, steps } = content[lang];

  return (
    <section
      id="how-it-works"
      className="px-6 md:pt-10 pb-20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="p-9 md:px-12 md:pt-12 md:pb-20 rounded-[13px] relative">
          <div
            className="absolute inset-0 rounded-[13px]"
            style={{
              backgroundColor: 'var(--color-primary)',
              opacity: .8,
              zIndex: 0
            }}
          />

          <div className="relative z-10">
            <h2
              className="font-mono text-4xl md:text-5xl font-bold text-center mb-2"
              style={{ color: 'var(--color-text)' }}
            >
              {title}
            </h2>

            <p
              className="text-xl md:text-2xl text-center mb-15"
              style={{ color: 'var(--color-text)' }}
            >
              {subtitle}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-x-12 md:gap-y-10">
              {steps.map((step) => (
                <div key={step.number}>
                  <h3
                    className=" text-xl font-bold mb-2"
                    style={{ color: 'var(--color-accent)' }}
                  >
                    {step.number}
                  </h3>
                  <p
                    className="text-lg text-left font-light"
                    style={{ color: 'var(--color-text)' }}
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