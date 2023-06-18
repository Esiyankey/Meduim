import { useState } from "react";

import { LandingPage } from "./components/LandingPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomePage } from "./components/HomePage";

function App() {

 const router = createBrowserRouter([
    {
      path:"/",
      element: <LandingPage />
    },
    {
      path:"/home",
      element: <HomePage/>
    },

  ])
  return (
    <>

      <RouterProvider router={router}/>
       
      
      
    </>
  );
}

export default App;
