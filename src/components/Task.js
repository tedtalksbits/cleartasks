import React, { useState } from 'react'
import { Box } from './Box'
import { Link } from 'react-router-dom'
import { Flex } from './Flex'
import styled from 'styled-components'
import { Menu } from './Menu'
import { darkTheme } from '../theme'
import { ControlledModal } from './ControlledModal'
import { Button } from './PageComponents'
import { useUIState } from '../context/UpdateUiContext'
import { EditableInput } from './EditableText'



const Icon = styled.i`
      /* opacity: .2;
      transition: all ease .25s;
     &:hover{
         opacity: 1;
   } */
`

export const Task = ({ link, text, taskId }) => {
   const [isUpdating, setIsUpdating] = useState(false)
   const [showModal, setShowModal] = useState(false)
   const { setUpdateUI } = useUIState()
   const userIsUpdating = () => {
      setIsUpdating(prev => !prev)
   }

   const [stateText, setStateText] = useState({
      tasksName: text
   })

   const deleteTask = async (id) => {
      try {
         await fetch(`${process.env.REACT_APP_MDB}/deletetask/${id}`, {
            method: 'DELETE'
         })

      } catch (error) {
         console.log(error, "Error on delete");
      }
      setUpdateUI()
   }
   const editTask = async () => {
      try {
         await fetch(`${process.env.REACT_APP_MDB}/edittaskname/${taskId}`, {
            method: 'PUT',
            headers: {
               'Content-Type': 'application/json'
            },
            body: JSON.stringify(stateText)

         })
      } catch (error) {
         console.log(error, "Error on updating tasksname");
      }
      setUpdateUI()
   }
   return (
      <Box>
         <Flex flexWrap='nowrap' >
            {isUpdating ?
               <>
                  <EditableInput autoFocus value={stateText.tasksName} onChange={(e) => setStateText({ tasksName: e.target.value })} />
                  <i onClick={() => { userIsUpdating(); editTask() }} className="fa fa-check" aria-hidden="true" style={{ cursor: 'pointer', color: 'greenyellow' }}></i>
               </>
               :
               <>
                  <Link to={link} style={{ flex: 1 }}>{stateText.tasksName}</Link>
                  <Menu iconSize={1.1} openIcon='fa fa-chevron-down' closeIcon='fa fa-chevron-up'>
                     <Box style={{ cursor: 'pointer', padding: '10px' }} >
                        <Flex className="menu-icon-set" onClick={userIsUpdating}>
                           <span> Edit</span>
                           <Icon className="fa fa-pencil" aria-hidden="true" ></Icon>
                        </Flex>
                     </Box>
                     <Box style={{ cursor: 'pointer', padding: '10px' }} bg={darkTheme.danger}>
                        <Flex className="menu-icon-set" onClick={() => setShowModal(true)}>
                           <span> Delete</span>
                           <Icon className="fa fa-times" aria-hidden="true" ></Icon>
                        </Flex>
                     </Box>
                  </Menu>
               </>
            }
         </Flex>
         <ControlledModal isVisible={showModal} onClose={() => setShowModal(false)}>
            <Box>
               <h3>Delete '{text}'?</h3>
               <hr />
               <Flex>
                  <Button color={darkTheme.danger} onClick={() => deleteTask(taskId)}>Yes</Button>
                  <Button onClick={() => setShowModal(false)}>No</Button>
               </Flex>
            </Box>
         </ControlledModal>
      </Box>
   )
}
