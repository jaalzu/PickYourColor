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
    triggerPrimaryEffect(variant); // 👈 delegación limpia
    onClick?.();
  };

  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      onClick={handleClick}
      className={`font-mono font-bold transition hover:brightness-110 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${className}`}
      style={{ 
        backgroundColor: bgColor,
        color: textColor,
        padding: padding || '12px 24px',
        opacity: opacity ?? 1,
        borderRadius: borderRadius || '8px'
      }}
    >
      {children}
    </Comp>
  );
};
