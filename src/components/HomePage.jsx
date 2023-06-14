import React from 'react'
import { LoginPage } from './LoginPage'
import { SignUpPage } from './SignUpPage'

export const HomePage = () => {
  return (
    <div><h1>Hello this is the home page</h1>
    
    {/* <LoginPage/> */}
    <SignUpPage/>
    </div>
  )
}
