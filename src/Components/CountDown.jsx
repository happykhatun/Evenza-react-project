import React, { useEffect, useState } from 'react'
import { countDownDateAndTime } from 'countdown-date-time';

const CountDown = () => {
    const [count, setCount] = useState({})
    const [isTimeUp, setIsTimeUp] = useState(false)
   const conduct_date = '2026-06-05 19:00:00';
    useEffect(() => {
        let updateCountDown = () => {
            const count = countDownDateAndTime(conduct_date)
            setCount(count)
        }
        updateCountDown()
        setInterval(updateCountDown, 1000)
    }, [])
    return (
        <>
            <div>
                <p className='text-white mt-15 mb-10'>Upcoming Speaker Reveal - Don't Miss Out</p>
                <div className='flex gap-7.5 justify-center'>
                    <div className='bg-white/10 rounded-[20px] w-31.25 h-30 p-5'>
                        <h2 className='font-bold text-[40px] text-white '>{count.days}</h2>
                        <p className='p-text text-white/80'>Days</p>
                    </div>
                    <div className='bg-white/10 rounded-[20px] w-31.25 h-30 p-5'>
                        <h2 className='font-bold text-[40px] text-white '>{count.hours}</h2>
                        <p className='p-text text-white/80'>Hours</p>
                    </div>
                    <div className='bg-white/10 rounded-[20px] w-31.25 h-30 p-5'>
                        <h2 className='font-bold text-[40px] text-white '>{count.minutes}</h2>
                        <p className='p-text text-white/80'>Minutes</p>
                    </div>
                    <div className='bg-white/10 rounded-[20px] w-31.25 h-30 p-5'>
                        <h2 className='font-bold text-[40px] text-white '>{count.seconds}</h2>
                        <p className='p-text text-white/80'>Seconds</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CountDown
