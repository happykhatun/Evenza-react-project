import React from 'react'

const FeatureCard = ({ icon, title, description, btntext, btnicon }) => {
    return (
        <>
            <div className='w-86.25 rounded-[20px] bg-white/10 p-10 group  hover:bg-purple transition-all duration-200 ease-in-out cursor-pointer'>
                <div className='bg-purple p-3.5 rounded-[10px] w-fit'>
                    <img src={icon} alt="" />
                </div>
                <h3 className={`font-bold text-white text-[20px] mt-20 mb-2.5`}>{title}</h3>
                <p className={`p-text text-white`}>{description}</p>
                <hr className='border border-white/10 my-7.5' />
                <div className='flex items-center gap-3'>
                    <a href="" className='font-bold text-white'>{btntext}</a>
                    <img src={btnicon} alt="" />
                </div>

            </div>

        </>
    )
}

export default FeatureCard
