import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Avatar } from '../components/Avatar'
import Banner, { bannerHeight, bannerImgs, EmojiBox, emojies } from '../components/Banner'
import { ControlledModal } from '../components/ControlledModal'
import { DataLoader } from '../components/DataLoader'
import { Flex } from '../components/Flex'
import { Logo } from '../components/Logo'
import { Menu } from '../components/Menu'
import { Button, MainContainer, MainGrid } from '../components/PageComponents'
import TaskForm from '../components/TaskForm'
import { TasksRenderer } from '../components/TasksRenderer'
import { usePageContext } from '../context/PageContext'
import { useUser } from '../context/UserContext'

const mainContainerSize = {
   minBlockSize: `calc(100vh - ${bannerHeight})`
}
const Home = () => {
   const { user, setUser } = useUser()
   // banner interaction
   const [openEmojies, setOpenEmojies] = useState(false)
   const [openImages, setOpenImages] = useState(false)

   const userSetPageEmojie = (emojie) => {
      setPageData({ ...pageData, home: { ...pageData.home, emojie: emojie } })
   }
   const userSetPageImg = (img) => {
      setPageData({ ...pageData, home: { ...pageData.home, img: img } })
   }

   const [showModal, setShowModal] = useState(false)
   // console.log(user)

   let navigate = useNavigate()
   useEffect(() => {
      if (!user) {
         navigate('/cleartasks/sign-in')
      }
   }, [user])

   const { pageData, setPageData } = usePageContext()

   return user && (
      <MainGrid>
         <Banner
            icon={pageData?.home?.emojie}
            img={pageData?.home?.img}
            emojieEdit={() => setOpenEmojies(true)}
            imgEdit={() => setOpenImages(true)}
         />
         <ControlledModal isVisible={openEmojies} onClose={() => setOpenEmojies(false)}>
            <EmojiBox>
               {emojies.map(emojie => (
                  <div onClick={() => userSetPageEmojie(emojie)} className='emoji-box' key={emojie}>{emojie}</div>
               ))}
            </EmojiBox>
         </ControlledModal>
         <ControlledModal isVisible={openImages} onClose={() => setOpenImages(false)}>
            <EmojiBox>
               {bannerImgs.map(img => (
                  <div className='emoji-box' key={img}>
                     <img onClick={() => userSetPageImg(img)} src={img} alt="banner wallpaper" />
                  </div>
               ))}
            </EmojiBox>
         </ControlledModal>
         <MainContainer style={mainContainerSize} >
            <div className="paragraph">
               <Flex>
                  <div className="logo">
                     <Logo />
                  </div>
                  <Menu >
                     <Avatar src={user.photoURL || ''} />
                     <p className='custom-text'>{user.displayName || 'no user'}</p>
                     <small className='custom-text'>{user.email || 'no user'}</small>
                     <hr />
                     <Button onClick={() => { setUser(null); navigate('/cleartasks/sign-in') }} color='#472d35' style={{ margin: 0 }}>Log out</Button>
                  </Menu>
               </Flex>
            </div>
            <hr />
            <Button onClick={() => setShowModal(true)}><i className="fa fa-plus" aria-hidden="true"></i></Button>
            <ControlledModal className='modal' isVisible={showModal} onClose={() => setShowModal(false)}>
               <TaskForm userId={user.uid} username={user.email} setShowForm={setShowModal} />
            </ControlledModal>
            <DataLoader url={`${process.env.REACT_APP_MDB}/lists/${user.uid}`} resourseName='tasks'>
               <TasksRenderer />
            </DataLoader>
         </MainContainer>
      </MainGrid >
   )
}

export default Home
