import tinycolor from 'tinycolor2';
import { useColorStore } from '../../../store/useColorStore';

export type ButtonVariant = 'primary' | 'secondary' | 'accent';

export function getTextColor(bgColor: string) {
  return tinycolor(bgColor).isLight() ? '#000000' : '#ffffff';
}

export function triggerPrimaryEffect(variant: ButtonVariant) {
  if (variant === 'primary') {
    const triggerFeedback = useColorStore.getState().triggerToolbarFeedback;
    
    if (triggerFeedback) {
      triggerFeedback(); 
    } else {
      console.error("No se encontró triggerToolbarFeedback en el store");
    }
  }
}