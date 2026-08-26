// src/components/ui/Tooltip.tsx
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import type { ReactNode } from "react";

interface TooltipProps {
  children: ReactNode;
  content: string;
  side?: "top" | "right" | "bottom" | "left";
}

export const Tooltip = ({ children, content, side = "top" }: TooltipProps) => {
  return (
    <TooltipPrimitive.Provider delayDuration={300}>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content
            side={side}
            sideOffset={5}
            className="z-100 bg-[#2c2c2c] border border-white/30 px-3 py-1.5 text-sm text-white rounded-md data-[state=delayed-open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=delayed-open]:fade-in-0"
          >
            {content}
            <TooltipPrimitive.Arrow className="fill-white/20" />
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
};
