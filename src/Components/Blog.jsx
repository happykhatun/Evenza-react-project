import React from 'react'
import Heading from './Heading'
import link1 from '../assets/Link1.png';
import link2 from '../assets/Link2.png';
import link3 from '../assets/Link3.png';
import { CgProfile } from "react-icons/cg";

const Blog = () => {
    return (
        <>
            <section className='py-25'>
                <div className="container">
                    <div>
                        <Heading
                            subtitle='Latest Blog'
                            title='Explore our latest insights stories
                        and updates'
                            className='mx-auto text-center'
                            align="justify-center"
                        />
                    </div>
                    <div className='flex justify-between mt-20'>
                        <div className='bg-[#F6F6F7] rounded-[20px] w-180 p-2.5'>
                            <img src={link1} alt="" />
                            <div className='p-10'>
                                <div className='flex gap-3 mb-5'>
                                    <CgProfile className='text-purple text-[20px]' />
                                    <h5 className='font-normal text-gray'>Esther Howard</h5>
                                </div>
                                <h3 className='font-bold text-[20px] text-primary leading-7'>Mastering Public Speaking: Expert Tips for Confident
                                    Presentations</h3>
                                <p className='font-normal text-gray leading-[25.6px] mt-3.5 mb-7.5'>Improve your communication skills with proven techniques used by world-class
                                    speakers to captivate and inspire audiences.</p>
                                <div className='w-full h-px bg-primary/10 mb-7.5'></div>
                                <a href="" className='font-bold text-purple flex items-center gap-3'>Read More  <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.7545 5.11709C12.6385 5.11705 10.7101 3.10912 10.7101 0.90408V1.00136e-05L8.97425 0V0.90408C8.97425 2.5079 9.64945 4.01229 10.7092 5.11705L0 5.11707L1.00136e-05 6.92522L10.7093 6.92526C9.64945 8.03002 8.97415 9.53442 8.97425 11.1382V12.0423L10.7101 12.0422V11.1382C10.71 8.93322 12.6385 6.92526 14.7545 6.92524L15.6225 6.92525V5.1171L14.7545 5.11709Z" fill="#734BDF" />
                                </svg>
                                </a>
                            </div>
                        </div>
                        <div className='space-y-7.5'>
                            <div className='bg-[#F6F6F7] rounded-[20px] w-180 p-2.5 flex'>
                                <img src={link2} alt="" />
                                <div className='p-10'>
                                    <div className='flex gap-3 mb-5'>
                                        <CgProfile className='text-purple text-[20px]' />
                                        <h5 className='font-normal text-gray'>Esther Howard</h5>
                                    </div>
                                    <h3 className='font-bold text-[20px] text-primary leading-7 mb-25'>Simple Self-Defense Skills
                                        Everyone Should Learn for
                                        Safety</h3>
                                    <div className='w-full h-px bg-primary/10 mb-7.5'></div>
                                    <a href="" className='font-bold text-purple flex items-center gap-3'>Read More  <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.7545 5.11709C12.6385 5.11705 10.7101 3.10912 10.7101 0.90408V1.00136e-05L8.97425 0V0.90408C8.97425 2.5079 9.64945 4.01229 10.7092 5.11705L0 5.11707L1.00136e-05 6.92522L10.7093 6.92526C9.64945 8.03002 8.97415 9.53442 8.97425 11.1382V12.0423L10.7101 12.0422V11.1382C10.71 8.93322 12.6385 6.92526 14.7545 6.92524L15.6225 6.92525V5.1171L14.7545 5.11709Z" fill="#734BDF" />
                                    </svg>
                                    </a>
                                </div>
                            </div>
                            <div className='bg-[#F6F6F7] rounded-[20px] w-180 p-2.5 flex'>
                                <img src={link3} alt="" />
                                <div className='p-10'>
                                    <div className='flex gap-3 mb-5'>
                                        <CgProfile className='text-purple text-[20px]' />
                                        <h5 className='font-normal text-gray'>Esther Howard</h5>
                                    </div>
                                    <h3 className='font-bold text-[20px] text-primary leading-7 mb-25'>The Power of Networking:
                                        Building Connections That Last</h3>
                                    <div className='w-full h-px bg-primary/10 mb-7.5'></div>
                                    <a href="" className='font-bold text-purple flex items-center gap-3'>Read More  <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.7545 5.11709C12.6385 5.11705 10.7101 3.10912 10.7101 0.90408V1.00136e-05L8.97425 0V0.90408C8.97425 2.5079 9.64945 4.01229 10.7092 5.11705L0 5.11707L1.00136e-05 6.92522L10.7093 6.92526C9.64945 8.03002 8.97415 9.53442 8.97425 11.1382V12.0423L10.7101 12.0422V11.1382C10.71 8.93322 12.6385 6.92526 14.7545 6.92524L15.6225 6.92525V5.1171L14.7545 5.11709Z" fill="#734BDF" />
                                    </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Blog
