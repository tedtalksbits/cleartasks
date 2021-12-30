import React, { useContext, useState } from "react";

//create context

const ModalContext = React.createContext();

//custom hook

export const useModal = () => {
   return useContext(ModalContext)
}

//provider
export const ModalProvider = ({ children }) => {
   const [open, setOpen] = useState(false);

   return (
      <ModalContext.Provider value={{ open, setOpen }}>
         {children}
      </ModalContext.Provider>
   )
}