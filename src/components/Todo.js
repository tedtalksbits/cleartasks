import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { darkTheme } from '../theme';
import { Box } from './Box';
import { Flex } from './Flex';
import { Menu } from './Menu'
const FlexItems = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   gap: 1rem;

`
const TodoItem = styled.div`
   cursor: pointer;
   display: inline-block;
   width: 100%;
   padding: .5rem .8rem;
   border-radius: 5px;
   margin: .4rem 0;
   background: ${props => props.theme.surface2};
   transition: all ease-in-out .4s;
   /* animation: zoom ease .4s forwards .15s; */
   /* animation-fill-mode: both; */

   :hover{
      background: ${props => props.theme.surface3};
   }
   p.todo-date{
      font-size: .75rem;
      color: ${({ theme }) => theme.text4};
   }
`
const IconsContainer = styled.div`
   display: flex;
   gap: 1rem;

`
const Icon = styled.span`
   
   transition: opacity .3s, visibility ease-in-out .3s;
   cursor: pointer;
    
    i{
      padding: 2px;
      border-radius: 2px;
      transition: all .2s ease-in-out;
      &.success{
      border: ${props => props.theme.success} 1px solid; 
      background: ${props => props.theme.success};
      }
      &.warning{
         border: ${props => props.theme.warning} 1px solid; 
         background: ${props => props.theme.warning};
      }
      &.danger{
         border: ${props => props.theme.danger} 1px solid; 
         background: ${props => props.theme.danger};
      }
      &.blue{
         border: ${props => props.theme.blue} 1px solid; 
         background: ${props => props.theme.blue};
      }
      &.pink{
         border: ${props => props.theme.pink} 1px solid; 
         background: ${props => props.theme.pink};
      }
      &.purple{
         border: ${props => props.theme.purple} 1px solid; 
         background: ${props => props.theme.purple};
      }
      &.mint{
         border: ${props => props.theme.mint} 1px solid; 
         background: ${props => props.theme.mint};
      }

      :hover{
        transform: scale(1.2);  
      }
   
   }

   &:hover ::after{
         content: '${props => props.text}';
         font-size: .6rem;
         width: max-content;
         padding: .4rem;
         background: ${props => props.theme.surface1};
         position: absolute;
         top: -2rem;
         left: -5em;
         border-radius: 5px;
         z-index: 2000;
         font-family: 'Poppins', sans-serif;

        }
    @media screen and (min-width: 1400px) {
      visibility: ${({ when }) => when ? 'visible' : 'hidden'};
      opacity: ${({ when }) => when ? '1' : '0'};
    }

`
const Picture = styled.img`
   height: 150px;
   border-radius: 5px;
   object-fit: cover;
   width: 100%;
   margin-top: 14px;
`
const Todo = ({ img, title, text, todoDelete, todoRestart, todoDone, todoDoing, todoId, date, taskId, stageTwoColor, stageThreeColor, stageOneColor }) => {

   const navigate = useNavigate();
   const navigateToEdit = () => {
      navigate(`/cleartasks/edit/${todoId}/${taskId}`);
   }
   const [showIcons, setShowIcons] = useState(false);

   return (

      <TodoItem
         onDoubleClick={navigateToEdit}
         className='todo'
         onMouseEnter={() => setShowIcons(true)}
         onMouseLeave={() => setShowIcons(false)}
      >

         <Flex className="todo_top" flexWrap='nowrap'>
            <p className="bold">{title}</p>
            <Menu iconSize={1.1} openIcon='fa fa-chevron-down' closeIcon='fa fa-chevron-up'>

               <Box style={{ cursor: 'pointer', padding: '10px' }} >
                  <Flex className="menu-icon-set" onClick={navigateToEdit}>
                     <span> Edit</span>
                     <Icon className="fa fa-pencil" aria-hidden="true" ></Icon>
                  </Flex>
               </Box>
               <Box style={{ cursor: 'pointer', padding: '10px' }} bg={darkTheme.danger}>
                  <Flex className="menu-icon-set" onClick={todoDelete}>
                     <span> Delete</span>
                     <Icon className="fa fa-times" aria-hidden="true" ></Icon>
                  </Flex>
               </Box>

            </Menu>
         </Flex>
         {img && <Picture src={img} alt='todo' />}
         <p className="custom-text">{text}</p>

         <FlexItems className="controls" >
            <p className="todo-date">{date}</p>
            <IconsContainer className='icons-container'>
               <Icon when={showIcons} className='todo-icons' onClick={todoRestart} text='Stage 1'>
                  <i className={`fa fa-reply-all ${stageOneColor}`} aria-hidden="true"></i>
               </Icon>
               <Icon when={showIcons} className='todo-icons' onClick={todoDoing} text='Stage 2' >
                  <i className={`fa fa-spinner ${stageTwoColor}`} aria-hidden="true"></i>
               </Icon>
               <Icon when={showIcons} className='todo-icons' onClick={todoDone} text='Stage 3'>
                  <i className={`fa fa-check ${stageThreeColor}`} aria-hidden="true"></i>
               </Icon>
            </IconsContainer>
         </FlexItems>
      </TodoItem>
   )
}

export default Todo
