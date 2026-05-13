
import React from 'react'
import arrow from '../assets/arrow.svg';
import Container from '../assets/Container.png';

const Image = () => {

    const data = [
        {
            title: "Panels",
            heading: "Interactive Panel Discussions",
            hover: "left"
        },
        {
            title: "Networking",
            heading: "Connect With Top Professionals",
            hover: "bottom"
        },
        {
            title: "Resources",
            heading: "Exclusive Access Event Material",
            hover: "top"
        },
        {
            title: "Updates",
            heading: "Real-Time Event Announcement",
            hover: "right"
        }
    ]

    return (
        <section className='relative min-h-screen overflow-hidden'>

            {/* Background */}
            <img
                src={Container}
                alt=""
                className='absolute inset-0 w-full h-full object-cover'
            />

            {/* Dark Overlay */}
            <div className='absolute inset-0 bg-black/50'></div>

            {/* 4 Parts */}
            <div className='relative z-10 flex h-screen'>

                {data.map((item, index) => (

                    <div
                        key={index}
                        className='group relative w-1/4 h-full overflow-hidden border-r border-white/10 flex items-end cursor-pointer'
                    >

                        {/* Normal Content */}
                        <div className='p-8 pb-14 text-white z-10 relative transition-all duration-300 group-hover:opacity-0'>

                            <div className='flex items-center gap-2'>
                                <span className='w-2 h-2 rounded-full bg-purple-500'></span>

                                <p className='text-sm font-medium'>
                                    {item.title}
                                </p>
                            </div>

                            <h2 className='text-[22px] font-bold mt-4 leading-snug whitespace-nowrap'>
                                {item.heading}
                            </h2>
                        </div>

                        {/* Hover Overlay */}
                        <div
                            className={`
                                absolute inset-0
                                bg-white/10
                                flex flex-col justify-end
                                p-8 pb-14
                                transition-all duration-1000 ease-in-out

                                ${item.hover === "left"
                                    ? "-translate-x-full group-hover:translate-x-0"
                                    : ""}

                                ${item.hover === "right"
                                    ? "translate-x-full group-hover:translate-x-0"
                                    : ""}

                                ${item.hover === "top"
                                    ? "-translate-y-full group-hover:translate-y-0"
                                    : ""}

                                ${item.hover === "bottom"
                                    ? "translate-y-full group-hover:translate-y-0"
                                    : ""}
                            `}
                        >

                            <div className='flex items-center gap-2'>
                                <span className='w-2 h-2 rounded-full bg-purple-500'></span>

                                <p className='text-sm text-white font-medium'>
                                    {item.title}
                                </p>
                            </div>

                            <h2 className='text-[22px] font-bold text-white mt-4 leading-snug whitespace-nowrap'>
                                {item.heading}
                            </h2>

                            <p className='text-white mt-4  leading-7'>
                                Build meaningful relationships with industry
                                leaders, innovators.
                            </p>

                            <div className='flex items-center gap-3 mt-8'>
                                <a href="" className='text-white text-sm'>
                                    Read More
                                </a>

                                <img src={arrow} alt="" />
                            </div>

                        </div>

                    </div>

                ))}

            </div>
        </section>
    )
}

export default Image
