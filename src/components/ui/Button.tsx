import tinycolor from 'tinycolor2';
import { useColorStore } from '../../store/useColorStore';

interface ButtonProps {
  children: React.ReactNode;
  variant: 'primary' | 'secondary';
  onClick?: () => void;
  // Nuevas props opcionales
  padding?: string;       // ej: "12px 24px" o "1rem"
  opacity?: number;      // ej: 0.8
  borderRadius?: string; // ej: "99px" o "4px"
  className?: string;    // Para estilos extra de Tailwind desde afuera
}

export const Button = ({ 
  children, 
  variant, 
  onClick, 
  padding, 
  opacity, 
  borderRadius,
  className = "" 
}: ButtonProps) => {
  const bgColor = useColorStore((state) => state.colors[variant]);

  // Cálculo dinámico del contraste del texto
  const isLight = tinycolor(bgColor).isLight();
  const textColor = isLight ? '#000000' : '#ffffff';

  return (
    <button
      onClick={onClick}
      className={`font-medium transition hover:brightness-110 active:scale-95 ${className}`}
      style={{ 
        backgroundColor: bgColor,
        color: textColor,
        // Aplicamos las props dinámicas o valores por defecto
        padding: padding || '12px 24px',
        opacity: opacity ?? 1,
        borderRadius: borderRadius || '8px'
      }}
    >
      {children}
    </button>
  );
};