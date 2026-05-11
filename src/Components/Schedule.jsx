import React from 'react'
import Heading from './Heading'
import schedule_img_1 from '../assets/schedule_img_1.svg';
import schedule_img_2 from '../assets/schedule_img_2.svg';
import schedule_img_3 from '../assets/schedule_img_3.svg';
import schedule_img_4 from '../assets/schedule_img_4.svg';
import ScheduleCard from './ScheduleCard';

const Schedule = () => {
    return (
        <>
            <section className='py-25 bg-[radial-gradient(circle_at_top,#47348C_0%,#161A2D_70%)]'>
                <div className="container">
                    <div>
                        <Heading
                            subtitle="Our Event Schedule"
                            title="Explore the complete schedule for
                            our event"
                            dotclass='bg-white'
                            className='mx-auto text-center text-white'
                            align='justify-center'
                            text='text-white'
                        />
                        <div className='lg:w-125 w-full bg-white/20 h-20 rounded-full p-2.5 lg:flex-row flex flex-col justify-between items-center text-white font-bold text-[20px]  gap-6 lg:gap-0 mt-20 mb-25 mx-auto '>
                            <button className='py-4.5 px-8.5 lg:w-auto w-full hover:bg-white rounded-full hover:text-black transition-all duration-300 ease-linear lg:bg-transparent'> Day 01</button>
                            <button className=' py-4.5 px-8.5 bg-[#F6F6F7] lg:w-auto w-full hover:bg-white rounded-full transition-all duration-300 ease-linear lg:bg-transparent hover:text-black'>Day 02</button>
                            <button className='py-4.5 px-8.5 lg:w-auto w-full bg-[#F6F6F7] hover:bg-white rounded-full transition-all duration-300 ease-linear lg:bg-transparent hover:text-black'>Day 03</button>
                        </div>
                    </div>
                    <div>
                        <ScheduleCard
                        image={schedule_img_1}
                        time="9:00 AM - 5:30 PM"
                        date="22 March 2025"
                        title="Professional Skills Development Workshop"
                        />
                         <hr className='border border-white/10 my-10' />
                         <ScheduleCard
                        image={schedule_img_2}
                        time="10:00 AM - 4:00 PM"
                        date="05 May 2025"
                        title="Leadership & Growth Conference"
                        />
                        <hr className='border border-white/10 my-10' />

                         <ScheduleCard
                        image={schedule_img_3}
                        time="8:30 AM - 6:00 PM"
                        date="20 June 2025"
                        title="Digital Marketing Masterclass"
                        />
                         <hr className='border border-white/10 my-10' />
                         <ScheduleCard
                        image={schedule_img_4}
                        time="11:00 AM - 3:00 PM"
                        date="10 April 2025"
                        title="Annual Innovation Summit 2025"
                        />
                    </div>
                </div>
            </section>

        </>
    )
}

export default Schedule
