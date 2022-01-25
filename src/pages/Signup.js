import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../components/Banner'
import { Button, MainContainer, MainGrid } from '../components/PageComponents'
import { UserForm } from './Signin'

export const Signup = () => {
   return (
      <MainGrid>
         <Banner icon='🥳' img='https://i.redd.it/f1bc6p6wx2b81.png' />
         <MainContainer >
            <div className="paragraph">
               <h1 className="custom-heading">Create new account</h1>
            </div>
            <hr />
            <UserForm onSubmit={e => e.preventDefault()} >
               <h1 className="heading">Welcome to cleartasks!</h1>
               <Button><i className="fa fa-google" aria-hidden="true"></i> Sign up with google</Button>
               <hr />
               <p className="custom-text">Already a user? <Link to='/cleartasks/sign-in'>
                  Sign in
               </Link>
               </p>
            </UserForm>
         </MainContainer>
      </MainGrid>
   )
}
