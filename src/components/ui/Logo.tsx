interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export const Logo = ({ size = 'md', showText = true }: LogoProps) => {
  const sizes = {
    sm: { svg: 'w-6 h-6', text: 'text-lg' },
    md: { svg: 'w-7 h-7 md:w-8 md:h-8', text: 'text-lg md:text-xl' },
    lg: { svg: 'w-10 h-10 md:w-12 md:h-12', text: 'text-2xl md:text-3xl' }
  };

  return (
    <div className="flex items-center gap-2">
      <svg 
        viewBox="0 0 256 256" 
        className={sizes[size].svg}
      >
        <defs>
          <linearGradient id="rainbow-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: 'var(--color-primary)' }} />
            <stop offset="33%" style={{ stopColor: 'var(--color-secondary)' }} />
            <stop offset="66%" style={{ stopColor: 'var(--color-accent)' }} />
            <stop offset="100%" style={{ stopColor: 'var(--color-primary)' }} />
          </linearGradient>
        </defs>
        
        <path 
          d="M 228 0 C 172.772 0 128 44.772 128 100 L 128 0 L 0 0 L 0 28 C 0 83.228 44.772 128 100 128 L 0 128 L 0 256 L 28 256 C 83.228 256 128 211.228 128 156 L 128 256 L 256 256 L 256 228 C 256 172.772 211.228 128 156 128 L 256 128 L 256 0 Z" 
          fill="url(#rainbow-gradient)" 
        />
      </svg>

      {showText && (
        <span 
          className={`${sizes[size].text} font-black tracking-tighter`}
          style={{ color: 'var(--color-text)' }}
        >
          PICKYOURCOLOR
        </span>
      )}
    </div>
  );
};