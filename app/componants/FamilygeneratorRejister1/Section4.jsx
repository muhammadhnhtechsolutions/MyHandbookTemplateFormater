/* eslint-disable react/no-unescaped-entities */
'use client'
import React from "react";
import Image from "next/image";
import img11 from "../../assets/imges/5bf805014c42a8006c51a4c66b475398_1200_80.webp";
import img7 from "../../assets/imges/637dcf630f648499150e64b78521cb1b_1200_80.webp";
import img8 from "../../assets/imges/4cbd4652dab009b842f5c0cc81bb668b_1200_80.webp";
import img9 from "../../assets/imges/0197af50337630bdbc0283ff09c99df2_1200_80.webp";
import img10 from "../../assets/imges/839e7f219d4066e39ee437d8e224b162_1200_80.webp";
import img13 from "../../assets/imges/37f71e3e875722f0616e181f800ca950_1200_80.webp";
import img6 from "../../assets/imges/eb2258eacea488c427e0c1f90bccc053_1200_80.webp";
import img3 from "../../assets/imges/723016be2df4059cb17ffb8a3b1fe1a1_1200_80.webp";
import img12 from "../../assets/imges/800191e489940aab191fe73187a28bf5_1200_80.webp";
import video from '../../assets/imges/0554a157a58d22eedca4fe07bfa55c7c_1200_80.webp'
import lenght from '../../assets/imges/image 43.png'
export const Section4 = () => {
  return (

<>
  <div className='flex flex-col md:flex-row justify-center items-center py-10'>
    <Image src={video} className='h-[80%] w-full md:w-[50%] pt-3 pb-4' alt="" />
  </div>


  <div className='bg-[#023D6D] text-white py-6'>
      <div className="text-center px-4 sm:px-20">
        <h1 className='pt-3 font-bold text-[18px] md:text-[22px]'>
          The Main Difference Between The “OLD WAY”
        </h1>
        <h1 className='font-bold text-[18px] md:text-[22px]'>
          And “NEW WAY” Of Parenting…
        </h1>
        <h1 className='font-bold text-[18px] md:text-[22px]'>
          ​ALL FOR 99% OFF
        </h1>
      </div>

      <div className="px-4 sm:px-20 w-[50%] mx-auto ">
        <p className='pt-3 text-[14px] md:text-[16px]'>
          Because your kids will be more likely to succeed in life if they know what they value, can quickly recall such on their own and will eventually be better equipped to make decisions based on those values.
        </p>
        <p className='pt-3 text-[14px] md:text-[16px]'>
          You'll also find yourself with fewer disagreements because everyone will be on the same page about what's important.
        </p>
        <p className='pt-3 text-[14px] md:text-[16px]'>
          It will make family conversation easier and more meaningful when everyone agrees on how things should be done or talked about in your home.
        </p>
        <p className='pt-3 text-[14px] md:text-[16px]'>
          Having common goals means that everyone knows what their role is within the family structure—and how they contribute to making it work!
        </p>
      </div>

      <div className='flex justify-center items-center pt-6'>
        <Image src={lenght} alt="Description of image" className='w-full md:w-[50%] h-auto object-cover' />
      </div>
    </div>



  <div className="container mx-auto w-full md:w-[50%] px-4">
    <p className="text-[20px] md:text-[24px] text-[#FF9900] font-bold my-4 text-center">
      Simplify Parenting with This Tool: A Guide for Hands-On Parents
    </p>
    <div className="bg-[#6BAEBF] rounded-3xl text-white p-6 mx-auto mb-6">
      <p className="text-[24px] md:text-[28px] font-semibold">FACT:</p>
      <p className="text-[24px] md:text-[28px] py-5 font-semibold">
        By Lowering The Price To $97.00…
        <br />
        It Allows Me To Help More Parents Lead Their Homes Sustainably
      </p>
    </div>
    <p className="py-4 text-[14px] md:text-[16px] font-semibold">
      I consider that a true win/win...Also in most cases, I take a loss when selling at this price. It costs me just over $25.00 in advertising expenses to find parents like you who want to be more intentional.
      <br />
      <br />
      So why would I do that? Simple.
      <br />
      I’m making this offer with the idea that you’ll be very impressed with what I’m giving you today, and you’ll help me reach other parents as well by sharing this.
      <br />
      <br />
      I’m hoping that this interactive tool can lead you to a happier family life. Pretty straightforward.
      <br />
      <br />
      Anyway - with all of that said, this is a limited offer. Oh. And in case you’re wondering.
      <p className="text-black py-5 text-[20px] md:text-[24px] font-extrabold">
        Yes. Of course, there’s a money-back guarantee!
      </p>
    </p>
    <div className="w-full">
      <p className="text-[28px] md:text-[32px] font-bold w-full text-[#6BAEBF]">
        And Before You Try The FAMILY HANDBOOK GENERATOR... 
        I Want You To Know That There’s No Catch!
      </p>
    </div>
    <p className="py-4 text-[14px] md:text-[16px] font-semibold">
      And I know there are some websites out there that offer you a great deal on something but then they stick you in some program that charges your card every month.
      <br />
      <br />
      This isn't one of them.
      <br />
      <br />
      There's NO hidden "continuity program" you have to try or anything even remotely like that.
      <br />
      <br />
      I'm literally letting you create your very own family handbook, for $97.00, as a means of "putting my best foot forward" and demonstrating real value.
    </p>
  </div>
</>

  );
};
