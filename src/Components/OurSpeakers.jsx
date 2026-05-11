import React from 'react'
import Heading from './Heading'
import Link_1 from '../assets/Link_1.png';
import Link_2 from '../assets/Link_2.png';
import Link_3 from '../assets/Link_3.png';
import share from '../assets/share.svg';
import border1 from '../assets/border1.svg';
import call from '../assets/call.svg';

const OurSpeakers = () => {
    return (
        <>
            <section className='py-25'>
                <div className="container">
                    <Heading
                        subtitle="Our Speakers"
                        title="Introducing the expert speakers
                        joining our event"
                        className='mx-auto text-center'
                        align='justify-center'
                    />
                    <div className='flex justify-between mt-20 mb-12.5'>
                        <div className='bg-[#F6F6F7] p-2.5 rounded-[20px]'>
                            <div>
                                <img src={Link_3} alt="" />
                            </div>
                            <div className='flex items-center justify-between'>
                                <div>
                                    <h3 className='font-bold text-[20px] text-primary mt-7 mb-2.5'>Sophia Rodrigues</h3>
                                    <p className='p-text'>Global Marketing Director</p>
                                </div>
                                <div className='w-10 h-10 rounded-full flex justify-center items-center bg-purple'>
                                    <img src={share} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className='bg-[#F6F6F7] p-2.5 rounded-[20px]'>
                            <img src={Link_1} alt="" />
                            <div className='flex items-center justify-between'>
                                <div>
                                    <h3 className='font-bold text-[20px] text-primary mt-7 mb-2.5'>Jacob Jones</h3>
                                    <p className='p-text'>Lead AI Research Scientist</p>
                                </div>
                                <div className='w-10 h-10 rounded-full flex justify-center items-center bg-purple'>
                                    <img src={share} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className='bg-[#F6F6F7] p-2.5 rounded-[20px]'>
                            <img src={Link_2} alt="" />
                            <div className='flex items-center justify-between '>
                                <div>
                                    <h3 className='font-bold text-[20px] text-primary mt-7 mb-2.5'>Innovation Strategy Expert</h3>
                                    <p className='p-text'>Arlene McCoy</p>
                                </div>
                                <div className='w-10 h-10 rounded-full flex justify-center items-center bg-purple'>
                                    <img src={share} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center justify-center gap-5'>
                        <div className='flex relative'>
                            <div>
                                <img src={border1} alt="" className='' />
                            </div>
                            <div lassName='w-10 h-10 rounded-full flex justify-center items-center bg-purple '>
                                <img src={call} alt="" className='rounded-full h-8 w-8 absolute top-1 left-5' />
                            </div>
                        </div>
                        <p className='p-text'>Join our speaker and help weave innovation, quality, and success together worldwide.</p>
                    </div>
                </div>
            </section>

        </>
    )
}

export default OurSpeakers
