import styled from "styled-components";

export const PaginateButton = styled.button`
   background: transparent;
   border: none;
   cursor: pointer;
   padding-bottom: 5px;
   display: inline-block;
   color: ${({ theme }) => theme.text1};
   margin-right: 0.5rem;
   font-size: 1.2rem;
   max-inline-size: 15ch;
   text-overflow: ellipsis;
   white-space: nowrap;
   overflow: hidden;
   &.active {
      color: ${({ theme }) => theme.brand};
      border-bottom: ${({ theme }) => theme.brand} 2px solid;
   }
`;
