import { createContext, ReactNode, useContext, useState } from 'react';
import { Colors, darkColors, lightColors } from './theme';

type ThemeContextType = {
  colors: Colors;
  isLight: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
  colors: darkColors,
  isLight: false,
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [isLight, setIsLight] = useState(false);

  const toggleTheme = () => setIsLight((prev) => !prev);

  return (
    <ThemeContext.Provider
      value={{ colors: isLight ? lightColors : darkColors, isLight, toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);