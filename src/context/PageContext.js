import React, { useContext } from 'react'
import useLocalStorageState from 'use-local-storage-state'



//create context
const PageContext = React.createContext()


// custom hook;
export function usePageContext() {
   return useContext(PageContext)
}

//Provider 
export const PageProvider = ({ children }) => {

   const defaultData = {
      tasks: {
         emojie: '🛖',
         img: 'https://images.unsplash.com/photo-1550859492-d5da9d8e45f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      },
      home: {
         emojie: '👋🏿',
         img: 'https://images.unsplash.com/photo-1629757509637-7c99379d6d26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      },
      signIn: {
         emojie: '🥷🏽',
         img: 'https://images.unsplash.com/photo-1520453803296-c39eabe2dab4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1725&q=80',
      },



   }
   const [pageData, setPageData] = useLocalStorageState("page data", defaultData)

   return (
      <PageContext.Provider value={{ pageData, setPageData }} >
         {children}
      </PageContext.Provider>
   )
}

