import { useState } from 'react';
import tinycolor from 'tinycolor2';
import { useColorStore } from '../../store/useColorStore';

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const bgColor = useColorStore((state) => state.colors.background);
  const isLightBg = tinycolor(bgColor).isLight();
  const borderColor = isLightBg ? 'rgba(0, 0, 0, 1)' : 'rgba(255, 255, 255, 1)';
  const textColor = isLightBg ? '#000000' : '#ffffff';

  const faqs = [
    {
      question: "How do I choose a nice palette?",
      answer: "Start with your brand colors or use our randomize feature to discover new combinations. Make sure to check accessibility!"
    },
    {
      question: "Can I export my color palette?",
      answer: "Yes! You can export your palette in CSS, SCSS, or Tailwind format with just one click."
    },
    {
      question: "Is there a dark mode?",
      answer: "Absolutely! Switch between dark and light mode to see how your palette looks in different contexts."
    },
    {
      question: "What are the accessibility features?",
      answer: "We provide WCAG compliance checking to ensure your color combinations meet accessibility standards."
    }
  ];

  return (
    <section
      className="py-20 px-8"
      style={{ backgroundColor: 'var(--color-background)' }}
    >
      <div className="max-w-3xl mx-auto">
        <p className="text-md text-center" style={{ color: 'var(--color-text)', opacity: 0.6 }}>
          FAQ
        </p>
        <h2
          className="text-4xl md:text-5xl font-medium text-center mb-5"
          style={{ color: 'var(--color-text)' }}
        >
          Got Questions? We've Got Answers
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border rounded-[30px] overflow-hidden transition-all duration-300 relative"
                style={{ 
                  borderColor: borderColor,
                }}
              >
                {isOpen && (
                  <div 
                    className="absolute inset-0 rounded-[30px] pointer-events-none transition-opacity duration-300"
                    style={{
                      backgroundColor: 'var(--color-secondary)',
                      opacity: 0.6,
                      zIndex: 0
                    }}
                  />
                )}
                
               <button
  onClick={() => setOpenIndex(isOpen ? null : index)}
  className="w-full px-5 py-4 flex justify-between items-center text-left relative z-10"
>
  <h3 className="text-lg md:text-xl font-bold" style={{ color: textColor }}>
    {faq.question}
  </h3>
  <div
    className="text-5xl font-medium transition-transform duration-300 ml-4 flex items-center justify-center"
    style={{ 
      color: 'var(--color-accent)',
      transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
      lineHeight: '0',
      paddingBottom: '13px' 
    }}
  >
    +
  </div>
</button>

                <div 
                  className="overflow-hidden transition-all duration-300"
                  style={{
                    maxHeight: isOpen ? '250px' : '0px',
                    opacity: isOpen ? 1 : 0
                  }}
                >
                  <div className="px-4 pb-5 relative z-10">
                    <p className="text-base md:text-lg" style={{ color: textColor }}>
  {faq.answer}
</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};