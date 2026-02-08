import tinycolor from 'tinycolor2';
import { useColorStore } from '../../store/useColorStore';

interface ButtonProps {
  children: React.ReactNode;
  variant: 'primary' | 'secondary';
  onClick?: () => void;
  padding?: string;      
  opacity?: number;      
  borderRadius?: string; 
  className?: string;    
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

  const isLight = tinycolor(bgColor).isLight();
  const textColor = isLight ? '#000000' : '#ffffff';

  return (
    <button
      onClick={onClick}
      className={`font-mono font-bold transition hover:brightness-110 active:scale-95 ${className}`}
      style={{ 
        backgroundColor: bgColor,
        color: textColor,
        padding: padding || '12px 24px',
        opacity: opacity ?? 1,
        borderRadius: borderRadius || '8px'
      }}
    >
      {children}
    </button>
  );
};