import React from "react";
import styled from "styled-components";
const Grid = styled.div`
   display: grid;
   grid-template-columns: ${({ viewOne }) => viewOne}fr ${({ viewTwo }) =>
         viewTwo}fr;
`;
const SplitView = ({ children, viewOne = 0.05, viewTwo = 1 }) => {
   return (
      <Grid viewOne={viewOne} viewTwo={viewTwo}>
         {children}
      </Grid>
   );
};

export default SplitView;
