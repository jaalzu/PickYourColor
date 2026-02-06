import figma from '../../assets/svg/figma.svg';
import insta from '../../assets/svg/insta.svg';
import react from '../../assets/svg/react.svg';
import steam from '../../assets/svg/steam.svg';
import vite from '../../assets/svg/vite.svg';
import yt from '../../assets/svg/yt.svg';
import tinycolor from 'tinycolor2';
import { useColorStore } from '../../store/useColorStore';

export const Companies = () => {
  const bgColor = useColorStore((state) => state.colors.background);
  const textColor = useColorStore((state) => state.colors.text);
  
  const isLightBg = tinycolor(bgColor).isLight();
  const borderColor = isLightBg 
    ? tinycolor(textColor).setAlpha(0.25).toRgbString()
    : tinycolor(textColor).setAlpha(0.25).toRgbString();

  const companies = [
    { icon: figma },
    { icon: insta },
    { icon: react },
    { icon: steam },
    { icon: vite },
    { icon: yt }
  ];

  return (
    <section className="py-9 " style={{ backgroundColor: 'var(--color-background)' }}>
      <div className="max-w-7xl mx-auto px-8">
        <h2
          className="text-2xl md:text-4xl font-bold text-center mb-6"
          style={{ color: 'var(--color-text)' }}
        >
          Thanks to all these small companies for supporting us!
        </h2>
      </div>

      <div 
        className="py-8 border-t border-b relative overflow-hidden"
        style={{ borderColor: borderColor }}
      >
<div 
  className="absolute inset-0 z-0 opacity-[0.03]"
  style={{
    backgroundImage: `
      repeating-linear-gradient(
        70deg,
        var(--color-secondary),
        var(--color-secondary) 3px,
        transparent 2px,
        transparent 12px
      )
    `
  }}
/>

    {/* Logos en pirámide mobile, fila en desktop */}
    <div className="relative z-30 max-w-7xl px-9 mx-auto md:max-w-full md:px-23  ">
      {/* Desktop: una fila */}
{/* Desktop: una fila */}
<div className="hidden md:flex justify-between items-center">
  {companies.map((company, index) => (
    <img 
      key={index}
      src={company.icon} 
      alt="Company logo"
      className="h-14 w-auto"
    />
  ))}
</div>

{/* Mobile: pirámide 3-2-1 */}
<div className="md:hidden space-y-8">
  <div className="flex justify-between">
    {companies.slice(0, 3).map((company, index) => (
      <img 
        key={index}
        src={company.icon} 
        alt="Company logo"
        className="h-13 w-auto"
      />
    ))}
  </div>

  <div className="flex justify-around px-12">
    {companies.slice(3, 5).map((company, index) => (
      <img 
        key={index}
        src={company.icon} 
        alt="Company logo"
        className="h-13 w-auto"
      />
    ))}
  </div>

  <div className="flex justify-center">
    <img 
      src={companies[5].icon} 
      alt="Company logo"
      className="h-13 w-auto"
    />
  </div>
</div>
    </div>
  </div>
</section>
  );
};