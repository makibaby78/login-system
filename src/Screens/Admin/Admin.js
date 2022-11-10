import React, { useState, useEffect } from 'react';
import { FaSearch, FaFacebookMessenger, FaBell, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import Useroption from './Useroption/Useroption'
import Axios from 'axios';
import './Admin.css'

function Admin() {
    const [userName, setUserName] = useState([])
    const [userOptStat, setUserOptStat] = useState(false)
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
  
    
  return (
    <div className='admin-wrapper'> 
        <div className='header-wrapper'>
                <Link to="/profile" className='link-style'><span className='logo'>mackybook</span></Link>
            <div className='search-box'>
                <FaSearch/><input type="text" placeholder="Search.." name="search" />
            </div>
            <div className='features'>
                <FaFacebookMessenger />
                <FaBell />
                <FaUserAlt onClick={()=>{userOptStat ? setUserOptStat(false) : setUserOptStat(true)}}/>
            </div>
            {userOptStat ? <Useroption/> : ''}
        </div>
        <div className='admin-content-wrapper'>
            <h3>Welcome {loggedname}</h3> 
            <h5>names</h5>
            {userName.map((val, index)=>{
                return(
                    <div className='monggo-val-wrapper' key={index}>
                        <h4>{val.name} test</h4>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Admin