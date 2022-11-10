import React, { useState } from 'react';
import { FaSearch, FaFacebookMessenger, FaBell, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import Useroption from './Useroption/Useroption'
import './header.css'

function Admin() {
    const [hide, setHide] = useState("hide");
    const themeToggler = () => {
        hide === "show" ? setHide("hide") : setHide("show");
    };
    
  return (
    <div className='admin-wrapper'> 
        <div className='header-wrapper'>
                <Link to="/home" className='link-style'><span className='logo'>mackybook</span></Link>
            <div className='search-box'>
                <FaSearch/><input type="text" placeholder="Search.." name="search" />
            </div>
            <div className='features'>
                <FaFacebookMessenger />
                <FaBell />
                <FaUserAlt onClick={()=>themeToggler()}/>
            </div>
            <div className={`useroption-wrapper ${hide}`}>
                <Useroption/>
            </div>
        </div>
    </div>
  )
}

export default Admin