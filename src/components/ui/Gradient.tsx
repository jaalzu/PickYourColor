// // components/ui/Gradient.tsx
// export const Gradient = () => {
//   const curvePathMobile = "M -10 0 Q 960 180, 1950 -120";
//   const curvePathDesktop = "M -10 0 Q 320 -100, 640 50 Q 960 200, 1280 50 Q 1600 -100, 1950 -10";

//   return (
//     <svg
//       className="absolute top-15 md:top-25 left-0 w-full h-full pointer-events-none"
//       viewBox="0 0 1920 1080"
//       preserveAspectRatio="none"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//       style={{ zIndex: 0 }}
//     >
//       <defs>
//         <filter id="blur-grain-desktop" x="-50%" y="-50%" width="200%" height="200%">
//           {/* Blur más suave */}
//           <feGaussianBlur stdDeviation="13" result="blurred" />
//           <feTurbulence
//             type="fractalNoise"
//             baseFrequency="0.40"
//             numOctaves="2"
//             stitchTiles="stitch"
//             result="noise"
//           />
//           {/* Grano más suave */}
//           <feColorMatrix
//             type="matrix"
//             values="2 0 0 0 -0.5
//                     2 0 0 0 -0.5
//                     2 0 0 0 -0.5
//                     0 0 0 1  0"
//             in="noise"
//             result="contrastNoise"
//           />
//           <feBlend in="blurred" in2="contrastNoise" mode="screen" result="grainy" />
//           <feComposite in="grainy" in2="blurred" operator="atop" />
//         </filter>

//         <filter id="blur-grain-mobile" x="-50%" y="-50%" width="200%" height="200%">
//           <feGaussianBlur stdDeviation="8" result="blurred" />
//           <feTurbulence
//             type="fractalNoise"
//             baseFrequency="0.40"
//             numOctaves="2"
//             stitchTiles="stitch"
//             result="noise"
//           />
//           <feColorMatrix
//             type="matrix"
//             values="2 0 0 0 -0.5
//                     2 0 0 0 -0.5
//                     2 0 0 0 -0.5
//                     0 0 0 1  0"
//             in="noise"
//             result="contrastNoise"
//           />
//           <feBlend in="blurred" in2="contrastNoise" mode="screen" result="grainy" />
//           <feComposite in="grainy" in2="blurred" operator="atop" />
//         </filter>
//       </defs>

//       {/* ══ MOBILE ══ */}
//       <g className="md:hidden" transform="translate(0, 650)">
//         <path d={curvePathMobile} stroke="var(--color-primary)"   strokeWidth="22" strokeOpacity="1" strokeLinecap="round" fill="none" filter="url(#blur-grain-mobile)" />
//         <path d={curvePathMobile} stroke="var(--color-secondary)" strokeWidth="22" strokeOpacity="1" strokeLinecap="round" fill="none" filter="url(#blur-grain-mobile)" transform="translate(0, 35)" />
//         <path d={curvePathMobile} stroke="var(--color-accent)"    strokeWidth="22" strokeOpacity="1" strokeLinecap="round" fill="none" filter="url(#blur-grain-mobile)" transform="translate(0, 70)" />
//       </g>

//       {/* ══ DESKTOP ══ */}
//       <g className="hidden md:block" transform="translate(0, 600)">
//         <path d={curvePathDesktop} stroke="var(--color-accent)"    strokeWidth="30" strokeOpacity="1" strokeLinecap="round" fill="none" filter="url(#blur-grain-desktop)" />
//         <path d={curvePathDesktop} stroke="var(--color-secondary)" strokeWidth="30" strokeOpacity="1" strokeLinecap="round" fill="none" filter="url(#blur-grain-desktop)" transform="translate(0, 30)" />
//         <path d={curvePathDesktop} stroke="var(--color-primary)"   strokeWidth="30" strokeOpacity="1" strokeLinecap="round" fill="none" filter="url(#blur-grain-desktop)" transform="translate(0, 60)" />
//       </g>
//     </svg>
//   );
// };


// components/ui/Gradient.tsx
export const Gradient = () => {
  {/* 👇 CURVA SIMPLE para MOBILE - suave y limpia */}
  const curvePathMobile = "M -10 0 Q 960 180, 1950 -120";
  
  {/* 👇 CURVA MONTAÑA para DESKTOP - múltiples picos */}
  const curvePathDesktop = "M -10 0 Q 320 -100, 640 50 Q 960 200, 1280 50 Q 1600 -100, 1950 -10";

  return (
    <svg
      className="absolute top-15 md:top-25 left-0 w-full h-full pointer-events-none"
      viewBox="0 0 1920 1080"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ zIndex: 0 }}
    >
      <defs>
        <filter id="blur-desktop" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="25" />
        </filter>
        <filter id="blur-mobile" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="15" />
        </filter>
      </defs>

      {/* MOBILE - Curva simple */}
      <g className="md:hidden" transform="translate(0, 650)">
        {/* 👆 Bajé la posición en mobile a 550 para que se vea mejor */}
        <path d={curvePathMobile} stroke="var(--color-primary)" strokeWidth="14" strokeOpacity="0.75" strokeLinecap="round" fill="none" filter="url(#blur-mobile)" />
        <path d={curvePathMobile} transform="translate(0, 35)" stroke="var(--color-secondary)" strokeWidth="14" strokeOpacity="0.75" strokeLinecap="round" fill="none" filter="url(#blur-mobile)" />
        <path d={curvePathMobile} transform="translate(0, 70)" stroke="var(--color-accent)" strokeWidth="14" strokeOpacity="0.75" strokeLinecap="round" fill="none" filter="url(#blur-mobile)" />
      </g>

      {/* DESKTOP - Curva tipo montaña */}
      <g className="hidden md:block" transform="translate(0, 600)">
        <path d={curvePathDesktop} stroke="var(--color-accent)" strokeWidth="17" strokeOpacity="1" strokeLinecap="round" fill="none" filter="url(#blur-desktop)" />
        <path d={curvePathDesktop} transform="translate(0, 60)" stroke="var(--color-secondary)" strokeWidth="17" strokeOpacity="1" strokeLinecap="round" fill="none" filter="url(#blur-desktop)" />
        <path d={curvePathDesktop} transform="translate(0, 120)" stroke="var(--color-primary)" strokeWidth="17" strokeOpacity="1" strokeLinecap="round" fill="none" filter="url(#blur-desktop)" />
      </g>
    </svg>
  );
};



