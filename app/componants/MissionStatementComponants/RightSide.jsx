"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import img from '../../assets/imges/MissionCgange.svg'

import { IoInformationCircleSharp } from "react-icons/io5";
import { useRouter } from "next/navigation";




const RightSide = () => {
  const router = useRouter();
  const [loadingText, setLoadingText] = useState(false);
  const handleNextStepClick = () => {
    setLoadingText(true);
    router.push('/svg_mission-statement');
  };

  return (
    <>
     <div   className='lg:pt-[15rem] pt-0'>
    <div className="w-[100%]  border-primary border-[6px] rounded ">
      <Image src={img}  alt='' className='' />
    </div>
    <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 py-3 w-full">
         
            
                  <button
                    onClick={() => router.push("/section")}
                    className="text-sm md:text-base lg:text-lg text-black bg-[#FDA513] hover:bg-primary hover:text-white duration-300 ease-in py-1 px-4 h-12 w-full max-w-xs md:w-[110px] rounded-3xl"
                  >
                   Previous
                  </button>
                  <button
                        onClick={handleNextStepClick}
                    className="text-sm md:text-base lg:text-lg text-black bg-[#FDA513] hover:bg-primary hover:text-white duration-300 ease-in py-1 px-4 h-12 w-full max-w-xs md:w-[140px] rounded-3xl"
                  >
                    {loadingText ? "Loading..." : " Next Step"}
                  </button>
           
          
            </div>

            </div>   
    </>
  )
}

export default RightSide
