import React from 'react'
import Heading from './Heading'
import FeatureCard from './FeatureCard'
import icon_1 from '../assets/icon_1.svg';
import icon_2 from '../assets/icon_2.svg';
import icon_3 from '../assets/icon_3.svg';
import icon_4 from '../assets/icon_4.svg';
import arrow from '../assets/arrow.svg';
import star from '../assets/star.svg';


const Features = () => {
    return (
        <>
            <section className='py-25 bg-[radial-gradient(circle_at_top,#47348C_0%,#161A2D_70%)]'>
                <div className="container">
                    <Heading
                        subtitle="Core Feature"
                        title="Core features that power our
                        exceptional services"
                        dotclass="bg-white"
                        className="text-white text-center mx-auto"
                        align=" justify-center"
                        text="text-white"
                    />
                    <div className='flex justify-between mt-20'>
                        <FeatureCard
                            icon={icon_1}
                            title="Event Planning Manage"
                            description="Deliver seamless virtual experience
                        with high-quality streaming and
                        interactive tools."
                            btntext="Read More"
                            btnicon={arrow}
                        />

                        <FeatureCard
                            icon={icon_2}
                            title="Conference Coordination"
                            description="Deliver seamless virtual experience
                        with high-quality streaming and
                        interactive tools."
                            btntext="Read More"
                            btnicon={arrow}
                        />

                        <FeatureCard
                            icon={icon_3}
                            title="Venue Booking & Setup"
                            description="Deliver seamless virtual experience
                        with high-quality streaming and
                        interactive tools."
                            btntext="Read More"
                            btnicon={arrow}
                        />

                        <FeatureCard
                            icon={icon_4}
                            title="Post-Event Analytics"
                            description="Deliver seamless virtual experience
                        with high-quality streaming and
                        interactive tools."
                            btntext="Read More"
                            btnicon={arrow}
                        />
                    </div>
                    <p className='p-text text-center mt-15 mb-5.5 text-white'>Join our team and help weave innovation, quality, and success together worldwide.</p>
                    <div className='text-white font-bold text-[20px] flex gap-3 items-center justify-center'>
                        <h4>4.9/5</h4>
                        <div className='flex gap-2'>
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                        </div>
                        <h4>Our 4200 Review</h4>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Features
