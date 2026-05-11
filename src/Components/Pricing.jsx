import React from 'react'
import Heading from './Heading'
import PricingCard from './PricingCard'
import pricing_1 from '../assets/pricing_1.svg';
import pricing_2 from '../assets/pricing_2.svg';
import pricing_3 from '../assets/pricing_3.svg';
import { LuCalendarCheck } from "react-icons/lu";
import { TbCash } from "react-icons/tb";
import { FaRegClock } from "react-icons/fa";



const Pricing = () => {
    return (
        <>
            <section className='py-25'>
                <div className="container">
                    <Heading
                        subtitle="Pricing Plan"
                        title="Discover our flexible pricing plans
                        for attendees"
                        align="justify-center"
                        className=" text-center mx-auto"
                    />
                    <div className='flex justify-between mt-20 mb-15'>
                        <PricingCard
                            title="Basic Package"
                            icon={pricing_1}
                            price="$49"
                            text=" /One-Time"
                        />
                        <PricingCard
                            title="Standard Pass"
                            icon={pricing_2}
                            price="$59"
                            text=" /One-Time"
                        />
                        <PricingCard
                            title="Premium Pass"
                            icon={pricing_3}
                            price="$69"
                            text=" /One-Time"
                        />
                    </div>
                    <div className='flex gap-10 justify-center items-center'>
                        <div className='flex items-center gap-2.5'>
                            <LuCalendarCheck className='text-purple text-[20px]' />
                            <p className='p-text text-primary'>Get 30 day free trial</p>
                        </div>
                        <div  className='flex items-center gap-2.5'>
                            <TbCash className='text-purple text-[20px]'/>
                            <p className='p-text text-primary'>No any hidden fee pay</p>
                        </div>
                        <div  className='flex items-center gap-2.5'>
                            <FaRegClock className='text-purple text-[20px]'/>
                            <p className='p-text text-primary'>You can cancel anytime</p>
                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}

export default Pricing
