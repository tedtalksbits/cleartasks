import React from "react";
import styled from "styled-components";
const AppDrawer = styled.nav`
   background: ${({ theme }) => theme.surface3};
   height: 100%;
   min-inline-size: 4rem;

   .fixed-content {
      position: fixed;
   }
`;
const Nav = () => {
   return (
      <AppDrawer>
         <div className="fixed-content">
            <button>Open</button>
         </div>
      </AppDrawer>
   );
};

export default Nav;
