'use client'
import React, { useState } from 'react'
import LeftFaimlyMedia from './LeftFaimlyMedia'
import Image from "next/image"; 
import Loader from "../../assets/loader.gif";
const MainFaimtMedia = () => {
  const [loading, setLoading] = useState(false); 

  return (

    <>
    
    <div>
    
    
      <div className="container m-auto p-5 ma:pt-12" >
      <div className="w-full flex flex-col  md:flex-row md:space-x-5 md:space-y-0 space-y-5  rounded lg:p-5">

         
          <div className='w-full  md:pt-10'>
            <LeftFaimlyMedia/>
          </div>
        
        </div>
      </div>
    </div>
   
    </>
  )
}

export default MainFaimtMedia
