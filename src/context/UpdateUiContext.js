import React, { useContext, useReducer } from "react";

//create context 
const UIStatContext = React.createContext();

//hook 
export const useUIState = () => {
   return useContext(UIStatContext);
}

//provider 
export const UIStateProvider = ({ children }) => {
   const [updateUI, setUpdateUI] = useReducer(
      ((update => !update)),
      false,
   )
   return (
      <UIStatContext.Provider value={{ updateUI, setUpdateUI }}>
         {children}
      </UIStatContext.Provider>
   )
}