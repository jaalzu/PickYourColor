import * as Accordion from '@radix-ui/react-accordion';
import tinycolor from 'tinycolor2';
import { useColorStore } from '../../store/useColorStore';

export const FAQ = () => {
  const bgColor = useColorStore((state) => state.colors.background);
  const isLightBg = tinycolor(bgColor).isLight();
  const borderColor = isLightBg ? 'rgba(0, 0, 0, 1)' : 'rgba(255, 255, 255, 1)';
  const textColor = isLightBg ? '#000000' : '#ffffff';

  const faqs = [
    { question: "How do I choose a nice palette?", answer: "Start with your brand colors or use our randomize feature to discover new combinations." },
    { question: "Can I export my color palette?", answer: "Yes! You can export your palette in CSS, SCSS, or Tailwind format." },
    { question: "Is there a dark mode?", answer: "Absolutely! Switch between dark and light mode." },
    { question: "What are the accessibility features?", answer: "We provide WCAG compliance checking." }
  ];

  return (
    <section 
    id='FAQ'

    className="py-20 px-8" 
    style={{ backgroundColor: 'var(--color-background)' }}>
      <div className="max-w-3xl mx-auto">
        <p className="text-md text-center font-mono" style={{ color: 'var(--color-text)', opacity: 0.6 }}>FAQ</p>
        <h2 className="font-mono text-4xl md:text-5xl font-medium text-center mb-5" style={{ color: 'var(--color-text)' }}>
          Got Questions? We've Got Answers
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
                className="absolute inset-0 rounded-[30px] pointer-events-none transition-opacity duration-300 opacity-0 group-data-[state=open]:opacity-60"
                style={{ backgroundColor: 'var(--color-secondary)', zIndex: 0 }}
              />
              
              <Accordion.Header>
                <Accordion.Trigger className="w-full px-5 py-4 flex justify-between items-center text-left relative z-10">
                  <h3 className="text-2xl font-bold" style={{ color: textColor }}>
                    {faq.question}
                  </h3>
                  <div
                    className="text-5xl font-medium transition-transform duration-300 ml-4 flex items-center justify-center group-data-[state=open]:rotate-45"
                    style={{ 
                      color: 'var(--color-accent)',
                      lineHeight: '0',
                      paddingBottom: '0px' 
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