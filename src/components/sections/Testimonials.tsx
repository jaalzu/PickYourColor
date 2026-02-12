import avtrImage from '../../assets/avtr.webp';
import { useColorStore } from '../../store/useColorStore';

export const Testimonials = () => {
  const lang = useColorStore((state) => state.lang);

  const content = {
    es: {
      title: "Experiencias de Usuarios 100% Reales No Fake",
      testimonials: [
        {
          name: "Linus Torvalds",
          role: "Creador de Linux y Git",
          comment: "Eficiencia pura. La interfaz es directa y la lógica de navegación es impecable. Han logrado que lo complejo parezca ridículamente simple."
        },
        {
          name: "Mark Zuckerberg",
          role: "CEO de Meta",
          comment: "Días de trabajo y dolores de cabeza eliminados en tan solo minutos. Simplemente sin palabras."
        },
        {
          name: "Guillermo Rauch",
          role: "CEO de Vercel & Creador de Next.js",
          comment: "Por error presioné el espacio y cuando me di cuenta ya tenía la paleta de colores para mi sitio web, ¡increíble!"
        },
        {
          name: "Evan You",
          role: "Creador de Vue.js", // Pequeño ajuste de rol para el chiste
          comment: "Una herramienta directa, simple y sin ruido. Hace una sola cosa —mostrar colores en tiempo real— y la ejecución es sorprendentemente limpia."
        }
      ]
    },
    en: {
      title: "100% Real No Fake User Experiences",
      testimonials: [
        {
          name: "Linus Torvalds",
          role: "Creator of Linux and Git",
          comment: "Pure efficiency. The interface is direct and the navigation logic is impeccable. They've made the complex look ridiculously simple."
        },
        {
          name: "Mark Zuckerberg",
          role: "Meta CEO",
          comment: "Days of work and headaches eliminated in just minutes. Simply speechless."
        },
        {
          name: "Guillermo Rauch",
          role: "Vercel CEO & Next.js Creator",
          comment: "I accidentally pressed space and by the time I realized it, I already had the color palette for my website, incredible!"
        },
        {
          name: "Evan You",
          role: "Creator of Vue.js",
          comment: "A direct, simple tool with no noise. It does one thing —show colors in real-time— and the execution is surprisingly clean."
        }
      ]
    }
  };

  const { title, testimonials } = content[lang];

  return (
    <section
      className="px-8 py-15"
      style={{ backgroundColor: 'var(--color-background)' }}
    >
      <div className="max-w-7xl mx-auto">
        <h2
          className="font-mono text-4xl md:text-5xl font-bold text-center mb-12"
          style={{ color: 'var(--color-text)' }}
        >
          {title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.name}
              className={index === 3 ? "md:col-start-2" : ""}
            >
              <div className="p-6 rounded-[10px] relative border h-full" style={{ borderColor: 'rgba(255, 255, 255, 0.250)' }}>
                {/* Background con opacidad */}
                <div 
                  className="absolute inset-0 rounded-[10px]" 
                  style={{ 
                    background: `linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 0%, var(--color-primary) 55%)`,
                    opacity: 0.4,
                    zIndex: 0
                  }}
                />
                
                {/* Contenido */}
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-5">
                    <img 
                      src={avtrImage} // Usamos la misma imagen importada
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full"
                    />
                    <div className="flex-1">
                      <h3 className="font-mono font-bold text-lg" style={{ color: 'var(--color-text)' }}>
                        {testimonial.name}
                      </h3>
                      <p className="text-sm font-mono" style={{ color: 'var(--color-text)', opacity: 0.7 }}>
                        {testimonial.role}
                      </p>
                    </div>
                  </div>

                  <p className="text-base leading-relaxed" style={{ color: 'var(--color-text)' }}>
                    "{testimonial.comment}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};