import { CheckIcon } from '@heroicons/react/24/outline';
import { Button } from '../ui/button/Button';
import tinycolor from 'tinycolor2';
import { useColorStore } from '../../store/useColorStore';

export const Pricing = () => {
  const colors = useColorStore((state) => state.colors);

  const plans = [
    {
      title: "Newbie",
      description: "This package offers the free plan,only the change color tool.",
      price: "$0.00",
      bgColor: 'var(--color-secondary)',
      isBest: false,
      features: [
        "Access to all free features",
        "3hs/day of free tools",
        "nothing more. It's free what more you expect??",
      ]
    },
    {
      title: "Senior",
      description: "This package provides full access to al premium features",
      price: "$0.02",
      bgColor: 'var(--color-primary)',
      isBest: true,
      features: [
        "Includes all Pro features",
        "IA tools to improve your palette",
        "24/7 technical support priority to you",
        "More than +1000 templates ready to use",
      ]
    },
    {
      title: "Pro",
      description: "This package offers the basic features you need to get started",
      price: "$0.01",
      bgColor: 'var(--color-secondary)',
      isBest: false,
      features: [
        "Access to all cool features",
        "24/7 technical support",
        "A help guide to start creating your perfect palette",
      ]
    }
  ];

  // Función para obtener el color del texto del badge según el fondo
  const getBadgeTextColor = () => {
    const accentColor = colors.accent || '#000000';
    const color = tinycolor(accentColor);
    return color.isDark() ? '#ffffff' : '#000000';
  };

  return (
    <section
      id='pricing'
      className="px-8 py-19"
      style={{ backgroundColor: 'var(--color-background)' }}
    >
      <div className="max-w-[1550px] mx-auto">
        <h2
          className="font-mono text-4xl md:text-5xl font-bold text-center mb-12"
          style={{ color: 'var(--color-text)' }}
        >
          Our Pricing
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {plans.map((plan) => (
            <div key={plan.title} className="rounded-[10px] relative overflow-visible">
              {plan.isBest && (
                <div className="absolute -top-8 -right-6 z-20" style={{ width: '100px', height: '100px' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 256 256" fill="none">
                    <path d="M 128 0 C 147.68 0 164.04 14.213 167.377 32.934 C 182.974 22.055 204.594 23.574 218.51 37.49 C 232.426 51.406 233.944 73.025 223.066 88.622 C 241.787 91.96 256 108.32 256 128 C 256 147.68 241.787 164.04 223.065 167.377 C 233.944 182.974 232.426 204.594 218.51 218.51 C 204.594 232.426 182.974 233.944 167.377 223.065 C 164.04 241.787 147.68 256 128 256 C 108.32 256 91.959 241.787 88.622 223.065 C 73.025 233.944 51.406 232.426 37.49 218.51 C 23.574 204.594 22.055 182.974 32.934 167.377 C 14.213 164.04 0 147.68 0 128 C 0 108.32 14.213 91.96 32.934 88.622 C 22.056 73.025 23.574 51.406 37.49 37.49 C 51.406 23.574 73.025 22.055 88.622 32.934 C 91.96 14.213 108.32 0 128 0 Z" fill="var(--color-accent)"></path>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span 
                      className="font-mono text-md font-bold text-center px-2 leading-tight" 
                      style={{ color: getBadgeTextColor() }}
                    >
                      Best<br />Option
                    </span>
                  </div>
                </div>
              )}

              <div 
                className="absolute inset-0 rounded-[10px] primary-shadow" 
                style={{ 
                  backgroundColor: plan.bgColor, 
                  opacity: 0.5,
                  zIndex: 0
                }}
              />

              <div className="relative z-10 py-7 px-7">
                <h3 className="font-mono text-3xl font-bold mb-3 pt-5" style={{ color: 'var(--color-text)' }}>
                  {plan.title}
                </h3>

                <p className="text-xl mb-11" style={{ color: 'var(--color-text)' }}>
                  {plan.description}
                </p>

                <div className="text-2xl font-medium mb-3" style={{ color: 'var(--color-text)' }}>
                  {plan.price}
                  <span className="text-base font-normal opacity-80">/month</span>
                </div>

                <div className="mb-10">
                  <Button 
                    variant="primary" 
                    padding="6px 0" 
                    borderRadius="25px" 
                    opacity={1}
                    className="w-full"
                  >
                    Get Started
                  </Button>
                </div>

                <div className="flex items-center gap-3 mb-5">
                  <div className="flex-1 h-[1px]" style={{ backgroundColor: 'var(--color-text)', opacity: 0.2 }} />
                  <span className="font-mono text-sm font-medium" style={{ color: 'var(--color-text)', opacity: 0.5 }}>
                    Features
                  </span>
                  <div className="flex-1 h-[1px]" style={{ backgroundColor: 'var(--color-text)', opacity: 0.2 }} />
                </div>

                <ul className="space-y-5 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckIcon className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--color-accent)' }} />  
                      <span className="md:text-md text-md" style={{ color: 'var(--color-text)' }}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};