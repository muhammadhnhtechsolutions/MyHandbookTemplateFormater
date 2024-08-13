/* eslint-disable react/no-unescaped-entities */
"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import img from '../../assets/imges/MissionCgange.svg'
import full from '../../assets/imges/image 37 (1).png'
import family from '../../assets/imges/image 38.png'
import gurante from '../../assets/imges/image 39.png'
import ReactPlayer from "react-player";

function Posteroffice() {
  return (
    <>
      <div>

        <div className='bg-[#023D6D] text-center text-white py-3 font-bold'>
          <p>Proverbs 29:11 </p>
          <p>“Without a vision, the people will perish”</p>
        </div>

        <div className='text-center py-6 '>
          <div className=''>
            <p className='bg-[#6BAEBF] text-white mx-auto max-w-5xl p-3 font-semibold'>Church on The Rock Presents...</p>
            <p className='bg-[#6BAEBF] text-white py-3 w-full mx-auto max-w-full font-semibold'>2024 Family Vision Initiative</p>
          </div>
        </div>

        <div className='text-center pt-2'>
          <p className='font-thin-semibold'>An Interactive Tool created for moms and dads that you can use WITHOUT Tech Skills or Overpriced Designers!</p>
        </div>

        <div className='flex justify-center items-center px-4'>
          <h1 className='font-bold text-[40px] md:text-[30px] sm:text-[24px] text-center'>
            Create Your Family Vision and Memorialize It For Your Family and For Future Generations.
          </h1>
        </div>

        <div className='text-center pt-2'>
          <p className='font-thin-semibold'>By a team of successful intentional parents, Executive Coaches, Counselors, CEOs, Entrepreneurs</p>
        </div>

        <div>
          <h1 className='text-[#FF9900] text-center text-[30px] font-bold'>Get Your Custom Family Handbook TODAY!</h1>
        </div>

        <div className='flex justify-center items-center px-4'>
          <h1 className='font-bold text-[22px] md:text-[20px] sm:text-[18px] text-center'>
            This is your chance to steal my top-rated family tool that helps you create an authentic family handbook quickly and easily
          </h1>
        </div>

        <div className='flex justify-center items-center'>
          <ReactPlayer
            className="react-player md:w-3/4 w-full pt-3"
            url="https://familyhandbook.s3.amazonaws.com/clientsidevideo/banner-_nawXNvK.mp4"
            width="80%"
            height="auto"
            controls={true}
          />
        </div>

        <div className='flex justify-center pt-3'>
          <div className='bg-[#6BAEBF] text-center w-[80%] p-4'>
            <h1 className='text-white pt-3 font-semibold text-[25px]'>
              ACCESS FAMILY HANDBOOK GENERATOR NOW FOR ONLY $97.00!
            </h1>
            <p className='text-white'>Backed by Our 30-Day 100% Money Back Guarantee</p>
          </div>
        </div>

        <div className='pt-10 text-center'>
          <p>PLUS.,You get...</p>
        </div>

        <div>
          <h1 className='text-[#FF9900] text-center text-[25px] font-bold'>Core Value Statements..</h1>
          <h1 className='text-[#FF9900] text-center text-[25px] font-bold'>Mission Statements..</h1>
          <h1 className='text-[#FF9900] text-center text-[25px] font-bold'>Media Agreements..</h1>
          <h1 className='text-[#FF9900] text-center text-[25px] font-bold'>Code of Conduct and more....</h1>
        </div>

        <div className='text-center pt-5'>
          <p>ALL FULLY CUSTOMIZED FOR YOUR FAMILY</p>
          <p>by the</p>
          <h1 className='text-[#FF9900] text-center text-[25px] font-bold'>FAMILY HANDBOOK GENERATOR</h1>
        </div>

        <div className='text-center font-bold pt-8 text-[30px]'>
          <h1>90% OFF</h1>
        </div>

        <div className='font-bold text-center'>
          <p>This is the first time you'll ever see a known family advisor like me make an offer like this.</p>
          <p>Here is everything you're about to get…</p>
        </div>

        <div className='text-center pt-3 pl-4 pr-4'>
          <Image src={full} alt="" />
        </div>

        <div className='flex justify-center pt-3'>
          <div className='bg-[#6BAEBF] text-center w-[80%] p-4'>
            <h1 className='text-white pt-3 font-semibold text-[25px]'>
              ACCESS FAMILY HANDBOOK GENERATOR NOW FOR ONLY $97.00!
            </h1>
            <p className='text-white'>Backed by Our 30-Day 100% Money Back Guarantee</p>
          </div>
        </div>

        <div className='font-bold text-[28px] text-center py-4 px-10 w-[80%] m-auto Montserrat'>
          <p>HERE ARE SOME OF THE PARENTS WHO LOVED THE INTENTIONALITY THAT COMES WITH THE FAMILY HANDBOOK:</p>
        </div>

        <div className='bg-[#FF9900] py-20'>
          <div className="container px-4 md:px-20 m-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
              <div className='flex flex-col items-center'>
                <Image src={family} className='w-full md:w-[400px] pb-10' alt="" />
                <Image src={gurante} className='w-full md:w-[400px]' alt="" />
              </div>
              <div className='text-white'>
                <h1 className='font-bold'>FAMILY HANDBOOK GENERATOR IS THE MODERN DAY PARENTING STRATEGY.</h1>
                <p>The thing about parenting is that you learn as you go. Something that used to work with one child simply doesn’t work with the other.</p>
                <p>As a parent, it’s not easy to guide your children away from the influence of the world and toward what is good and right. There are so many distractions and it doesn't help that there are constant changes in culture and society affecting the way our kids deal with us. That’s why I thought to make a solution for this problem.</p>
                <h1 className='font-bold'>Introducing the Family Handbook Generator</h1>
                <p>It’s a fun, easy-to-use tool that helps you create an authentic family handbook quickly and easily. No more arguing about what your core values are or what principles you want your family to operate on. You know what you need, but now you have the perfect solution for organizing your thoughts and creating valuable family tools.</p>
                <h1>See below to learn how it works in detail, but here’s a snapshot of how it works</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}


export default Posteroffice;