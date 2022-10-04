import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Register from '../Screens/Register/Register'
import Login from '../Screens/Login/Login'

function Authenticate() {
  return (
    <div>
        <Routes>
            <Route path="*" element={<Login />}/>
            <Route path="/register" element={<Register />}/>
            <Route path="/login" element={<Login />}/>
        </Routes>
    </div>
  )
}

export default Authenticate