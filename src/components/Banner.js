import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Container = styled.header`
   block-size: 25rem;
   grid-column: 1/4;
   position: relative;
   margin-bottom: 4rem;

   span{
      position: absolute;
      bottom: -3rem;
      left: 25%;
      font-size: 5rem;
      user-select: none;
   }
   img{ 
      width: 100%;
      object-fit: cover;
      height: 100%;
      user-select: none;
   }

`
const Banner = ({ img, icon }) => {

   const emojies = ["✌", "😂", "😝", "😁", "😱", "👉", "🙌", "🍻", "🔥", "🌈", "☀", "🎈", "🌹", "💄", "🎀", "⚽", "🎾", "🏁", "😡", "👿", "🐻", "🐶", "🐬", "🐟", "🍀", "👀", "🚗", "🍎", "💝", "💙", "👌", "❤", "😍", "😉", "😓", "😳", "💪", "💩", "🍸", "🔑", "💖", "🌟", "🎉", "🌺", "🎶", "👠", "🏈", "⚾", "🏆", "👽", "💀", "🐵", "🐮", "🐩", "🐎", "💣", "👃", "👂", "🍓", "💘", "💜", "👊", "💋", "😘", "😜", "😵", "🙏", "👋", "🚽", "💃", "💎", "🚀", "🌙", "🎁", "⛄", "🌊", "⛵", "🏀", "🎱", "💰", "👶", "👸", "🐰", "🐷", "🐍", "🐫", "🔫", "👄", "🚲", "🍉", "💛", "💚", "🗺", '🗿', '🗽', '🗼', '🏰', '🏯', '🏟', '🎡', '🎢', '🎠', '⛲️', '⛱', '🏖', '🏝', '🏜', '🌋', '⛰', '🏔', '🗻', '🏕', '⛺️', '🛖', '🏠', '🏡', '🏘', '🏚', '🏗', '🏭', '🏢', '🏬', '🏣', '🏤', '🏥', '🏦', '🏨', '🏪', '🏫', '🏩', '💒', '🏛', '⛪️', '🕌', '🕍', '🛕', '🕋', '⛩'];

   const [randomNum, setRandomNum] = useState(25)
   useEffect(() => {
      const num = Math.floor(Math.random() * emojies.length)

      setRandomNum(num)

   }, [emojies.length])



   return (
      <Container className='full-bleed'>
         <img src={img} alt="banner" />
         <span>{icon || emojies[randomNum]}</span>
      </Container>
   )
}

export default Banner
