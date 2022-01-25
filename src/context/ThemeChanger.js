import React, { useContext } from "react";
import useLocalStorageState from "use-local-storage-state";
import { darkTheme, lightTheme } from "../theme";

// create context
const ThemeChangeContext = React.createContext()
// custom hook
export function useThemeChanger() {
   return useContext(ThemeChangeContext)
}

// provider 

export const ThemeChangeProvider = ({ children }) => {
   const dark = darkTheme;
   const light = lightTheme;
   const [currTheme, setCurrTheme] = useLocalStorageState('theme', dark || darkTheme);

   const handleThemeChange = () => {
      if (currTheme === dark) {
         setCurrTheme(light)
      }
      else {
         setCurrTheme(dark)
      }
   }

   return (
      <ThemeChangeContext.Provider value={{ currTheme, setCurrTheme, handleThemeChange }}>
         {children}
      </ThemeChangeContext.Provider>
   )
}