import React, { useEffect, useState } from 'react'
import { RouterProvider, createBrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { PrivateRoutes, PublicRoutes } from './route'
import { useSelector } from 'react-redux';


const App = () => {
  const tokenizer = useSelector(state => state.tokenReducer.tokenizer);
  const [status, setStatus] = useState(false)

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('token'));
    if(items) {
      setStatus(true) 
    }
  }, [tokenizer])

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
