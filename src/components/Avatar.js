import React from "react";
import styled from "styled-components";

const Image = styled.img`
   height: 4rem;
   width: 4rem;
   overflow: hidden;
   border-radius: 50%;
   object-fit: cover;
   background: orange;
   margin: auto;
`;
export const Avatar = ({ src }) => {
   return <Image src={src} alt="user avatar" />;
};
