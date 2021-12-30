import React from 'react'
import styled from 'styled-components'

const Container = styled.div`

   visibility: ${({ when }) => when ? 'visible' : 'hidden'};
   z-index: ${({ when }) => when ? '2000' : ''};
   position: fixed;
   /* background: ${props => props.theme.surface3}; */
   /* border-radius: 5px; */
   /* border: 1px rgba(0,0,0, 0.2) solid; */
   /* padding: .875rem; */
   color: ${props => props.theme.text1};
   animation: ${({ when }) => when ? 'fadeIn' : 'fadeOut'} .4s linear;
   animation-fill-mode: both;
   /* box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px; */
   transition: visibility .4s linear;
   left: 1rem;
   right: 1rem;
   top: calc(50vh/2); // banner is 25vh so 75 vh is available - the midpoint of 75 is 75/2
   max-inline-size: 40rem;
   margin: auto;

   @keyframes fadeIn {
      0% {
         opacity: 0;
         
      }
      39% {
         opacity: 0;
         transform: scale(.9);
      }
      60% {
         opacity: 0.875;
         transform: scale(1.03);
      }
      100%{
         opacity: 1;
         transform: scale(1);
      }
   } 
      
   @keyframes fadeOut {
      0% {
         
         opacity: 1;
         transform: scale(1);
      }
      39% {
         
         opacity: 0.875;
         transform: scale(1.03);
      }
      60% {
         opacity: 0;
         transform: scale(.9);
         
      }
      100%{
         opacity: 0;
         display: none;
      }
   } 
`
const Modal = ({ children, when }) => {

   return (
      <Container className={`modal-container ${!when && 'hide'}`} when={when}  >
         {children}
      </Container>
   )
}

export default Modal
