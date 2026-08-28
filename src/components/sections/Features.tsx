import DiceIcon from "../../assets/features/dice.svg?react";
import ExportIcon from "../../assets/features/export.svg?react";
import FlowIcon from "../../assets/features/flow.svg?react";
import PaletteIcon from "../../assets/features/palette.svg?react";
import ThemeIcon from "../../assets/features/theme.svg?react";
import { useLang } from "../../hooks/useLang";

export const Features = () => {
  const { sectionTitle, features } = useLang({
    es: {
      sectionTitle: "Diviertete con la toolbar!",
      features: [
        {
          title: "Aleatorizar",
          description: "Generá combinaciones al instante.",
          Icon: DiceIcon,
        },
        {
          title: "Historial",
          description: "Recupera tus cambios con un click.",
          Icon: FlowIcon,
        },
        {
          title: "Color input",
          description: "Modificá cualquier color desde la toolbar.",
          Icon: PaletteIcon,
        },
        {
          title: "Exportar sistema",
          description: "Obtené variables en CSS, SCSS o Tailwind",
          Icon: ExportIcon,
        },
        {
          title: "Claro/Oscuro",
          description: "Evaluá el contraste en ambos modos.",
          Icon: ThemeIcon,
        },
      ],
    },
    en: {
      sectionTitle: "Have fun with toolbar!",
      features: [
        {
          title: "Randomize",
          description: "Generate combinations instantly.",
          Icon: DiceIcon,
        },
        {
          title: "Undo/Redo",
          description: "Go back or restore changes in one click.",
          Icon: FlowIcon,
        },
        {
          title: "Color input",
          description: "Modify any color directly from the toolbar.",
          Icon: PaletteIcon,
        },
        {
          title: "Export system",
          description: "Get variables in CSS, SCSS, or Tailwind .",
          Icon: ExportIcon,
        },
        {
          title: "Dark/Light",
          description: "Test contrast across both modes.",
          Icon: ThemeIcon,
        },
      ],
    },
  });

  return (
    <section id="features" className="px-8 py-16 md:py-25">
      <div className="max-w-7xl mx-auto">
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-5 md:items-stretch">
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
              className="group flex flex-row md:flex-col gap-6 items-center md:items-start md:justify-between rounded-[13px] p-5 md:px-8 md:pt-6 md:pb-8 relative min-h-[110px] md:min-h-[240px]"
              style={{
                boxShadow:
                  "0 1px 4px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)",
              }}
            >
              <div
                className="absolute inset-0 rounded-[13px]"
                style={{
                  backgroundColor: "var(--color-primary)",
                  opacity: 0.25,
                  zIndex: 0,
                }}
              />

              <div className="relative z-10 flex flex-row md:flex-col items-center md:items-start gap-6 md:gap-10 w-full md:h-full md:justify-between">
                <feature.Icon
                  className="w-[37px] h-[37px] md:w-13 md:h-13 shrink-0"
                  style={{ color: "var(--color-accent)" }}
                />

                <div className="flex-1 md:flex-none md:w-full flex flex-col gap-2">
                  <h3
                    className=" font-bold leading-tight break-words"
                    style={{
                      color: "var(--color-text)",
                      textWrap: "balance" as const,
                    }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className="font-light leading-snug"
                    style={{ color: "var(--color-text)", opacity: "0.8" }}
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
