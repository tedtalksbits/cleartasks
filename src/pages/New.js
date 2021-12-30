import React from 'react'
import Banner from '../components/Banner'
import { MainContainer, MainGrid } from '../components/PageComponents'

const New = () => {
   return (
      <MainGrid>
         <Banner icon='📜' img='https://images.unsplash.com/photo-1580501170888-80668882ca0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80' />
         <MainContainer>
            <h1 className="custom-heading">New</h1>
         </MainContainer>
      </MainGrid>
   )
}

export default New
