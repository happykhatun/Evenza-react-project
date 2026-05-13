import React from 'react'
import video from '../assets/video_img.png';
import play from '../assets/play.svg';

const Video = () => {
  return (
    <div>
      <div className=' flex items-center justify-center'>
        <div className='relative '>
          <img src={video} alt="" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <span className="absolute inline-flex h-20 w-20 rounded-full bg-purple opacity-40 animate-slow-ping"></span>
          <div className='flex justify-center items-center w-20 h-20 rounded-full bg-purple '>
            <img src={play} alt="" className='w-7  ' />
          </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Video
