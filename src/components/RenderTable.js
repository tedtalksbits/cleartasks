import React, { useEffect, useState } from "react";
import { todoDelete, todoUpdate } from "../api/todo";
import { useUIState } from "../context/UpdateUiContext";
import { EditableText } from "./EditableText";
import { GridContainer, GridItem } from "./Grid";
import { MyLoader } from "./MyLoader";
import Todo from "./Todo";
import styled from "styled-components";
import useLocalStorageState from "use-local-storage-state";
import { PaginateButton } from "./PaginateBtn";

const Container = styled.div`
   @media screen and (max-width: 750px) {
      div.mobile-pagination {
         display: block;
      }
   }
   .mobile-pagination {
      display: none;
   }
   .mobile-paginate-btns {
      margin: 1rem 0;
   }
`;
const RenderTable = ({ search, taskId, userId }) => {
   const URL = `${process.env.REACT_APP_MDB}/list/${userId}/${taskId}`;
   const editURL = `${process.env.REACT_APP_MDB}/list/${taskId}`;
   const [data, setData] = useState(null);
   const [isLoading, setIsLoading] = useState(true);
   const { updateUI, setUpdateUI } = useUIState();

   const fetchItems = async () => {
      try {
         const res = await fetch(URL, {
            method: "GET",
         });
         const items = await res.json();
         // console.log(items)
         setData(items);
         setIsLoading(false);
      } catch (error) {
         console.log(error);
      }
   };
   useEffect(() => {
      fetchItems();
   }, [updateUI]);

   /************************** functionality **************************/

   const filteredData = data?.items.filter((item) => {
      return item.itemTitle.toLowerCase().includes(search.toLocaleLowerCase());
   });

   console.log(filteredData);

   const updateStatusTodo = async (obj) => {
      await todoUpdate(editURL, obj);
      setUpdateUI();
   };

   const handleDelete = async (id) => {
      await todoDelete(`${process.env.REACT_APP_MDB}/item/${taskId}/${id}`);
      setUpdateUI();
   };

   // pagination
   const [index, setIndex] = useLocalStorageState("page index", 1);
   const handleIndex = (index) => {
      setIndex(index);
   };
   if (isLoading) {
      return (
         <div
            className="center-container"
            style={{ display: "grid", placeItems: "center" }}
         >
            <MyLoader />
         </div>
      );
   }
   return (
      <Container>
         <div className="mobile-pagination">
            <div className="mobile-paginate-btns">
               <PaginateButton
                  className={index === 1 && "active"}
                  onClick={() => handleIndex(1)}
               >
                  {data.stageOne.title}
               </PaginateButton>
               <PaginateButton
                  className={index === 2 && "active"}
                  onClick={() => handleIndex(2)}
               >
                  {data.stageTwo.title}
               </PaginateButton>
               <PaginateButton
                  className={index === 3 && "active"}
                  onClick={() => handleIndex(3)}
               >
                  {data.stageThree.title}
               </PaginateButton>
            </div>
            <GridItem className="todo-item">
               {filteredData.map(
                  (e) =>
                     e.itemStage === index && (
                        <Todo
                           key={e._id}
                           title={e.itemTitle}
                           text={e.itemText}
                           img={e.itemImage}
                           todoId={e._id}
                           taskId={taskId}
                           date={e.createdAt}
                           stageOneColor={data.stageOne.color}
                           stageTwoColor={data.stageTwo.color}
                           stageThreeColor={data.stageThree.color}
                           todoDelete={() => handleDelete(e._id)}
                           todoRestart={() => {
                              updateStatusTodo({
                                 ...data,
                                 ...(e.itemStage = 1),
                              });
                           }}
                           todoDoing={() => {
                              updateStatusTodo({
                                 ...data,
                                 ...(e.itemStage = 2),
                              });
                           }}
                           todoDone={() => {
                              updateStatusTodo({
                                 ...data,
                                 ...(e.itemStage = 3),
                              });
                           }}
                        />
                     )
               )}
            </GridItem>
         </div>
         <GridContainer>
            {/* column headers */}
            <GridItem className="todo-head">
               <EditableText
                  title={data.stageOne.title}
                  color={data.stageOne.color}
                  taskId={taskId}
                  stage={1}
               />
            </GridItem>
            <GridItem className="doing-head">
               <EditableText
                  title={data.stageTwo.title}
                  color={data.stageTwo.color}
                  taskId={taskId}
                  stage={2}
               />
            </GridItem>
            <GridItem className="done-head">
               <EditableText
                  title={data.stageThree.title}
                  color={data.stageThree.color}
                  taskId={taskId}
                  stage={3}
               />
            </GridItem>

            <GridItem className="todo-item">
               {filteredData.map(
                  (e) =>
                     e.itemStage === 1 && (
                        <Todo
                           key={e._id}
                           title={e.itemTitle}
                           text={e.itemText}
                           img={e.itemImage}
                           todoId={e._id}
                           taskId={taskId}
                           date={e.createdAt}
                           stageTwoColor={data.stageTwo.color}
                           stageThreeColor={data.stageThree.color}
                           todoDelete={() => handleDelete(e._id)}
                           todoDoing={() => {
                              updateStatusTodo({
                                 ...data,
                                 ...(e.itemStage = 2),
                              });
                           }}
                           todoDone={() => {
                              updateStatusTodo({
                                 ...data,
                                 ...(e.itemStage = 3),
                              });
                           }}
                        />
                     )
               )}
            </GridItem>
            <GridItem className="doing-item">
               {filteredData.map(
                  (e) =>
                     e.itemStage === 2 && (
                        <Todo
                           key={e._id}
                           title={e.itemTitle}
                           text={e.itemText}
                           img={e.itemImage}
                           todoId={e._id}
                           taskId={taskId}
                           date={e.createdAt}
                           stageOneColor={data.stageOne.color}
                           stageThreeColor={data.stageThree.color}
                           todoDelete={() => handleDelete(e._id)}
                           todoRestart={() => {
                              updateStatusTodo({
                                 ...data,
                                 ...(e.itemStage = 1),
                              });
                           }}
                           todoDone={() => {
                              updateStatusTodo({
                                 ...data,
                                 ...(e.itemStage = 3),
                              });
                           }}
                        />
                     )
               )}
            </GridItem>
            <GridItem className="done-item">
               {filteredData.map(
                  (e) =>
                     e.itemStage === 3 && (
                        <Todo
                           key={e._id}
                           title={e.itemTitle}
                           text={e.itemText}
                           img={e.itemImage}
                           todoId={e._id}
                           taskId={taskId}
                           date={e.createdAt}
                           stageOneColor={data.stageOne.color}
                           stageTwoColor={data.stageTwo.color}
                           todoDelete={() => handleDelete(e._id)}
                           todoRestart={() => {
                              updateStatusTodo({
                                 ...data,
                                 ...(e.itemStage = 1),
                              });
                           }}
                           todoDoing={() => {
                              updateStatusTodo({
                                 ...data,
                                 ...(e.itemStage = 2),
                              });
                           }}
                        />
                     )
               )}
            </GridItem>
         </GridContainer>
      </Container>
   );
};

export default RenderTable;
