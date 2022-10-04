import React from 'react'
import Admin from './Admin/Admin'
import { Route, Routes } from 'react-router-dom';
import Register from './Register/Register'
import Profile from './Profile/Profile';


function Screens() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/register" element={<Register />} />
            <Route path="/admin" element={<Admin />} />
        </Routes>
    </div>
  )
}

export default Screens