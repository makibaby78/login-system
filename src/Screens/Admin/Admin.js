import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { loginStatRed } from '../../features/loginStatus'
import { userRegInfo } from '../../features/userReg'
import { useNavigate } from 'react-router-dom'
import Axios from 'axios';

function Admin() {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const [userName, setUserName] = useState([])
    const [loggedname, setLoggedname] = useState('')
    const apiLink = 'https://login-system-backend.onrender.com'
    const userID = localStorage.getItem('userID')

    useEffect(()=>{
        Axios.get(`${apiLink}/users`).then((response)=>{
            setUserName(response.data);
        })

        Axios.get(`${apiLink}/users/${userID}`).then((response)=>{
            setLoggedname(response.data.firstname)
        })
    })


    function Logout(){
        dispatch(userRegInfo({}))
        localStorage.removeItem('userID')
        dispatch(loginStatRed(false))
        navigate('/login')
    }      
    
  return (
    <div> 
    <button  onClick={()=>Logout()}>Logout</button>
    <h3>Welcome {loggedname}</h3> 
    <h5>names</h5>
    {userName.map((val, index)=>{
          return(
              <div className='monggo-val-wrapper' key={index}>
                  <h4>{val.name} test</h4>
              </div>
          )
      })}</div>
  )
}

export default Admin