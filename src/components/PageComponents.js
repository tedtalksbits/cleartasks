import styled from "styled-components";
import React from 'react'
export const MainGrid = styled.main`
   display: grid;
   grid-template-columns: 1fr min(150ch, 100%) 1fr;
   overflow-x: hidden;
   
   & > *{
      grid-column: 2;
   }
   .full-bleed {
      width:100%;
      grid-column: 1 / 4;
   }

   /* center elements */
   min-block-size: ${({ centerElements }) => centerElements ? 'calc(100vh - 70px)' : ''} ;
   place-items: ${({ centerElements }) => centerElements ? 'center' : ''};
`

export const MainContainer = styled.section`
   padding: 1rem;
   grid-column: 2/3;
   width: 100%;
`

export const Button = styled.button`
   padding: .675rem 2rem;
   font-size: 1rem;
   background: ${({ theme }) => theme.brand};
   color: ${({ theme }) => theme.text1};
   text-transform: capitalize;
   border-radius: 6px;
   cursor: pointer;
   font-weight: 500;
   transition: .3s ease filter;
   border: none;
   margin: 1rem 0;
   transition: all .2s ease-in-out;
   font-weight: 600;
   
   /* box-shadow: 0px 0px 1px 1px ${({ theme }) => theme.brand}; */
   :hover{
     filter: brightness(1.2);
     
   }
   :active{
      /* padding: .675rem 2.5rem; */
      animation: pulse-animation 1s infinite;
      
   }
   

   & :first-child {
      margin-right: .4rem;
   }

   @keyframes pulse-animation {
   0% {
      box-shadow: 0 0 0 0px ${({ theme }) => theme.brand};
   }
   100% {
      box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
      }
   }
`

export const FieldGrid = styled.main`
      border-radius: 9px;
      background: ${({ theme }) => theme.surface2};
      border: none;
      display: grid;
      padding: 0px;
      overflow: hidden;


      >img{
         width: 100%;
         object-fit: contain;
      }

      @media screen and (min-width: 640px){
         grid-template-columns: .4fr .6fr;
      }
`

export const FieldButtonContainer = styled.div`
   padding: 2rem;
   display: grid;
   place-items: center;
   :focus-within{
      background: ${({ theme }) => theme.surface3};
   }

   .flex-row{
      display: flex;
      flex-direction: column;
      gap: 2rem;
      align-items: center; 
   }
`

export const Figure = styled.figure`
   background: ${props => props.theme.surface4};
   border-radius: 3px;
   padding: 1rem;
   margin: 1.25em 0;
   page-break-inside: avoid;
`

export const Highlight = styled.span`
   background: rgba(255, 196, 87, 0.192);
   border: 1px solid rgba(255, 196, 87, 0.192);
   display: inline-block;
   padding: 0 0.5em;
   border-radius: 3px;
   margin-right: 0.5em;
   margin-top: 0.3em;
   margin-bottom: 0.3em;
   white-space: nowrap;

   &.success{
      border: ${props => props.theme.success} 1px solid; 
      background: ${props => props.theme.success};
      
   }
   &.warning{
      border: ${props => props.theme.warning} 1px solid; 
      background: ${props => props.theme.warning};
   }
   &.danger{
      border: ${props => props.theme.danger} 1px solid; 
      background: ${props => props.theme.danger};

   }

`

const Container = styled.div`
   display: flex;
   justify-content: space-between;
   gap: 1rem;

   @media screen and (max-width: 425px){
      flex-direction: column;
      & > * {
         width: 100%!important;
      }
   }


   >:first-child{
      width: 50%;
   }
   >:last-child{
      width: 50%;
   }

   img{
      max-height: 325px;
      width: 100%;
   }

`



const TwoColumnContainer = ({ children }) => {
   return (
      <Container>
         {children}
      </Container>
   )
}

export default TwoColumnContainer




