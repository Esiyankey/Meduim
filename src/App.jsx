import { useState } from "react";

import { LandingPage } from "./components/LandingPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { WritePage } from "./components/WritePage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/home",
      element: <HomePage />,
    },
    {
      path:"/write",
      element:<WritePage/>,
    },
  ]);
  return (
    <>
      
        <RouterProvider router={router} />
    </>
  );
}

export default App;
