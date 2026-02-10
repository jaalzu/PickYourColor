import { ArrowPathIcon, ArrowUturnLeftIcon, EyeIcon, SunIcon } from '@heroicons/react/24/outline';


export const Features = () => {
 const features = [
  {
    title: "Randomize",
    description: "You can randomize your colors to find a nice color for your palette.",
    Icon: ArrowPathIcon
  },
  {
    title: "Undo/Redo",
    description: "If you misclick and now you lost some color you like, you can undo your changes to come back!",
    Icon: ArrowUturnLeftIcon
  },
  {
    title: "Accessibility",
    description: "Can also check for accessibility to see if your colors match the WCAG accessibility standards!!",
    Icon: EyeIcon
  },
  {
    title: "Dark/Light",
    description: "You can switch to dark/light mode to match your palette both in dark and light.",
    Icon: SunIcon
  }
];


  return (
    <section
    id='features'
      className="px-8 py-15 md:py-34"
      style={{ backgroundColor: 'var(--color-background)' }}
    >
      <div className="max-w-7xl mx-auto">
        <h2
          className="font-mono text-4xl md:text-4xl font-medium text-start mb-6"
          style={{ color: 'var(--color-text)' }}
        >
          Some Cool Features
        </h2>

        <div className="flex flex-col gap-6">
  {features.map((feature, index) => {
    const isEven = index % 2 === 1;
    const bgColor = index % 2 === 0 ? 'var(--color-primary)' : 'var(--color-secondary)';
    
    return (
      <div key={feature.title} className="h-[180px] md:h-[140px] rounded-[10px] relative p-4 md:px-9 "
>
        <div 
          className="absolute inset-0 rounded-[10px]" 
          style={{ 
            backgroundColor: bgColor, 
            opacity: .550,
            zIndex: 0
          }}
        />
        
        <div className={`relative z-10 h-full flex flex-col ${isEven ? 'items-end text-right' : 'items-start text-left'}`}>
          <div className={`flex items-center justify-between w-full mb-2 ${isEven ? 'flex-row-reverse' : ''}`}>
            <h3 className="font-mono text-2xl font-bold" style={{ color: 'var(--color-text)' }}>
              {feature.title}
            </h3>
            <feature.Icon className="w-10 h-10" style={{ color: 'var(--color-accent)' }}
            aria-hidden="true" />
          </div>
          
          <p className="text-xl md:text-2xl" style={{ color: 'var(--color-text)' }}>
            {feature.description}
          </p>
        </div>
      </div>
    );
  })}
</div>

      </div>
    </section>
  );
};