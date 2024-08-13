'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

const   Button1 = ({navigate}) => {
    let router = useRouter()

  return (
    <div className="flex justify-center space-y-4 flex-col items-center py-3 w-full">

    <button 
      onClick={() => router.push(navigate)}  
      className="text-[23px] hover:bg-[#21A7D0] duration-300 ease-in hover:ease-out leading-[38px] p-1 font-[400] text-[white] bg-primary py-[5px] px-[10px] rounded-[4px] w-full  m-auto"
    >
      Watch Video
    </button>
    <button 
      onClick={() => router.push(navigate)}  
      className="text-[23px] hover:bg-[#21A7D0] duration-300 ease-in hover:ease-out leading-[38px] p-1 font-[400] text-[white] bg-primary py-[5px] px-[10px] rounded-[4px] w-full  m-auto"
    >
      GET STARTED
    </button>
  </div>
);
};

export default Button1
