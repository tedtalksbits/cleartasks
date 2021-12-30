import React from 'react'

const Container = styled.article`
   visibility: ${({ when }) => when ? 'visible' : 'hidden'};
   background: ${props => props.theme.surface4};
   display: block;
   padding: 1rem;
   border-radius: 5px;
   box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
   border: ${props => props.theme.surface4} 1px solid;
   backdrop-filter: blur(20px);
   animation: ${({ when }) => when ? 'fadeInLeft' : 'fadeOutRight'} .3s linear;
   transition: visibility .3s;
   animation-fill-mode: both;
   height: max-content;
   overflow: hidden;

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
   .message{
      padding-bottom: .4rem;
      margin-bottom: 5px;
      color: ${({ theme }) => theme.text1};
      display: flex;
      gap: .4rem;
      align-items: center;
    
   }
   .content{
      height: ${({ when }) => when ? '9rem' : '0'};
      transition: height .3s linear;
   }

   @keyframes fadeInLeft {
      from {
         opacity: 0;
         transform: translate3d(50%, 0, 0);
      }
      to {
         opacity: 1;
         transform: none;
      }
   }
   @keyframes fadeOutRight {
      from {
         opacity: 1;
      }
      to {
         opacity: 0;
         transform: translate3d(50%, 0, 0);
      }
   }

`
const Box = ({ children, message, type, when }) => {
   const icons = {
      "success": <i className="fa fa-check-square" aria-hidden="true"></i>,
      "danger": <i className="fa fa-window-close" aria-hidden="true"></i>,
      "warning": <i className='fa fa-exclamation-triangle' />
   }
   return (
      <Container className={type} when={when}>
         <div when={when} className="content">

            <div className="message">
               {icons[type]}
               {message}
            </div>

            <hr />

            {children}
         </div>
      </Container>
   )
}

export default Box
