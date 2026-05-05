import React from 'react'

const Heading = ({ subtitle, title, dotclass="" ,className,align,text }) => {
    return (
        <div>
            <div className={` w-170.75 ${className}`}>
                <div className={`flex items-center gap-2 ${align}`}>
                    <span className={`h-1.5 w-1.5 rounded-full bg-purple ${dotclass}`}></span>
                    <h3 className={`text-[14px] font-semibold text-primary ${text} `}>{subtitle} </h3>
                </div>
                <h2 className='text-[48px] font-semibold leading-[52.8px] tracking-[-0.96px]'>{title}</h2>
            </div>

        </div>
    )
}

export default Heading
