import { useEffect } from "react";
import { Button } from "../ui/button/Button";
import { Navbar } from "../layout/Navbar";
import { useColorStore } from "../../store/useColorStore";
import { useLang } from "../../hooks/useLang";
import { ColorMixArt } from "../art/ColorMixArt";
import { loadGoogleFont } from "../../utils/googleFonts";

const SELECTION_HANDLE_POSITIONS = [
  "-top-[3px] -left-[3px]",
  "-top-[3px] -right-[3px]",
  "-bottom-[3px] -left-[3px]",
  "-bottom-[3px] -right-[3px]",
];

export const Hero = () => {
  const headingFont = useColorStore((state) => state.typography.headingFont);

  useEffect(() => {
    loadGoogleFont(headingFont);
  }, [headingFont]);

  const {
    titleLine1,
    titleColors,
    titleAnd,
    titleFonts,
    subtitle,
    primaryBtn,
    secondaryBtn,
  } = useLang({
    es: {
      titleLine1: "Obtené tus",
      titleColors: "Colores",
      titleAnd: " & ",
      titleFonts: "Fuentes",
      subtitle:
        "Elegí tus colores sobre una web real. Usá la toolbar para aplicar y visualizar tus elecciones en tiempo real.",
      primaryBtn: "Comenzar",
      secondaryBtn: "Saber más",
    },
    en: {
      titleLine1: "Get your brand",
      titleColors: "Colors",
      titleAnd: " & ",
      titleFonts: "Fonts",
      subtitle:
        "Choose your colors on a real website. Use the toolbar to apply and preview your choices in real time.",
      primaryBtn: "Get Started",
      secondaryBtn: "Learn More",
    },
  });

  const scrollToHowItWorks = () => {
    const element = document.getElementById("how-it-works");
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 50,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="min-h-[92vh] lg:min-h-[89vh] flex flex-col relative overflow-visible">
      <Navbar />

      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 items-center md:items-start gap-0 md:gap-8 lg:gap-20 md:px-12 pt-20 md:pt-40 pb-4 md:pb-0 relative z-10 max-w-7xl mx-auto w-full">
        {/* texto — columna izquierda en desktop, segundo en mobile */}
        <div className="order-2 md:order-1 justify-self-start px-6 md:pl-10 lg:pl-16 md:pr-0 max-w-lg md:max-w-xl lg:max-w-2xl text-left md:-translate-x-2">
          <h1 className="hero-title leading-[1.2] font-extrabold mt-12 sm:mt-6 mb-8 sm:mb-5">
            <span className="block" style={{ color: "var(--color-text)" }}>
              {titleLine1}
            </span>

            <span className="block">
              {/* "Colores" ahora estilo selección Figma: border dashed +
                  bg semitransparente + handles en las 4 esquinas, todo en primary */}
              <span className="relative inline-block px-2 py-0.5 mx-0.5">
                <span
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    border: "1.5px dashed var(--color-primary)",
                    backgroundColor:
                      "color-mix(in srgb, var(--color-primary) 12%, transparent)",
                  }}
                />
                {SELECTION_HANDLE_POSITIONS.map((pos) => (
                  <span
                    key={pos}
                    aria-hidden
                    className={`absolute w-[6px] h-[6px] bg-white pointer-events-none ${pos}`}
                    style={{ border: "1.5px solid var(--color-primary)" }}
                  />
                ))}
                <span
                  className="relative"
                  style={{ color: "var(--color-primary)" }}
                >
                  {titleColors}
                </span>
              </span>

              <span style={{ color: "var(--color-text)", opacity: 0.2 }}>
                {titleAnd}
              </span>

              <span
                className="italic"
                style={{
                  fontFamily: "var(--font-heading)",
                  WebkitTextStroke: "2px var(--color-text)",
                  color: "transparent",
                }}
              >
                {titleFonts}
              </span>
            </span>
          </h1>

          <p
            className="hero-subtitle text-[13px] sm:text-base md:text-lg mb-6 sm:mb-12 max-w-sm md:max-w-md leading-relaxed"
            style={{ color: "var(--color-text)" }}
          >
            {subtitle}
          </p>

          <div className="flex gap-3 sm:gap-4 justify-start items-center">
            <Button
              variant="primary"
              padding="12px 32px"
              borderRadius="5px"
              effect="stars"
            >
              {primaryBtn}
            </Button>

            <Button
              variant="ghost"
              padding="12px 28px"
              borderRadius="5px"
              onClick={scrollToHowItWorks}
            >
              {secondaryBtn}
            </Button>
          </div>
        </div>

        {/* obra de arte — columna derecha en desktop, primero en mobile */}
        <div className="order-1 md:order-2 justify-self-center md:justify-self-end md:pr-4 lg:pr-6 w-full flex justify-center max-w-[250px] sm:max-w-[310px] md:max-w-[320px] lg:max-w-[380px] mt-8 mb-4 md:mb-0 mx-auto px-4">
          <ColorMixArt />
        </div>
      </div>
    </section>
  );
};
