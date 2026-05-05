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
                    <div className='flex justify-between'>
                        <div className='relative '>
                            <img src={about_img} alt="" />
                            <img src={years} alt="" className='absolute bottom-10 right-60' />
                            <img src={certificate} alt="" className='absolute top-0 left-66' />
                        </div>
                        <div>
                            <Heading
                                subtitle='About Us'
                                title='Uncover our mission & purpose
                            behind this event'
                            />
                            <p className='p-text w-165.75 mt-5'>Discover the vision that drives this event—a commitment to bringing together innovators,
                                leaders, and changemakers to share knowledge, spark inspiration, and create meaningful
                                connections.</p>
                            <div className='w-180 bg-[#F6F6F7] h-20 rounded-[20px] p-2.5 flex justify-between items-center text-primary font-bold my-10 '>
                                <button className='py-5 px-15 hover:bg-white rounded-[10px] transition-all duration-300 ease-linear'>Our Mission</button>
                                <button className='py-5 px-15 hover:bg-white rounded-[10px] transition-all duration-300 ease-linear'>Our Vision</button>
                                <button className='py-5 px-15 hover:bg-white rounded-[10px] transition-all duration-300 ease-linear'>Our Goal</button>
                            </div>
                            <p className='p-text w-178.75'>Our vision is to build a global community where collaboration fuels innovation we aim encourage
                                fresh thinking, spark inspiring dialogues, and create a space.</p>
                            <div className='flex justify-between items-center my-10'>
                                <div className='flex items-center gap-3.75'>
                                    <img src={bg_2} alt="" />
                                    <h5 className='font-bold text-primary text-[20px] w-55'>Receive real-time event
                                        updates.</h5>
                                </div>
                                <div className='flex items-center gap-3.75'>
                                    <img src={bg_1} alt="" />
                                    <h5 className='font-bold text-primary text-[20px] w-55'>Receive real-time event
                                        updates.</h5>
                                </div>
                            </div>
                            <div className='flex gap-7.5'>
                                <Btn>Learn More About</Btn>
                                <div className='flex items-center gap-2'>
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
