// src/components/layout/Navbar.tsx

export const Navbar = () => {
  const navLinks = [
    { name: 'Features', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'About', href: '#' },
  ];

  return (
    <nav className="px-4 py-6 md:px-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="32" height="32" rx="8" fill="var(--color-primary)" />
            <path
              d="M8 16L14 10L20 16L14 22L8 16Z"
              fill="var(--color-accent)"
            />
          </svg>
          <span
            className="text-xl font-bold"
            style={{ color: 'var(--color-text)' }}
          >
            PICKYOURCOLOR
          </span>
        </div>

        {/* Menu */}
        <div className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:opacity-70 transition-opacity"
              style={{ color: 'var(--color-text)' }}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};