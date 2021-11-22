import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(null);

  const toggleDarkTheme = () => {
    const body = document.querySelector('body');
    if (body.classList.contains('darkTheme')) {
      body.classList.remove('darkTheme');
      setTheme('');
    } else {
      body.classList.add('darkTheme');
      setTheme('darkTheme');
    }
  };

  const contextValue = {
    theme,
    toggleDarkTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
