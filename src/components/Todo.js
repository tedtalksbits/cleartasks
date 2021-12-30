import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const FlexItems = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   gap: 1rem;

`
const TodoItem = styled.span`
   cursor: pointer;
   display: inline-block;
   width: 100%;
   padding: .5rem .8rem;
   border-radius: 5px;
   margin: .4rem 0;
   background: ${props => props.theme.surface2};
   transition: all ease-in-out .4s;
   animation: fadeInOpacity ease .4s forwards;
   animation-fill-mode: both;

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
const Icon = styled.p`
   visibility: ${({ when }) => when ? 'visible' : 'hidden'};
   opacity: ${({ when }) => when ? '1' : '0'};
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

      :hover{
        transform: scale(1.2);
      }
    }

`
const Picture = styled.img`
   height: 150px;
   border-radius: 5px;
   object-fit: cover;
   width: 100%;
`
const Todo = ({ img, title, text, todoDelete, todoDone, todoDoing, todoId, date }) => {

   const navigate = useNavigate();
   const navigateToEdit = () => {
      navigate(`/edit/${todoId}`);
   }
   const [showIcons, setShowIcons] = useState(false);

   return (
      <TodoItem onDoubleClick={navigateToEdit} className='todo' onMouseEnter={() => setShowIcons(true)} onMouseLeave={() => setShowIcons(false)}>
         {img && <Picture src={img} alt='todo' />}
         <p className="bold">{title}</p>
         <p className="custom-text">{text}</p>

         <FlexItems className="controls" >
            <p className="todo-date">{new Date(date).toLocaleDateString(
               'en-gb', {
               year: 'numeric',
               month: 'long',
               day: 'numeric',
               timeZone: 'utc'
            }
            )}
            </p>
            <IconsContainer className='icons-container'>
               <Icon when={showIcons} className='todo-icons' onClick={todoDone}><i className="fa fa-check success" aria-hidden="true"></i></Icon>
               <Icon when={showIcons} className='todo-icons' onClick={todoDoing} ><i className="fa fa-spinner warning" aria-hidden="true"></i></Icon>
               <Icon when={showIcons} className='todo-icons' onClick={todoDelete}><i className="fa fa-times danger" aria-hidden="true"></i></Icon>
            </IconsContainer>

         </FlexItems>

      </TodoItem>
   )
}

export default Todo
