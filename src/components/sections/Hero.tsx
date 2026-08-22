import { useEffect } from "react";
import { Button } from "../ui/button/Button";
import { Navbar } from "../layout/Navbar";
import { useColorStore } from "../../store/useColorStore";
import { useLang } from "../../hooks/useLang";
import { ColorMixArt } from "../art/ColorMixArt";
import { loadGoogleFont } from "../../utils/googleFonts";

export const Hero = () => {
  const headingFont = useColorStore((state) => state.typography.headingFont);

  useEffect(() => {
    loadGoogleFont(headingFont);
  }, [headingFont]);

  const { subtitle, primaryBtn, secondaryBtn } = useLang({
    es: {
      subtitle:
        "Elegí tus colores sobre una web real. Usá la toolbar para aplicar y visualizar tus elecciones en tiempo real.",
      primaryBtn: "Comenzar",
      secondaryBtn: "Saber más",
    },
    en: {
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

      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 items-center md:items-start gap-4 md:gap-8 lg:gap-14 pt-2 md:pt-24 pb-16 md:pb-0 relative z-10 max-w-7xl mx-auto w-full">
        {/* texto — columna izquierda en desktop, segundo en mobile */}
        <div className="order-2 md:order-1 justify-self-center md:justify-self-start px-6 md:pl-4 lg:pl-6 md:pr-0 max-w-lg md:max-w-xl lg:max-w-2xl text-center md:text-left md:-translate-x-2">
          <h1 className="text-4xl sm:text-5xl md:text-4xl lg:text-6xl leading-[1.05] font-extrabold mb-5">
            <span className="block" style={{ color: "var(--color-text)" }}>
              Get your brand
            </span>

            <span className="block">
              <span
                className="relative inline-block pb-0.5"
                style={{ color: "var(--color-primary)" }}
              >
                Colors
                <svg
                  aria-hidden
                  viewBox="0 0 120 10"
                  preserveAspectRatio="none"
                  className="absolute left-0 -bottom-1 w-full h-2 pointer-events-none"
                >
                  <path
                    d="M0 6 Q 10 2, 20 6 T 40 6 T 60 6 T 80 6 T 100 6 T 120 6"
                    fill="none"
                    stroke="var(--color-primary)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>

              <span style={{ color: "var(--color-text)" }}> & </span>

              <span
                className="italic tracking-wide"
                style={{
                  fontFamily: `"${headingFont}", Georgia, serif`,
                  WebkitTextStroke: "1px var(--color-text)",
                  color: "transparent",
                }}
              >
                Fonts
              </span>
            </span>
          </h1>

          <p
            className="text-lg md:text-xl mb-12 max-w-sm mx-auto md:mx-0 md:max-w-md"
            style={{ color: "var(--color-text)" }}
          >
            {subtitle}
          </p>

          <div className="flex gap-4 justify-center md:justify-start items-center">
            <Button
              variant="primary"
              padding="12px 40px"
              borderRadius="5px"
              effect="stars"
            >
              {primaryBtn}
            </Button>

            <Button
              variant="ghost"
              padding="12px 40px"
              borderRadius="5px"
              onClick={scrollToHowItWorks}
            >
              {secondaryBtn}
            </Button>
          </div>
        </div>

        {/* obra de arte — columna derecha en desktop, primero en mobile pero chico */}
        <div className="order-1 md:order-2 justify-self-center md:justify-self-end pr-4 md:pr-4 lg:pr-6 w-full max-w-[220px] sm:max-w-xs md:max-w-xl lg:max-w-2xl -mb-4 md:mb-0">
          <ColorMixArt />
        </div>
      </div>
    </section>
  );
};
