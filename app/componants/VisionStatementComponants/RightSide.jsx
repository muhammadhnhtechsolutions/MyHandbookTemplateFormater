'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import img from '../../assets/imges/VisionCgange.svg';
import { useRouter } from 'next/navigation';

const RightSide = () => {
  const router = useRouter();
  const [loadingText, setLoadingText] = useState(false);

  const AddCorebutton = () => {
    setLoadingText(true);
    router.push('/vision_statementedit');
  };

  return (
    <div className='lg:pt-[15rem] pt-0'>
      <div className='w-full border-primary border-6 rounded'>
        <Image src={img} alt='Vision Change' className='w-full h-auto' />
      </div>
      <div className='flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 py-3 w-full'>
        <button
          onClick={() => router.push('/section')}
          className='text-sm md:text-base lg:text-lg text-black bg-[#FDA513] hover:bg-primary hover:text-white duration-300 ease-in py-1 px-4 h-12 w-full max-w-xs md:w-[110px] rounded-3xl'
        >
          Previous
        </button>
        <button
          onClick={AddCorebutton}
          className='text-sm md:text-base lg:text-lg text-black bg-[#FDA513] hover:bg-primary hover:text-white duration-300 ease-in py-1 px-4 h-12 w-full max-w-xs md:w-[140px] rounded-3xl'
        >
          {loadingText ? 'Loading...' : 'Next Step'}
        </button>
      </div>
    </div>
  );
};

export default RightSide;
