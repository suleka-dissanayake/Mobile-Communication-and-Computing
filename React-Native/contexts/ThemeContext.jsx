import React, { createContext, useContext, useState } from 'react';
import { Colors } from '../constant/color';

const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const [scheme, setScheme] = useState('light');

  const toggleTheme = () => setScheme((s) => (s === 'dark' ? 'light' : 'dark'));

  const theme = Colors[scheme];

  return (
    <ThemeContext.Provider value={{ scheme, theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used inside <ThemeProvider>');
  return ctx;
};
