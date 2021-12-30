import React from 'react'
import { useParams } from 'react-router-dom'
import Banner from '../components/Banner';
import EditForm from '../components/EditForm';
import { MainContainer, MainGrid } from '../components/PageComponents';
import styled from 'styled-components';

const EditMainGrid = styled(MainGrid)`
    grid-template-columns: 1fr min(99ch, 100%) 1fr;
    animation: fadeInOpacity ease .5s forwards;
    animation-fill-mode: both;
`
const Edit = () => {
   let { id } = useParams();


   return (
      <EditMainGrid >
         <Banner icon='📜' img='https://images.unsplash.com/photo-1580501170888-80668882ca0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80' />
         <MainContainer>
            <h1 className="custom-heading">Edit</h1>
            <EditForm id={id} />
         </MainContainer>
      </EditMainGrid>
   )
}

export default Edit
