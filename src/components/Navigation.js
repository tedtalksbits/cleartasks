import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useThemeChanger } from '../context/ThemeChanger';
import { useUser } from '../context/UserContext';
import { Avatar } from './Avatar';
import { Flex } from './Flex';
import { Logo } from './Logo';
import { Menu } from './Menu';
import { Button } from './PageComponents';
import styled from 'styled-components';


const ThemeIcon = styled.div`
   background: ${prop => prop.theme.surface1};
   border-radius: 50%;
   margin-left: auto;
   height: 3rem;
   width: 3rem;
   display:grid;
   place-items: center;
   cursor: pointer;
   i{
      font-size: 1.5rem;
   }
`
export const Navigation = () => {
   const { user, setUser } = useUser();
   let navigate = useNavigate()

   useEffect(() => {
      if (!user) {
         navigate('/cleartasks')
      }
   }, [user, navigate])

   const { handleThemeChange, currTheme } = useThemeChanger()
   return (
      <>
         <nav className="paragraph">
            <Flex style={{ marginBottom: '2rem' }} flexWrap='nowrap'>
               <Logo />
               <div className="nav-user-info">
                  <Menu >
                     <ThemeIcon onClick={handleThemeChange} >
                        <i className={currTheme.isDark ? 'fa fa-lightbulb-o' : 'fa fa-moon-o'}></i>
                     </ThemeIcon>
                     <hr />
                     <Flex>
                        <Avatar src={user.photoURL || ''} />
                        <div className="user-info">
                           <p style={{ margin: 0 }}>{user.displayName || 'no user'}</p>
                           <p className='custom-text' style={{ fontSize: '.9rem' }}>{user.email || 'no user'}</p>
                        </div>
                     </Flex>
                     <hr />
                     <Button onClick={() => { setUser(null); navigate('/cleartasks') }} style={{ margin: 0 }}>Log out</Button>
                  </Menu>
               </div>
            </Flex>
         </nav>
      </>
   )
}
