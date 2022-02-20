import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchById, todoUpdate } from "../api/todo";
import FormField, { Form, Input, TextArea } from "./Form";
import { IconButton } from "./IconButton";
import { Button, Highlight } from "./PageComponents";
import { OText } from "./OverflowText";
import { MDButtonBar } from "./MDButtonBar";

const closeIconPosition = {
   right: "0rem",
   top: "-5.5rem",
};
const EditForm = ({ itemId, taskId, task }) => {
   const URL = `${process.env.REACT_APP_MDB}/item/${taskId}/${itemId}`;
   const editURL = `${process.env.REACT_APP_MDB}/list/${taskId}`;
   const [todo, setTodo] = useState({});
   const [inputFocus, setInputFocus] = useState(false);
   const fetchTodo = async () => {
      const data = await fetchById(URL);
      setTodo(data);
   };
   useEffect(() => {
      fetchTodo();
   }, []);

   const navigate = useNavigate();

   function goBack() {
      navigate(`/cleartasks/tasks/${taskId}/${task.tasksName}`);
   }
   const saveTodo = async () => {
      if (task) {
         const updatedItems = task.items.map((e) => {
            if (e._id === itemId) {
               return todo;
            } else return e;
         });
         const updatedTask = { ...task, items: updatedItems };
         // console.log(updatedItems);
         await todoUpdate(editURL, updatedTask);
         goBack();
      }
   };
   const addMdToState = (markdown) => {
      setTodo({ ...todo, itemText: todo.itemText + markdown });
      setInputFocus(true);
   };

   return (
      <Form
         style={{ position: "relative" }}
         onSubmit={(e) => e.preventDefault()}
      >
         <IconButton onClick={goBack} style={closeIconPosition}>
            <i className="fa fa-times" aria-hidden="true"></i>
         </IconButton>
         <FormField icon={<i className="fa fa-font"></i>} title="Title">
            <Input
               name="Title"
               id="Title"
               className="field-input"
               placeholder="Empty"
               value={todo.itemTitle}
               onChange={(e) => setTodo({ ...todo, itemTitle: e.target.value })}
               required
               autoFocus
            />
         </FormField>
         <hr />
         <FormField icon={<i className="fa fa-image"></i>} title="Image">
            <Input
               name="Image"
               id="Image"
               className="field-input"
               placeholder="Empty"
               value={todo.itemImage}
               onChange={(e) => setTodo({ ...todo, itemImage: e.target.value })}
            />
         </FormField>
         <hr />
         <FormField icon={<i className="fa fa-paragraph"></i>} title="Text">
            <TextArea
               name="Text"
               id="Text"
               rows="10"
               className="field-input"
               placeholder="Empty"
               value={todo.itemText}
               onChange={(e) => setTodo({ ...todo, itemText: e.target.value })}
               autoFocus={inputFocus}
            />
         </FormField>
         <MDButtonBar>
            <label
               htmlFor="Text"
               onClick={() => addMdToState("# ")}
               title="Heading"
            >
               <i class="fa fa-header" aria-hidden="true"></i>
            </label>
            <label
               htmlFor="Text"
               onClick={() => addMdToState("**bold text**")}
               title="Bold"
            >
               <i class="fa fa-bold" aria-hidden="true"></i>
            </label>
            <label
               htmlFor="Text"
               onClick={() => addMdToState("- ")}
               title="Bulleted List"
            >
               <i class="fa fa-list" aria-hidden="true"></i>
            </label>
            <label
               htmlFor="Text"
               onClick={() => addMdToState("[title](https://www.example.com) ")}
               title="Link"
            >
               <i class="fa fa-link" aria-hidden="true"></i>
            </label>
         </MDButtonBar>
         <div className="radios">
            <i className="fa fa-spinner" style={{ marginRight: ".4rem" }}></i>
            <span>Stage</span>
            <hr />
            <label htmlFor="Todo" className="custom-radio">
               <Highlight className={task.stageOne.color}>
                  <OText>{task.stageOne.title}</OText>
               </Highlight>
               <Input
                  type="radio"
                  name="status"
                  id="Todo"
                  checked={todo.itemStage === 1}
                  onChange={() => setTodo({ ...todo, itemStage: 1 })}
               />
            </label>
            <label htmlFor="Doing" className="custom-radio">
               <Highlight className={task.stageTwo.color}>
                  <OText>{task.stageTwo.title}</OText>
               </Highlight>
               <Input
                  type="radio"
                  name="status"
                  id="Doing"
                  checked={todo.itemStage === 2}
                  onChange={() => setTodo({ ...todo, itemStage: 2 })}
               />
            </label>
            <label htmlFor="Done" className="custom-radio">
               <Highlight className={task.stageThree.color}>
                  <OText>{task.stageThree.title}</OText>
               </Highlight>
               <Input
                  type="radio"
                  name="status"
                  id="Done"
                  checked={todo.itemStage === 3}
                  onChange={() => setTodo({ ...todo, itemStage: 3 })}
               />
            </label>
         </div>
         <Button
            style={{ display: "block", marginLeft: "auto" }}
            onClick={() => {
               saveTodo();
            }}
         >
            <i className="fa fa-save"></i>
            &nbsp;Save
         </Button>
      </Form>
   );
};

export default EditForm;
