import React, { useState } from 'react'
import logo from '../assets/logo.png';
import Btn from './Btn';
import { MdMenu } from "react-icons/md";
import { HiX } from "react-icons/hi";


const NavBar = () => {

    const [show, setShow] = useState(false)
    return (
        <>
            <nav className='py-6 bg-white/10 absolute top-0 left-0 w-full z-50'>
                <div className="container">
                    <div className="flex justify-between items-center px-10 lg:px-0 ">
                        <img src={logo} alt="" />
                        <ul className='font-medium text-white lg:flex gap-12 hidden '>
                            <li><a href="">Home</a></li>
                            <li><a href="">About Us</a></li>
                            <li><a href="">Schedule</a></li>
                            <li><a href="">Blog</a></li>
                            <li><a href="">Pages</a></li>
                        </ul>
                        <div className='hidden lg:block'>
                            <Btn>Join the Conference</Btn>
                        </div>
                        <button
                            type='button'
                            onClick={() => setShow(!show)}
                            className='lg:hidden text-white text-4xl'
                        >
                            {
                                show ? <HiX /> : <MdMenu />


                            }

                        </button>
                    </div>
                    <div className={`absolute top-full w-full text-center py-4 left-0 cursor-pointer transition-all duration-200 overflow-hidden bg-[#0F152D]/80 backdrop-blur-md ${show
                        ? 'opacity-100 translate-y-0 scale-100 py-6'
                        : 'opacity-0 -translate-y-4 scale-95 pointer-events-none'
                        }`}>
                        <ul className='font-medium text-white flex flex-col gap-6 mb-10'>
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
