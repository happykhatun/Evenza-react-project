import React from 'react'
import Heading from './Heading'
import benfits_icon from '../assets/benfits_icon.svg';
import bg_2 from '../assets/bg-2.svg';
import benefits_image from '../assets/benefits-image.png';
import about_img from '../assets/about_img.png';
import call from '../assets/call.svg';
import Btn from './Btn';

const KeyBenefits = () => {
    return (
        <>
            <section className='py-25'>
                <div className="container">
                    <div className='flex gap-15 '>
                        <div>
                            <Heading
                                subtitle="Key Benefits"
                                title="Key advantages that ensure
                                your events stand out"
                            />
                            <hr className='border border-primary/10 mt-7.5' />
                            <div className='mt-7.5'>
                                <div className='flex items-center gap-5'>
                                    <img src={benfits_icon} alt="" className='w-15 h-15' />
                                    <div>
                                        <h4 className='font-bold text-[20px] text-primary'>Expert-Led Keynote Sessions</h4>
                                        <p className='p-text w-150 mt-3'>Experience inspiring keynote sessions led by industry experts who share valuable
                                            insights, trends, and strategies to help you grow personally and professionally.</p>
                                    </div>
                                </div>
                                <div className='flex items-center gap-5 mt-10'>
                                    <img src={bg_2} alt="" className='w-15 h-15' />
                                    <div>
                                        <h4 className='font-bold text-[20px] text-primary'>Advanced Event Technology</h4>
                                        <p className='p-text w-150 mt-3'>Experience inspiring keynote sessions led by industry experts who share valuable
                                            insights, trends, and strategies to help you grow personally and professionally.</p>
                                    </div>
                                </div>
                            </div>
                            <hr className='border border-primary/10 my-10' />
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
                        <div className='relative '>
                            <img src={about_img} alt="" />
                            <img src={benefits_image} alt="" className='absolute top-50 left-79' />
                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}

export default KeyBenefits
