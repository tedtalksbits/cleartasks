import styled from "styled-components";
import { CardStyles } from "./PageComponents";
export const Box = styled.div`
   ${CardStyles};
   cursor: default;
   padding: ${(props) =>
      props.p === "sm"
         ? ".5rem"
         : props.p === "md"
         ? "0.5rem 0.8rem"
         : props.p === "lg"
         ? "1.5rem"
         : "1rem"};
   background: ${(props) => props.bg || props.theme.surface3};
   border: 1px solid #00000021;
   &:hover {
      background: ${(props) => props.actionBox && `${props.theme.brand}`};
   }

   & > * a {
      color: ${(props) => props.theme.text1};
      text-decoration: none;
      font-size: 1.2rem;
      width: 100%;
      display: block;
   }
`;
