import { useEffect, useRef } from "react";
import gsap from "gsap";

interface GithubIconProps {
  size?: number;
  className?: string;
}

const WHISKER_LEN = Math.hypot(96 - 36, 132 - 124); // ≈ 60.5

export const GithubIcon = ({ size = 28, className = "" }: GithubIconProps) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const eyeL = svg.querySelector<SVGCircleElement>(".gh-eye-left");
    const eyeR = svg.querySelector<SVGCircleElement>(".gh-eye-right");
    const whiskerL = svg.querySelector<SVGPathElement>(".gh-whisker-left");
    const whiskerR = svg.querySelector<SVGPathElement>(".gh-whisker-right");
    if (!eyeL || !eyeR || !whiskerL || !whiskerR) return;

    gsap.set([eyeL, eyeR], { transformOrigin: "50% 50%", scale: 0, opacity: 0 });

    [whiskerL, whiskerR].forEach((w) => {
      gsap.set(w, {
        attr: { "stroke-dasharray": WHISKER_LEN, "stroke-dashoffset": WHISKER_LEN },
        opacity: 1,
      });
    });

    const face = gsap
      .timeline({ paused: true })
      .to(
        [eyeL, eyeR],
        { scale: 1, opacity: 1, duration: 0.3, ease: "back.out(2)" },
        0,
      )
      .to(
        [whiskerL, whiskerR],
        { attr: { "stroke-dashoffset": 0 }, duration: 0.3, ease: "power2.out" },
        0,
      );

    tlRef.current = face;

    // Support hover on parent wrapper (e.g. <a> wrapping the icon)
    const trigger =
      (svg.closest<HTMLElement>(".github-icon-trigger") as HTMLElement | null) ??
      svg;

    const onEnter = () => face.play();
    const onLeave = () => face.reverse();

    // If trigger is svg itself we handle via React handlers, but also attach here for parent wrapper case
    if (trigger !== svg) {
      trigger.addEventListener("mouseenter", onEnter);
      trigger.addEventListener("mouseleave", onLeave);
      trigger.addEventListener("focus", onEnter);
      trigger.addEventListener("blur", onLeave);
    }

    return () => {
      if (trigger !== svg) {
        trigger.removeEventListener("mouseenter", onEnter);
        trigger.removeEventListener("mouseleave", onLeave);
        trigger.removeEventListener("focus", onEnter);
        trigger.removeEventListener("blur", onLeave);
      }
      face.kill();
    };
  }, []);

  const handleMouseEnter = () => tlRef.current?.play();
  const handleMouseLeave = () => tlRef.current?.reverse();
  const handleFocus = () => tlRef.current?.play();
  const handleBlur = () => tlRef.current?.reverse();

  return (
    <svg
      ref={svgRef}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width={size}
      height={size}
      className={`github-icon-svg overflow-visible ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
      tabIndex={-1}
      aria-hidden="true"
    >
      <rect width="256" height="256" fill="none" />
      <path
        className="gh-head"
        d="M119.83,56A52,52,0,0,0,76,32a51.92,51.92,0,0,0-3.49,44.7A49.28,49.28,0,0,0,64,104v8a48,48,0,0,0,48,48h48a48,48,0,0,0,48-48v-8a49.28,49.28,0,0,0-8.51-27.3A51.92,51.92,0,0,0,196,32a52,52,0,0,0-43.83,24Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <path
        className="gh-legs"
        d="M104,232V192a32,32,0,0,1,32-32h0a32,32,0,0,1,32,32v40"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <path
        className="gh-tail-base"
        d="M104,208 H72 A32,32 0 0 1 40,176"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <path
        className="gh-tail-tip"
        d="M40,176 A32,32 0 0 0 8,144"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <circle className="gh-eye gh-eye-left" cx="112" cy="106" r="7" fill="currentColor" stroke="none" />
      <circle className="gh-eye gh-eye-right" cx="160" cy="106" r="7" fill="currentColor" stroke="none" />
      <path
        className="gh-whisker gh-whisker-left"
        d="M96,132 L36,124"
        fill="none"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        className="gh-whisker gh-whisker-right"
        d="M176,132 L236,124"
        fill="none"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  );
};
