import React, { useEffect } from 'react'
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

  useEffect(() => {
    const userId = localStorage.getItem('userID')
    if(userId!==null||userId!==''){
      Axios.get(`https://login-system-backend.onrender.com/users/${userId}`).then((response)=>{
        dispatch(userRegInfo({firstname: response.data.firstname, lastname: response.data.lastname, email: response.data.email, password: '',}))
        dispatch(loginStatRed(true))
        navigate('/home')
      })
    }

    if(userReg.email!==''||userReg.email!==null||userReg.password!==''||userReg.password!==null){
      Axios.get(`https://login-system-backend.onrender.com/users/email/${userReg.email}/${userReg.password}`).then((response) => {
        if(response.data.matched===true){
            localStorage.setItem('userID', response.data._id)
            dispatch(loginStatRed(true))
            dispatch(userRegInfo({firstname: userReg.firstname, lastname: userReg.lastname, email: userReg.email, password: '',}))
            navigate('/home')
        }
        return console.log('process authenticated');
      });
    }
  },[])
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