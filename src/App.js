import React from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { darkTheme } from './theme'
import { useModal } from './context/ModalContext'
import { ModalBackdrop } from './components/ModalBackdrop'
import Home from './pages/Home'
import New from './pages/New'
import Edit from './pages/Edit'


const GlobalStyles = createGlobalStyle`
   body{
      background: ${({ theme }) => theme.surface1};
      color: ${props => props.theme.text1};
      position: relative;
      
   }
   p.custom-text{
      color: ${props => props.theme.text3};
   }
   label.custom-radio{
      display: grid;
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
  
`
const Main = styled.main``
const App = () => {
  const { open, setOpen } = useModal();
  const theme = darkTheme;


  // useEffect(() => {
  //   setModalOverflow(open)
  // }, [open])


  // function setModalOverflow(isModalOpen) {
  //   const body = document.getElementById('body');

  //   if (isModalOpen) {
  //     body.style.overflow = 'hidden';
  //   }
  //   else {
  //     body.style.overflow = '';

  //   }
  // }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Main>
          {open &&
            <ModalBackdrop onClick={() => setOpen(false)} className="modal-backdrop"></ModalBackdrop>
          }
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/new' element={<New />} />
            <Route path='/edit/:id' element={<Edit />} />
          </Routes>
        </Main>
      </Router>
    </ThemeProvider>
  )
}

export default App
