// src/components/ui/Button.tsx
import tinycolor from 'tinycolor2';
import { useColorStore } from '../../store/useColorStore';

interface ButtonProps {
  children: React.ReactNode;
  variant: 'primary' | 'secondary';
  onClick?: () => void;
}

export const Button = ({ children, variant, onClick }: ButtonProps) => {
  // Traemos el color actual del store para analizar su contraste
  const bgColor = useColorStore((state) => state.colors[variant]);

  // Determinamos si el fondo es claro u oscuro
  const isLight = tinycolor(bgColor).isLight();
  const textColor = isLight ? '#000000' : '#ffffff';

  return (
    <button
      onClick={onClick}
      className="px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
      style={{ 
        backgroundColor: bgColor,
        color: textColor 
      }}
    >
      {children}
    </button>
  );
};