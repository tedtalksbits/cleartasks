import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useThemeChanger } from "../context/ThemeChanger";
import { useUser } from "../context/UserContext";
import { Avatar } from "./Avatar";
import { Flex } from "./Flex";
import { Logo } from "./Logo";
import { Menu } from "./Menu";
import { Button } from "./PageComponents";
import styled from "styled-components";

const ThemeIcon = styled.div`
   background: ${(prop) => prop.theme.surface1};
   border-radius: 50%;
   margin-left: auto;
   height: 3rem;
   width: 3rem;
   display: grid;
   place-items: center;
   cursor: pointer;
   i {
      font-size: 1.5rem;
   }
`;
const TaskName = styled.h2`
   color: ${(prop) => prop.theme.text3};
   text-align: center;
   margin: 2rem 0;
   font-weight: 500;
`;
export const Navigation = ({ taskName, showLogo = true }) => {
   const { user, setUser } = useUser();
   let navigate = useNavigate();

   useEffect(() => {
      if (!user) {
         navigate("/cleartasks");
      }
   }, [user, navigate]);

   const { setThemeIsDark, themeIsDark } = useThemeChanger();
   return (
      <>
         <nav>
            <Flex style={{ marginBottom: "2rem" }} flexWrap="nowrap">
               {showLogo && <Logo />}
               <TaskName>{taskName}</TaskName>
               <Flex className="nav-user-info">
                  <Avatar
                     src={
                        user.photoURL ||
                        "https://cdn-icons-png.flaticon.com/512/1177/1177568.png"
                     }
                  />
                  <Menu
                     openIcon="fa fa-caret-down"
                     closeIcon="fa fa-caret-up"
                     iconSize={2}
                  >
                     <Flex>
                        <span>
                           Switch Theme{" "}
                           <i
                              className="fa fa-arrow-right animate__animated animate__infinite animate__slideOutRight"
                              aria-hidden="true"
                           ></i>
                        </span>
                        <ThemeIcon
                           onClick={() => setThemeIsDark((prev) => !prev)}
                        >
                           <i
                              className={
                                 themeIsDark
                                    ? "fa fa-lightbulb-o"
                                    : "fa fa-moon-o"
                              }
                           ></i>
                        </ThemeIcon>
                     </Flex>
                     <hr />
                     <Flex>
                        <div className="user-info">
                           <p style={{ margin: 0 }}>
                              {user.displayName || "no user"}
                           </p>
                           <p
                              className="custom-text"
                              style={{ fontSize: ".9rem" }}
                           >
                              {user.email || "no user"}
                           </p>
                        </div>
                     </Flex>
                     <hr />
                     <Button
                        onClick={() => {
                           setUser(null);
                           navigate("/cleartasks");
                        }}
                        style={{ margin: 0 }}
                     >
                        Log out
                     </Button>
                  </Menu>
               </Flex>
            </Flex>
         </nav>
      </>
   );
};
