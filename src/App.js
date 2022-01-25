import React from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Edit from './pages/Edit'
import { Signin } from './pages/Signin'
import { Signup } from './pages/Signup'
import { Tasks } from './pages/Tasks'
import { NotFound } from './pages/NotFound'
import { useThemeChanger } from './context/ThemeChanger'


const GlobalStyles = createGlobalStyle`
   body{
      background: ${({ theme }) => theme.surface1};
      color: ${props => props.theme.text1};
      position: relative;
      
   }
   p.custom-text{
      color: ${props => props.theme.text3};
   }
   .radios span, .radios i{

    color: ${props => props.theme.text3};
   }
   label.custom-radio{
     cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
      grid-template-columns: 5rem .6fr;
      gap: 1rem;
      margin-bottom: 1rem;
      padding: .4rem;
      border-radius: 5px;
      background: ${props => props.theme.surface3};
      > input{
        block-size: 1.2rem;
        inline-size: 2rem;
      }
   }
   a{
     color: ${props => props.theme.text1};
   }
   .nav-icon{
     font-size: 2rem;
   }
  
`
const Main = styled.main``
const App = () => {
  const { currTheme } = useThemeChanger()
  return (
    <ThemeProvider theme={currTheme}>
      <GlobalStyles />
      <Router >
        <Main>
          <Routes>
            <Route exact path='/cleartasks' element={<Home />} />
            <Route path='/cleartasks/tasks/:_id' element={<Tasks />} />
            <Route path='/cleartasks/edit/:id/:taskId' element={<Edit />} />
            <Route path='/cleartasks/sign-in' element={<Signin />} />
            <Route path='/cleartasks/sign-up' element={<Signup />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Main>
      </Router>
    </ThemeProvider>
  )
}

export default App
