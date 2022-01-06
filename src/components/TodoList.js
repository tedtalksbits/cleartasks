import React, { useReducer, useState } from 'react'
import styled from 'styled-components'
import { ControlledModal } from './ControlledModal'
import { Input } from './Form'
import { IconButton } from './IconButton'
import { Button } from './PageComponents'
import PostForm from './PostForm'
import RenderTable from './RenderTable'

const iconButtonPostion = {
   right: '1rem',
   top: '.4rem'
}


const ListHeader = styled.div`
   display: flex;
   align-items: center;
   gap: .5rem;
   flex-wrap: wrap;
   justify-content: space-between;

   .container{
      display: flex;
      gap: 1rem;
      align-items: center;
   }
`
const TodoList = () => {

   const [search, setSearch] = useState('');
   const [showModal, setShowModal] = useState(false)
   const [sort, setSort] = useReducer(((sort) => !sort), true)

   return (
      <>
         <ListHeader >
            <div className="spacer"></div>
            <div className="container">
               <Button onClick={setSort} style={{ minInlineSize: 'fit-content' }}>
                  Sort{sort ? <i className="fa fa-sort-desc ml-5" aria-hidden="true"></i> : <i className="fa fa-sort-asc ml-5" aria-hidden="true"></i>}
               </Button>
               <Input
                  className='custom-input'
                  type="search"
                  name="search"
                  id="search"
                  placeholder='search'
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
               />
               <Button onClick={() => setShowModal(true)} >New</Button>
            </div>
         </ListHeader>

         <ControlledModal className="modal" isVisible={showModal} onClose={() => setShowModal(false)} >
            <IconButton onClick={() => setShowModal(false)} style={iconButtonPostion} >
               <i className="fa fa-times" aria-hidden="true"></i>
            </IconButton>
            <PostForm setShowForm={setShowModal} />
         </ControlledModal >
         <hr />

         <RenderTable search={search} sort={sort} />
      </>
   )
}


export default TodoList
