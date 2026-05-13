import { CheckIcon } from "@heroicons/react/24/outline";
import { Button } from "../ui/button/Button";
import tinycolor from "tinycolor2";
import { useColorStore } from "../../store/useColorStore";
import { useLang } from "../../hooks/useLang";

export const Pricing = () => {
  const colors = useColorStore((state) => state.colors);

  const current = useLang({
    es: {
      title: "Nuestros Planes",
      monthly: "/mes",
      free: "Gratis",
      button: "Elegir Plan",
      features: "Características",
      best: "Mejor\nOpción",
      plans: [
        {
          title: "Entusiasta",
          description:
            "Para aquellos que desean empezar a explorar el mundo del diseño UI.",
          price: "Gratis",
          features: [
            "Acceso a todas las funciones gratuitas",
            "Eso es todo, es gratis. Qué más esperabas??",
          ],
        },
        {
          title: "Da Vinci",
          description: "Para maestros artesanos de UI/UX de nivel Dios.",
          price: "$0.02",
          features: [
            "IA super avanzada",
            "Soporte técnico 24/7 con prioridad alta",
            "Más de +1000 plantillas de colores listas para usar",
            "Título Certificado y otorgado por Leonardo",
          ],
        },
        {
          title: "Alquimista",
          description:
            "Para usuarios con un conocimiento sólido que desean experimentar y construir diseños de sistemas completos.",
          price: "$0.01",
          features: [
            "Pre-Acceso a nuevas funciones",
            "Soporte técnico 24/7",
            "Guía de ayuda para empezar a crear tu sistema de diseño perfecto",
          ],
        },
      ],
    },
    en: {
      title: "Our Plans",
      monthly: "/month",
      button: "Choose Plan",
      free: "Free",
      features: "Features",
      best: "Best\nOption",
      plans: [
        {
          title: "Enthusiast",
          description:
            "For those who want to start exploring the world of UI design and color systems.",
          price: "Free",
          features: [
            "Access to all features",
            "nothing more. It's free what more you expect??",
          ],
        },
        {
          title: "Da Vinci",
          description: "For god-tier UI/UX master crafters.",
          price: "$0.02",
          features: [
            "Super advanced AI",
            "24/7 technical support with high priority",
            "More than +1000 color templates ready to use",
            "Certificate issued and granted by Leonardo",
          ],
        },
        {
          title: "Alchemist",
          description:
            "For users with solid design knowledge who want to experiment and build structured color systems.",
          price: "$0.01",
          features: [
            "Pre-Access to new features",
            "24/7 technical support",
            "A help guide to start creating your perfect design system",
          ],
        },
      ],
    },
  });

  const getBadgeTextColor = () => {
    const accentColor = colors.accent || "#000000";
    const color = tinycolor(accentColor);
    return color.isDark() ? "#ffffff" : "#000000";
  };

  return (
    <section id="pricing" className="px-8 py-20">
      <div className="max-w-lg md:max-w-2xl lg:max-w-[1550px] mx-auto">
        <h2
          className=" text-4xl md:text-5xl font-bold text-center mb-8"
          style={{ color: "var(--color-text)" }}
        >
          {current.title}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-stretch">
          {current.plans.map((plan) => {
            const isSenior = plan.title === "Da Vinci";
            const planBg = isSenior
              ? "var(--color-primary)"
              : "var(--color-secondary)";

            return (
              <div
                key={plan.title}
                className="rounded-[10px] relative overflow-visible h-full flex flex-col"
              >
                {isSenior && (
                  <div
                    className="absolute -top-8 -right-6 z-20"
                    style={{ width: "100px", height: "100px" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100"
                      height="100"
                      viewBox="0 0 256 256"
                      fill="none"
                    >
                      <path
                        d="M 128 0 C 147.68 0 164.04 14.213 167.377 32.934 C 182.974 22.055 204.594 23.574 218.51 37.49 C 232.426 51.406 233.944 73.025 223.066 88.622 C 241.787 91.96 256 108.32 256 128 C 256 147.68 241.787 164.04 223.065 167.377 C 233.944 182.974 232.426 204.594 218.51 218.51 C 204.594 232.426 182.974 233.944 167.377 223.065 C 164.04 241.787 147.68 256 128 256 C 108.32 256 91.959 241.787 88.622 223.065 C 73.025 233.944 51.406 232.426 37.49 218.51 C 23.574 204.594 22.055 182.974 32.934 167.377 C 14.213 164.04 0 147.68 0 128 C 0 108.32 14.213 91.96 32.934 88.622 C 22.056 73.025 23.574 51.406 37.49 37.49 C 51.406 23.574 73.025 22.055 88.622 32.934 C 91.96 14.213 108.32 0 128 0 Z"
                        fill="var(--color-accent)"
                      ></path>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span
                        className="font-mono text-md font-bold text-center px-2 leading-tight whitespace-pre-line"
                        style={{ color: getBadgeTextColor() }}
                      >
                        {current.best}
                      </span>
                    </div>
                  </div>
                )}

                <div
                  className="absolute inset-0 rounded-[14px] "
                  style={{
                    backgroundColor: planBg,
                    opacity: 0.2,
                    zIndex: 0,
                  }}
                />

                <div className="relative z-10 py-7 px-7 flex flex-col h-full">
                  <h3
                    className=" text-3xl font-bold mb-3 pt-5"
                    style={{ color: "var(--color-text)" }}
                  >
                    {plan.title}
                  </h3>

                  <p
                    className="text-xl font-medium mb-11 min-h-[80px]"
                    style={{ color: "var(--color-text)" }}
                  >
                    {plan.description}
                  </p>

                  <div
                    className="text-2xl font-medium mb-3"
                    style={{ color: "var(--color-text)" }}
                  >
                    {plan.price}
                    {plan.price !== current.free && (
                      <span className="text-base font-normal opacity-80">
                        {current.monthly}
                      </span>
                    )}
                  </div>

                  <div className="mb-10 ">
                    <Button
                      variant={isSenior ? "primary" : "secondary"}
                      padding="8px 0"
                      borderRadius="25px"
                      opacity={isSenior ? 0.9 : 0.35}
                      className="w-full"
                    >
                      {current.button}
                    </Button>
                  </div>

                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className="flex-1 h-[1px]"
                      style={{
                        backgroundColor: "var(--color-text)",
                        opacity: 0.2,
                      }}
                    />
                    <span
                      className="text-sm font-light"
                      style={{ color: "var(--color-text)", opacity: 0.5 }}
                    >
                      {current.features}
                    </span>
                    <div
                      className="flex-1 h-[1px]"
                      style={{
                        backgroundColor: "var(--color-text)",
                        opacity: 0.2,
                      }}
                    />
                  </div>

                  <ul className="space-y-5 mb-6">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckIcon
                          className="w-5 h-5 flex-shrink-0 mt-0.5"
                          style={{ color: "var(--color-accent)" }}
                        />
                        <span
                          className="md:text-md text-md font-light"
                          style={{ color: "var(--color-text)" }}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
