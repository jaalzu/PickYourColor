import paletteImg from "../../assets/resources/palette.webp";
import systemImg from "../../assets/resources/system.webp";
import accessImg from "../../assets/resources/access.webp";
import contrastImg from "../../assets/resources/contrast.webp";
import { useLang } from "../../hooks/useLang";

export const Resources = () => {
  const current = useLang({
    es: {
      title: "Mejora tus habilidades con recursos gratuitos",
      btnText: "Ver todos los artículos",
      cards: [
        {
          text: "Psicología del color aplicada.",
          link: "https://www.colorpsychology.org/",
          img: paletteImg,
        },
        {
          text: "Material Design color system.",
          link: "https://m2.material.io/design/color",
          img: systemImg,
        },
        {
          text: "Accesibilidad en el diseño web.",
          link: "https://webaim.org/",
          img: accessImg,
        },
        {
          text: "Las leyes del diseño UX.",
          link: "https://lawsofux.com/",
          img: contrastImg,
        },
      ],
    },
    en: {
      title: "Level Up your skills with free resources",
      btnText: "View all articles",
      cards: [
        {
          text: "Color psychology in design.",
          link: "https://www.colorpsychology.org/",
          img: paletteImg,
        },
        {
          text: "Material Design color system.",
          link: "https://m2.material.io/design/color",
          img: systemImg,
        },
        {
          text: "Web accessibility standards.",
          link: "https://webaim.org/",
          img: accessImg,
        },
        {
          text: "The laws of UX design.",
          link: "https://lawsofux.com/",
          img: contrastImg,
        },
      ],
    },
  });

  return (
    <section className="py-18 px-6 md:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start text-left mb-7 gap-3">
        <p
          className="!text-xl font-medium max-w-md"
          style={{ color: "var(--color-text)" }}
        >
          {current.title}
        </p>
        {/* <Button variant="primary" padding="10px 20px" borderRadius="5px">
          {current.btnText}
        </Button> */}
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {current.cards.map((card, i) => (
          <a
            key={i}
            href={card.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col group"
          >
            <div className="w-full aspect-video rounded-[8px] mb-3 overflow-hidden bg-zinc-800" style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04), 0 0 8px rgba(0,0,0,0.03)" }}>
              <img
                loading="lazy"
                decoding="async"
                src={card.img}
                alt={card.text}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
              />
            </div>
            <p
              className="text-sm md:text-lg group-hover:opacity-70 transition-opacity"
              style={{ color: "var(--color-text)" }}
            >
              {card.text}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
};
