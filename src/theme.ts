export const darkColors = {
  background: '#0A0A0F',
  surface: '#1A1326',
  primary: '#A855F7',
  onPrimary: '#0A0A0F',
  text: '#FFFFFF',
  muted: '#B8A9D0',
  border: '#3B2A5C',
};

export const lightColors: typeof darkColors = {
  background: '#FFFFFF',
  surface: '#F2F2F2',
  primary: '#7C3AED',
  onPrimary: '#FFFFFF',
  text: '#0F0F0F',
  muted: '#606060',
  border: '#D9D9D9',
};

export type Colors = typeof darkColors;