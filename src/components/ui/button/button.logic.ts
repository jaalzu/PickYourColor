import tinycolor from 'tinycolor2';

export type ButtonVariant = 'primary' | 'secondary';

export function getTextColor(bgColor: string) {
  return tinycolor(bgColor).isLight() ? '#000000' : '#ffffff';
}

export function triggerPrimaryEffect(variant: ButtonVariant) {
  if (variant === 'primary') {
    document.body.classList.add('toolbar-pulse');
    setTimeout(() => document.body.classList.remove('toolbar-pulse'), 600);
  }
}
