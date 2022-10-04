import React from 'react'
import Admin from './Admin/Admin'
import { Route, Routes } from 'react-router-dom';
import Profile from './Profile/Profile';


function Screens() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="*" element={<Profile />} />
            <Route path="/admin" element={<Admin />} />
        </Routes>
    </div>
  )
}

export default Screens