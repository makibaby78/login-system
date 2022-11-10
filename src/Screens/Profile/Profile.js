import React from 'react'
import { useSelector } from 'react-redux'
import Leftbar from '../Components/Leftbar/Leftbar'
import Header from '../Header/Header'
import { FaCamera, FaPlusCircle, FaPen } from 'react-icons/fa'
import './profile.css'

function Profile() {
  const userReg = useSelector((state)=>state.userRegReducers.value)
  return (
    <div className='profile-wrapper mt-60'>
      <Header />
      <Leftbar />
      <div className='prof-content-wrapper'>
        <div className='pcw-inner'>
          <div className='pcw-first-sec'>
            <div className='pw-cover-sec'>
              <div className='pw-cc-holder'>
                <img  className='cover-photo' src='https://scontent.fceb1-2.fna.fbcdn.net/v/t1.6435-9/68925263_2629934307025339_3304169764456235008_n.jpg?stp=dst-jpg_p720x720&_nc_cat=110&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeGOL4J5ss7i7AC711vvit_LGxw0tKGNdIobHDS0oY10iukDn7dNR8qWcxDZivXgwb0nDgSHSi1jM8_vAXkKDa5L&_nc_ohc=QVriiIg7kTUAX-Tq9HX&_nc_ht=scontent.fceb1-2.fna&oh=00_AfA0EpTYGTTVssTXBQJ9G7HVfJ-jCkHakMdSoj-zjRBPkA&oe=63949252' alt='cover' />
                <div className='btn-ecp'><FaCamera /><span>Edit cover photo</span></div>
              </div>
            </div>
            <div className='pw-details-sec'>
              <div className='pds-left'>
                <div className='pl-photo-wrapper'>
                  <img src='https://scontent.fceb1-3.fna.fbcdn.net/v/t39.30808-1/293964224_5567446213274119_3760987239676715529_n.jpg?stp=dst-jpg_s200x200&_nc_cat=104&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeEM4omgF1abluP8TtJATctf_qll5TGTUlr-qWXlMZNSWmi8C_gvGdpzS_ba-Bq6IAHAecMBxCa0j37rLOYnjC0x&_nc_ohc=NaiEbl2CHx0AX9SJMKb&_nc_ht=scontent.fceb1-3.fna&oh=00_AfDFKeQ3kQQ2HNfF2LBCH9iN-eU498WCCfWn17USgi9Dbw&oe=6371C5E5' alt='profile' width='100%' />
                  <FaCamera />
                </div>
                <div className='pl-name'>
                  <h2 className='fb'>{userReg.firstname} {userReg.lastname}</h2>
                </div>
              </div>
              <div className='pds-right'>
                <button><FaPlusCircle /> Add to story</button>
                <button><FaPen /> Edit profile</button>
              </div>
            </div>
          </div>
          <div className='content-sec'>
            test
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile