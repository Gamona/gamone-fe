import React, { useEffect, useState } from 'react'
import { RouterProvider, createBrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import RegisterPengacara from './pages/RegisterPengacara'
import LoginPengacara from './pages/LoginPengacara'
import Chats from './pages/Chats'
import ChatsLawyer from './pages/ChatLawyer'
import { PrivateRoutes, PublicRoutes } from './route'

const App = () => {

  const [status, setStatus] = useState(false)

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('token'));
    if(items) {
      setStatus(true) 
    }
  }, [])

  return (
        <Routes>
        {
          status
               ? <Route path="/*" element={<PrivateRoutes />} />
               : <Route path="/*" element={<PublicRoutes />} />
        }

          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
  )
}

export default App
