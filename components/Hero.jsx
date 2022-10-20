import React from 'react';
import { useRouter } from 'next/router'

const Hero = ({ heading, message }) => {

  const router = useRouter()

  const handleClick = () => {
    router.push('meist')
  }

  if (router.asPath === '/') {
    return (
      <div className='flex items-center justify-center h-screen bg-fixed bg-center bg-cover custom-img'>
        {/* Overlay */}
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]' />
        <div className='p-5 text-white z-[2] mt-[-5rem]'>
          <h2 className='text-5xl font-bold'>{heading}</h2>
          <p className='max-w-lg text-justify py-5 text-xl'>{message}</p>
          <button className='px-8 py-2 border rounded-lg border-orange-400 text-orange-400' onClick={handleClick}>Lähemalt</button>
        </div>
      </div>
    )
  }

  return (
    <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img'>
      {/* Overlay */}
      <div className='grid grid-cols-1 gap-1 items-center'>
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]' />
      <div className='p-5 text-white z-[2] mt-[-5rem]'>
        <h2 className='text-5xl font-bold'>{heading}</h2>
        <p className='max-w-lg text-justify py-5 text-xl'>{message}</p>
      </div>
      <div class='pt-6 place-items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" class="animate-bounce w-14 h-14 stroke-orange-500" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      </div>
    </div>
  );
};

export default Hero;