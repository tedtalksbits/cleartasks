import styled from "styled-components";

export const Icon = styled.i`
   font-size: ${(props) => props.iconSize}rem;
   color: ${(props) => props.theme.text2};
   border-radius: 50%;
   height: 2rem;
   width: 2rem;
   display: grid;
   place-items: center;
   transition: background 0.25s ease;
   cursor: pointer;

   :hover {
      color: ${(props) => props.theme.text1};
      background: ${(props) => props.theme.surface2};
   }
`;
