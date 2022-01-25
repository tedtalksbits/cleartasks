import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';

const Container = styled.span`
  
   position: relative;
   i{
      cursor: pointer;
      font-size: ${props => props.iconSize}rem;
      color: ${props => props.theme.text2};

      :hover{
         color: ${props => props.theme.text1};
      }
   }

`
const AbsoluteChild = styled.aside`
   /* position: absolute; */
   left: calc(max-content * -1);
   border-radius: 5px;
   padding: 1rem;
   background: ${props => props.theme.surface4};
   display: flex;
   flex-direction: column;
   box-shadow: 1px 1px 10px 5px #00000021;
   position: absolute;
   right: 1rem;
   z-index: 2;
   user-select: none;
   width: max-content;
   opacity: ${({ when }) => when ? '1' : '0'};
   visibility: ${({ when }) => when ? 'visible' : 'hidden'};
   transform: ${({ when }) => when ? 'translateZ(0) scale(1)' : 'translate3d(60px,-100px,0) scale(.2)'};
   transition: all .25s ease;

   @media screen and (max-width: 640px){
      transform: ${({ when }) => when ? 'translateZ(0) scale(1)' : 'translate3d(-60px,-100px,0) scale(.2)'};
      
   }
`
export const Menu = ({
   children,
   openIcon = "fa fa-user-circle",
   closeIcon = "fa fa-user-circle-o",
   iconSize = 2.5
}) => {
   const [openMenu, setOpenMenu] = useState(false);
   const menuRef = useRef(null)

   useEffect(() => {
      const handleClickOutside = (e) => {
         if (menuRef.current && !menuRef.current.contains(e.target)) {
            setOpenMenu(false)
         }
      }
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
         document.removeEventListener('mousedown', handleClickOutside)
      }
   }, [menuRef])
   const handleMenu = () => {
      setOpenMenu(prev => !prev)
   }
   const closeMenu = () => {
      setOpenMenu(false)
   }
   return (
      <Container className='container' ref={menuRef} iconSize={iconSize} >
         <i className={openMenu ? openIcon : closeIcon} aria-hidden="true" onClick={handleMenu}></i>
         <AbsoluteChild onBlur={closeMenu} when={openMenu} >
            {children}
         </AbsoluteChild>
      </Container>
   )
}
