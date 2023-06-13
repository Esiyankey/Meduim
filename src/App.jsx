import { useState } from 'react';
import { HomePage } from './components/HomePage';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import { LoginPage } from './components/LoginPage';
import { SignUpPage } from './components/SignUpPage';


function App() {
  

  const router = createBrowserRouter([

{
  path:"/",
  element: <HomePage/>,
  children:[
    {
      path:"/login",
      element:<LoginPage/>,
      children:[
        {
          path:"/login/signup",
          element:<SignUpPage/>,
        }
      ]
    }
  ]
}
  ])

 
    
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
