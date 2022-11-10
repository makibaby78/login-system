import React from 'react'
import Home from './Home/Home'
import { Route, Routes } from 'react-router-dom';
import Profile from './Profile/Profile';


function Screens() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
    </div>
  )
}

export default Screens