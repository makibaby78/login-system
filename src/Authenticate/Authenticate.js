import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { userRegInfo } from '../features/userReg'
import { useNavigate } from 'react-router-dom'
import Axios from 'axios'
import { Route, Routes } from 'react-router-dom';
import Register from '../Screens/Register/Register'
import Login from '../Screens/Login/Login'
import { loginStatRed } from '../features/loginStatus'

function Authenticate() {
  const userReg = useSelector((state)=>state.userRegReducers.value)
  const navigate = useNavigate()
  const dispatch = useDispatch();

    if(userReg.email!==''||userReg.email!==null){
      Axios.get(`https://login-system-backend.onrender.com/users/email/${userReg.email}/${userReg.password}`).then((response) => {
        if(response.data.matched===true){
            localStorage.setItem('userID', response.data._id)
            dispatch(loginStatRed(true))
            dispatch(userRegInfo({firstname: userReg.firstname, lastname: userReg.lastname, email: userReg.email, password: '',}))
            navigate('/admin')
        }
      });
    }
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