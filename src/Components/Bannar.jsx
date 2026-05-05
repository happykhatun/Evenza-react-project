import React from 'react'
import border1 from '../assets/border1.svg';
import border2 from '../assets/border2.svg';
import border3 from '../assets/border3.svg';
import play from '../assets/play.svg';

import Btn from './Btn';


const Bannar = () => {
    return (
        <>
            <section className='bg-[url(assets/Background.png)] bg-no-repeat bg-cover bg-center'>
                <div className="container">
                    <div className='py-37.5'>
                        <div className='w-100
                     12 p-4 bg-white/10 mx-auto rounded-full flex text-white items-center relative'>
                            <img src={border1} alt="" />
                            <img src={border2} alt="" className='absolute top-4 left-10' />
                            <img src={border3} alt="" className='absolute top-4 left-16' />
                            <p className='font-normal ml-18'>Ideas that spark change.</p>
                        </div>
                        <div className='w-246 mx-auto text-center '>
                            <h1 className='text-[76px] font-extrabold leading-[83.6px] tracking-[-1.52px] text-white mt-2 mb-3.75'>Connecting Minds to Shape
                                Tomorrow's Big Ideas</h1>
                            <p className='p-text text-white w-175 mx-auto'>Experience a powerful gathering of visionaries, creators, and industry experts united by one goal—
                                exchanging ideas that spark growth, innovation, and meaningful change.</p>
                            <div className='flex items-center gap-10 mt-13 justify-center'>
                                <Btn>Explore Schedule</Btn>
                                <div className='flex items-center gap-5'>
                                    <div className='w-8.75 h-8.75 rounded-full bg-purple flex justify-center items-center'>
                                        <img src={play} alt="" />
                                    </div>
                                    <p className='font-bold text-white'>Watch Video</p>
                                </div>
                            </div>
                            <p className='text-white mt-15 mb-10'>Upcoming Speaker Reveal - Don't Miss Out</p>
                            <div className='flex gap-7.5 justify-center'>
                                <div className='bg-white/10 rounded-[20px] w-31.25 h-30 p-5'>
                                    <h2 className='font-bold text-[40px] text-white '>202</h2>
                                    <p className='p-text text-white/80'>Days</p>
                                </div>
                                <div className='bg-white/10 rounded-[20px] w-31.25 h-30 p-5'>
                                    <h2 className='font-bold text-[40px] text-white '>08</h2>
                                    <p className='p-text text-white/80'>Hours</p>
                                </div>
                                <div className='bg-white/10 rounded-[20px] w-31.25 h-30 p-5'>
                                    <h2 className='font-bold text-[40px] text-white '>13</h2>
                                    <p className='p-text text-white/80'>Minutes</p>
                                </div>
                                <div className='bg-white/10 rounded-[20px] w-31.25 h-30 p-5'>
                                    <h2 className='font-bold text-[40px] text-white '>14</h2>
                                    <p className='p-text text-white/80'>Seconds</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Bannar
