import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { fetchById, todoUpdate } from '../api/todo'
import FormField, { Form, Input, TextArea } from './Form'
import { IconButton } from './IconButton'
import { Button, Highlight } from './PageComponents'
const closeIconPosition = {
   right: '0rem',
   top: '-5.5rem'
}
const EditForm = ({ id }) => {
   const URL = 'https://college-courses-api.herokuapp.com/upcoming_courses/'
   const [todo, setTodo] = useState([])
   const fetchTodo = async () => {
      const data = await fetchById(`${URL}${id}`)
      setTodo(data)
      // console.log(data);
   }
   useEffect(() => {
      fetchTodo()
   }, [])

   const navigate = useNavigate()

   function goHome() {
      navigate('/taskify')
   }
   const saveTodo = async () => {
      await todoUpdate(`${URL}${id}`, todo)
      goHome()
   }
   return (
      <Form style={{ position: 'relative' }} onSubmit={e => e.preventDefault()}>
         <IconButton onClick={goHome} style={closeIconPosition}>
            <i className="fa fa-times" aria-hidden="true"></i>
         </IconButton>
         <FormField
            icon={<i className="fa fa-font"></i>}
            title='Title'
         >
            <Input
               name='Title'
               id='Title'
               className='field-input'
               placeholder='Empty'
               value={todo.title}
               onChange={(e) => setTodo({ ...todo, title: e.target.value })}
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
               value={todo.img}
               onChange={(e) => setTodo({ ...todo, img: e.target.value })}

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
               rows='10'
               className='field-input'
               placeholder='Empty'
               value={todo.text}
               onChange={(e) => setTodo({ ...todo, text: e.target.value })}

            />
         </FormField>
         <div className="radios">
            Status
            <label htmlFor="Todo" className='custom-radio'>
               <Highlight className='danger'>Todo</Highlight>
               <Input
                  type='radio'
                  name='status'
                  id='Todo'
                  checked={!todo.done && !todo.doing}
                  value={!todo.done && !todo.doing ? true : false}
                  onChange={() => setTodo({ ...todo, done: false, doing: false })}
               />
            </label>
            <label htmlFor="Doing" className='custom-radio'>
               <Highlight className='warning'>Doing</Highlight>
               <Input
                  type='radio'
                  name='status'
                  id='Doing'
                  checked={todo.doing}
                  value={todo.doing}
                  onChange={() => setTodo({ ...todo, done: false, doing: true })}
               />
            </label>
            <label htmlFor="Done" className='custom-radio'>
               <Highlight className='success'>Done</Highlight>
               <Input
                  type='radio'
                  name='status'
                  id='Done'
                  checked={todo.done}
                  value={todo.done}
                  onChange={() => setTodo({ ...todo, done: true, doing: false })}
               />
            </label>
         </div>

         <Button
            style={{ display: 'block', marginLeft: 'auto' }}
            onClick={() => { saveTodo() }}
         >
            <i className="fa fa-save"></i>
            Save
         </Button>
      </Form>
   )
}

export default EditForm
