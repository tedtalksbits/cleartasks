import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ControlledModal } from "../components/ControlledModal";
import { Flex } from "../components/Flex";
import { Input } from "../components/Form";
import { IconButton } from "../components/IconButton";
import { Button, MainContainer, MainGrid } from "../components/PageComponents";
import PostForm from "../components/PostForm";
import RenderTable from "../components/RenderTable";
import { useUser } from "../context/UserContext";
import { useParams } from "react-router-dom";
import { Box } from "../components/Box";
import { Navigation } from "../components/Navigation";
import styled from "styled-components";
import CustomBanner from "../components/CustomBanner";

const NavSeachInput = styled(Input)`
   display: ${(props) => (props.when ? "block" : "none")};
   transition: width 0.3s ease 0.3s;
   padding: 0.75rem 0.75rem 0.75rem 1.5rem;
   font-size: 1rem;
   max-inline-size: 375px;
   margin-right: auto;
`;
export const Tasks = () => {
   const { _id, name } = useParams();
   const { user } = useUser();

   //search term
   const [search, setSearch] = useState("");
   const [showSearch, setShowSearch] = useState(false);
   //form modal
   const [showModal, setShowModal] = useState(false);

   //close button style
   const iconButtonPostion = {
      right: "1rem",
      top: ".4rem",
      zIndex: 20,
   };
   return (
      user && (
         <MainGrid>
            <CustomBanner localKey={_id} />

            <MainContainer style={{ minBlockSize: "100vh" }}>
               <Navigation taskName={name} showLogo={false} />
               <Flex className="home-row">
                  <Link to="/cleartasks">
                     <Box style={{ cursor: "pointer" }} p="md">
                        <i
                           className="fa fa-home nav-icon"
                           aria-hidden="true"
                        ></i>
                     </Box>
                  </Link>
                  <div className="spacer"></div>
                  <Flex className="nav-interactive" flexWrap="no-wrap">
                     <Button onClick={() => setShowModal(true)}>New</Button>
                     {showSearch ? (
                        <NavSeachInput
                           className="custom-input"
                           type="search"
                           name="search"
                           id="search"
                           placeholder="search"
                           value={search}
                           onChange={(e) => setSearch(e.target.value)}
                           when={showSearch}
                           onBlur={() => setShowSearch(false)}
                           onClick={() => setShowSearch(true)}
                           autoFocus
                        />
                     ) : (
                        <Button onClick={() => setShowSearch(true)}>
                           <i className="fa fa-search" aria-hidden="true"></i>
                        </Button>
                     )}
                  </Flex>
               </Flex>
               <ControlledModal
                  className="modal"
                  isVisible={showModal}
                  onClose={() => setShowModal(false)}
               >
                  <IconButton
                     onClick={() => setShowModal(false)}
                     style={iconButtonPostion}
                  >
                     <i className="fa fa-times" aria-hidden="true"></i>
                  </IconButton>
                  <PostForm
                     setShowForm={setShowModal}
                     url={`${process.env.REACT_APP_MDB}/item/${_id}`}
                  />
               </ControlledModal>
               <hr />

               <RenderTable search={search} taskId={_id} userId={user.uid} />
            </MainContainer>
         </MainGrid>
      )
   );
};
