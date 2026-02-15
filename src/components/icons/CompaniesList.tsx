import { type IconName } from '../icons/MainIcons';

interface Company {
  name: string;
  iconId: IconName;
  url?: string; // Opcional, por si después querés que sean links
}

export const COMPANIES: Company[] = [
  { 
    name: "Figma", 
    iconId: "figma" 
  },
  { 
    name: "GitHub", 
    iconId: "github" 
  },
  { 
    name: "Steam", 
    iconId: "steam" 
  },
  { 
    name: "Anthropic", 
    iconId: "anthropic" 
  },
  { 
    name: "Tesla", 
    iconId: "tesla" 
  },
  { 
    name: "Meta", 
    iconId: "meta" 
  },
  { 
    name: "Vercel", 
    iconId: "vercel" 
  },
  { 
    name: "Vue.js", 
    iconId: "vue" 
  },
  { 
    name: "Tailwind", 
    iconId: "tailwind" 
  },
  { 
    name: "Linux OS", 
    iconId: "linux" 
  }
];