import React from 'react';
import { FaRegComment, FaRegEnvelope, FaTrophy, FaBookOpen } from 'react-icons/fa';

const Video = () => {
  return (
    <div className='w-full h-[400px] p-5 flex flex-wrap items-center justify-center gap-2 col-span-3 col-start-1 col-end-3 row-span-1 row-start-1 row-end-2'>
      <div className='block w-full h-[80%] bg-black rounded-md overflow-hidden'>
        <video className='w-full h-full' controls>
          <source src='https://www.w3schools.com/html/mov_bbb.mp4' type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className='flex gap-3 text-stone-800 p-2 rounded-md'>
        <span className='flex items-center gap-1'><FaRegComment /> </span>
        <span className='flex items-center gap-1'><FaRegEnvelope /> </span>
        <span className='flex items-center gap-1'><FaTrophy /> </span>
        <span className='flex items-center gap-1'><FaBookOpen /> </span>
      </div>
    </div>
  );
};

export default Video;
