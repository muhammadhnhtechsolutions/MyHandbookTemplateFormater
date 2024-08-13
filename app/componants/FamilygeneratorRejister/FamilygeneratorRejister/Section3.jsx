'use client'
import React from 'react'
import Image from "next/image";
import sec3 from "../../../assets/imges/sect3.webp";
import sec1 from "../../../assets/imges/cfa882ccb04974e73be0eb21dab96ef2_1200_80.webp";

export const Section3 = () => {
  return (
    <div className='pt-10'>
    <div className="  bg-[#8F0407]   p-2 lg:mx-20 rounded-xl ">
    <p className="justify-center flex text-[23px] font-bold  text-white">
    Limited Time Special - Experience The First Ever Handbook Generator For Only $97.00
    </p>
  </div>
  <div className='py-6 text-[42px]  font-bold text-center leading-[55px] text-white mx-10  '>
    <p className=''>The Only Tool <span className='text-[#ff9900]'>You’ll Ever Need</span>To Lead Your Families  
     Towards Greatness, Intention, And Purpose
    </p>
  </div>
  <div className='py-6 text-[20px]  font-normal text-center leading-[25px] text-white mx-10 '>
    <p>We put everything we’ve learned into a software -- everything we know that can help you have a better family life so that no more moms and dads will ever have to worry driving their families towards unified mission and purpose like a team.</p>
  </div>
  <div className='py-6  mx-10 text-center justify-center flex '>
  <Image src={sec3} alt="" />

  </div>
  <div className="pt-16  text-center">
  
                  <button className="bg-[#36ca37FF] aniation-shade py-2 text-[28px] px-5  font-bold  leading-[25px] text-white  ">
                  <div className='flex flex-col w-full'>

                  ACCESS FAMILY HANDBOOK GENERATOR NOW FOR ONLY $97.00! 
                  </div>
                    <span className="text-[11px]  font-semibold">
                      Backed by Our 30-Day 100% Money Back Guarantee
                    </span>
                  </button>
                  <div className=' py-3x justify-center flex text-center'>

                  <Image src={sec1} alt="" className='w-[500px]'/>
                  </div>
                </div>
    </div>
  )
}
