import { useColorStore } from "../../store/useColorStore";
import { useLang } from "../../hooks/useLang";
import tinycolor from "tinycolor2";
import { CompanyIcon, type IconName } from "../icons/MainIcons";

export const Companies = () => {
  const content = useLang({
    es: { title: "¡Gracias a todas estas pequeñas empresas por apoyarnos!" },
    en: { title: "Thanks to all these small companies for supporting us!" },
  });

  const bgColor = useColorStore((state) => state.colors.background);
  const isDark = tinycolor(bgColor).isDark();
  const iconColor = isDark ? "#ffffffd5" : "#000000b9";

  const companies: { name: string; id: IconName }[] = [
    { name: "Figma", id: "figma" },
    { name: "GitHub", id: "github" },
    { name: "Steam", id: "steam" },
    { name: "Anthropic", id: "anthropic" },
    { name: "Tesla", id: "tesla" },
    { name: "Meta", id: "meta" },
  ];

  return (
    <section id="Companies" className="py-10 md:py-23">
      <div className="max-w-7xl mx-auto px-3">
        <h2
          className="text-xl  font-regular text-center mb-6 px-2"
          style={{ color: "var(--color-text)" }}
        >
          {content.title}
        </h2>
      </div>
      <div className="relative z-30 mx-auto md:max-w-full md:px-8">
        <div className="flex flex-wrap justify-center gap-10 md:justify-between px-8">
          {companies.map((company) => (
            <div
              key={company.id}
              className="w-9 h-9 flex items-center justify-center company-icon"
              style={{ color: iconColor }}
            >
              <CompanyIcon name={company.id} size={48} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
