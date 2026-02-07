import { Logo } from '../ui/Logo';
import { ArrowUpIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className="relative pt-20 pb-32 px-8"
     style={{
  background: `linear-gradient(to top, var(--color-primary) 0%, var(--color-background) 80%)`
}}
    >
      <div className="max-w-7xl mx-auto">
        {/* Logo y Título */}
        <div className="flex flex-col items-center mb-20">
          <div className="flex items-center gap-3 mb-4">
           <Logo size="lg" />
          </div>
        </div>

        {/* Botón Back to Top */}
        <div className="flex justify-center mb-32">
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-6 py-3 rounded-lg border-2 transition-all duration-300 hover:scale-105"
            style={{
              borderColor: 'var(--color-accent)',
              backgroundColor: 'transparent',
              color: 'var(--color-text)'
            }}
          >
            <ArrowUpIcon className="w-5 h-5" style={{ color: 'var(--color-accent)' }} />
            <span className="font-medium">Back to Top</span>
          </button>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t" style={{ borderColor: 'rgba(var(--color-text-rgb), 0.1)' }}>
          {/* Made by */}
          <div className="flex items-center gap-4">
            <p className="text-sm" style={{ color: 'var(--color-text)', opacity: 0.7 }}>
              Made by javalzu
            </p>
            <a 
              href="https://github.com/javalzu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-70"
            >
              <svg className="w-6 h-6" fill="currentColor" style={{ color: 'var(--color-text)' }} viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>

          {/* Feedback */}
          <button className="flex items-center gap-2 transition-opacity hover:opacity-70">
            <span className="text-sm font-medium" style={{ color: 'var(--color-text)' }}>
              Feedback
            </span>
            <ArrowRightIcon className="w-4 h-4" style={{ color: 'var(--color-text)' }} />
          </button>
        </div>
      </div>
    </footer>
  );
};