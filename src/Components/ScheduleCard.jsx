import React from 'react'
import location from '../assets/location.svg';

const ScheduleCard = ({ image, time, date, title }) => {
    return (
        <>
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-7.5'>
                    <div>
                        <img src={image} alt="" />
                    </div>
                    <div>
                        <h5 className='font-bold text-white text-[20px]'>{time}</h5>
                        <p className='p-text mt-3 text-white/80'>{date}</p>
                    </div>
                </div>
                <div>
                    <h3  className='font-bold text-white text-[20px]'>{title}</h3>
                    <p className='p-tex text-white mt-3'>Unlock your potential and elevate your career with our Professional Skills <br />
                        Development designed students, working professionals.</p>
                </div>
                <div className='flex items-center gap-3.5'>
                    <div className='rounded-full w-12.5 h-12.5 flex justify-center items-center border border-white/20'>
                        <img src={location} alt="" />
                    </div>
                    <div className='p-tex text-white'>
                        <p>Street, Block 12</p>
                        <p>Sector 4, Ipsum City</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ScheduleCard
