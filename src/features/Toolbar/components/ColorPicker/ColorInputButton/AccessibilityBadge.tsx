// import { CheckCircleIcon, InformationCircleIcon, XCircleIcon } from '@heroicons/react/24/solid';
// import type { ContrastLevel } from '../../../utils/contrastChecker';

// export const AccessibilityBadge = ({ level }: { level: ContrastLevel }) => {
//   const config: Record<ContrastLevel, { Icon: any; label: string; color: string }> = {
//     High: { 
//       Icon: CheckCircleIcon, 
//       label: 'Legibilidad: Alta', 
//       color: 'text-emerald-500' 
//     },
//     Medium: { 
//       Icon: InformationCircleIcon, 
//       label: 'Legibilidad: Media', 
//       color: 'text-sky-400' 
//     },
//     Fail: { 
//       Icon: XCircleIcon, 
//       label: 'Legibilidad: Muy Baja / Inadmisible', 
//       color: 'text-red-600' 
//     },
//   };

//   const { Icon, label, color } = config[level];

//   return (
//     <div className="relative group inline-block">
//       <Icon className={`w-5 h-5 ${color} cursor-help`} />
      
//       <div className="hidden group-hover:block absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-black text-white p-2 text-xs rounded whitespace-nowrap z-50">
//         {label}
//       </div>
//     </div>
//   );
// };