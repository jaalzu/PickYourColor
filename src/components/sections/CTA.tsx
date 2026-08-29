import { useState, useEffect } from "react";
import { Button } from "../ui/button/Button";
import { useLang } from "../../hooks/useLang";
import { useInView } from "../../hooks/useInView";
import { useCountUp } from "../../hooks/useCount";
import { useColorStore } from "../../store/useColorStore";

const CHROMA_DURATION_MS = 1000;

export const CTA = () => {
  const {
    heading,
    subtitle,
    placeholder,
    button,
    joinLabel,
    subscribersLabel,
  } = useLang({
    es: {
      heading: "Empezá a construir tu marca hoy",
      subtitle: "Sumate y recibí noticias y tips.",
      placeholder: "Ingresá tu email",
      button: "Suscribirse",
      joinLabel: "Sumate a",
      subscribersLabel: "otros suscriptores",
    },
    en: {
      heading: "Start building your brand today",
      subtitle: "Join and get news and tips.",
      placeholder: "Enter your email",
      button: "Subscribe",
      joinLabel: "Join",
      subscribersLabel: "other subscribers",
    },
  });

  const { ref: headingRef, inView } = useInView(0.4);
  const [email, setEmail] = useState("");
  const [revealed, setRevealed] = useState(false);
  const colors = useColorStore((state) => state.colors);

  const chromaGradient = `linear-gradient(
  90deg,
  var(--color-text) 0,
  var(--color-text) 33.33%,
  ${colors.primary} 40%,
  ${colors.secondary} 50%,
  ${colors.accent} 60%,
  transparent 66.67%,
  transparent
)`;

  // espera a que termine el chroma sweep antes de mostrar el resto
  useEffect(() => {
    if (!inView) return;
    const timer = setTimeout(() => setRevealed(true), CHROMA_DURATION_MS);
    return () => clearTimeout(timer);
  }, [inView]);

  const TARGET_SUBSCRIBERS = 123456;
  const count = useCountUp(TARGET_SUBSCRIBERS, {
    start: revealed,
    duration: 1800,
  });
  const digits = count.toString().padStart(7, "0").split("");

  const handleFakeSubmit = () => {
    window.dispatchEvent(new CustomEvent("highlight-toolbar"));

    const toolbar = document.getElementById("toolbar");
    if (toolbar) {
      toolbar.scrollIntoView({ behavior: "smooth", block: "center" });
      toolbar.classList.add("toolbar-pulse");
      setTimeout(() => toolbar.classList.remove("toolbar-pulse"), 1200);
    }
  };

  return (
    <section className="pt-24 pb-1 md:py-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <h2
          ref={headingRef as React.RefObject<HTMLHeadingElement>}
          className={`text-5xl md:text-7xl mb-4 font-bold leading-[1.1] chroma-text ${
            inView ? "chroma-text-animate" : ""
          }`}
          style={{ backgroundImage: chromaGradient }}
        >
          {heading}
        </h2>

        {/* el resto del contenido espera a que termine el sweep */}
        <div
          className={`transition-all duration-700 ease-out ${
            revealed
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-3 pointer-events-none"
          }`}
        >
          <p
            className="text-lg md:text-xl mb-10 opacity-70"
            style={{ color: "var(--color-text)" }}
          >
            {subtitle}
          </p>

          <style>{`
            .cta-input-wrap{ border-color: color-mix(in srgb, var(--color-text) 12%, transparent); }
            .cta-input-wrap:focus-within{ border-color: color-mix(in srgb, var(--color-text) 22%, transparent) !important; box-shadow: 0 0 0 1px color-mix(in srgb, var(--color-primary) 33%, transparent); }
          `}</style>
          <div
            className="cta-input-wrap flex items-center gap-1 max-w-xl mx-auto mb-4 p-1 rounded-full border transition-colors"
            style={{
              backgroundColor: "transparent",
              borderWidth: "0.4px",
            }}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={placeholder}
              className="flex-1 min-w-0 bg-transparent outline-none border-none px-4 py-2.5 text-[15px] placeholder:opacity-100"
              style={{
                color: "var(--color-text)",
              }}
            />

            <Button
              variant="primary"
              padding="13px 28px"
              borderRadius="9999px"
              opacity={1}
              effect="stars"
              onClick={handleFakeSubmit}
              className="shrink-0 flex items-center justify-center whitespace-nowrap !h-auto leading-none text-[16px]"
            >
              {button}
            </Button>
          </div>

          <p
            className="text-sm flex items-center justify-center gap-1.5 flex-wrap"
            style={{ color: "var(--color-text)", opacity: 0.6 }}
          >
            <span>{joinLabel}</span>
            <span className="inline-flex gap-[2px]">
              {digits.map((digit, i) => (
                <span
                  key={i}
                  className="inline-flex items-center justify-center w-5 h-6 rounded-[3px] border text-xs font-mono"
                  style={{
                    borderColor:
                      "color-mix(in srgb, var(--color-text) 15%, transparent)",
                    color: "var(--color-text)",
                  }}
                >
                  {digit}
                </span>
              ))}
            </span>
            <span>{subscribersLabel}</span>
          </p>
        </div>
      </div>
    </section>
  );
};
