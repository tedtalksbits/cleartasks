import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { emojies } from "../data/bannerData";
import { bannerMb, bannerSize, borderRadius } from "./PageComponents";

const Container = styled.header`
   block-size: ${bannerSize}rem;
   grid-column: 1/4;
   position: relative;
   margin-bottom: ${bannerMb}rem;

   :hover {
      img {
         filter: brightness(0.25);
      }
      .edit-img {
         height: 5rem;
         width: 5rem;
         border-radius: 50%;
         position: absolute;
         z-index: 1000;
         right: 2rem;
         bottom: -10px;
         background: ${(props) => props.theme.surface3};
         cursor: pointer;
         transition: all ease 0.25s;
         visibility: visible;
         transform: translateY(0px);
         opacity: 1;
      }
   }
   .edit-img {
      visibility: hidden;
      bottom: -90px;
      opacity: 0;
      display: grid;
      place-items: center;

      & > i {
         font-size: 1.3rem;
      }
   }
   span {
      position: absolute;
      bottom: -3rem;
      left: 25%;
      font-size: 5rem;
      user-select: none;
      cursor: pointer;
   }
   img {
      width: 100%;
      object-fit: cover;
      height: 100%;
      user-select: none;
      filter: brightness(0.5);
      transition: all ease 0.7s;
      position: relative;
   }
`;
export const EmojiBox = styled.div`
   border: none;
   background: ${(props) => props.theme.surface2};
   padding: 1rem;
   display: flex;
   flex-wrap: wrap;
   gap: 0.25rem;
   max-block-size: 15rem;
   overflow: auto;
   justify-content: center;
   img {
      width: 100%;
      height: 100%;
      object-fit: cover;
   }
   & .emoji-box {
      background: ${(props) => props.theme.surface3};
      font-size: 1.3rem;
      padding: 0.25rem 0.45rem;
      border-radius: ${borderRadius};
      cursor: pointer;
      max-inline-size: 10rem;
      max-block-size: 7rem;
   }
`;

const Banner = ({ img, icon, imgEdit, emojieEdit }) => {
   const [randomNum, setRandomNum] = useState(25);
   useEffect(() => {
      const num = Math.floor(Math.random() * emojies.length);
      setRandomNum(num);
   }, []);

   return (
      <Container className="full-bleed">
         <img src={img} alt="banner" />
         <span onClick={emojieEdit}>{icon || emojies[randomNum]}</span>
         <div className="edit-img" onClick={imgEdit}>
            <i className="fa fa-plus" aria-hidden="true"></i>
         </div>
      </Container>
   );
};

export default Banner;
