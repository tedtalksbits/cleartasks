import React, { useState } from "react";
import FormField, { Form, Input, TextArea } from "./Form";
import { Button } from "./PageComponents";
import { useUIState } from "../context/UpdateUiContext";
import { MDButtonBar } from "./MDButtonBar";
const PostForm = ({ setShowForm, url }) => {
   const { setUpdateUI } = useUIState();
   const [newItem, setNewItem] = useState({
      itemText: "",
      itemTitle: "",
      itemImage: "",
   });

   const resetForm = () => {
      setNewItem({
         itemText: "",
         itemTitle: "",
         itemImage: "",
      });
   };

   function handleChange(e) {
      setNewItem({ ...newItem, [e.target.name]: e.target.value });
   }
   const postTodo = async () => {
      if (newItem.itemTitle) {
         try {
            await fetch(url, {
               method: "POST",
               headers: {
                  "Content-Type": "application/json",
               },
               body: JSON.stringify(newItem),
            });
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
   const [inputFocus, setInputFocus] = useState(false);
   const addMdToState = (markdown) => {
      setNewItem({ ...newItem, itemText: newItem.itemText + markdown });
      setInputFocus(true);
   };

   return (
      <Form
         id="todoForm"
         onSubmit={(e) => {
            e.preventDefault();
         }}
      >
         <FormField icon={<i className="fa fa-font"></i>} title="Title">
            <Input
               name="itemTitle"
               id="itemTitle"
               className="field-input"
               placeholder="Empty"
               value={newItem.itemTitle}
               onChange={handleChange}
               required
               autoFocus
               maxLength="50"
            />
         </FormField>
         <hr />
         <FormField icon={<i className="fa fa-image"></i>} title="Image">
            <Input
               name="itemImage"
               id="itemImage"
               className="field-input"
               placeholder="Empty"
               value={newItem.itemImage}
               onChange={handleChange}
            />
         </FormField>
         <hr />
         <FormField icon={<i className="fa fa-paragraph"></i>} title="Text">
            <TextArea
               name="itemText"
               id="itemText"
               rows="3"
               className="field-input"
               placeholder="Empty"
               value={newItem.itemText}
               onChange={handleChange}
               autoFocus={inputFocus}
               maxLength="250"
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

         <Button
            style={{ display: "block", marginLeft: "auto" }}
            onClick={() => {
               postTodo();
            }}
         >
            <i className="fa fa-paper-plane"></i>
            Create
         </Button>
      </Form>
   );
};

export default PostForm;
