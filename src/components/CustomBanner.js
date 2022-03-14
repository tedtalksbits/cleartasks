import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { usePageContext } from "../context/PageContext";
import { bannerImgs, emojies } from "../data/bannerData";
import { ControlledModal } from "./ControlledModal";
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

const CustomBanner = ({ localKey, image }) => {
   // set emoji and image for page
   const { pageData, setPageData } = usePageContext();

   // set uploaded img as banner img
   const handleImgUpload = (e) => {
      const uploadedImg = e.target.files[0];
      console.log(uploadedImg);
      const reader = new FileReader();
      reader.onloadend = () => {
         const img = reader.result;
         setPageData({
            ...pageData,
            [localKey]: { ...pageData[localKey], img: img },
         });
      };
      reader.readAsDataURL(uploadedImg);
   };
   // banner state
   const [openEmojies, setOpenEmojies] = useState(false);
   const [openImages, setOpenImages] = useState(false);
   const defaultBannerImage =
      "https://images.unsplash.com/photo-1542500186-6edb30855637?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80";
   const taskData = {
      img: defaultBannerImage,
      emojie: "🥳",
   };
   const setDefaultImgAndEmojie = () => {
      if (pageData.hasOwnProperty(localKey)) {
         return;
      } else {
         setPageData({ ...pageData, [localKey]: taskData });
      }
   };
   const userSetEmojie = (emojie) => {
      setPageData({
         ...pageData,
         [localKey]: { ...pageData[localKey], emojie: emojie },
      });
   };
   const userSetImg = (img) => {
      setPageData({
         ...pageData,
         [localKey]: { ...pageData[localKey], img: img },
      });
   };
   useEffect(() => {
      setDefaultImgAndEmojie();
   }, []);

   // random emoji for new pages
   const [randomNum, setRandomNum] = useState(25);
   useEffect(() => {
      const num = Math.floor(Math.random() * emojies.length);
      setRandomNum(num);
   }, []);

   return (
      <>
         <Container className="full-bleed">
            <img src={pageData[localKey]?.img || image} alt="banner" />
            <span onClick={() => setOpenEmojies(true)}>
               {pageData[localKey]?.emojie || emojies[randomNum]}
            </span>
            <div className="edit-img" onClick={() => setOpenImages(true)}>
               <i className="fa fa-plus" aria-hidden="true"></i>
            </div>
         </Container>
         <ControlledModal
            isVisible={openEmojies}
            onClose={() => setOpenEmojies(false)}
         >
            <EmojiBox>
               {emojies.map((emojie) => (
                  <div
                     onClick={() => {
                        userSetEmojie(emojie);
                        setOpenEmojies(false);
                     }}
                     className="emoji-box"
                     key={emojie}
                  >
                     {emojie}
                  </div>
               ))}
            </EmojiBox>
         </ControlledModal>
         <ControlledModal
            isVisible={openImages}
            onClose={() => setOpenImages(false)}
         >
            <EmojiBox>
               <>
                  {bannerImgs.map((img) => (
                     <div className="emoji-box" key={img}>
                        <img
                           onClick={() => {
                              userSetImg(img);
                              setOpenImages(false);
                           }}
                           src={img}
                           alt="banner wallpaper"
                        />
                     </div>
                  ))}
                  <input
                     type="file"
                     name="imageupload"
                     id="imageupload"
                     onChange={handleImgUpload}
                     accept=".jpg"
                  />
               </>
            </EmojiBox>
         </ControlledModal>
      </>
   );
};

export default CustomBanner;
