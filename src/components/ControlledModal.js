import React from 'react'
import styled from 'styled-components'
const Background = styled.div`
   background: #000000c4;
   height: 100%;
   width: 100%;
   overflow-y: hidden;
   position: fixed;
   z-index: 1;
   left: 0;
   top: 0;
   display: flex;
`
const Body = styled.div`
   /* border-radius: 5px;
   padding: 1rem; */
   margin: auto;
   width: 95%;
   max-inline-size: 50rem;
   /* position: relative;
   top: calc(100vh - 40rem) ;
   max-inline-size: 40rem; */
   /* height: 20rem; */
   overflow-y: auto;
   box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
`

export const ControlledModal = ({ children, isVisible, onClose }) => {


   return (
      <>
         {isVisible &&

            <Background onClick={onClose} className='modal-bg'>
               <Body onClick={(e) => e.stopPropagation()} className='modal-body'>
                  {children}
               </Body>
            </Background>
         }
      </>
   )
}
