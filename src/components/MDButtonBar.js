import styled from "styled-components";
import { borderRadius } from "./PageComponents";
export const MDButtonBar = styled.div`
   margin-bottom: 2rem;
   display: flex;
   align-items: center;
   justify-content: space-between;
   background: ${({ theme }) => theme.surface4};
   padding: 7px;
   border-radius: ${borderRadius};

   i {
      background: ${({ theme }) => theme.surface3};
      padding: 10px;
      border-radius: ${borderRadius};
      cursor: pointer;
   }
`;
