import React, { useEffect, useState } from 'react'
import { useUIState } from '../context/UpdateUiContext';
import { MyLoader } from './MyLoader';


export const DataLoader = ({ url, resourseName, children }) => {

   const [data, setData] = useState(null);
   const [isLoading, setIsLoading] = useState(true);
   const { updateUI } = useUIState()
   useEffect(() => {
      const fetchData = async () => {
         const res = await fetch(url, {
            method: 'GET'
         })
         const result = await res.json();
         setData(result)
         setIsLoading(false)

      }
      fetchData()

   }, [updateUI])

   // console.log(data)
   if (isLoading) {
      return (
         <div className="center-container" style={{ display: 'grid', placeItems: 'center' }}>
            <div className="container">
               <MyLoader />
               <h5>loading...</h5>
            </div>
         </div>
      )
   }
   return (
      <>
         {/* iterate through children, check if children are valid elements*/}

         {React.Children.map(children, child => {
            if (React.isValidElement(child)) {
               // render that child with the prop it is expecting
               return React.cloneElement(child, { [resourseName]: data })
            }
         })}
      </>
   )
}
