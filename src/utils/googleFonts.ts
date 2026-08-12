export const GOOGLE_FONTS_MAP: Record<string, string> = {
  figtree: 'Figtree:ital,wght@0,300..900;1,300..900',
  inter: 'Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900',
  spaceGrotesk: 'Space+Grotesk:wght@300..700',
  montserrat: 'Montserrat:ital,wght@0,100..900;1,100..900',
  playfair: 'Playfair+Display:ital,wght@0,400..900;1,400..900',
  merriweather: 'Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900',
  lora: 'Lora:ital,wght@0,400..700;1,400..700',
  caveat: 'Caveat:wght@400..700',
  roboto: 'Roboto:ital,wght@0,100..900;1,100..900',
  openSans: 'Open+Sans:ital,wght@0,300..800;1,300..800',
  lato: 'Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900',
  poppins: 'Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900',
  raleway: 'Raleway:ital,wght@0,100..900;1,100..900',
  nunito: 'Nunito:ital,wght@0,200..1000;1,200..1000',
  ubuntu: 'Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700',
  oswald: 'Oswald:wght@200..700',
  playpenSans: 'Playpen+Sans:wght@100..800',
  rubik: 'Rubik:ital,wght@0,300..900;1,300..900',
  quicksand: 'Quicksand:wght@300..700',
  dancingScript: 'Dancing+Script:wght@400..700',
  pacifico: 'Pacifico',
  Cinzel: 'Cinzel:wght@400..900',
  BebasNeue: 'Bebas+Neue',
  sourceSans3: 'Source+Sans+3:ital,wght@0,200..900;1,200..900',
  workSans: 'Work+Sans:ital,wght@0,100..900;1,100..900',
  ptSans: 'PT+Sans:ital,wght@0,400;0,700;1,400;1,700',
  mulish: 'Mulish:ital,wght@0,200..1000;1,200..1000',
  firaCode: 'Fira+Code:wght@300..700',
  jetBrainsMono: 'JetBrains+Mono:ital,wght@0,100..800;1,100..800',
  crimsonPro: 'Crimson+Pro:ital,wght@0,200..900;1,200..900',
  cardo: 'Cardo:ital,wght@0,400;0,700;1,400',
  ebGaramond: 'EB+Garamond:ital,wght@0,400..800;1,400..800',
};

export const loadGoogleFont = (fontKey: string) => {
  const query = GOOGLE_FONTS_MAP[fontKey];
  if (!query) return;

  const linkId = `google-font-${fontKey}`;
  if (document.getElementById(linkId)) return;

  const link = document.createElement('link');
  link.id = linkId;
  link.rel = 'stylesheet';
  link.href = `https://fonts.googleapis.com/css2?family=${query}&display=swap`;
  document.head.appendChild(link);
};
