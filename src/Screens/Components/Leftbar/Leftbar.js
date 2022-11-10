import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { FaUserAlt, FaHome } from 'react-icons/fa'
import './leftbar.css'

function Leftbar() {
    const userReg = useSelector((state)=>state.userRegReducers.value)
    const leftbarStatus = useSelector((state)=>state.leftbarStatusReducers.value)

  return (
    <div className={`hc-left ${leftbarStatus}`} >
        <div className='hcl-cw pt-10'>
            <Link to="/home" className='link-style-2'>
                <div className='uo-hov-eff uo-p-n mb-5'>
                    <FaHome /><span>Home</span>
                </div>
            </Link>
            <Link to="/profile" className='link-style-2'>
                <div className='uo-hov-eff uo-p-n mb-5'>
                    <FaUserAlt/><span>{userReg.firstname} {userReg.lastname}</span>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default Leftbar