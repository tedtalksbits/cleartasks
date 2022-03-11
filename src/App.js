import React from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import { Tasks } from "./pages/Tasks";
import { useThemeChanger } from "./context/ThemeChanger";
import { HashRouter, Route, Routes } from "react-router-dom";
import { darkTheme, lightTheme } from "./theme";
import Nav from "./components/Nav";
import SplitView from "./components/SplitView";

const GlobalStyles = createGlobalStyle`
   html{
      font-size: 14px;
   }
   body{
      background: ${({ theme }) => theme.surface1};
      color: ${(props) => props.theme.text1};
      position: relative;
   }
   p,h1,h2,h3,small{
      line-height: 1.4;
   }
   /*
      ========================================
      Icon
      ========================================
   */
   i.ml-5 {
      margin-left: 5px;
   }
   i.mr-5 {
      margin-right: 5px;
   }
   p.custom-text{
      color: ${(props) => props.theme.text3};
   }
   .radios span, .radios i{

    color: ${(props) => props.theme.text3};
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
      background: ${(props) => props.theme.surface3};
      > input{
        block-size: 1.2rem;
        inline-size: 2rem;
      }
   }
   a{
     color: ${(props) => props.theme.text1};
   }
   .nav-icon{
     font-size: 2rem;
   }
  
`;
const Main = styled.main``;
const App = () => {
   const { themeIsDark } = useThemeChanger();
   return (
      <ThemeProvider theme={themeIsDark ? darkTheme : lightTheme}>
         <GlobalStyles />

         <Main>
            <HashRouter hashaType="slash">
               <Routes>
                  <Route path="/cleartasks" element={<Home />} />
                  <Route
                     path="/cleartasks/tasks/:_id/:name"
                     element={<Tasks />}
                  />
                  <Route
                     path="/cleartasks/edit/:id/:taskId"
                     element={<Edit />}
                  />
               </Routes>
            </HashRouter>
         </Main>
      </ThemeProvider>
   );
};

export default App;
