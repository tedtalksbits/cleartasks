import React, { useState } from "react";
import { Box } from "./Box";
import { Link } from "react-router-dom";
import { Flex } from "./Flex";
import { Menu, MenuButton } from "./Menu";
import { ControlledModal } from "./ControlledModal";
import { Button, Highlight } from "./PageComponents";
import { useUIState } from "../context/UpdateUiContext";
import { EditableInput } from "./EditableText";
import { Icon } from "./Icon";
import styled from "styled-components";

const NewStatusIndicator = styled(Highlight)`
   position: absolute;
   right: -12px;
   top: -12px;
   font-size: 12px;
   border-radius: 50%;
   padding: 0.5rem;
   height: 12px;
   width: 12px;
   backdrop-filter: blur(40px);
`;
const TaskLink = styled(Link)`
   max-inline-size: 20ch;
   text-overflow: ellipsis;
   white-space: nowrap;
   overflow: hidden;
   &:visited {
      color: ${({ theme }) => theme.text2};
   }
`;
const TaskBox = styled(Box)`
   position: relative;
   box-shadow: ${({ theme }) => theme.shadow} 0px 8px 24px;
   border: none;
   background: ${({ theme }) => theme.surface2};
   transition: box-shadow 0.3s ease 0.1s;
   &:hover {
      box-shadow: ${({ theme }) => theme.shadow} 0px 1px 4px;
   }
`;
const ActionButton = styled(Button)`
   padding: 12px 10px;
   color: ${(props) => props.theme.text};
   display: flex;
   margin: 0 0 1rem 0;
   align-items: baseline;
   i {
      color: ${(props) => props.theme.text};
   }

   &.danger {
      background: ${(props) => props.theme.danger};
   }
`;
export const Task = ({ link, text, taskId, newItem }) => {
   const [isUpdating, setIsUpdating] = useState(false);
   const [showModal, setShowModal] = useState(false);
   const { setUpdateUI } = useUIState();
   const userIsUpdating = () => {
      setIsUpdating((prev) => !prev);
   };

   const [stateText, setStateText] = useState({
      tasksName: text,
   });

   const deleteTask = async (id) => {
      try {
         await fetch(`${process.env.REACT_APP_MDB}/deletetask/${id}`, {
            method: "DELETE",
         });
      } catch (error) {
         console.log(error, "Error on delete");
      }
      setUpdateUI();
   };
   const editTask = async () => {
      try {
         const res = await fetch(
            `${process.env.REACT_APP_MDB}/edittaskname/${taskId}`,
            {
               method: "PUT",
               headers: {
                  "Content-Type": "application/json",
               },
               body: JSON.stringify(stateText),
            }
         );

         const update = await res.json();
         setUpdateUI();
      } catch (error) {
         console.log(error, "Error on updating tasksname");
      }
   };
   return (
      <TaskBox>
         <Flex flexWrap="nowrap">
            {isUpdating ? (
               <>
                  <EditableInput
                     autoFocus
                     value={stateText.tasksName}
                     onChange={(e) =>
                        setStateText({ tasksName: e.target.value })
                     }
                     maxLength="25"
                  />
                  <Icon
                     onClick={() => {
                        userIsUpdating();
                     }}
                     className="fa fa-times danger"
                     aria-hidden="true"
                  ></Icon>
                  <Icon
                     onClick={() => {
                        userIsUpdating();
                        editTask();
                     }}
                     className="fa fa-check success"
                     aria-hidden="true"
                  ></Icon>
               </>
            ) : (
               <>
                  <TaskLink to={link} style={{ flex: 1 }} title={text}>
                     {text}
                  </TaskLink>
                  <Menu
                     iconSize={1.1}
                     openIcon="fa fa-ellipsis-v"
                     closeIcon="fa fa-ellipsis-v"
                     padding={0}
                  >
                     <MenuButton onClick={userIsUpdating}>
                        <i className="fa fa-pencil" aria-hidden="true"></i>
                        <span> Edit</span>
                     </MenuButton>
                     <hr style={{ margin: 0 }} />
                     <MenuButton
                        className="danger"
                        onClick={() => {
                           setShowModal(true);
                        }}
                     >
                        <i className="fa fa-trash" aria-hidden="true"></i>
                        <span> Delete</span>
                     </MenuButton>
                  </Menu>
                  {newItem && <NewStatusIndicator className="danger" />}
               </>
            )}
         </Flex>
         <ControlledModal
            isVisible={showModal}
            onClose={() => setShowModal(false)}
         >
            <Box>
               <p>
                  Are you sure you want to delete this task:
                  <strong>' {text}'</strong>?
               </p>
               <hr />
               <Flex>
                  <ActionButton
                     className="danger"
                     onClick={() => {
                        deleteTask(taskId);
                        setShowModal(false);
                     }}
                  >
                     Delete
                  </ActionButton>
                  <Button onClick={() => setShowModal(false)}>Cancel</Button>
               </Flex>
            </Box>
         </ControlledModal>
      </TaskBox>
   );
};
