import React from 'react'
import styled from 'styled-components'

const Image = styled.img`
   height: 45px;
   width: 45px;
   overflow: hidden;
   border-radius: 50%;
   object-fit: cover;
`
export const Avatar = ({ src }) => {
   return (
      <Image src={src} alt="user avatar" />
   )
}
