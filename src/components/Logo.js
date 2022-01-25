import React from 'react';
import styled, { css } from 'styled-components';

const logoStyles = css`
   height: 100%;
   width: 1rem;
   position: absolute;
   border-radius: 100px;
   animation: logo linear 2.5s forwards;
`
const LogoH1 = styled.h1`
   position: relative;

   & :first-child{
      ${logoStyles}
      background: ${props => props.theme.danger};
      right: -1.5rem;
      z-index: 1;
      bottom: 10px;
      animation-delay: -1s;
   }
   & :nth-child(2){
      ${logoStyles}
      background: ${props => props.theme.warning};
      right: -2.2rem;
      z-index: 0;
      animation-delay: -0.7333333333333334s;
   }
   & :last-child{
      ${logoStyles}
      background: ${props => props.theme.success};
      right: -2.9rem;
      z-index: -1;
      bottom: -10px;
      animation-delay: -0.45s;
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
export const Logo = ({ loader }) => {
   return (
      <LogoH1 className='custom-heading'>
         ClearTasks
         <span></span>
         <span></span>
         <span></span>
      </LogoH1>
   );
};