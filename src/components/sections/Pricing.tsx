import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { Button } from "../ui/button/Button";
import tinycolor from "tinycolor2";
import { useColorStore } from "../../store/useColorStore";
import { useLang } from "../../hooks/useLang";

export const Pricing = () => {
  const colors = useColorStore((state) => state.colors);
  const isDark = tinycolor(colors.background).isDark();

  const current = useLang({
    es: {
      title: "Nuestros Planes",
      monthly: "/mes",
      free: "Gratis",
      custom: "Personalizado",
      button: "Elegir Plan",
      features: "Características",
      mostPopular: "Más Popular",
      plans: [
        {
          title: "Básico",
          description:
            "Ideal para empezar a explorar el mundo del diseño UI y crear tus primeras paletas.",
          price: "Gratis",
          features: [
            "Acceso a todas las funciones gratuitas",
            "Eso es todo, es gratis. Qué más esperabas??",
          ],
        },
        {
          title: "Pro",
          description:
            "Perfecto para usuarios con experiencia que quieren construir sistemas completos.",
          price: "$0.01",
          features: [
            "Pre-Acceso a nuevas funciones",
            "Soporte técnico 24/7",
            "Guía de ayuda para empezar a crear tu sistema de diseño perfecto",
          ],
        },
        {
          title: "Empresa",
          description:
            "Pensado para maestros artesanos de UI/UX que buscan un control total y sin límites.",
          price: "Personalizado",
          features: [
            "IA super avanzada",
            "Soporte técnico 24/7 con prioridad alta",
            "Más de +1000 plantillas de colores listas para usar",
            "Título Certificado y otorgado por Leonardo",
          ],
        },
      ],
    },
    en: {
      title: "Our Plans",
      monthly: "/month",
      free: "Free",
      custom: "Custom",
      button: "Choose Plan",
      features: "Features",
      mostPopular: "Most Popular",
      plans: [
        {
          title: "Starter",
          description:
            "Perfect to start exploring UI design and create your first color palettes with ease.",
          price: "Free",
          features: [
            "Access to all features",
            "nothing more. It's free what more you expect??",
          ],
        },
        {
          title: "Pro",
          description:
            "Built for experienced users who want to craft complete and scalable design systems.",
          price: "$0.01",
          features: [
            "Pre-Access to new features",
            "24/7 technical support",
            "A help guide to start creating your perfect design system",
          ],
        },
        {
          title: "Enterprise",
          description:
            "Designed for god-tier UI/UX masters seeking total control and limitless precision.",
          price: "Custom",
          features: [
            "Super advanced AI",
            "24/7 technical support with high priority",
            "More than +1000 color templates ready to use",
            "Certificate issued and granted by Leonardo",
          ],
        },
      ],
    },
  });

  const featuredBg = tinycolor.mix(colors.primary, "#000000", 65).toHexString();
  const featuredTextColor = tinycolor(featuredBg).isDark()
    ? "#ffffff"
    : "#000000";

  return (
    <section id="pricing" className="px-8 py-20">
      <div className="max-w-lg md:max-w-2xl lg:max-w-[1550px] mx-auto">
        <h2
          className="text-[32px] md:text-[44px] font-bold text-center md:mb-5"
          style={{ color: "var(--color-text)" }}
        >
          {current.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-stretch pt-6">
          {current.plans.map((plan, index) => {
            const isFeatured = index === 1;
            const isCustom = plan.price === current.custom;

            const neutralBg = isDark ? "#12121c" : "#f4f4f8";
            const neutralBorder = isDark
              ? "rgba(255, 255, 255, 0.07)"
              : "rgba(0, 0, 0, 0.04)";

            return (
              <div
                key={plan.title}
                className={`rounded-[13px] relative overflow-visible h-full flex flex-col border transition-all duration-300 ${
                  index === 2 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
                style={{
                  backgroundColor: isFeatured ? featuredBg : neutralBg,
                  borderColor: isFeatured ? "transparent" : neutralBorder,
                  boxShadow: isFeatured
                    ? isDark
                      ? "0 8px 20px -4px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.15), 0 1px 4px rgba(0,0,0,0.08), 0 0 8px rgba(0,0,0,0.04)"
                      : "0 8px 20px -4px rgba(0,0,0,0.12), 0 1px 4px rgba(0,0,0,0.06), 0 0 8px rgba(0,0,0,0.03)"
                    : isDark
                      ? "0 1px 4px rgba(0,0,0,0.18), 0 0 0 1px rgba(255,255,255,0.06), 0 0 8px rgba(0,0,0,0.12)"
                      : "0 1px 4px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04), 0 0 8px rgba(0,0,0,0.03)",
                }}
              >
                {isFeatured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-30">
                    <span
                      className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold whitespace-nowrap shadow-md"
                      style={{
                        backgroundColor: "var(--color-primary)",
                        color: tinycolor(colors.primary).isDark()
                          ? "#ffffff"
                          : "#000000",
                      }}
                    >
                      {current.mostPopular}
                    </span>
                  </div>
                )}

                {!isFeatured && (
                  <div
                    className="absolute top-0 left-0 right-0 h-[180px] pointer-events-none rounded-t-[16px]"
                    style={{
                      background:
                        "radial-gradient(ellipse at top, var(--color-primary) 0%, transparent 70%)",
                      opacity: 0.1,
                      filter: "blur(20px)",
                    }}
                  />
                )}

                <div className="relative z-10 px-8 pt-8 pb-8 flex flex-col h-full">
                  <h3
                    className="text-3xl font-bold mb-3"
                    style={{
                      color: isFeatured
                        ? featuredTextColor
                        : "var(--color-text)",
                    }}
                  >
                    {plan.title}
                  </h3>

                  <p
                    className="text-lg font-medium mb-18 min-h-[70px]"
                    style={{
                      color: isFeatured
                        ? featuredTextColor
                        : "var(--color-text)",
                      opacity: 0.8,
                    }}
                  >
                    {plan.description}
                  </p>

                  <div
                    className="text-3xl font-bold mb-6"
                    style={{
                      color: isFeatured
                        ? featuredTextColor
                        : "var(--color-text)",
                    }}
                  >
                    {plan.price}
                    {plan.price !== current.free && !isCustom && (
                      <span className="text-base font-normal opacity-70 ml-1">
                        {current.monthly}
                      </span>
                    )}
                  </div>

                  <div className="mb-10">
                    <Button
                      variant="primary"
                      padding="10px 0"
                      borderRadius="5px"
                      className="w-full"
                      style={{
                        border: `1px solid ${isDark ? "rgba(255,255,255,0.14)" : "rgba(0,0,0,0.08)"}`,
                      }}
                    >
                      {current.button}
                    </Button>
                  </div>

                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className="flex-1 h-[1px]"
                      style={{
                        backgroundColor: isFeatured
                          ? featuredTextColor
                          : "var(--color-text)",
                        opacity: 0.2,
                      }}
                    />
                    <span
                      className="text-xs font-mono uppercase tracking-wider"
                      style={{
                        color: isFeatured
                          ? featuredTextColor
                          : "var(--color-text)",
                        opacity: 0.6,
                      }}
                    >
                      {current.features}
                    </span>
                    <div
                      className="flex-1 h-[1px]"
                      style={{
                        backgroundColor: isFeatured
                          ? featuredTextColor
                          : "var(--color-text)",
                        opacity: 0.2,
                      }}
                    />
                  </div>

                  <ul className="space-y-4 mb-6">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircleIcon
                          className="w-5 h-5 flex-shrink-0 mt-0.5"
                          style={{
                            color: "var(--color-accent)",
                          }}
                        />
                        <span
                          className="text-base font-light"
                          style={{
                            color: isFeatured
                              ? featuredTextColor
                              : "var(--color-text)",
                          }}
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
