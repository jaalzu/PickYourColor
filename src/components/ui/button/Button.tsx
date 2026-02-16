import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { useColorStore } from '../../../store/useColorStore';
import { getTextColor, triggerPrimaryEffect } from './button.logic';

interface ButtonProps {
  children: React.ReactNode;
  variant: 'primary' | 'secondary' | 'accent';
  onClick?: () => void;
  padding?: string;
  opacity?: number;
  borderRadius?: string;
  className?: string;
  asChild?: boolean;
    effect?: 'stars' | 'glow';

}

export const Button = ({ 
  children, 
  variant, 
  onClick, 
  padding, 
  opacity, 
  borderRadius,
  className = "",
  asChild = false,
   effect = 'glow' 
}: ButtonProps) => {

  const bgColor = useColorStore((state) => state.colors[variant]);
  const textColor = getTextColor(bgColor);

  const alphaHex = Math.round((opacity ?? 1) * 255).toString(16).padStart(2, '0');

  const handleClick = () => {
    triggerPrimaryEffect(variant); 
    onClick?.();
  };

  const Comp = asChild ? Slot : 'button';

  
  const starSvg = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53">
    <path className="fil0" d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.05,-407.78z"/>
  </svg>
);
return (
  <Comp
    onClick={handleClick}
    className={`button ${effect === 'stars' ? 'button-stars' : 'btn-glow-effect'} font-bold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${className}`}
    style={{ 
      backgroundColor: `${bgColor}${alphaHex}`,
      color: textColor,
      padding: padding || '16px 33px', 
      borderRadius: borderRadius || '9px',
      '--shadow-color': bgColor,
    } as React.CSSProperties}
  >
    {effect === 'stars' && (
      <>
        <span className="star-1">{starSvg}</span>
        <span className="star-2">{starSvg}</span>
        <span className="star-3">{starSvg}</span>
        <span className="star-4">{starSvg}</span>
        <span className="star-5">{starSvg}</span>
        <span className="star-6">{starSvg}</span>
      </>
    )}
    {children}
  </Comp>
);
};