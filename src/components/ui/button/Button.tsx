import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { useColorStore } from '../../../store/useColorStore';
import { getTextColor, triggerPrimaryEffect } from './button.logic';

interface ButtonProps {
  children: React.ReactNode;
  variant: 'primary' | 'secondary';
  onClick?: () => void;
  padding?: string;
  opacity?: number;
  borderRadius?: string;
  className?: string;
  asChild?: boolean;
}

export const Button = ({ 
  children, 
  variant, 
  onClick, 
  padding, 
  opacity, 
  borderRadius,
  className = "",
  asChild = false
}: ButtonProps) => {

  const bgColor = useColorStore((state) => state.colors[variant]);
  const textColor = getTextColor(bgColor);

  const handleClick = () => {
    // Esto activará el shake de la toolbar si es primary
    triggerPrimaryEffect(variant); 
    onClick?.();
  };

  const Comp = asChild ? Slot : 'button';

  // Ahora TODOS los botones tienen la clase del efecto glow
  const effectClass = 'btn-glow-effect';

  return (
    <Comp
      onClick={handleClick}
      className={`font-mono font-bold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${effectClass} ${className}`}
      style={{ 
        backgroundColor: bgColor,
        color: textColor,
        // Si pasás padding por props (como en tu Learn More), se usa ese.
        padding: padding || '16px 33px', 
        opacity: opacity ?? 1,
        borderRadius: borderRadius || '9px',
        // Variable CSS para que el glow sea del color del botón (sea primary o secondary)
        '--shadow-color': bgColor 
      } as React.CSSProperties}
    >
      {children}
    </Comp>
  );
};