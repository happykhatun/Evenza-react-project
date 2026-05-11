import React from 'react'
import { FaCircleCheck } from "react-icons/fa6";
import Btn from './Btn';


const PricingCard = ({ icon, title, price, text }) => {
    return (
        <>
            <div className='bg-[#F6F6F7] pt-10 px-2.5 pb-2.5 w-117.5 rounded-[20px] relative'>
                <div className='px-10'>
                    <div className='flex items-center gap-3.5'>
                        <div>
                            <img src={icon} alt="" />
                        </div>
                        <div>
                            <h5 className='font-bold text-[20px] text-primary'>{title}</h5>
                            <p className='p-text'>Perfect for first-time attend</p>
                        </div>
                    </div>
                    <div className='mt-10 mb-7.5'>
                        <h5 className='font-bold text-[48px] text-primary'>{price} <span className=' p-text'>{text}</span></h5>
                    </div>
                </div>
                <div className='bg-white rounded-[10px] p-10'>
                    <h4 className='font-bold text-[20px] text-primary'>What's Included:</h4>
                    <p className='p-text'>It could relate to a subscription</p>
                    <hr className='border border-primary/10 my-10' />
                    <ul className='space-y-4'>
                        <li className='flex gap-3 items-center p-text '> <FaCircleCheck className='text-purple' />
                            Entry to all standard sessions</li>
                        <li className='flex gap-3 items-center p-text '> <FaCircleCheck className='text-purple' />
                            Reserved seating in select session</li>
                        <li className='flex gap-3 items-center p-text '> <FaCircleCheck className='text-purple' />
                            Meet & greet with speakers</li>
                        <li className='flex gap-3 items-center p-text '> <FaCircleCheck className='text-purple' />
                            Premium networking lounge</li>
                    </ul>
                    <Btn className="w-full mt-10">Get Standard Pass</Btn>
                </div>
            </div>

        </>
    )
}

export default PricingCard
