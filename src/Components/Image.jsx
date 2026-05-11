import React from 'react'
// import Container from '../assets/Container.png';
import Heading from './Heading';

const Image = () => {
    return (
        <>
            <section className=' bg-[url(assets/Container.png)]   relative'>
                <div className='flex absolute bottom-0 left-0'>
                    <div>
                        <Heading
                            subtitle="Panels"
                             text='text-white'
                        />
                        <h2 className='text-[20px] text-white font-bold'>Interactive Panel Discussions</h2>
                    </div>
                    <div>
                        <Heading
                            subtitle="Networking"
                             text='text-white'
                        />
                        <h2 className='text-[20px] text-white font-bold'>Connect With Top Professionals</h2>
                    </div>
                    <div>
                        <Heading
                            subtitle="Resources"
                            text='text-white'
                        />
                        <h2 className='text-[20px] text-white font-bold'>Exclusive Access Event Material</h2>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Image
