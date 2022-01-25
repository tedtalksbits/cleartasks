import React, { useContext } from "react"
import useLocalStorageState from 'use-local-storage-state'
// create context
const UserContext = React.createContext()

//custom hook
export function useUser() {
   return useContext(UserContext)
}

//Provider
export const UserProvider = ({ children }) => {
   const [user, setUser] = useLocalStorageState('user', null)


   return (
      <UserContext.Provider value={{ user, setUser }}>
         {children}
      </UserContext.Provider>
   )
}
