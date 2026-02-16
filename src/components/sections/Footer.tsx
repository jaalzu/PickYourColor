




import { Logo } from '../ui/Logo';
import { BackToTopButton } from '../ui/BackToTopButton';
import { useColorStore } from '../../store/useColorStore';

export const Footer = () => {
  const lang = useColorStore((state) => state.lang);

  const content = {
    es: {
      starMessage: "Ya que llegaste hasta acá, podes dejarme una estrellita. Gracias!",
      githubBtn: "Ir a GitHub",
      copyright: "Cualquier parecido con una web real es pura coincidencia."
    },
    en: {
      starMessage: "Since you made it this far, a star would help me a lot. Thanks!",
      githubBtn: "Go to GitHub",
      copyright: "Any resemblance to a real website is purely coincidental."
    }
  };

  const { starMessage, githubBtn, copyright } = content[lang];

  return (
   


<footer className="relative pt-28  pb-30 md:pb-40 px-8">
  <div className="max-w-7xl mx-auto">
    <div className="flex flex-col md:flex-row justify-between items-center gap-8">

      {/* izquierda — logo + copyright */}
      <div className="flex flex-col items-center md:items-start gap-2 flex-1 order-2 md:order-1">
        <Logo size="lg" />
        <span
          className="text-[14px] opacity-60 cursor-default text-center md:text-left"
          style={{ color: 'var(--color-text)' }}
        >
            {copyright}
        </span>
      </div>

      {/* centro — back to top */}
      <div className="flex flex-1 justify-center order-1 md:order-2">
        <BackToTopButton />
      </div>

      {/* derecha — star message + github */}
      <div className="flex flex-col items-center md:items-end gap-2 flex-1 order-3">
        <p className="text-xs text-center md:text-right" style={{ color: 'var(--color-text)', opacity: 0.9 }}>
          {starMessage}
        </p>
        
           <a
              href="https://github.com/jaalzu/PickYourColor"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium h-10 px-4 py-2 bg-gray-900 hover:bg-gray-950 transition-all duration-200 ease-in-out hover:ring-2 hover:ring-offset-2 hover:ring-gray-900"
            >
          <svg
            className="mr-2 text-white"
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
            height="20"
            width="20"
          >
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
            <path d="M9 18c-4.51 2-5-2-7-2" />
          </svg>
          <span className="text-white">{githubBtn}</span>
          <span className="flex items-center ml-4 group-hover:text-yellow-500 transition-colors duration-200 ease-in-out">
            <svg
              className="text-yellow-500"
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
              height="18"
              width="18"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          </span>
        </a>
      </div>

    </div>
  </div>
</footer>
  );
};







