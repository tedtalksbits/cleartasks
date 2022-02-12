import React, { useState } from "react";
import FormField, { Form, Input } from "./Form";
import { Button } from "./PageComponents";
import { useUIState } from "../context/UpdateUiContext";
const TaskForm = ({ setShowForm, userId, username }) => {
   const URL = `${process.env.REACT_APP_MDB}/lists/new`;
   const { setUpdateUI } = useUIState();
   const [newObj, setNewObj] = useState({
      tasksName: "",
      userId: userId,
      username: username,
      items: [],
   });

   const resetForm = () => {
      setNewObj({
         tasksName: "",
         userId: "",
         username: "",
      });
   };

   const post = async () => {
      if (newObj.tasksName) {
         try {
            const res = await fetch(URL, {
               method: "POST",
               headers: {
                  "Content-Type": "application/json",
               },
               body: JSON.stringify(newObj),
            });

            const result = await res.json();
            // console.log(result);
            resetForm();
            setUpdateUI();
            setShowForm(false);
         } catch (error) {
            console.log(error);
         }
      } else {
         return;
      }
   };

   return (
      <Form
         id="todoForm"
         onSubmit={(e) => {
            e.preventDefault();
         }}
      >
         <p>Create a new task</p>
         <hr />
         <FormField icon={<i className="fa fa-file-text"></i>} title="Name">
            <Input
               required
               autoFocus
               name="Name"
               id="Name"
               className="field-input"
               placeholder="Empty"
               value={newObj.img}
               onChange={(e) =>
                  setNewObj({ ...newObj, tasksName: e.target.value })
               }
            />
         </FormField>
         <hr />
         <Button
            style={{ display: "block", marginLeft: "auto" }}
            onClick={() => {
               post();
            }}
         >
            <i className="fa fa-paper-plane"></i>
            Create
         </Button>
      </Form>
   );
};

export default TaskForm;
