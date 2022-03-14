import React, { useState } from "react";
import { ControlledModal } from "../components/ControlledModal";
import { DataLoader } from "../components/DataLoader";
import { Navigation } from "../components/Navigation";
import {
   bannerHeight,
   Button,
   MainContainer,
   MainGrid,
} from "../components/PageComponents";
import CustomBanner from "../components/CustomBanner";
import TaskForm from "../components/TaskForm";
import { TasksRenderer } from "../components/TasksRenderer";
import { useUser } from "../context/UserContext";
import { Signin } from "./Signin";

const mainContainerSize = {
   minBlockSize: `calc(100vh - ${bannerHeight})`,
};
const Home = () => {
   const { user } = useUser();
   const [showModal, setShowModal] = useState(false);

   if (!user) {
      return <Signin />;
   }
   return (
      user && (
         <MainGrid>
            <CustomBanner localKey={"home"} />

            <MainContainer style={mainContainerSize}>
               <Navigation />
               <hr />
               <Button onClick={() => setShowModal(true)}>
                  <i className="fa fa-plus" aria-hidden="true"></i>
               </Button>
               <ControlledModal
                  className="modal"
                  isVisible={showModal}
                  onClose={() => setShowModal(false)}
               >
                  <TaskForm
                     userId={user.uid}
                     username={user.email}
                     setShowForm={setShowModal}
                  />
               </ControlledModal>
               <DataLoader
                  url={`${process.env.REACT_APP_MDB}/lists/${user.uid}`}
                  resourseName="tasks"
               >
                  <TasksRenderer />
               </DataLoader>
            </MainContainer>
         </MainGrid>
      )
   );
};

export default Home;
