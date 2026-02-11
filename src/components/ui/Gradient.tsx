// components/ui/Gradient.tsx
export const Gradient = () => {
  {/* 👇 CURVA SIMPLE para MOBILE - suave y limpia */}
  const curvePathMobile = "M -10 0 Q 960 180, 1950 -120";
  
  {/* 👇 CURVA MONTAÑA para DESKTOP - múltiples picos */}
  const curvePathDesktop = "M -10 0 Q 320 -100, 640 50 Q 960 200, 1280 50 Q 1600 -100, 1950 -150";

  return (
    <svg
      className="absolute top-15 md:top-35 left-0 w-full h-full pointer-events-none"
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







// // components/ui/Gradient.tsx
// export const Gradient = () => {
//   {/* 👇 UNA SOLA CURVA - la reusamos 3 veces */}
//   const curvePath = "M -10 0 Q 1000 300, 1950 -210";
//   {/* 👆 CURVA BASE:
//       - Empieza en y=0 (izquierda)
//       - Baja a y=200 en el centro (punto más bajo)
//       - Termina en y=-150 (derecha) ← MÁS ARRIBA que el inicio
      
//       AJUSTAR LA CURVA:
//       - Punto más bajo (centro): cambiar 200 → más grande = baja más
//       - Final más arriba: cambiar -150 → más negativo = termina más arriba (-200, -250)
//       - Final más abajo: cambiar -150 → menos negativo = termina más abajo (-100, -50)
//   */}

//   return (
//     <svg
//       className="absolute top-15 md:top-35 left-0 w-full h-full pointer-events-none"
//       viewBox="0 0 1920 1080"
//       preserveAspectRatio="none"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//       style={{ zIndex: 0 }}
//     >
//       <defs>
//         <filter id="blur-desktop" x="-50%" y="-50%" width="200%" height="200%">
//           <feGaussianBlur stdDeviation="23" />
//         </filter>
//         <filter id="blur-mobile" x="-50%" y="-50%" width="200%" height="200%">
//           <feGaussianBlur stdDeviation="20" />
//         </filter>
//       </defs>

//       {/* MOBILE */}
//       <g className="md:hidden" transform="translate(0, 650)">
//         <path d={curvePath} stroke="var(--color-primary)" strokeWidth="11" strokeOpacity="0.7" strokeLinecap="round" fill="none" filter="url(#blur-mobile)" />
//         <path d={curvePath} transform="translate(0, 40)" stroke="var(--color-secondary)" strokeWidth="11" strokeOpacity="0.7" strokeLinecap="round" fill="none" filter="url(#blur-mobile)" />
//         <path d={curvePath} transform="translate(0, 80)" stroke="var(--color-accent)" strokeWidth="11" strokeOpacity="0.7" strokeLinecap="round" fill="none" filter="url(#blur-mobile)" />
//       </g>

//       {/* DESKTOP */}
//       <g className="hidden md:block" transform="translate(0, 600)">
//         <path d={curvePath} stroke="var(--color-primary)" strokeWidth="22" strokeOpacity="0.80" strokeLinecap="round" fill="none" filter="url(#blur-desktop)" />
//         <path d={curvePath} transform="translate(0, 60)" stroke="var(--color-secondary)" strokeWidth="22" strokeOpacity="0.80" strokeLinecap="round" fill="none" filter="url(#blur-desktop)" />
//         <path d={curvePath} transform="translate(0, 120)" stroke="var(--color-accent)" strokeWidth="22" strokeOpacity="0.80" strokeLinecap="round" fill="none" filter="url(#blur-desktop)" />
//       </g>
//     </svg>
//   );
// };