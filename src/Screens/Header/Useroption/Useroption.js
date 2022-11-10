import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { loginStatRed } from '../../../features/loginStatus'
import { useNavigate } from 'react-router-dom'
import { userRegInfo } from '../../../features/userReg'
import { useDispatch } from 'react-redux'
import Axios from 'axios'
import { FaUserAlt, FaSignOutAlt } from 'react-icons/fa'
import './useroption.css'

function Useroption() {
  const userReg = useSelector((state)=>state.userRegReducers.value)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(()=>{
      const userId = localStorage.getItem('userID')
      Axios.get(`https://login-system-backend.onrender.com/users/${userId}`).then((response)=>{
        dispatch(userRegInfo({firstname: response.data.firstname, lastname: response.data.lastname, email: response.data.email, password: '',}))
      })
  },[])
  
  function Logout(){
      dispatch(userRegInfo({}))
      localStorage.removeItem('userID')
      dispatch(loginStatRed(false))
      navigate('/login')
      console.log("logged out")
  }    
  return (
    <div>
      <div className='ouo-p-n'>
        <Link to="/profile" className='link-style-2'>
          <div className='uo-hov-eff uo-p-n mb-5'>
            <FaUserAlt/><span>{userReg.firstname} {userReg.lastname}</span>
          </div>
        </Link>
        <div className='divider' />
      </div>
      <div className='uo-hov-eff logout-w' onClick={()=>Logout()}>
        <FaSignOutAlt /><span className='fc-1'>Logout</span>
      </div>
    </div>
  )
}

export default Useroption