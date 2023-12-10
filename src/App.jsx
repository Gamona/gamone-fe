import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import RegisterPengacara from './pages/RegisterPengacara'
import LoginPengacara from './pages/LoginPengacara'

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/register',
      element: <Register />
    },
    {
      path: '/register/pengacara',
      element: <RegisterPengacara />
    },
    {
      path: '/login/pengacara',
      element: <LoginPengacara />
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App
