import React, { useState } from 'react'
import faqs_image from '../assets/faqs-image.png';
import Heading from './Heading';
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import faqcall from '../assets/faqcall.svg';


const FAQ = () => {
    const [open, setOpen] = useState()

    const data = [
        {
            question: " How does the complete event register process actually work?",
            answer: "Our event is designed with flexible scheduling, allowing you to move between halls, select sessions that interest you most, and customize your learning experience throughout the day."
        },
        {
            question: " Where is the main event venue located precisely?",
            answer: "Our event is designed with flexible scheduling, allowing you to move between halls, select sessions that interest you most, and customize your learning experience throughout the day."
        },
        {
            question: " Can attendees freely switch between sessions and tracks?",
            answer: "Our event is designed with flexible scheduling, allowing you to move between halls, select sessions that interest you most, and customize your learning experience throughout the day."
        },
        {
            question: " Does the event provide virtual participation options online?",
            answer: "Our event is designed with flexible scheduling, allowing you to move between halls, select sessions that interest you most, and customize your learning experience throughout the day."
        },
        {
            question: " What is the event refund and cancellation policy?",
            answer: "Our event is designed with flexible scheduling, allowing you to move between halls, select sessions that interest you most, and customize your learning experience throughout the day."
        }

    ]

    const toggle = (index) => {
        setOpen(open === index ? null : index)
    }



    return (
        <>
            <section className='py-25'>
                <div className="container">
                    <div className='flex justify-between items-center'>
                        <div className='relative'>
                            <img src={faqs_image} alt="" className='w-148.75 h-208.25' />
                                <div className='w-55 bg-purple p-6 rounded-[10px] absolute right-0 bottom-0 border-10 border-white '>
                                    <p className='font-bold text-white text-[20px]'>Your Questions,
                                        Clearly Answer</p>
                                    <div className='bg-white rounded-full mt-13 mb-4.5 w-10 h-10  flex justify-center items-center '>
                                        <img src={faqcall} alt="" className='' />
                                    </div>
                                    <p className='p-text text-white'>+00 123 456 789</p>
                                </div>
                        </div>
                        <div>
                            <Heading
                                subtitle="FAQ's"
                                title="What our customers say about their
                            experience"
                            />
                            <div className='w-200 space-y-7.5 mt-8.5'>
                                {
                                    data.map((item, index) => (
                                        <div
                                            key={index}
                                            className='bg-[#F6F6F7] transition-all duration-30 rounded-[20px] py-5.5 px-6'
                                        >
                                            {/* Question */}
                                            <div
                                                onClick={() => toggle(index)}
                                                className='flex justify-between items-center'
                                            >
                                                <h3 className="text-lg font-semibold text-primary">
                                                    {index + 1}. {item.question}
                                                </h3>
                                                <div>
                                                    {open === index ? (
                                                        <CiCircleMinus className='text-[24px] text-purple cursor-pointer ' />

                                                    ) : (
                                                        <CiCirclePlus className='text-[24px] text-purple cursor-pointer ' />

                                                    )}
                                                </div>
                                            </div>

                                            <div
                                                className={`overflow-hidden transition-all duration-300 ${open === index ? "max-h-40 " : "max-h-0"
                                                    }`}
                                            >
                                                <p className="p-text">{item.answer}</p>
                                            </div>

                                        </div>
                                    ))
                                }

                            </div>
                        </div>
                    </div>

                </div>
            </section>

        </>
    )
}

export default FAQ
