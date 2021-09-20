import React from 'react';
import { lightTheme, darkTheme } from 'themes/theme';
import { ThemeProvider } from 'styled-components';
const ThemeContext = React.createContext();

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = React.useState('light');
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = React.useContext(ThemeContext);
  return context;
};
