import * as Dialog from '@radix-ui/react-dialog';
import { useState, useEffect } from 'react';
import { Logo } from '../ui/Logo';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkSize = () => setIsDesktop(window.innerWidth >= 768);
    checkSize();
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  const menuItems = [
    { name: 'How it works', id: 'how-it-works' },
    { name: 'Features', id: 'features' },
    { name: 'Pricing', id: 'pricing' },
    { name: 'Testimonials', id: 'testimonials' },
    { name: 'FAQS', id: 'FAQ' },
  ];

  const handleScroll = (id: string) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 50, behavior: 'smooth' });
    }
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen} modal={!isDesktop}>
      <nav className="w-full flex justify-between items-center px-6 md:px-12 pt-4 z-[100] relative">
        <Logo size="md" />

        <div className="flex flex-row-reverse items-center gap-4">
          {/* TRIGGER (Solo abre o togglea en desktop) */}
          <Dialog.Trigger asChild>
            <button 
              className={`p-1 z-[110] relative focus:outline-none ${isOpen ? 'hamburger-active' : ''}`}
              style={{ color: 'var(--color-text)' }}
            >
              <svg className="hamburger-svg w-10 h-10" viewBox="0 0 32 32">
                <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22" />
                <path className="line" d="M7 16 27 16" />
              </svg>
            </button>
          </Dialog.Trigger>

          {/* DESKTOP MENU */}
          <div className={`hidden md:flex items-center gap-6 overflow-hidden transition-all duration-500 ${isOpen ? 'max-w-[800px] opacity-100' : 'max-w-0 opacity-0 pointer-events-none'}`}>
            <div className="flex gap-6 pr-4">
              {menuItems.map((item) => (
                <button key={item.id} onClick={() => handleScroll(item.id)} className="whitespace-nowrap font-mono font-bold text-base nav-link-effect">
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* MOBILE PORTAL */}
        <Dialog.Portal>
          <Dialog.Overlay className="md:hidden fixed inset-0 z-[120] bg-black/20 backdrop-blur-sm" />
          
          <Dialog.Content 
            className="md:hidden fixed left-0 top-0 bottom-0 z-[130] w-[280px] p-6 pt-6 shadow-2xl focus:outline-none transition-transform duration-300 data-[state=closed]:-translate-x-full data-[state=open]:translate-x-0"
            style={{ backgroundColor: 'var(--color-background)' }}
          >
            {/* Header del Panel Mobile */}
            <div className="flex justify-between items-center mb-12">
              <Logo size="sm" />
              <Dialog.Close asChild>
                <button 
                  className="p-1 text-[var(--color-text)] hamburger-active"
                  aria-label="Cerrar menú"
                >
                  <svg className="hamburger-svg w-10 h-10" viewBox="0 0 32 32">
                    <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22" />
                    <path className="line" d="M7 16 27 16" />
                  </svg>
                </button>
              </Dialog.Close>
            </div>

            <Dialog.Title className="sr-only">Menu</Dialog.Title>
            
            <div className="flex flex-col gap-8">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleScroll(item.id)}
                  className="text-left text-2xl font-mono font-bold nav-link-effect w-fit"
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