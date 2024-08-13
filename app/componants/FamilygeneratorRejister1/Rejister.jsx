/* eslint-disable react/no-unescaped-entities */
'use client'

import { useRouter } from "next/navigation";
import Image from 'next/image'
import React from 'react'
import img from '../../assets/imges/MissionCgange.svg'
import full from '../../assets/imges/image 37 (1).png'
import family from '../../assets/imges/image 38.png'
import gurante from '../../assets/imges/image 39.png'
import ReactPlayer from "react-player";
import { Section1 } from "./Section1";
import Section2 from "./Section2";
import { Section3 } from "./Section3";
import { Section4 } from "./Section4";
import { Section5 } from "./Section5";
import { Section6 } from "./Section6";
import sign from "../../assets/imges/image 52.png";
import { Section8 } from "./Section8";

export const Rejister = () => {
  const router = useRouter();
  return (
    <div>
      <div className='bg-[#023D6D] text-[28px] text-center text-white py-3 font-semibold montserrat'>
        <p>Pre-Launch Discount:</p>
        <p>Get It ALL Today For Only $̶9̶9̶7̶.0̶0̶  $97</p>
      </div>
      <div className='text-center py-6'>
        <div>
          <p className='bg-[#FF9900] montserrat text-white text-lg sm:text-[28px] underline mx-auto max-w-4xl p-3 font-bold'>Click Here To Create Core Values Statement NOW</p>
        </div>
      </div>
      <div className='text-center py-2'>
        <p className='font-bold text-sm sm:text-lg montserrat underline'>An Interactive Tool created for moms and dads that you can use WITHOUT Tech Skills or Overpriced Designers!</p>
      </div>
      <div className='flex justify-center items-center'>
        <h1 className='font-bold text-lg sm:text-[48px] montserrat flex flex-col items-center text-center gap-y-4'>
          No More Arguing About What Your <span>Core Values Are Or What Principles</span><span>You Want Your Family To Operate On.</span>
        </h1>
      </div>
      <div className='text-center py-2'>
        <p className='font-bold text-sm sm:text-lg montserrat'>By a team of successful intentional parents, Executive Coaches, Counselors, CEOs, Entrepreneurs</p>
      </div>
      <div>
        <h1 className='text-[#FF9900] montserrat text-center text-lg sm:text-[32px] font-bold'>Get Your Custom Family Handbook TODAY!</h1>
      </div>
      <div className='flex justify-center items-center'>
        <h1 className='font-bold text-base sm:text-[24px] montserrat w-[80%] lg:w-[60%] text-center'>
          This is your chance to steal my top-rated family tool that helps you create an authentic family handbook quickly and easily
        </h1>
      </div>
      <div className='flex justify-center items-center py-5'>
        <p className="text-lg sm:text-[32px] font-bold montserrat text-[#6BAEBF]"> ​(Yes... SAVE $900 today!)</p>
      </div>
      <div className='flex justify-center items-center'>
        <ReactPlayer
          className="react-player w-full sm:w-3/4 h-80 pt-3"
          url="https://familyhandbook.s3.amazonaws.com/clientsidevideo/banner-_nawXNvK.mp4"
          width="80%"
          height="auto"
          controls={true}
        />
      </div>
      <div className="flex flex-col items-center py-5">
  <div className='bg-[#6BAEBF] text-center w-[80%] p-4' >
    <h1 className='text-white pt-3 font-semibold text-lg sm:text-[25px]'>
      ACCESS FAMILY HANDBOOK GENERATOR NOW FOR ONLY $97.00!
    </h1>
    <p className='text-white'>
      Backed by Our 30-Day 100% Money Back Guarantee
    </p>
  </div>

  <div className='pt-10 text-center'>
    <p>PLUS, You get...</p>
  </div>

  <div className="montserrat text-center">
    <h1 className='text-[#FF9900] text-lg sm:text-[25px] font-bold'>Core Value Statements...</h1>
    <h1 className='text-[#FF9900] text-lg sm:text-[25px] font-bold'>Mission Statements...</h1>
    <h1 className='text-[#FF9900] text-lg sm:text-[25px] font-bold'>Media Agreements...</h1>
    <h1 className='text-[#FF9900] text-lg sm:text-[25px] font-bold'>Code of Conduct and more...</h1>
  </div>

  <div className='text-center pt-5 montserrat'>
    <p>ALL FULLY CUSTOMIZED FOR YOUR FAMILY</p>
    <p>by the</p>
    <h1 className='text-[#FF9900] text-lg sm:text-[25px] font-bold'>FAMILY HANDBOOK GENERATOR</h1>
  </div>

  <div className='text-center font-bold pt-8 text-lg sm:text-[30px]'>
    <h1>90% OFF</h1>
  </div>

  <div className='text-center font-bold'>
    <p>This is the first time you'll ever see a known family advisor like me make an offer like this.</p>
    <p>Here is everything you're about to get…</p>
  </div>

  <div className='flex justify-center items-center pt-8'>
    <Image src={full} alt="Family Handbook" className="max-w-full h-auto" />
  </div>
</div>

      <div className='flex justify-center pt-3'>
        <div className='bg-[#FF9900] text-center w-[80%] p-4'>
          <h1 className='text-white pt-3 font-semibold text-lg sm:text-[25px]'>
            ACCESS FAMILY HANDBOOK GENERATOR NOW FOR ONLY $97.00!
          </h1>
          <p className='text-white'>
            Backed by Our 30-Day 100% Money Back Guarantee
          </p>
        </div>
      </div>
      <div className='font-bold text-base sm:text-[28px] text-center py-4 px-10 w-[80%] m-auto montserrat'>
        <p>HERE ARE SOME OF THE PARENTS WHO LOVED THE INTENTIONALITY THAT COMES WITH THE FAMILY HANDBOOK:</p>
      </div>
      <div className='bg-[#6BAEBF] py-20'>
        <div className="container px-4 sm:px-20 m-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 h-full items-center">
            <div className='flex flex-col items-center lg:items-start'>
              <Image src={family} className='w-[250px] sm:w-[400px] pb-10' alt="Family" />
              <Image src={gurante} className='w-[250px] sm:w-[400px]' alt="Guarantee" />
            </div>
            <div className='h-full'>
              <h1 className='text-white font-bold text-lg sm:text-[28px] text-center py-4 w-[98%] m-auto montserrat'>
                FAMILY HANDBOOK GENERATOR IS THE
                <p>MODERN DAY PARENTING STRATEGY.</p>
              </h1>
              <div className="text-white text-base sm:text-[24px] py-4 mx-auto montserrat">
                <p className='text-white mb-4'>
                  The thing about parenting is that you learn as you go. Something that used to work with one child simply doesn’t work with the other.
                </p>
                <p className='text-white mb-4'>
                  As a parent, it’s not easy to guide your children away from the influence of the world and toward what is good and right. There are so many distractions and it doesn't help that there are constant changes in culture and society affecting the way our kids deal with us. That’s why I thought to make a solution for this problem.
                </p>
                <h1 className='text-white font-bold'>
                  Introducing the Family Handbook Generator
                </h1>
                <p className='text-white mb-4'>
                  It’s a fun, easy-to-use tool that helps you create an authentic family handbook quickly and easily. No more arguing about what your core values are or what principles you want your family to operate on. You know what you need, but now you have the perfect solution for organizing your thoughts and creating valuable family tools.
                </p>
                <h1 className='text-white mb-4'>
                  See below to learn how it works in detail, but here’s a snapshot of how it works
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* <Section1/> */}
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>
      <Section8/>
      <footer className="bg-black w-full py-5">
        <div className="flex flex-col items-center justify-center text-center">
          <Image src={sign} alt="" className="w-[150px] sm:w-[250px] h-auto mb-4" />
          <ul className="flex flex-wrap space-x-1 md:space-x-3 mt-3 text-[15px] font-normal text-white leading-[27px]">
            <li className="text-start">
           
            </li>
            <li className="text-start">
              <a href="/termsofservice" className="hover:text-[#333333]">
                Terms of Service
              </a>
            </li>
            <li className="text-start">
              <a href="/privacypolicy" className="hover:text-[#333333]">
                | Privacy Policy
              </a>
            </li>
            <li className="text-start">
              <a href="/cookiepolicy" className="hover:text-[#333333]">
                |Disclaimer
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};
