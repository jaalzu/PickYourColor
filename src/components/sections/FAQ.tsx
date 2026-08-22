import * as Accordion from "@radix-ui/react-accordion";
import tinycolor from "tinycolor2";
import { useColorStore } from "../../store/useColorStore";
import { useLang } from "../../hooks/useLang";

export const FAQ = () => {
  const bgColor = useColorStore((state) => state.colors.background);

  const isLightBg = tinycolor(bgColor).isLight();
  const borderColor = isLightBg ? "rgba(0, 0, 0, 1)" : "rgba(255, 255, 255, 1)";
  const textColor = isLightBg ? "#000000" : "#ffffff";

  const { title, subtitle, faqs } = useLang({
    es: {
      title: "Preguntas Frecuentes",
      subtitle: "¿Tenés preguntas? Tenemos respuestas",
      faqs: [
        {
          question: "¿Por dónde empiezo al crear una paleta?",
          answer:
            "Empezá definiendo un color principal (primary) que represente la identidad del proyecto. Desde ahí se construyen los secundarios, acentos y neutros. Una buena paleta no nace del azar: nace de una intención clara.",
        },
        {
          question: "¿Cómo sé si mis colores combinan bien?",
          answer:
            "La armonía viene de relaciones, no de gustos. Usá esquemas como complementarios, análogos o triádicos y mantené coherencia en saturación y contraste.",
        },
        {
          question: "¿Por qué es tan importante el contraste?",
          answer:
            "Porque el color no es decoración: es información. El contraste define jerarquía visual, legibilidad y enfoque. Sin contraste no hay estructura, solo ruido visual.",
        },
        {
          question: "¿Qué rol juegan los colores neutros?",
          answer:
            "Son la estructura invisible del diseño. Permiten que los colores principales respiren y que la interfaz no se sature visualmente.",
        },
        {
          question: "¿Cómo influye el contexto en la elección de colores?",
          answer:
            "Un color no significa lo mismo en una app médica que en un juego. El significado del color depende del entorno cultural, funcional y emocional.",
        },
        {
          question: "¿Qué es más importante: estética o usabilidad?",
          answer:
            "No compiten: se equilibran. Un sistema de color correcto hace que la interfaz sea bella porque funciona, no al revés.",
        },
      ],
    },
    en: {
      title: "FAQ",
      subtitle: "Got Questions? We've Got Answers",
      faqs: [
        {
          question: "Where should I start when creating a palette?",
          answer:
            "Start with a primary color that represents the identity of the product. Everything else grows from that intention. Good palettes are designed, not discovered randomly.",
        },
        {
          question: "How do I know if my colors work well together?",
          answer:
            "Harmony comes from relationships, not preference. Use complementary, analogous, or triadic schemes and keep saturation and contrast consistent.",
        },
        {
          question: "Why is contrast so important?",
          answer:
            "Because color is information, not decoration. Contrast creates hierarchy, readability, and focus. Without it, there is only visual noise.",
        },
        {
          question: "What role do neutral colors play?",
          answer:
            "They are the invisible structure of the interface. Neutrals create space, balance, and clarity.",
        },
        {
          question: "How does context affect color choice?",
          answer:
            "Colors change meaning based on culture, function, and emotion. A color never exists in isolation.",
        },
        {
          question: "Which matters more: beauty or usability?",
          answer:
            "They don’t compete. Real beauty emerges from function, clarity, and structure.",
        },
      ],
    },
  });

  return (
    <section id="FAQ" className="py-3 md:py-17  px-8">
      <div className="max-w-3xl mx-auto">
        <p
          className="text-md text-center "
          style={{ color: "var(--color-text)", opacity: 0.5 }}
        >
          {title}
        </p>
        <h2
          className=" text-4xl md:text-5xl font-bold text-center mb-12"
          style={{ color: "var(--color-text)" }}
        >
          {subtitle}
        </h2>

        <Accordion.Root type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <Accordion.Item
              key={index}
              value={`item-${index}`}
              className="border rounded-[30px] overflow-hidden transition-all duration-300 relative group"
              style={{ borderColor: borderColor }}
            >
              <div
                className="absolute inset-0 rounded-[30px] pointer-events-none transition-opacity duration-300 opacity-0 group-data-[state=open]:opacity-20"
                style={{ backgroundColor: "var(--color-secondary)", zIndex: 0 }}
              />

              <Accordion.Header>
                <Accordion.Trigger className="w-full px-5 py-4 flex justify-between items-center text-left relative z-10">
                  <h3
                    className="text-2xl font-bold"
                    style={{ color: textColor }}
                  >
                    {faq.question}
                  </h3>
                  <div
                    className="text-5xl font-medium transition-transform duration-300 ml-4 flex items-center justify-center group-data-[state=open]:rotate-45"
                    style={{
                      color: "var(--color-accent)",
                      lineHeight: "0",
                      paddingBottom: "0px",
                    }}
                  >
                    +
                  </div>
                </Accordion.Trigger>
              </Accordion.Header>

              <Accordion.Content className="overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
                <div className="px-4 pb-6 relative z-10">
                  <p className="text-xl" style={{ color: textColor }}>
                    {faq.answer}
                  </p>
                </div>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
};
