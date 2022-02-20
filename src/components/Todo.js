import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Flex } from "./Flex";
import { Menu, MenuButton } from "./Menu";
import { borderRadius } from "./PageComponents";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const FlexItems = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   gap: 1rem;
`;
const TodoItem = styled.div`
   cursor: pointer;
   display: inline-block;
   width: 100%;
   padding: 0.6rem 0.875rem;
   border-radius: ${borderRadius};
   margin: 0.4rem 0;
   background: ${(props) => props.theme.surface2};
   transition: all ease-in-out 0.4s;

   :hover {
      background: ${(props) => props.theme.surface3};
      p.custom-text {
         color: ${({ theme }) => theme.text1};
      }
   }
   p.todo-date {
      font-size: 0.75rem;
      color: ${({ theme }) => theme.text4};
   }
   .controls {
      margin-top: 15px;
   }
   p.custom-text {
      white-space: break-spaces;
   }
   a {
      color: #33a3ff;
   }
`;
const IconsContainer = styled.div`
   display: flex;
   gap: 1rem;
`;
const Stage = styled.span`
   transition: opacity 0.3s, visibility ease-in-out 0.3s;
   cursor: pointer;

   i {
      padding: 5px;
      border-radius: ${borderRadius};
      transition: all 0.2s ease-in-out;
      &.success {
         border: ${(props) => props.theme.success} 1px solid;
         background: ${(props) => props.theme.success};
      }
      &.warning {
         border: ${(props) => props.theme.warning} 1px solid;
         background: ${(props) => props.theme.warning};
      }
      &.danger {
         border: ${(props) => props.theme.danger} 1px solid;
         background: ${(props) => props.theme.danger};
      }
      &.blue {
         border: ${(props) => props.theme.blue} 1px solid;
         background: ${(props) => props.theme.blue};
      }
      &.pink {
         border: ${(props) => props.theme.pink} 1px solid;
         background: ${(props) => props.theme.pink};
      }
      &.purple {
         border: ${(props) => props.theme.purple} 1px solid;
         background: ${(props) => props.theme.purple};
      }
      &.mint {
         border: ${(props) => props.theme.mint} 1px solid;
         background: ${(props) => props.theme.mint};
      }

      :hover {
         transform: scale(1.2);
      }
   }

   &:hover ::after {
      content: "${(props) => props.text}";
      font-size: 0.6rem;
      width: max-content;
      padding: 0.4rem;
      background: ${(props) => props.theme.surface1};
      position: absolute;
      top: -2rem;
      left: -5em;
      border-radius: ${borderRadius};
      z-index: 2000;
      font-family: "Poppins", sans-serif;
   }
`;
const Picture = styled.img`
   height: 150px;
   border-radius: ${borderRadius};
   object-fit: cover;
   width: 100%;
   margin-top: 14px;
`;
const Todo = ({
   img,
   title,
   text,
   todoDelete,
   todoRestart,
   todoDone,
   todoDoing,
   todoId,
   date,
   taskId,
   stageTwoColor,
   stageThreeColor,
   stageOneColor,
}) => {
   const navigate = useNavigate();
   const navigateToEdit = () => {
      navigate(`/cleartasks/edit/${todoId}/${taskId}`);
   };
   return (
      <TodoItem onDoubleClick={navigateToEdit} className="todo">
         <Flex className="todo_top" flexWrap="nowrap">
            <p className="bold">{title}</p>
            <Menu
               padding={0}
               iconSize={1.1}
               openIcon="fa fa-chevron-down"
               closeIcon="fa fa-chevron-up"
            >
               <MenuButton onClick={navigateToEdit}>
                  <i className="fa fa-pencil" aria-hidden="true"></i>
                  <span> Edit</span>
               </MenuButton>
               <hr style={{ margin: 0 }} />

               <MenuButton className="danger" onClick={todoDelete}>
                  <i className="fa fa-times" aria-hidden="true"></i>
                  <span> Delete</span>
               </MenuButton>
            </Menu>
         </Flex>
         {img && <Picture src={img} alt="todo" />}
         <ReactMarkdown remarkPlugins={[remarkGfm]}>{text}</ReactMarkdown>
         <FlexItems className="controls">
            <p className="todo-date">{date}</p>
            <IconsContainer className="icons-container">
               <Stage
                  className="todo-icons"
                  onClick={todoRestart}
                  text="Stage 1"
               >
                  <i
                     className={`fa fa-reply-all ${stageOneColor}`}
                     aria-hidden="true"
                  ></i>
               </Stage>
               <Stage className="todo-icons" onClick={todoDoing} text="Stage 2">
                  <i
                     className={`fa fa-spinner ${stageTwoColor}`}
                     aria-hidden="true"
                  ></i>
               </Stage>
               <Stage className="todo-icons" onClick={todoDone} text="Stage 3">
                  <i
                     className={`fa fa-check ${stageThreeColor}`}
                     aria-hidden="true"
                  ></i>
               </Stage>
            </IconsContainer>
         </FlexItems>
      </TodoItem>
   );
};

export default Todo;
