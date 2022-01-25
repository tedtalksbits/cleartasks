import React from 'react';
import styled, { css } from 'styled-components';

const loaderStyles = css`
   height: 100%;
   width: 1rem;
   position: absolute;
   border-radius: 100px;
   animation: logo linear 2.5s infinite;
`
const Loader = styled.div`
   position: relative;
   height: 3rem;

   & :first-child{
      ${loaderStyles}
      background: ${props => props.theme.danger};
      /* right: -1.5rem; */
      z-index: 1;
      bottom: 10px;
      animation-delay: -1s;
      
   }
   & :nth-child(2){
      ${loaderStyles}
      background: ${props => props.theme.warning};
      z-index: 0;
      animation-delay: -0.7333333333333334s;
      margin-left: 10px;
   }
   & :last-child{
      ${loaderStyles}
      background: ${props => props.theme.success};
      z-index: -1;
      bottom: -10px;
      animation-delay: -0.45s;
      margin-left: 20px;
   }
  @keyframes logo {
     0%{
      opacity: 1;
     }
     50%{
      opacity: 0;
     }
     100%{
        opacity: 1;
     }
  }
`
export const MyLoader = () => {
   return (
      <Loader>
         <span></span>
         <span></span>
         <span></span>
      </Loader>
   );
};
