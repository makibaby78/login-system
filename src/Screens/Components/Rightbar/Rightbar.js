import React from 'react'
import './rightbar.css'
import { FaVideo, FaSearch, FaRegCommentDots } from 'react-icons/fa'

function Rightbar() {
    
  return (
    <div className='hc-right mp-10'>
        <div className='hcr-cw'>
            <div className='hcr-title'>
                <span className='fb'>Contacts</span>
                <div className='hcr-icons'>
                    <FaVideo /><FaSearch/><FaRegCommentDots />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Rightbar