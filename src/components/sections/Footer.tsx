import { Logo } from "../ui/Logo";
import { GithubIcon } from "../ui/GithubIcon";
import { useLang } from "../../hooks/useLang";

export const Footer = () => {
  const { copyright } = useLang({
    es: {
      copyright: "Cualquier parecido con una web real es pura coincidencia.",
    },
    en: {
      copyright: "Any resemblance to a real website is purely coincidental.",
    },
  });

  return (
    <footer className="relative pt-24  pb-25 md:pb-40 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* izquierda — logo + copyright */}
          <div className="flex flex-col items-center md:items-start gap-2 flex-1 order-2 md:order-1">
            <Logo size="lg" />
            <span
              className="text-[14px] opacity-60 cursor-default text-center md:text-left"
              style={{ color: "var(--color-text)" }}
            >
              {copyright}
            </span>
          </div>

          {/* derecha — github link as final element */}
          <a
            href="https://github.com/jaalzu/PickYourColor"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View source on GitHub"
            className="github-icon-trigger order-1 md:order-2 p-2 rounded-full transition-colors hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
            style={{ color: "var(--color-text)" }}
          >
            <GithubIcon size={36} />
          </a>
        </div>
      </div>
    </footer>
  );
};
