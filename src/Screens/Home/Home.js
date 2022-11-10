import React from 'react'
import Leftbar from '../Components/Leftbar/Leftbar';
import Rightbar from '../Components/Rightbar/Rightbar';
import Header from '../Header/Header'
import './home.css';

function Home() {
  return (
    <div className='home-wrapper mt-60'>
        <Header />
        <div className='home-content-wrapper'>
            <Leftbar />
            <div className='hc-center'></div>
            <Rightbar />
        </div>
    </div>
  )
}

export default Home