import styled from 'styled-components'
import { CardStyles } from './PageComponents'
export const Box = styled.div`
   ${CardStyles};
   cursor: default;
   padding: ${props => props.p === 'sm' ? '.5rem' : props.p === 'md' ? '1rem' : props.p === 'lg' ? '1.5rem' : '1rem'};
   background: ${props => props.bg || props.theme.surface3};
   /* animation: zoom ease .4s forwards;
   animation-fill-mode: both; */
   & > * a {
      color: ${props => props.theme.text1};
      text-decoration: none;
      font-size: 1.2rem;
      width: 100%;
      display: block;
   }
   :hover{
      /* background: ${props => props.bg || props.theme.surface3}; */
   }   
`
