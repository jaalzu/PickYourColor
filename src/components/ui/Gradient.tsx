



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

//       {/* ══ MOBILE ══ */}
//       <g className="md:hidden" transform="translate(0, 650)">
//         <path d={curvePathMobile} stroke="var(--color-primary)"   strokeWidth="22" strokeOpacity="1" strokeLinecap="round" fill="none" filter="url(#blur-grain-mobile)" />
//         <path d={curvePathMobile} stroke="var(--color-secondary)" strokeWidth="22" strokeOpacity="1" strokeLinecap="round" fill="none" filter="url(#blur-grain-mobile)" transform="translate(0, 35)" />
//         <path d={curvePathMobile} stroke="var(--color-accent)"    strokeWidth="22" strokeOpacity="1" strokeLinecap="round" fill="none" filter="url(#blur-grain-mobile)" transform="translate(0, 70)" />
//       </g>

//       {/* ══ DESKTOP ══ */}
//       <g className="hidden md:block" transform="translate(0, 560)">
//         <path d={curvePathDesktop} stroke="var(--color-accent)"    strokeWidth="80" strokeOpacity="10" strokeLinecap="round" fill="none" filter="url(#blur-grain-desktop)" />
//         <path d={curvePathDesktop} stroke="var(--color-secondary)" strokeWidth="80" strokeOpacity="10" strokeLinecap="round" fill="none" filter="url(#blur-grain-desktop)" transform="translate(0, 80)" />
//         <path d={curvePathDesktop} stroke="var(--color-primary)"   strokeWidth="80" strokeOpacity="10" strokeLinecap="round" fill="none" filter="url(#blur-grain-desktop)" transform="translate(0, 160)" />
//       </g>
//     </svg>
//   );
// };



/////////////// BLUR ///////////

export const Gradient = () => {
  return (
    <div
      className="absolute bottom-0 left-0 w-full pointer-events-none"
      style={{
        height: '80%',
        background: `
          radial-gradient(ellipse 80% 40% at 20% 100%, var(--color-primary) 0%, transparent 60%),
          radial-gradient(ellipse 60% 40% at 80% 100%, var(--color-secondary) 0%, transparent 60%),
          radial-gradient(ellipse 50% 30% at 50% 100%, var(--color-accent) 0%, transparent 70%)
        `,
        opacity: 0.5,
      }}
    />
  );
};