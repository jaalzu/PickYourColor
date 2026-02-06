import avtrImage from '../../assets/avtr.webp';


export const Testimonials = () => {
  const testimonials = [
    {
      name: "Linus Torvalds",
      role: "Creator of Linux and Git",
      comment: "By far one of the best websites I ever see. Everything works and the code it's really well executed.",
         image: avtrImage

    },
    {
      name: "Mark Zuckerberg",
      role: "Meta CEO",
      comment: "The idea is so clear it hurts not having thought of it before. Simple , addictive and visual. Honestly , it could have come out of a hackaton in Palo Alto.",
          image: avtrImage

    },
    {
      name: "Marcus Rodriguez",
      role: "Frontend Developer at Meta",
      comment: "Behind the simplicity , there is control and structure. It feels precise: every interaction responds exactly as it should, with no waste.",
          image: avtrImage

    },
    {
      name: "Emma Watson",
      role: "UX Designer at Apple",
      comment: "A really simple , direct tool with no noise. The site does one thing - show colors in real time- and does it surprisingly well.",
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
          className="text-4xl md:text-5xl font-bold text-center mb-12"
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
<div className="p-6 rounded-[10px] relative primary-shadow border" style={{ borderColor: 'rgba(255, 255, 255, 0.250)' }}>        {/* Background con opacidad */}
        <div 
          className="absolute inset-0 rounded-[10px]" 
style={{ 
  background: `linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 0%, var(--color-primary) 55%)`,
  opacity: 0.450,
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
              className="w-11 h-11 rounded-full"
            />
            <div className="flex-1">
              <h3 className="font-bold text-base" style={{ color: 'var(--color-text)' }}>
                {testimonial.name}
              </h3>
              <p className="text-sm" style={{ color: 'var(--color-text)', opacity: 0.7 }}>
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