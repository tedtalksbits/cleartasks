import styled from "styled-components";

export const ModalBackdrop = styled.div`
   background: #000000aa;
   position: absolute;
   z-index: 1999;
   min-block-size: 100vh;
   width: 100%;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   overflow-y: hidden;
   /* z-index: 2; */
   transition: background .4s ease;

`