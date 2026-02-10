import avtrImage from '../../assets/avtr.webp';


export const Testimonials = () => {
  const testimonials = [
    {
      name: "Linus Torvalds",
      role: "Creator of Linux and Git",
      comment: "Eficiencia pura. La interfaz es directa y la lógica de navegación es impecable. Han logrado que lo complejo parezca ridículamente simple.",
         image: avtrImage

    },
    {
      name: "Mark Zuckerberg",
      role: "Meta CEO",
      comment: "Días de trabajo y dolores de cabeza eliminados en tan solo minutos. Simplemente sin palabras.",
          image: avtrImage

    },
    {
      name: "Guillermo Rauch",
      role: "Vercel CEO & Next.js Creator",
      comment: "Por error presioné el espacio y cuando me di cuenta ya tenía la paleta de colores para mi sitio web, increíble!",
          image: avtrImage

    },
    {
      name: "Evan You",
      role: "UX Designer at Apple",
      comment: "Una herramienta directa, simple y sin ruido. Hace una sola cosa —mostrar colores en tiempo real— y la ejecución es sorprendentemente limpia.",
          image: avtrImage

    }
  ];

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
         100% Real No Fake User Experiences
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {testimonials.map((testimonial, index) => (
    <div 
      key={testimonial.name}
      className={index === 3 ? "md:col-start-2" : ""}
    >
<div className="p-6 rounded-[10px] relative  border" style={{ borderColor: 'rgba(255, 255, 255, 0.250)' }}>        {/* Background con opacidad */}
        <div 
          className="absolute inset-0 rounded-[10px]" 
style={{ 
  background: `linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 0%, var(--color-primary) 55%)`,
  opacity: 0.4,
  zIndex: 0
}}
        />
        
        {/* Contenido sin opacidad */}
        <div className="relative z-10">
          {/* Header con imagen y info */}
          <div className="flex items-center gap-2 mb-5">
            <img 
              src={testimonial.image} 
              alt={testimonial.name}
              className="w-12 h-12 rounded-full"
            />
            <div className="flex-1">
              <h3 className="font-mono font-bold text-lg" style={{ color: 'var(--color-text)' }}>
                {testimonial.name}
              </h3>
              <p className="text-sm font-mono text-lg" style={{ color: 'var(--color-text)', opacity: 0.7 }}>
                {testimonial.role}
              </p>
            </div>
          </div>

          {/* Comentario */}
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