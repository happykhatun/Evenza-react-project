import React from 'react'
import logo from '../assets/logo.png';
import Btn from './Btn';

const NavBar = () => {
  return (
    <>
    <nav className='py-6 bg-white/10 absolute top-0 left-0 w-full z-2'>
        <div className="container">
            <div className="flex justify-between items-center">
                <img src={logo} alt="" />
                <ul className='font-medium text-white flex gap-12'>
                    <li><a href="">Home</a></li>
                    <li><a href="">About Us</a></li>
                    <li><a href="">Schedule</a></li>
                    <li><a href="">Blog</a></li>
                    <li><a href="">Pages</a></li>
                </ul>
                <Btn>Join the Conference</Btn>
            </div>
        </div>
    </nav>
      
    </>
  )
}

export default NavBar
