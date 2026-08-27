import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { useColorStore } from "../../../store/useColorStore";
import { getTextColor, triggerPrimaryEffect } from "./button.logic";

type ButtonVariant = "primary" | "secondary" | "accent" | "ghost";

interface ButtonProps {
  children: React.ReactNode;
  variant: ButtonVariant;
  onClick?: () => void;
  padding?: string;
  opacity?: number;
  borderRadius?: string;
  className?: string;
  asChild?: boolean;
  effect?: "stars" | "glow";
  style?: React.CSSProperties;
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
  effect = "glow",
  style,
}: ButtonProps) => {
  const isGhost = variant === "ghost";

  // para variantes "sólidas" usamos el color propio; para ghost, usamos accent como color de borde/hover
  const solidColor = useColorStore((state) =>
    isGhost
      ? state.colors.secondary
      : state.colors[variant as "primary" | "secondary" | "accent"],
  );

  const textColor = isGhost ? "var(--color-text)" : getTextColor(solidColor);

  const alphaHex = Math.round((opacity ?? 1) * 255)
    .toString(16)
    .padStart(2, "0");

  const handleClick = () => {
    if (!isGhost) {
      triggerPrimaryEffect(variant as "primary" | "secondary" | "accent");
    }
    onClick?.();
  };

  const Comp = asChild ? Slot : "button";

  const starSvg = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53">
      <path
        className="fil0"
        d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.05,-407.78z"
      />
    </svg>
  );

  const ghostStyle: React.CSSProperties = isGhost
    ? {
        color: textColor,
        border: "3px solid transparent", // invisible, solo para igualar tamaño
      }
    : {
        backgroundColor: `${solidColor}${alphaHex}`,
        color: textColor,
        border: "3px solid transparent",
      };

  return (
    <Comp
      onClick={handleClick}
      className={`button ${isGhost ? "button-ghost" : effect === "stars" ? "button-stars" : "btn-glow-effect"} font-bold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${className}`}
      style={
        {
          ...ghostStyle,
          padding: padding || "16px 33px",
          borderRadius: borderRadius || "9px",
          boxSizing: "border-box",
          "--shadow-color": solidColor,
          ...style,
        } as React.CSSProperties
      }
    >
      {!isGhost && effect === "stars" && (
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
