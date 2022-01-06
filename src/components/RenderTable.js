import React, { useEffect, useState } from 'react'
import { todoDelete, todoUpdate } from '../api/todo'
import { useUIState } from '../context/UpdateUiContext'
import { GridContainer, GridItem } from './Grid'
import { Highlight } from './PageComponents'
import Todo from './Todo'

const RenderTable = ({ search, sort }) => {
   const URL = 'https://college-courses-api.herokuapp.com/upcoming_courses/'
   const [data, setData] = useState([])
   const { updateUI, setUpdateUI } = useUIState()

   const fetchItems = async () => {
      try {
         const res = await fetch(URL, {
            method: 'GET'
         })
         const result = await res.json()
         setData(result)

      } catch (error) {
         console.log(error);
      }
   }
   useEffect(() => {
      fetchItems()
   }, [updateUI])


   /************************** functionality **************************/
   const filteredData = data.filter(item => {
      return (
         item.title.toLowerCase().includes(search.toLocaleLowerCase())
      )
   })

   if (!sort) {

      filteredData.sort((a, b) => {
         let fa = a.created_at.toLowerCase(),
            fb = b.created_at.toLowerCase();

         if (fa < fb) {
            return -1;
         }
         if (fa > fb) {
            return 1;
         }
         return 0;
      })
   }

   if (sort) {
      filteredData.sort((a, b) => {
         let fa = a.created_at.toLowerCase(),
            fb = b.created_at.toLowerCase();

         if (fa > fb) {
            return -1;
         }
         if (fa < fb) {
            return 1;
         }
         return 0;
      })
   }


   const updateStatusTodo = async (id, obj) => {
      await todoUpdate(`${URL}${id}`, obj);
      setUpdateUI()
   }

   const handleDelete = async (id) => {
      await todoDelete(`${URL}${id}`)
      setUpdateUI()
   }
   return (
      <GridContainer>
         <GridItem className='todo-head'><Highlight className='danger'>To Do</Highlight></GridItem>
         <GridItem className='doing-head'><Highlight className='warning'>Doing</Highlight></GridItem>
         <GridItem className='done-head'><Highlight className='success'>Done</Highlight></GridItem>

         <GridItem className='todo-item'>
            {filteredData.map((todo) => {
               if (todo.doing === false && todo.done === false) {
                  return (
                     <Todo
                        key={todo.id}
                        title={todo.title}
                        text={todo.text}
                        img={todo.img}
                        todoId={todo.id}
                        date={todo.created_at}
                        todoDelete={() => handleDelete(todo.id)}
                        todoDone={() => { updateStatusTodo(todo.id, { ...todo, done: true, doing: false }) }}
                        todoDoing={() => { updateStatusTodo(todo.id, { ...todo, doing: true, done: false }) }}
                     />
                  )
               }
               else return null
            })}
         </GridItem>
         <GridItem className='doing-item'>
            {filteredData.map((todo) => {
               if (todo.doing) {
                  return (
                     <Todo
                        key={todo.id}
                        title={todo.title}
                        text={todo.text}
                        img={todo.img}
                        todoId={todo.id}
                        date={todo.created_at}
                        todoDelete={() => handleDelete(todo.id)}
                        todoDone={() => { updateStatusTodo(todo.id, { ...todo, done: true, doing: false }) }}
                        todoDoing={() => { updateStatusTodo(todo.id, { ...todo, doing: true, done: false }) }}
                     />
                  )
               }
               else return null
            })}
         </GridItem>
         <GridItem className='done-item' >
            {filteredData.map((todo) => {
               if (todo.done) {
                  return (
                     <Todo
                        key={todo.id}
                        title={todo.title}
                        text={todo.text}
                        img={todo.img}
                        todoId={todo.id}
                        date={todo.created_at}
                        todoDelete={() => handleDelete(todo.id)}
                        todoDone={() => { updateStatusTodo(todo.id, { ...todo, done: true, doing: false }) }}
                        todoDoing={() => { updateStatusTodo(todo.id, { ...todo, doing: true, done: false }) }}
                     />
                  )
               }
               else return null
            })}
         </GridItem>
      </GridContainer>
   )
}

export default RenderTable
