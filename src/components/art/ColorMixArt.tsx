type ColorMixArtProps = {
  className?: string;
};

const PRIMARY = { cx: 150, cy: 112, r: 80 };
const SECONDARY = { cx: 108, cy: 178, r: 56 };
const ACCENT = { cx: 192, cy: 178, r: 42 };

export const ColorMixArt = ({ className = "" }: ColorMixArtProps) => {
  return (
    <div className={`cma-wrap ${className}`}>
      <style>{`
        .cma-wrap{ position: relative; width: 100%; aspect-ratio: 1 / 1; }
        .cma-svg{ width: 100%; height: 100%; overflow: visible; position: relative; }
        .cma-circle{ mix-blend-mode: screen; }

        .cma-primary{ fill: var(--color-primary); }
        .cma-secondary{ fill: var(--color-secondary); }
        .cma-accent{ fill: var(--color-accent); }
      `}</style>

      <svg viewBox="70 50 160 150" className="cma-svg">
        <circle
          className="cma-circle cma-primary"
          cx={PRIMARY.cx}
          cy={PRIMARY.cy}
          r={PRIMARY.r}
        />
        <circle
          className="cma-circle cma-secondary"
          cx={SECONDARY.cx}
          cy={SECONDARY.cy}
          r={SECONDARY.r}
        />
        <circle
          className="cma-circle cma-accent"
          cx={ACCENT.cx}
          cy={ACCENT.cy}
          r={ACCENT.r}
        />
      </svg>
    </div>
  );
};
