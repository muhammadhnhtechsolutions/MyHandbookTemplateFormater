'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { useRouter } from "next/navigation";
import Loader from '../Layout/Loader'

import icons1 from '../../assets/imges/image_16__1_-removebg-preview.png';
import icons2 from '../../assets/imges/image_15-removebg-preview.png';
import icons3 from '../../assets/imges/image_17-removebg-preview.png';

const WhatsIncluded = () => {
  const [Isloading, setIsloading] = useState(false);
  const router = useRouter();

  const handleRouthe = () => {
    setIsloading(true);
    router.push('/login');
  };

  return (
    <>
      {Isloading ? <Loader /> : null}
    <div className="container px-5 md:px-20 m-auto">
    <div className="flex flex-col md:flex-row items-center justify-center">
      <div className=" w-full md:w-1/2 px-4 md:px-10 justify-center items-center text-center py-8">
        <h1 className="font-bold text-[rgb(255,153,0)] text-4xl mb-6 droid">Benefits for Families</h1>
        <div className="space-y-4">
        <div className="bg-primary gap-x-4 rounded-lg p-4 flex items-start">
          <div className='w-1/4 md:w-1/6 h-full flex items-center justify-center'>
            <div className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] flex items-center justify-center rounded-full bg-white">
              <Image src={icons1} alt="Family Handbook Compass" className="w-10 h-10 md:w-12 md:h-12" width={50} height={50} />
            </div>
          </div>
          <div className='w-3/4 md:w-5/6 space-y-2'>
            <h2 className=" droid font-bold text-lg md:text-xl text-white">Memorializes Family Purpose & Direction</h2>
            <p className="text-sm md:text-base montserrat text-white">Provides clarity on family values, goals, and expectations, guiding daily decisions and actions.</p>
          </div>
        </div>

        {/* Repeat for other benefits */}
        <div className="bg-primary gap-x-4 rounded-lg p-4 flex items-start">
          <div className='w-1/4 md:w-1/6 h-full flex items-center justify-center'>
            <div className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] flex items-center justify-center rounded-full bg-white">
              <Image src={icons2} alt="Family Handbook Compass" className="w-10 h-10 md:w-12 md:h-12" width={50} height={50} />
            </div>
          </div>
          <div className='w-3/4 md:w-5/6 space-y-2'>
            <h2 className="font-bold droid text-lg md:text-xl text-white">Inspires Teamwork</h2>
            <p className="text-sm md:text-base montserrat text-white">Strengthens family bonds by fostering open communication and shared understanding.</p>
          </div>
        </div>
        
        <div className="bg-primary gap-x-4 rounded-lg p-4 flex items-start">
          <div className='w-1/4 md:w-1/6 h-full flex items-center justify-center'>
            <div className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] flex items-center justify-center  rounded-full bg-white">
              <Image src={icons3} alt="Family Handbook Compass" className="w-10 h-10 md:w-12 md:h-12" width={50} height={50} />
            </div>
          </div>
          <div className='w-3/4 md:w-5/6 space-y-2'>
            <h2 className="droid font-bold text-lg md:text-xl text-white">A Visual Constant Anchor For Parents</h2>
            <p className="text-sm md:text-base montserrat text-white">Enables families to preserve and pass down their values, traditions, and aspirations to future generations.</p>
          </div>
        </div>
        </div>
      </div>
      
      </div>
      </div>
    </>
  )
}

export default WhatsIncluded
