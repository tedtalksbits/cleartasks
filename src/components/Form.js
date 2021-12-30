import styled, { css } from "styled-components";
import React from 'react'

const inputStyles = css`

   width: 100%;
   border: none;
   padding: .75rem;
   border-radius: 5px;
   border: none;
   font-size: 1.2rem;
   font-family: 'Poppins',
      sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   color: ${props => props.theme.text1};
   background: ${({ theme }) => theme.surface3};

   :hover{
      background: ${({ theme }) => theme.surface3};
      border-radius: 5px;
      outline: ${({ theme }) => theme.brand} 1px solid;
   }
   :focus, :active{
      background: ${({ theme }) => theme.surface3};
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      border-radius: 5px;
      outline: ${({ theme }) => theme.brand} 1px solid;
   }
`
export const Form = styled.form`
   margin: 2rem 0;
   border-radius: 5px;
   padding: 1rem 1.5rem;
   background: ${props => props.theme.surface2};

   :focus-within{
      box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 24px;
   }
   .form-heading{
      padding: 1rem 1rem 0;
      color: ${props => props.theme.text3};
   }

   
`
const FFContainer = styled.fieldset`
   gap: 1rem;
   padding: 0;
   border: none;
   display: flex;
   margin-bottom: 24px;
   align-items: baseline;
   justify-content: space-between;

   >:first-child{
      min-width: 15%;
   }
   >:last-child{
      max-width: 85%;
   }
   @media screen and (max-width: 640px ){
      flex-direction: column;
      margin-bottom: 28px;

      >:first-child{
         min-width: 100%;
      }
      >:last-child{
         min-width: 100%;
      }
   }
`

const IconAndTitle = styled.div`
   color: ${props => props.theme.text3};

   >:first-child{
      margin-right: .5rem;
   }
   display: flex;
   align-items: center;

   .field-title{
      margin: 0;
   }

`
export const Input = styled.input`

   ${inputStyles};
   
`
export const TextArea = styled.textarea`
   width: 100%;
   border: none;
   ${inputStyles};
`



export const Select = styled.select`
   width: 13rem;
   padding: 12px;
   color: ${props => props.theme.text1};
   background: ${props => props.theme.surface3};
   border: 1px solid ${props => props.theme.text1};;
   border-radius: 5px;
   font-size: 1.2rem;
`

const FormField = ({ icon, title, children }) => {
   return (
      <FFContainer className="form__field">
         <IconAndTitle className="field">
            {icon}
            <label style={{ cursor: 'pointer' }} htmlFor={title} className="field-title">{title}</label>
         </IconAndTitle>
         {children}
      </FFContainer>
   )
}

export default FormField

