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

  const alphaHex = Math.round((opacity ?? 1) * 255).toString(16).padStart(2, '0');

  const handleClick = () => {
    triggerPrimaryEffect(variant); 
    onClick?.();
  };

  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
  onClick={handleClick}
  className={`font-mono font-bold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 btn-glow-effect ${className}`}
  style={{ 
    backgroundColor: `${bgColor}${alphaHex}`,
    color: textColor,
    padding: padding || '16px 33px', 
    borderRadius: borderRadius || '9px',
    '--shadow-color': bgColor,
  } as React.CSSProperties}
>
  {children}
</Comp>
  );
};