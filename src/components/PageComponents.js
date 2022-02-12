import styled, { css } from "styled-components";
import React from "react";

export const bannerSize = 25;
export const bannerMb = 4;
export const bannerHeight = bannerSize + bannerMb;
export const borderRadius = "15px";
export const MainGrid = styled.main`
   display: grid;
   grid-template-columns: 1fr min(150ch, 100%) 1fr;
   overflow-x: hidden;

   & > * {
      grid-column: 2;
   }
   .full-bleed {
      width: 100%;
      grid-column: 1 / 4;
   }

   /* center elements */
   min-block-size: ${({ centerElements }) =>
      centerElements ? "calc(100vh - 70px)" : ""};
   place-items: ${({ centerElements }) => (centerElements ? "center" : "")};
`;

export const MainContainer = styled.section`
   padding: 1rem;
   grid-column: 2/3;
   width: 100%;
   min-block-size: calc(100vh - ${bannerHeight}rem);
   animation: fadeIn ease-in-out 0.25s forwards;
   animation-fill-mode: both;

   @keyframes fadeIn {
      0% {
         opacity: 0;
      }
      100% {
         opacity: 1;
      }
   }
`;

export const Button = styled.button`
   padding: 0.675rem 2rem;
   font-size: 1rem;
   background: ${(props) => props.color || props.theme.brand};
   color: ${({ theme }) => theme.text1};
   text-transform: capitalize;
   border-radius: ${borderRadius};
   cursor: pointer;
   font-weight: 500;
   transition: 0.3s ease filter;
   border: none;
   margin: 1rem 0;
   transition: all 0.2s ease-in-out;
   font-weight: 600;

   /* box-shadow: 0px 0px 1px 1px ${({ theme }) => theme.brand}; */
   :hover {
      filter: brightness(1.2);
   }
   :active {
      /* padding: .675rem 2.5rem; */
      animation: pulse-animation 1s infinite;
   }

   & :first-child {
      margin-right: 0.4rem;
   }

   @keyframes pulse-animation {
      0% {
         box-shadow: 0 0 0 0px ${({ theme }) => theme.brand};
      }
      100% {
         box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
      }
   }
`;

export const FieldGrid = styled.main`
   border-radius: ${borderRadius};
   background: ${({ theme }) => theme.surface2};
   border: none;
   display: grid;
   padding: 0px;
   overflow: hidden;

   > img {
      width: 100%;
      object-fit: contain;
   }

   @media screen and (min-width: 640px) {
      grid-template-columns: 0.4fr 0.6fr;
   }
`;

export const FieldButtonContainer = styled.div`
   padding: 2rem;
   display: grid;
   place-items: center;
   :focus-within {
      background: ${({ theme }) => theme.surface3};
   }

   .flex-row {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      align-items: center;
   }
`;

export const Figure = styled.figure`
   background: ${(props) => props.theme.surface4};
   border-radius: ${borderRadius};
   padding: 1rem;
   margin: 1.25em 0;
   page-break-inside: avoid;
`;

export const Highlight = styled.div`
   background: rgba(255, 196, 87, 0.192);
   border: 1px solid rgba(255, 196, 87, 0.192);
   display: inline-block;
   padding: 0rem 0.6rem;
   border-radius: ${borderRadius};
   margin-right: 0.5em;
   margin-top: 0.3em;
   margin-bottom: 0.3em;
   white-space: nowrap;

   &.success {
      border: ${(props) => props.theme.success} 1px solid;
      background: ${(props) => props.theme.success};
   }
   &.warning {
      border: ${(props) => props.theme.warning} 1px solid;
      background: ${(props) => props.theme.warning};
   }
   &.danger {
      border: ${(props) => props.theme.danger} 1px solid;
      background: ${(props) => props.theme.danger};
   }
   &.blue {
      border: ${(props) => props.theme.blue} 1px solid;
      background: ${(props) => props.theme.blue};
   }
   &.pink {
      border: ${(props) => props.theme.pink} 1px solid;
      background: ${(props) => props.theme.pink};
   }
   &.purple {
      border: ${(props) => props.theme.purple} 1px solid;
      background: ${(props) => props.theme.purple};
   }
   &.mint {
      border: ${(props) => props.theme.mint} 1px solid;
      background: ${(props) => props.theme.mint};
   }
`;

const Container = styled.div`
   display: flex;
   justify-content: space-between;
   gap: 1rem;

   @media screen and (max-width: 425px) {
      flex-direction: column;
      & > * {
         width: 100% !important;
      }
   }

   > :first-child {
      width: 50%;
   }
   > :last-child {
      width: 50%;
   }

   img {
      max-height: 325px;
      width: 100%;
   }
`;
export const CardStyles = css`
   cursor: pointer;
   display: inline-block;
   width: 100%;
   padding: 0.5rem 0.8rem;
   border-radius: ${borderRadius};
   margin: 0.4rem 0;
   background: ${(props) => props.theme.surface2};
`;
export const CardGrid = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
   grid-gap: 1rem;

   img {
      width: 100%;
      height: 200px;
      object-fit: cover;
   }
`;

const TwoColumnContainer = ({ children }) => {
   return <Container>{children}</Container>;
};

export default TwoColumnContainer;
