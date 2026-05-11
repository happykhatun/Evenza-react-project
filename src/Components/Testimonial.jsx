import React from 'react'
import Heading from './Heading'
import border1 from '../assets/border1.svg';
import border2 from '../assets/border2.svg';
import border3 from '../assets/border3.svg';
import border4 from '../assets/border4.svg';
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
                        <div className='flex justify-between'>
                            <div className='bg-purple w-86.25 rounded-[20px] p-10'>
                                <div className='flex relative'>
                                    <img src={border1} alt="" className='relative ' />
                                    <img src={border2} alt="" className='absolute top-0 left-7' />
                                    <img src={border3} alt=""  className='absolute top-0 right-42' />
                                    <img src={border4} alt=""  className='absolute top-0 right-36' />
                                </div>
                                <p className='p-text text-white mt-4.5 mb-23'>Over 15,000+ Attendees <br />
                                    Connected Worldwide</p>
                                <h2 className='font-bold text-white text-[20px]'>Client Experience Speak <span className='block'>For Themselves</span>
                                    </h2>
                                    <Btn className="bg-white text-purple! mt-10">View All Reviews</Btn>

                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Testimonial
