import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Banner from "../components/Banner";
import {
   auth as authorize,
   provider,
} from "../components/Firebase/firebase.utils";
import { Form } from "../components/Form";
import { Button, MainContainer, MainGrid } from "../components/PageComponents";
import { useUser } from "../context/UserContext";
import { signInWithPopup } from "firebase/auth";
import { Logo } from "../components/Logo";
import cleartasksimg from "../screenshots/clearTasks.jpg";
import { ControlledModal } from "../components/ControlledModal";
import { Box } from "../components/Box";
export const UserForm = styled(Form)`
   display: grid;
   place-items: center;
   max-inline-size: 600px;
   margin: auto;
`;
export const Signin = () => {
   const [showLoginMsg, setShowLoginMsg] = useState(false);
   const { setUser } = useUser();
   let navigate = useNavigate();

   const signInWithGoogle = async () => {
      try {
         let successUser = await signInWithPopup(authorize, provider);
         const { user } = successUser;
         const {
            stsTokenManager,
            apiKey,
            auth,
            accessToken,
            emailVerified,
            metadata,
            phoneNumber,
            proactiveRefresh,
            providerData,
            providerId,
            reloadListener,
            tenantId,
            isAnonymous,
            reloadUserInfo,
            ...rest
         } = user;
         // console.log(rest);
         setUser(rest);
         navigate("/cleartasks");
      } catch (error) {
         console.log(error);
      }
   };

   return (
      <MainGrid>
         <Banner
            icon="🥷🏽"
            img={cleartasksimg}
            imgEdit={() => setShowLoginMsg(true)}
         />
         <ControlledModal
            isVisible={showLoginMsg}
            onClose={() => setShowLoginMsg(false)}
         >
            <Box>
               <h4 style={{ textAlign: "center" }}>
                  {" "}
                  <i class="fa fa-sign-in" aria-hidden="true"></i> Log in to
                  change banner image
               </h4>
            </Box>
         </ControlledModal>
         <MainContainer>
            <div className="paragraph">
               <h1 className="custom-heading">Please sign in</h1>
            </div>
            <hr />
            <UserForm onSubmit={(e) => e.preventDefault()}>
               <h1 className="heading">Welcome to</h1>
               <Logo />
               <Button onClick={signInWithGoogle}>
                  <i className="fa fa-google" aria-hidden="true"></i> Sign in
                  with google
               </Button>
               <hr />
               <p className="custom-text">No account necessary</p>
            </UserForm>
         </MainContainer>
      </MainGrid>
   );
};
