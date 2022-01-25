import React, { useEffect, useState } from 'react'
import styled from 'styled-components'


const bannerSize = 25;
const bannerMb = 4;
export const bannerHeight = bannerSize + bannerMb;
const Container = styled.header`
   block-size: ${bannerSize}rem;
   grid-column: 1/4;
   position: relative;
   margin-bottom: ${bannerMb}rem;

   :hover{
      img{
         filter: brightness(0.25);
      }
      .edit-img{
         height: 5rem;
         width: 5rem;
         border-radius: 50%;
         position: absolute;
         z-index: 1000;
         right: 2rem;
         bottom: -10px;
         background: ${props => props.theme.surface3};
         cursor: pointer;
         transition: all ease .25s;
         visibility: visible;
         transform: translateY(0px);
         opacity: 1;
      }
   }
   .edit-img{
      visibility: hidden;
      bottom: -90px;
      opacity: 0;
      display: grid;
      place-items: center;

      & > i{
         font-size: 1.3rem;

      }
   }
   span{
      position: absolute;
      bottom: -3rem;
      left: 25%;
      font-size: 5rem;
      user-select: none;
      cursor: pointer;
   }
   img{ 
      width: 100%;
      object-fit: cover;
      height: 100%;
      user-select: none;
      filter: brightness(0.5);
      transition: all ease .7s;
      position: relative;
   }

`
export const EmojiBox = styled.div`

   border: none;
   background: ${props => props.theme.surface2};
   padding: 1rem;
   display: flex;
   flex-wrap: wrap;
   gap: .25rem;
   max-block-size: 15rem;
   overflow: auto;
   justify-content: center;
   img{
      width: 100%;
      height: 100%;
      object-fit: cover;
   }
   & .emoji-box{
      background: ${props => props.theme.surface3};
      font-size: 1.3rem;
      padding: .25rem .45rem;
      border-radius: 5px;
      cursor: pointer;
      max-inline-size: 10rem;
      max-block-size: 7rem;
   }
`
export const bannerImgs = ['https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80', 'https://images.unsplash.com/photo-1620204082158-ed7780a38d4c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1867&q=80', 'https://images.unsplash.com/photo-1512850183-6d7990f42385?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80', 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80', 'https://images.unsplash.com/photo-1453791052107-5c843da62d97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80', 'https://images.unsplash.com/photo-1459478309853-2c33a60058e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80', 'https://images.unsplash.com/photo-1604077350837-c7f82f28653f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80', 'https://images.unsplash.com/photo-1490598000245-075175152d25?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80', 'https://images.unsplash.com/photo-1620503374956-c942862f0372?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80', 'https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80', 'https://images.unsplash.com/photo-1475070929565-c985b496cb9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80', 'https://images.unsplash.com/photo-1533134486753-c833f0ed4866?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80', 'https://images.unsplash.com/photo-1554228422-b8d4e6b3fa1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80', 'https://images.unsplash.com/photo-1598830853058-3474f6a66003?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80', 'https://images.unsplash.com/photo-1619252584172-a83a949b6efd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80'];
export const emojies = ["✌", "😂", "😝", "😁", "😱", "👉", "🙌", "🍻", "🔥", "🌈", "☀", "🎈", "🌹", "💄", "🎀", "⚽", "🎾", "🏁", "😡", "👿", "🐻", "🐶", "🐬", "🐟", "🍀", "👀", "🚗", "🍎", "💝", "💙", "👌", "❤", "😍", "😉", "😓", "😳", "💪", "💩", "🍸", "🔑", "💖", "🌟", "🎉", "🌺", "🎶", "👠", "🏈", "⚾", "🏆", "👽", "💀", "🐵", "🐮", "🐩", "🐎", "💣", "👃", "👂", "🍓", "💘", "💜", "👊", "💋", "😘", "😜", "😵", "🙏", "👋", "🚽", "💃", "💎", "🚀", "🌙", "🎁", "⛄", "🌊", "⛵", "🏀", "🎱", "💰", "👶", "👸", "🐰", "🐷", "🐍", "🐫", "🔫", "👄", "🚲", "🍉", "💛", "💚", "🗺", '🗿', '🗽', '🗼', '🏰', '🏯', '🏟', '🎡', '🎢', '🎠', '⛲️', '⛱', '🏖', '🏝', '🏜', '🌋', '⛰', '🏔', '🗻', '🏕', '⛺️', '🛖', '🏠', '🏡', '🏘', '🏚', '🏗', '🏭', '🏢', '🏬', '🏣', '🏤', '🏥', '🏦', '🏨', '🏪', '🏫', '🏩', '💒', '🏛', '⛪️', '🕌', '🕍', '🛕', '🕋', '⛩'];

const Banner = ({ img, icon, imgEdit, emojieEdit }) => {



   const [randomNum, setRandomNum] = useState(25)
   useEffect(() => {
      const num = Math.floor(Math.random() * emojies.length)
      setRandomNum(num)
   }, [])


   return (
      <Container className='full-bleed'>
         <img src={img} alt="banner" />
         <span onClick={emojieEdit}>{icon || emojies[randomNum]}</span>
         <div className="edit-img">
            <i className="fa fa-plus" aria-hidden="true" onClick={imgEdit}></i>
         </div>
      </Container>
   )
}

export default Banner
