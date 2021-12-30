import React from 'react'
import Banner from '../components/Banner'
import { MainContainer, MainGrid } from '../components/PageComponents'
import TodoList from '../components/TodoList'

const Home = () => {
   return (
      <MainGrid>
         <Banner icon='🛖' img='https://i.redd.it/1a9uuu8287281.jpg' />
         <MainContainer style={{ minBlockSize: '100vh' }}>
            <div className="paragraph">
               <h1 className="custom-heading">✔️ Taskify</h1>
               <p className="custom-text">All your todos!</p>
            </div>
            <TodoList />
         </MainContainer>
      </MainGrid>
   )
}

export default Home
