import React from "react";
import { useNavigate } from "react-router-dom";
import { Flex } from "./Flex";
import { Menu, MenuButton } from "./Menu";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
   FlexItems,
   IconsContainer,
   Picture,
   Stage,
   TodoItem,
} from "./todoElements";

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
   const today = new Date().toLocaleDateString();
   const navigate = useNavigate();
   const navigateToEdit = () => {
      navigate(`/cleartasks/edit/${todoId}/${taskId}`);
   };
   return (
      <TodoItem onDoubleClick={navigateToEdit} className="todo">
         {today === date && <p className="light-text">new</p>}
         <Flex className="todo_top" flexWrap="nowrap">
            <h3 className="bold" title={title}>
               {title}
            </h3>
            <Menu
               padding={0}
               iconSize={1.1}
               openIcon="fa fa-ellipsis-v"
               closeIcon="fa fa-ellipsis-v"
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
            <p className="light-text">{date}</p>
            <IconsContainer className="icons-container">
               <Stage
                  className="todo-icons"
                  onClick={todoRestart}
                  title="stage 1"
               >
                  <i
                     className={`fa fa-reply-all ${stageOneColor}`}
                     aria-hidden="true"
                  ></i>
               </Stage>

               <Stage
                  className="todo-icons"
                  onClick={todoDoing}
                  title="stage 2"
               >
                  <i
                     className={`fa fa-spinner ${stageTwoColor}`}
                     aria-hidden="true"
                  ></i>
               </Stage>

               <Stage className="todo-icons" onClick={todoDone} title="stage 3">
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
