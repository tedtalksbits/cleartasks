
import styled from 'styled-components'

export const GridContainer = styled.div`
   display: grid;
   grid-template-columns: 1fr 1fr 1fr;  
   gap: 15px 35px; 
   grid-template-areas: 
      "todo-head doing-head done-head"
      "todo-item doing-item done-item"; 

   .todo-head { grid-area: todo-head; }
   .doing-head { grid-area: doing-head; }
   .done-head { grid-area: done-head; }
   .todo-item { grid-area: todo-item; }
   .doing-item { grid-area: doing-item; }
   .done-item { grid-area: done-item; }

   @media screen and (max-width: 750px){
      display: grid; 
      grid-template-columns: 1fr; 
      gap: 15px 15px; 
      grid-template-areas: 
      "todo-head"
      "todo-item"
      "doing-head"
      "doing-item"
      "done-head"
      "done-item"; 
   }
   
`

export const GridHead = styled.div`


`
export const GridItem = styled.div`


`

