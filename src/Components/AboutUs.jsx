import React from 'react'
import about_img from '../assets/about_img.png';
import years from '../assets/years.png';
import certificate from '../assets/certificate.png';
import bg_2 from '../assets/bg-2.svg';
import bg_1 from '../assets/bg-1.svg';
import call from '../assets/call.svg';
import Heading from './Heading';
import Btn from './Btn';

const AboutUs = () => {
    return (
        <>
            <section className='py-25'>
                <div className="container">
                    <div className='flex flex-col lg:flex-row justify-between px-10 lg:px-0'>
                        <div className='relative  '>
                            <img src={about_img} alt="" className='w-full' />
                            <img src={years} alt="" className='absolute lg:bottom-10 lg:right-60 w-40 lg:w-auto right-25 -bottom-33 ' />
                            <img src={certificate} alt="" className='absolute lg:top-0 lg:left-66 sm:w-70 sm:h-50 w-50 top-40 -right-20 lg:w-auto lg:h-auto  ' />
                        </div>
                        <div>
                            <div className='lg:mt-0 mt-40'>
                                <Heading
                                    subtitle='About Us'
                                    title='Uncover our mission & purpose
                                    behind this event'
                                />
                                <p className='p-text lg:w-165.75 lg:mx-0 mx-auto text-center lg:text-left
                             w-120 mt-5'>Discover the vision that drives this event—a commitment to bringing together innovators,
                                    leaders, and changemakers to share knowledge, spark inspiration, and create meaningful
                                    connections.</p>
                            </div>
                            <div className='lg:w-180 w-full bg-[#F6F6F7] h-20 rounded-[20px] p-2.5 lg:flex-row flex flex-col justify-between items-center text-primary font-bold my-10 gap-6 lg:gap-0 '>
                                <button className='py-5 px-15 lg:w-auto w-full hover:bg-white rounded-[10px] transition-all duration-300 ease-linear lg:bg-transparent'>Our Mission</button>
                                <button className=' py-5 px-15 bg-[#F6F6F7] lg:w-auto w-full hover:bg-white rounded-[10px] transition-all duration-300 ease-linear lg:bg-transparent'>Our Vision</button>
                                <button className='py-5 px-15 lg:w-auto w-full bg-[#F6F6F7] hover:bg-white rounded-[10px] transition-all duration-300 ease-linear lg:bg-transparent'>Our Goal</button>
                            </div>
                            <p className='p-text lg:w-178.75 lg:mx-0 mx-auto text-center lg:text-left mt-50 lg:mt-0'>Our vision is to build a global community where collaboration fuels innovation we aim encourage
                                fresh thinking, spark inspiring dialogues, and create a space.</p>
                            <div className='lg:flex lg:justify-between  items-center my-10'>
                                <div className='flex items-center gap-3.75'>
                                    <img src={bg_2} alt="" />
                                    <h5 className='font-bold text-primary text-[20px] w-55 text-nowrap lg:text-wrap'>Receive real-time event
                                        updates.</h5>
                                </div>
                                <div className='flex items-center gap-3.75 mt-10 lg:mt-0'>
                                    <img src={bg_1} alt="" />
                                    <h5 className='font-bold text-primary text-[20px] w-55 text-nowrap lg:text-wrap'>Receive real-time event
                                        updates.</h5>
                                </div>
                            </div>
                            <div className='lg:flex-row flex flex-col gap-7.5 '>
                                <Btn>Learn More About</Btn>
                                <div className='flex items-center gap-2  lg:justify-start'>
                                    <img src={call} alt="" />
                                    <div>
                                        <h6>Call Now!</h6>
                                        <p className='text'>+00 123 456 789</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default AboutUs
