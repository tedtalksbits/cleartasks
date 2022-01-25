import React from 'react';
import { Link } from 'react-router-dom';
import { Box } from '../components/Box';
import { MainContainer, MainGrid } from '../components/PageComponents';

export const NotFound = () => {
   return (
      <MainGrid centerElements={true}>
         <MainContainer centerElements={true}>
            <Box style={{ textAlign: 'center' }}>
               <h1 className="custom-heading" >404 Not found</h1>
               <p>Oh oh! We couldn't find that page.</p>
               <Link to='/cleartasks'>Go to Homepage</Link>
            </Box>
         </MainContainer>
      </MainGrid>
   );
};
