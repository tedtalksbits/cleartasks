import React from 'react'
import { useParams } from 'react-router-dom'
import EditForm from '../components/EditForm';
import { MainContainer, MainGrid } from '../components/PageComponents';
import styled from 'styled-components';
import { DataLoader } from '../components/DataLoader';
import { useUser } from '../context/UserContext';

const EditMainGrid = styled(MainGrid)`
    grid-template-columns: 1fr min(99ch, 100%) 1fr;
    animation: fadeInOpacity ease .5s forwards;
    animation-fill-mode: both;
    min-block-size: 100vh;
    display: grid;
`
const Edit = () => {
   let { id, taskId } = useParams();
   const { user } = useUser()
   return (
      <EditMainGrid >
         <MainContainer style={{ margin: 'auto' }}>
            <h1 className="custom-heading">Edit</h1>
            <DataLoader resourseName='task' url={`${process.env.REACT_APP_MDB}/list/${user.uid}/${taskId}`}>
               <EditForm itemId={id} taskId={taskId} />
            </DataLoader>
         </MainContainer>
      </EditMainGrid>
   )
}

export default Edit
