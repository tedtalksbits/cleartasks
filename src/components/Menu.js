import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Icon } from "./Icon";
import { borderRadius } from "./PageComponents";

const Container = styled.span`
   position: relative;
`;

export const MenuButton = styled.button`
   background: transparent;
   border: none;
   font-size: 1.2rem;
   cursor: pointer;
   padding: 1rem;
   color: ${(props) => props.theme.text1};
   transition: all 0.25s ease;

   &.danger:hover {
      background: ${(props) => props.theme.danger};
   }
   :hover {
      background: ${(props) => props.theme.brand};
   }
`;
const AbsoluteChild = styled.aside`
   border-radius: ${borderRadius};
   overflow: hidden;
   padding: ${(props) => props.padding}rem;
   background: ${(props) => props.theme.surface4};
   display: flex;
   flex-direction: column;
   box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
      rgba(0, 0, 0, 0.22) 0px 15px 12px;
   position: absolute;
   right: 1rem;
   z-index: 2;
   user-select: none;
   width: max-content;
   opacity: ${({ when }) => (when ? "1" : "0")};
   visibility: ${({ when }) => (when ? "visible" : "hidden")};
   transform: ${({ when }) =>
      when ? "translateZ(0) scale(1)" : "translate3d(60px,-100px,0) scale(.2)"};
   transition: all 0.25s ease;

   @media screen and (max-width: 640px) {
      transform: ${({ when }) =>
         when
            ? "translateZ(0) scale(1)"
            : "translate3d(-60px,-100px,0) scale(.2)"};
   }
`;
export const Menu = ({
   children,
   openIcon = "fa fa-user-circle",
   closeIcon = "fa fa-user-circle-o",
   iconSize = 2.5,
   padding = 1,
}) => {
   const [openMenu, setOpenMenu] = useState(false);
   const menuRef = useRef(null);

   useEffect(() => {
      const handleClickOutside = (e) => {
         if (menuRef.current && !menuRef.current.contains(e.target)) {
            setOpenMenu(false);
         }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
         document.removeEventListener("mousedown", handleClickOutside);
      };
   }, [menuRef]);
   const handleMenu = () => {
      setOpenMenu((prev) => !prev);
   };
   const closeMenu = () => {
      setOpenMenu(false);
   };
   return (
      <Container className="container" ref={menuRef}>
         <Icon
            iconSize={iconSize}
            className={openMenu ? openIcon : closeIcon}
            aria-hidden="true"
            onClick={handleMenu}
         ></Icon>
         <AbsoluteChild onBlur={closeMenu} when={openMenu} padding={padding}>
            {children}
         </AbsoluteChild>
      </Container>
   );
};
