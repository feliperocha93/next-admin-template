import { createContext, useEffect, useState } from "react";

type Theme = 'dark' | '';

interface AppContextProps {
  theme?: string;
  changeTheme?: () => void;
}

const AppContext = createContext<AppContextProps>({});

export function AppProvider(props) {
  const [theme, setTheme] = useState('dark');

  useEffect(() => setTheme(localStorage.getItem('theme')), []);

  function changeTheme() {
    const newTheme = theme === 'dark' ? '' : 'dark'
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  }

  return (
    <AppContext.Provider value={{
      theme,
      changeTheme,
    }}>
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContext;