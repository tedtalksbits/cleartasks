import React, { useState } from 'react'
import FormField, { Form, Input, TextArea } from './Form'
import { Button } from './PageComponents'
import { v4 as uuidv4 } from 'uuid';
import { useUIState } from '../context/UpdateUiContext';
const PostForm = () => {

   const URL = 'https://college-courses-api.herokuapp.com/upcoming_courses/'
   const { setUpdateUI } = useUIState()
   const [newTodo, setNewTodo] = useState({
      title: "",
      text: "",
      created_at: new Date(),
      id: uuidv4(),
      done: false,
      doing: false,
      completed_at: "",
      img: ''
   })

   const resetForm = () => {
      setNewTodo({
         title: "",
         text: "",
         created_at: '',
         id: '',
         done: '',
         doing: '',
         completed_at: "",
         img: ''
      })
   }

   const postTodo = async () => {

      if (newTodo.title) {
         try {
            await fetch(URL, {
               method: 'POST',
               headers: {
                  "Content-Type": "application/json"
               },
               body: JSON.stringify(newTodo)
            })
            resetForm()
            setUpdateUI();
         } catch (error) {
            console.log(error);
         }
      }
      else {
         return
      }

   }


   return (
      <Form id='todoForm' onSubmit={e => { e.preventDefault() }}>
         <FormField
            icon={<i className="fa fa-font"></i>}
            title='Title'
         >
            <Input
               name='Title'
               id='Title'
               className='field-input'
               placeholder='Empty'
               value={newTodo.title}
               onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })}
               required
               autoFocus

            />
         </FormField>
         <hr />
         <FormField
            icon={<i className="fa fa-image"></i>}
            title='Image'
         >
            <Input
               name='Image'
               id='Image'
               className='field-input'
               placeholder='Empty'
               value={newTodo.img}
               onChange={(e) => setNewTodo({ ...newTodo, img: e.target.value })}

            />
         </FormField>
         <hr />
         <FormField
            icon={<i className="fa fa-paragraph"></i>}
            title='Text'
         >
            <TextArea
               name='Text'
               id='Text'
               rows='3'
               className='field-input'
               placeholder='Empty'
               value={newTodo.text}
               onChange={(e) => setNewTodo({ ...newTodo, text: e.target.value })}
            />
         </FormField>
         <Button
            style={{ display: 'block', marginLeft: 'auto' }}
            onClick={() => { postTodo(); }}
         >
            <i className="fa fa-paper-plane"></i>
            Create
         </Button>
      </Form>
   )
}

export default PostForm
