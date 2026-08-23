import * as Dialog from "@radix-ui/react-dialog";
import { useState, useEffect } from "react";
import { Logo } from "../ui/Logo";
import { useColorStore } from "../../store/useColorStore";
import { useLang } from "../../hooks/useLang";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const lang = useColorStore((state) => state.lang);
  const setLang = useColorStore((state) => state.setLang);

  // Traducciones
  const menuItems = useLang({
    es: [
      { name: "Cómo funciona", id: "how-it-works" },
      { name: "Funciones", id: "features" },
      { name: "Precios", id: "pricing" },
      { name: "Testimonios", id: "testimonials" },
      { name: "Preguntas", id: "FAQ" },
    ],
    en: [
      { name: "How it works", id: "how-it-works" },
      { name: "Features", id: "features" },
      { name: "Pricing", id: "pricing" },
      { name: "Testimonials", id: "testimonials" },
      { name: "FAQS", id: "FAQ" },
    ],
  });

  useEffect(() => {
    const checkSize = () => setIsDesktop(window.innerWidth >= 768);
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  const handleScroll = (id: string) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 50, behavior: "smooth" });
    }
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen} modal={!isDesktop}>
      <nav className="w-full flex flex-col pt-1 z-[100] relative">
        <div className="w-full flex justify-between items-center px-3 md:px-12">
          <Logo size="md" />

          <div className="flex flex-row-reverse items-center gap-4">
            {/* TRIGGER HAMBURGUESA */}
            <Dialog.Trigger asChild>
              <button
                aria-label="Toggle menu"
                className={`p-1 z-[110] relative focus:outline-none ${isOpen ? "hamburger-active" : ""}`}
                style={{ color: "var(--color-text)" }}
              >
                <svg
                  aria-hidden="true"
                  className="hamburger-svg w-10 h-10"
                  viewBox="0 0 32 32"
                >
                  <path
                    className="line line-top-bottom"
                    d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                  />
                  <path className="line" d="M7 16 27 16" />
                </svg>
              </button>
            </Dialog.Trigger>

            {/* SELECTOR DE IDIOMA - toggle ancho completo */}
            <button
              onClick={() => setLang(lang === "es" ? "en" : "es")}
              aria-label={`Switch language to ${lang === "es" ? "English" : "Español"}`}
              className="flex gap-1.5 mr-2 font-mono text-xs font-bold select-none px-2 py-1 cursor-pointer"
              style={{ color: "var(--color-text)" }}
            >
              <span className={`transition-all duration-300 ${lang === "es" ? "opacity-100 underline decoration-2 underline-offset-4" : "opacity-40"}`}>
                ES
              </span>
              <span style={{ opacity: 0.3 }}>|</span>
              <span className={`transition-all duration-300 ${lang === "en" ? "opacity-100 underline decoration-2 underline-offset-4" : "opacity-40"}`}>
                EN
              </span>
            </button>

            {/* DESKTOP MENU */}
            <div
              className={`hidden md:flex items-center gap-6 overflow-hidden transition-all duration-500 ${isOpen ? "max-w-[800px] opacity-100" : "max-w-0 opacity-0 pointer-events-none"}`}
            >
              <div className="flex gap-6 pr-4">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleScroll(item.id)}
                    className="whitespace-nowrap font-mono font-bold text-base nav-link-effect"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 3 LÍNEAS SEPARADORAS AL FINAL DEL NAVBAR */}
        <div className="w-full flex flex-col gap-1  mb-2 px-3 md:px-12 opacity-5">
          <div
            className="w-full h-px bg-current"
            style={{ color: "var(--color-text)" }}
          />
          <div
            className="w-full h-px bg-current"
            style={{ color: "var(--color-text)" }}
          />
          <div
            className="w-full h-px bg-current"
            style={{ color: "var(--color-text)" }}
          />
        </div>

        {/* MOBILE PORTAL — pantalla completa */}
        <Dialog.Portal>
          <Dialog.Overlay className="md:hidden fixed inset-0 z-[120]" />
          <Dialog.Content
            className="md:hidden fixed inset-0 z-[130] flex flex-col focus:outline-none data-[state=closed]:opacity-0 data-[state=open]:opacity-100 transition-opacity duration-300"
            style={{ backgroundColor: "var(--color-background)" }}
          >
            {/* Header exactamente igual al nav principal */}
            <div className="w-full flex justify-between items-center px-3 md:px-12 pt-1">
              <Logo size="md" />

              <div className="flex flex-row-reverse items-center gap-4">
                <Dialog.Close asChild>
                  <button
                    aria-label="Close menu"
                    className="p-1 z-[110] relative focus:outline-none hamburger-active"
                    style={{ color: "var(--color-text)" }}
                  >
                    <svg
                      aria-hidden="true"
                      className="hamburger-svg w-10 h-10"
                      viewBox="0 0 32 32"
                    >
                      <path
                        className="line line-top-bottom"
                        d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                      />
                      <path className="line" d="M7 16 27 16" />
                    </svg>
                  </button>
                </Dialog.Close>

                {/* SELECTOR DE IDIOMA EN MENU MOBILE - toggle ancho completo */}
                <button
                  onClick={() => setLang(lang === "es" ? "en" : "es")}
                  aria-label={`Switch language to ${lang === "es" ? "English" : "Español"}`}
                  className="flex gap-1.5 mr-2 font-mono text-xs font-bold select-none px-2 py-1 cursor-pointer"
                  style={{ color: "var(--color-text)" }}
                >
                  <span className={`transition-all duration-300 ${lang === "es" ? "opacity-100 underline decoration-2 underline-offset-4" : "opacity-40"}`}>
                    ES
                  </span>
                  <span style={{ opacity: 0.3 }}>|</span>
                  <span className={`transition-all duration-300 ${lang === "en" ? "opacity-100 underline decoration-2 underline-offset-4" : "opacity-40"}`}>
                    EN
                  </span>
                </button>
              </div>
            </div>

            <Dialog.Title className="sr-only">Menu</Dialog.Title>

            {/* Items centrados verticalmente */}
            <div className="flex flex-col items-center justify-center flex-1 gap-10 pb-20">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleScroll(item.id)}
                  className="text-3xl font-mono font-bold nav-link-effect"
                  style={{ color: "var(--color-text)" }}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </nav>
    </Dialog.Root>
  );
};
