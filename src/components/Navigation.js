import React from 'react'
import { ListHeader } from './TodoList'
import styled from 'styled-components'

const NavBar = styled.div`
   
`
export const Navigation = ({ children }) => {
   return (
      <>
         <hr />
         <ListHeader>

            <div className="spacer"></div>
            <div className="container">
               {children}
            </div>
         </ListHeader>
      </>
   )
}
