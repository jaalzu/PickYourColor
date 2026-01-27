import tinycolor from 'tinycolor2';

export const isValidHex = (value: string): boolean => {
  return tinycolor(value).isValid();
};