import { Navigate, Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Homepage from '../pages/Homepage';
import Chats from '../pages/Chats';

export const PublicRoutes = () => {
  return (
      <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
  );
};

export const PrivateRoutes = () => {
  return (
      <Routes>
          <Route path='/chats' element={<Chats />} />
          <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
  );
};