import React from 'react'
import icon_2 from '../assets/icon_2.svg';
import button from '../assets/Button.svg';
import logo from '../assets/logo.png';
import { FaPinterestP } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const Footer = () => {
    return (
        <>
            <footer className='py-25 bg-[radial-gradient(circle_at_top,#47348C_0%,#161A2D_70%)]'>
                <div className="container">
                    <div className='flex justify-between'>
                        <h2 className='text-[48px] font-semibold text-white  w-170.75 leading-[52.8px] tracking-[-0.96px]'>Join our newsletter for event
                            important announcement</h2>
                        <div>
                            <div className='flex items-center gap-3'>
                                <div className='bg-white/10 p-3.5 rounded-full'>
                                    <img src={icon_2} alt="" />
                                </div>
                                <p className='p-text text-white w-100'>Stay informed with instant updates delivered straight to
                                    your inbox.</p>
                            </div>
                            <div className='w-105 h-4 rounded-[20px] bg-white/10 flex justify-end items-center mt-5 py-8 pr-2'>
                                <img src={button} alt="" />
                            </div>
                        </div>
                    </div>
                    <hr className='border border-white/10  my-20' />
                    <div className='flex justify-between'>
                        <div>
                            <div>
                                <img src={logo} alt="" />
                            </div>
                            <p className='p-text text-white w-85 mt-8 mb-10.5'>Experience a world-class conference designed
                                to inspire innovation, empower professionals,
                                and connect leaders from around the globe.</p>
                            <div className='flex gap-3.75 mt-10'>
                                <div className='w-9 h-9 rounded-full border-2 border-white flex items-center justify-center'>
                                    <FaPinterestP className='text-white text-lg' />
                                </div>
                                <div className='w-9 h-9 rounded-full border-2 border-white flex items-center justify-center'>
                                    <FaPinterestP className='text-white text-lg'/>
                                </div>
                                <div className='w-9 h-9 rounded-full border-2 border-white flex items-center justify-center'>
                                    <FaFacebookF className='text-white text-lg'/>
                                </div>
                                <div className='w-9 h-9 rounded-full border-2 border-white flex items-center justify-center'>
                                    <FaInstagram className='text-white text-lg'/>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className='text-white text-[20px] font-semibold'>Quick Links</h3>
                            <ul className='p-text text-white/80 space-y-3.5 mt-7.5'>
                                <li>Home</li>
                                <li>About Us</li>
                                <li>Speakers</li>
                                <li>Events</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className='text-white text-[20px] font-semibold'>Schedules </h3>
                            <ul className='p-text text-white/80 space-y-3.5 mt-7.5'>
                                <li>Event Management</li>
                                <li>Live Streaming</li>
                                <li>Virtual Event Setup</li>
                                <li>Keynote Sessions</li>
                                <li>Networking Programs</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className='text-white text-[20px] font-semibold'>Get In Touch</h3>
                            <ul className='p-text text-white/80 space-y-3.5 mt-7.5'>
                                <li>+00 123 456 789</li>
                                <li>support@domainname.com</li>
                                <hr className='border border-white/10 my-7' />
                                <p>45/2 Central Business Innovation <span className='block'>Near International Trade Tower</span>
                                </p>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer >


        </>
    )
}

export default Footer
