import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'

import LoginPopup from './LoginPopup';

function Login() {
  return (
    <Routes>
        <Route path="/login" element={<LoginPopup />} />
        <Route path='/*' element={<Navigate to="/login" replace />} />
    </Routes>
  )
}

export default Login;
