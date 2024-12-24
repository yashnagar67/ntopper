import { useState } from 'react'
import Course from './Components/Course'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Navbar from './Components/Navbar'
import Dashboard from './Components/dashboard'
import Login from './Components/Login'
import viteLogo from '/vite.svg'


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Navbar />
          <Dashboard />
          
        </>
      ),
    },
    {
      path: '/login',
      element: (
        <>
          <Navbar />
          <Login />
          

        </>
      ),
    },
    {
      path: '/Course',
      element: (
        <>
          <Navbar />
          <Course/>
          

        </>
      ),
    },
   
  ]);
  

  return (
    <> <RouterProvider router={router} />
    
    </>
  )
}

export default App
