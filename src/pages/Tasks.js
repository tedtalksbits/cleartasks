import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Avatar } from '../components/Avatar'
import Banner, { bannerImgs, EmojiBox, emojies } from '../components/Banner'
import { ControlledModal } from '../components/ControlledModal'
import { Flex } from '../components/Flex'
import { Input } from '../components/Form'
import { IconButton } from '../components/IconButton'
import { Menu } from '../components/Menu'
import { Button, MainContainer, MainGrid } from '../components/PageComponents'
import PostForm from '../components/PostForm'
import RenderTable from '../components/RenderTable'
import { useUser } from '../context/UserContext'
import { useParams } from 'react-router-dom'
import { Box } from '../components/Box'
import { Logo } from '../components/Logo'
import { usePageContext } from '../context/PageContext'

export const Tasks = () => {
   const { _id } = useParams()
   const { user, setUser } = useUser();
   const { pageData, setPageData } = usePageContext()
   // banner interaction 
   const [openEmojies, setOpenEmojies] = useState(false)
   const [openImages, setOpenImages] = useState(false)

   let navigate = useNavigate()

   useEffect(() => {
      if (!user) {
         navigate('/cleartasks/sign-in')
      }
   }, [user, navigate])

   // modal
   const [search, setSearch] = useState('');
   const [showModal, setShowModal] = useState(false)
   const taskData = {
      img: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      emojie: '🏯'
   }
   const setDefaultImgAndEmojie = () => {
      if (pageData.hasOwnProperty(_id)) {
         return
      }
      else {
         setPageData({ ...pageData, [_id]: taskData })
      }
   }

   const userSetEmojie = (emojie, id) => {
      setPageData({ ...pageData, [id]: { ...pageData[id], emojie: emojie } })
   }
   const userSetImg = (img, id) => {
      setPageData({ ...pageData, [id]: { ...pageData[id], img: img } })
   }



   useEffect(() => {
      setDefaultImgAndEmojie()
   }, [])

   //close button style
   const iconButtonPostion = {
      right: '1rem',
      top: '.4rem'
   }
   return user && (
      <MainGrid>
         <Banner
            icon={pageData?.[_id]?.emojie}
            img={pageData?.[_id]?.img}
            emojieEdit={() => { setOpenEmojies(true) }}
            imgEdit={() => { setOpenImages(true) }} />
         <ControlledModal isVisible={openEmojies} onClose={() => setOpenEmojies(false)}>
            <EmojiBox>
               {emojies.map(emojie => (
                  <div onClick={() => userSetEmojie(emojie, _id)} className='emoji-box' key={emojie}>{emojie}</div>
               ))}
            </EmojiBox>
         </ControlledModal>
         <ControlledModal isVisible={openImages} onClose={() => setOpenImages(false)}>
            <EmojiBox>
               {bannerImgs.map(img => (
                  <div className='emoji-box' key={img}>
                     <img onClick={() => userSetImg(img, _id)} src={img} alt="banner wallpaper" />
                  </div>
               ))}
            </EmojiBox>
         </ControlledModal>
         <MainContainer style={{ minBlockSize: '100vh' }}>
            <div className="paragraph">
               <Flex style={{ marginBottom: '2rem' }} flexWrap='nowrap'>
                  <Logo />
                  <div className="nav-user-info">
                     <Menu >
                        <Avatar src={user.photoURL || ''} />
                        <p className='custom-text'>{user.displayName || 'no user'}</p>
                        <small className='custom-text'>{user.email || 'no user'}</small>
                        <hr />
                        <Button onClick={() => { setUser(null); navigate('/cleartasks/sign-in') }} color='#472d35' style={{ margin: 0 }}>Log out</Button>
                     </Menu>
                  </div>
               </Flex>
            </div>
            <Flex className='nav'>
               <Link to='/cleartasks'>
                  <Box style={{ cursor: 'pointer' }}>
                     <i className='fa fa-home nav-icon' aria-hidden="true" ></i>
                  </Box>
               </Link>
               <div className="spacer"></div>
               <Flex className="nav-interactive" flexWrap='no-wrap'>
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
               </Flex>
            </Flex>
            <ControlledModal className="modal" isVisible={showModal} onClose={() => setShowModal(false)} >
               <IconButton onClick={() => setShowModal(false)} style={iconButtonPostion} >
                  <i className="fa fa-times" aria-hidden="true"></i>
               </IconButton>
               <PostForm setShowForm={setShowModal} url={`${process.env.REACT_APP_MDB}/item/${_id}`} />
            </ControlledModal >
            <hr />
            <RenderTable search={search} taskId={_id} userId={user.uid} />
         </MainContainer>
      </MainGrid>
   )
}
