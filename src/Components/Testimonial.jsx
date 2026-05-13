import React from 'react'
import Heading from './Heading'
import border1 from '../assets/border1.svg';
import border2 from '../assets/border2.svg';
import border3 from '../assets/border3.svg';
import border4 from '../assets/border4.svg';
import star from '../assets/star.svg';
import { ImQuotesRight } from "react-icons/im";
import group1 from '../assets/group1.png';
import group2 from '../assets/group2.png';
import group3 from '../assets/group3.png';
import group4 from '../assets/group4.png';




import Btn from './Btn';

const Testimonial = () => {
    return (
        <>
            <section className='py-25 bg-[radial-gradient(circle_at_top,#47348C_0%,#161A2D_70%)]'>
                <div className="container">
                    <div>
                        <Heading
                            subtitle="Testimonials"
                            title="What our customers say about their
                            experience"
                            align="justify-center"
                            text="text-white"
                            dotclass="bg-white"
                            className="text-white text-center mx-auto"
                        />
                        <div className='flex justify-between mt-20 mb-15'>
                            <div className='bg-purple w-86.25 rounded-[20px] p-10'>
                                <div className='flex relative'>
                                    <img src={border1} alt="" className='relative ' />
                                    <img src={border2} alt="" className='absolute top-0 left-7' />
                                    <img src={border3} alt="" className='absolute top-0 right-42' />
                                    <img src={border4} alt="" className='absolute top-0 right-36' />
                                </div>
                                <p className='p-text text-white mt-4.5 mb-23'>Over 15,000+ Attendees <br />
                                    Connected Worldwide</p>
                                <h2 className='font-bold text-white text-[20px]'>Client Experience Speak <span className='block'>For Themselves</span>
                                </h2>
                                <Btn className="bg-white text-purple! mt-10">View All Reviews</Btn>

                            </div>
                            <div className='w-133 rounded-[20px] bg-[#433C6C] p-10'>
                                <div className='flex gap-3'>
                                    <img src={star} alt="" />
                                    <img src={star} alt="" />
                                    <img src={star} alt="" />
                                    <img src={star} alt="" />
                                    <img src={star} alt="" />
                                </div>
                                <p className='p-text text-white mt-5.5'>"Truly outstanding service! The team exceeded our
                                    expectations with their professionalism, creativity,
                                    and quick turnaround time. Highly recommended for
                                    anyone seeking quality and reliability."</p>
                                <hr className='border border-white/10 my-10' />

                                <div className='flex justify-between items-center'>
                                    <div className='flex items-center gap-3.5'>
                                        <div>
                                            <img src={border2} alt="" />
                                        </div>
                                        <div>
                                            <h5 className='font-bold text-white text-[20px]'>Ralph Edwards</h5>
                                            <p className='p-text text-white'>Global Marketing Director</p>
                                        </div>
                                    </div>
                                    <div>
                                        <ImQuotesRight className='text-purple text-[30px]' />

                                    </div>
                                </div>

                            </div>
                            <div className='w-133 rounded-[20px] bg-[#433C6C] p-10'>
                                <div className='flex gap-3'>
                                    <img src={star} alt="" />
                                    <img src={star} alt="" />
                                    <img src={star} alt="" />
                                    <img src={star} alt="" />
                                    <img src={star} alt="" />
                                </div>
                                <p className='p-text text-white mt-5.5'>"Truly outstanding service! The team exceeded our
                                    expectations with their professionalism, creativity,
                                    and quick turnaround time. Highly recommended for
                                    anyone seeking quality and reliability."</p>
                                <hr className='border border-white/10 my-10' />

                                <div className='flex justify-between items-center'>
                                    <div className='flex items-center gap-3.5'>
                                        <div>
                                            <img src={border3} alt="" />
                                        </div>
                                        <div>
                                            <h5 className='font-bold text-white text-[20px]'>Kristin Watson</h5>
                                            <p className='p-text text-white'>Global Marketing Director</p>
                                        </div>
                                    </div>
                                    <div>
                                        <ImQuotesRight className='text-purple text-[30px]' />

                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='flex gap-8.5 items-center'>
                            <hr className='flex-1 border border-white/10' />
                            <p className='p-text text-white text-center'>Supported by Brands That Inspire Innovation</p>
                            <hr className=' flex-1 border border-white/10' />
                        </div>
                        <div className='flex justify-center items-center gap-23 mt-15'>
                            <img src={group1} alt="" />
                            <img src={group2} alt="" />
                            <img src={group3} alt="" />
                            <img src={group4} alt="" />
                            <img src={group1} alt="" />

                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Testimonial
