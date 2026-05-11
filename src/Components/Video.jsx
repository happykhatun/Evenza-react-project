import React from 'react'
import video from '../assets/video_img.png';
import play from '../assets/play.svg';

const Video = () => {
  return (
    <div>
        <div className='relative '>
            <img src={video} alt="" />
            <div className='flex justify-center items-center w-20 h-20 rounded-full bg-purple absolute top-[50%] left-[50%]  -translate-x-1/2 -translate-y-1/2'>
                <img src={play} alt="" className='w-7  ' />
            </div>
        </div>
      
    </div>
  )
}

export default Video
