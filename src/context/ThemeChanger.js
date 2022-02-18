import React, { useContext } from "react";
import useLocalStorageState from "use-local-storage-state";

// create context
const ThemeChangeContext = React.createContext();
// custom hook
export function useThemeChanger() {
   return useContext(ThemeChangeContext);
}

// provider

export const ThemeChangeProvider = ({ children }) => {
   const [themeIsDark, setThemeIsDark] = useLocalStorageState(
      "themeIsDark",
      true
   );
   return (
      <ThemeChangeContext.Provider value={{ themeIsDark, setThemeIsDark }}>
         {children}
      </ThemeChangeContext.Provider>
   );
};
