import { useColorStore } from '../../store/useColorStore';

export const HowItWorks = () => {
  const lang = useColorStore((state) => state.lang);

  const content = {
    es: {
      title: '¿Cómo funciona?',
      subtitle: 'Obtené tu paleta de colores en 4 simples pasos',
      steps: [
        {
          number: "1",
          description: "Empezá con dos colores neutros para el texto y el fondo."
        },
        {
          number: "2",
          description: "Elegí tus colores primario y secundario. El primario es para CTAs principales y el secundario para botones menos importantes."
        },
        {
          number: "3",
          description: "El color de acento es adicional. Aparece en imágenes, resaltados, hipervínculos, iconos, etc."
        },
        {
          number: "4",
          description: "Exportá tus colores en CSS, SCSS o Tailwind, ¡o compartí el link para que todos vean tu paleta!"
        }
      ]
    },
    en: {
      title: 'How Does it Work?',
      subtitle: 'Get your color palette in 4 simple steps',
      steps: [
        {
          number: "1",
          description: "Start with two neutral colors for the text and the background."
        },
        {
          number: "2",
          description: "Choose your primary and secondary colors. Primary is for main CTAs and sections, and Secondary is for less important buttons."
        },
        {
          number: "3",
          description: "Accent color is an additional color. It appears in images, highlights, hyperlinks, boxes, icons, etc."
        },
        {
          number: "4",
          description: "Export your favorite colors in CSS, SCSS, or Tailwind format, or share the link so everyone can see your palette!"
        }
      ]
    }
  };

  const { title, subtitle, steps } = content[lang];

  return (
    <section
      id="how-it-works"
      className="px-8 py-0 md:py-7 pb-20 -mb-px"
      style={{ backgroundColor: 'var(--color-background)' }}
    >
      <div className="max-w-7xl mx-auto">
        <h2
          className="font-mono text-4xl md:text-5xl font-bold text-center mb-2"
          style={{ color: 'var(--color-text)' }}
        >
          {title}
        </h2>

        <p
          className="text-xl md:text-2xl text-center mb-6"
          style={{ color: 'var(--color-text)', opacity: 0.8 }}
        >
          {subtitle}
        </p>

        <div className="p-7 md:p-12 rounded-[10px] relative">
          <div 
            className="absolute inset-0 rounded-[10px]" 
            style={{ 
              backgroundColor: 'var(--color-secondary)', 
              opacity: 0.3,
              zIndex: 0
            }}
          />
          
          <div className="relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-x-12 md:gap-y-10">
              {steps.map((step) => (
                <div key={step.number}>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-mono text-3xl font-bold" style={{ color: 'var(--color-accent)' }}>
                      {step.number}
                    </h3>
                  </div>
                  <p className="text-xl text-left" style={{ color: 'var(--color-text)' }}>
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