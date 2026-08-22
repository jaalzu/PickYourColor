import DiceIcon from "../../assets/features/dice.svg?react";
import ExportIcon from "../../assets/features/export.svg?react";
import FlowIcon from "../../assets/features/flow.svg?react";
import PaletteIcon from "../../assets/features/palette.svg?react";
import ThemeIcon from "../../assets/features/theme.svg?react";
import { useLang } from "../../hooks/useLang";

export const Features = () => {
  const { sectionTitle, features } = useLang({
    es: {
      sectionTitle: "Explora la toolbar",
      features: [
        {
          title: "Aleatorizar",
          description:
            "Generá combinaciones aleatorias hasta encontrar la paleta ideal.",
          Icon: DiceIcon,
        },
        {
          title: "Deshacer/Rehacer",
          description: "¿Cambio por error? Volvé atrás con un click.",
          Icon: FlowIcon,
        },
        {
          title: "Color input",
          description:
            "Cambiá cualquier color de tu paleta al instante desde la toolbar.",
          Icon: PaletteIcon,
        },
        {
          title: "Exportar sistema",
          description:
            "CSS variables, SCSS tokens o Tailwind config. Listo para usar.",
          Icon: ExportIcon,
        },
        {
          title: "Claro/Oscuro",
          description:
            "Probá tu paleta en ambos modos para asegurarte que funciona.",
          Icon: ThemeIcon,
        },
      ],
    },
    en: {
      sectionTitle: "Explore the Toolbar",
      features: [
        {
          title: "Randomize",
          description:
            "Generate random combinations until you find the perfect palette.",
          Icon: DiceIcon,
        },
        {
          title: "Undo/Redo",
          description: "Made a mistake? Go back with a single click.",
          Icon: FlowIcon,
        },
        {
          title: "Color input",
          description:
            "Change any color in your palette instantly from the toolbar.",
          Icon: PaletteIcon,
        },
        {
          title: "Export system",
          description:
            "CSS variables, SCSS tokens or Tailwind config. Ready to use.",
          Icon: ExportIcon,
        },
        {
          title: "Dark/Light",
          description: "Test your palette in both modes to make sure it works.",
          Icon: ThemeIcon,
        },
      ],
    },
  });

  return (
    <section id="features" className="px-8 py-16 md:py-25">
      <div className="max-w-7xl mx-auto">
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* primer item — texto */}
          <li className="flex flex-col justify-center py-2 md:p-6">
            <h2
              className=" text-2xl md:text-6xl font-bold"
              style={{ color: "var(--color-text)" }}
            >
              {sectionTitle}
            </h2>
          </li>

          {/* features */}
          {features.map((feature, index) => (
            <li
              key={index}
              className="group flex flex-row mdk:flex-col gap-6 items-center md:items-start md:justify-between rounded-[13px] p-5 md:px-8 md:pt-6 relative "
            >
              <div
                className="absolute inset-0 rounded-[13px]"
                style={{
                  backgroundColor: "var(--color-secondary)",
                  opacity: 0.2,
                  zIndex: 0,
                }}
              />

              <div className="relative z-10 flex flex-col md:flex-col  items-start w-full md:h-full md:justify-between">
                <feature.Icon
                  className="w-10 h-10 md:w-13 md:h-13 shrink-0 mb-9 "
                  style={{ color: "var(--color-primary)" }}
                />

                <div>
                  <h3
                    className=" text-2xl  font-bold mb-3 "
                    style={{ color: "var(--color-text)" }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className="text-lg font-light "
                    style={{ color: "var(--color-text)" }}
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
