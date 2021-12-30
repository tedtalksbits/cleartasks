import styled from "styled-components";

export const TableContainer = styled.div`

   background: transparent;
   padding: 1rem;
   overflow-x: auto;
   scroll-snap-type: x mandatory;
   scroll-behavior: smooth;
   -webkit-overflow-scrolling: touch;
   color: ${props => props.theme.text1};

`
export const Table = styled.table`
   background: transparent;
   width: 100%;
   margin: auto;
   border-collapse: collapse;
   border-spacing: 0;
   overflow: hidden;
   border-spacing: 0;
   color: ${props => props.theme.text1};


   /* @media (max-width: 768px) {
      td:nth-child(3),
      th:nth-child(3) { 
         display: none; 
      }
   }
   @media (max-width: 600px){
      td:nth-child(4), th:nth-child(4){
         display: none;
      }
   } */
   @media (max-width: 374px){
      font-size: .7rem;
   }
   
   
`

export const THead = styled.thead`
    color: ${props => props.theme.text1};
`
export const TBody = styled.tbody`
    color: ${props => props.theme.text1};

`

export const TRow = styled.tr`
   cursor: pointer;
   transition: all .4s;
   text-align: left;
   
`

export const THeader = styled.th`
   padding: 10px 0;
   color: ${props => props.theme.text1};
   font-weight: normal;
`

export const TData = styled.td`
   min-width: 15rem;
   width: 33.333%;
   vertical-align: top;
   span, span.todo{
      display: inline-block;
      width: 90%;
      padding: .5rem .8rem;
      border-radius: 5px;
      margin: .4rem 0;
      background: ${props => props.theme.surface2};

      :hover{
         background: ${props => props.theme.surface3};
      }
   }
   &.todo-col-done > span > p.custom-text{
      text-decoration: line-through;
   }

   

`