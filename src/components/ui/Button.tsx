// src/components/ui/Button.tsx

interface ButtonProps {
  children: React.ReactNode;
  variant: 'primary' | 'secondary';
  onClick?: () => void;
}

export const Button = ({ children, variant, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="px-6 py-3 rounded-lg font-medium hover:opacity-90 transition text-white"
      style={{ backgroundColor: `var(--color-${variant})` }}
    >
      {children}
    </button>
  );
};