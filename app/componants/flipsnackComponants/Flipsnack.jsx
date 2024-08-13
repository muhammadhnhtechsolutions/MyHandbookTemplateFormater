'use client'
import React, { useState } from "react";
import {useRouter} from "next/navigation";
import Loader from "../Layout/Loader";
const Flipsnack = () => {
  const [Isloading,setIsloading]= useState(false)
  const router = useRouter();
  const handleRouthe =()=>{
    setIsloading(true)
    router.push('/section')
  }
  return (
  <>
      {Isloading? <Loader />:null}
    <div className='text-center py-4'>
        <div className="min-h-screen">
            <p className='text-primary font-bold text-4xl md:text-7xl leading-[84px] droid'>GETTING STARTED</p>
            <p className='pt-3 text-sm pb-2 leading-7 font-normal montserrat'>In order to get the most out of this experience, watch the following 2-minute video below.</p>
       
            <div className="flex justify-center py-5">
                {/* <iframe width="1150" height="500" src="https://www.youtube.com/embed/jEtdaSE84hY?si=lIz4H2QhvWsoHeUA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> */}
                <iframe src="https://player.vimeo.com/video/996766190?h=9fb536c966" width="1150" height="500" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
            </div>
            <button type="button" onClick={()=>handleRouthe()} className="montserrat text-white text-[18px] font-bold h-14 w-44 bg-[#007BFF] mb-48 hover:bg-[#21A7D0] focus:ring-4 focus:ring-blue-300  rounded-lg text-base dark:bg-primary dark:hover:bg-primary  ">Start Customizing</button>  
            
        </div>
    </div>
  </>
  );
};

export default Flipsnack;