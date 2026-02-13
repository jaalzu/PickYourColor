import { ArrowPathIcon, ArrowUturnLeftIcon, EyeIcon, SunIcon } from '@heroicons/react/24/outline';
import { useColorStore } from '../../store/useColorStore';

export const Features = () => {
  const lang = useColorStore((state) => state.lang);

  const content = {
    es: {
      sectionTitle: "Funciones Geniales",
      features: [
        {
          title: "Aleatorizar",
          description: "Podés generar colores aleatorios para encontrar la combinación perfecta para tu paleta.",
          Icon: ArrowPathIcon
        },
        {
          title: "Deshacer/Rehacer",
          description: "¿Hiciste un clic por error? No te preocupes, podés deshacer tus cambios para volver atrás.",
          Icon: ArrowUturnLeftIcon
        },
        {
  title: "Sistema de colores",
  description: "Exportá tu paleta en variables CSS, tokens SCSS o configuración Tailwind, o compartí el link del sitio web para presentaciones.",
  Icon: EyeIcon
},

        {
          title: "Claro/Oscuro",
          description: "Cambiá entre modo claro y oscuro para ver cómo se comporta tu paleta en ambos entornos.",
          Icon: SunIcon
        }
      ]
    },
    en: {
      sectionTitle: "Some Cool Features",
      features: [
        {
          title: "Randomize",
          description: "You can randomize your colors to find a nice color for your palette.",
          Icon: ArrowPathIcon
        },
        {
          title: "Undo/Redo",
          description: "If you misclick and now you lost some color you like, you can undo your changes to come back!",
          Icon: ArrowUturnLeftIcon
        },
        {
  title: "Color system",
  description: "Export your palette as CSS variables, SCSS tokens, or Tailwind config, or share the website link for presentations.",
  Icon: EyeIcon
},
        {
          title: "Dark/Light",
          description: "You can switch to dark/light mode to match your palette both in dark and light.",
          Icon: SunIcon
        }
      ]
    }
  };

  const { sectionTitle, features } = content[lang];

  return (
    <section
      id='features'
      className="px-8 py-10 md:py-20"
      style={{ backgroundColor: 'var(--color-background)' }}
    >
      <div className="max-w-7xl mx-auto">
        <h2
          className="font-mono text-4xl md:text-4xl font-medium text-start mb-6"
          style={{ color: 'var(--color-text)' }}
        >
          {sectionTitle}
        </h2>

        <div className="flex flex-col gap-6">
          {features.map((feature, index) => {
            const isEven = index % 2 === 1;
            const bgColor = index % 2 === 0 ? 'var(--color-primary)' : 'var(--color-secondary)';
            
            return (
              <div 
                key={index} 
                className="h-[200px] md:h-[145px] rounded-[10px] relative p-4 md:px-9"
              >
                <div 
                  className="absolute inset-0 rounded-[10px]" 
                  style={{ 
                    backgroundColor: bgColor, 
                    opacity: .5,
                    zIndex: 0
                  }}
                />
                
                <div className={`relative z-10 h-full flex flex-col ${isEven ? 'items-end text-right' : 'items-start text-left'}`}>
                  <div className={`flex items-center justify-between w-full mb-1 ${isEven ? 'flex-row-reverse' : ''}`}>
                    <h3 className="font-mono text-2xl font-bold" style={{ color: 'var(--color-text)' }}>
                      {feature.title}
                    </h3>
                    <feature.Icon 
                      className="w-11 h-11" 
                      style={{ color: 'var(--color-accent)' }}
                      aria-hidden="true" 
                    />
                  </div>
                  
                  <p className="text-xl md:text-xl font-light" style={{ color: 'var(--color-text)' }}>
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};