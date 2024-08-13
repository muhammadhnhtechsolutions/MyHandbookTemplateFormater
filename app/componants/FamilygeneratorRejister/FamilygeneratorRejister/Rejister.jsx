'use client'
import React from "react";
import { Section1 } from "./Section1";
import Section2 from "./Section2";
import { Section4 } from "./Section4";
import { Section5 } from "./Section5";
import { Section6 } from "./Section6";

import { Section8 } from "./Section8";
import { Section9 } from "./Section9";
import { useRouter } from "next/navigation";

export const Rejister = () => {
  const router = useRouter();
  return (
    <div className="w-full   ">
    <div className=" reji pt-10">
    <div
      onClick={() => router.push('/checkout-page')}
      className="bg-[#37CA37] text-center p-2 lg:mx-80 hover:shadow-sm hover:shadow-white cursor-pointer"
    >
      <button className="justify-center flex text-[32px] font-bold text-white w-full">
        Create Your Family Mission Statement Today!
      </button>
    </div>
      <div className="md:pt-5 pt-0">
        <p className="justify-center flex text-[32px] font-bold  text-white">
          Whether you like it or not, your family is a team. How is your team
          performing?
        </p>
        <p className="justify-center flex text-[32px] font-bold  text-[#ff9900]">
          ARE YOU LEADING YOUR TEAM?
        </p>
        <p className="justify-center flex text-[32px] font-bold  text-[#ff9900]">
          ARE YOU LEADING YOUR FAMILY WITH INTENTION AND PURPOSE?
        </p>
        <p className="m-auto text-center  text-[65px] font-medium  text-white">
          WHAT&lsquo;S YOUR FAMILY IDENTITY?
        </p>
        <p className="  justify-center flex text-[33px] left-11 font-bold  underline text-white">
        CREATE YOUR FAMILY HANDBOOK TODAY!
        </p>
      </div>
      <Section1/>
      <Section2/>
    </div>
    <div>
      <Section4/>
      <Section5/>
      <Section6/>
   
      {/* <Section7/> */}
      <Section8/> 
      <Section9/>
      <div className='pt-5 bg-[#141125] '>
      <footer className="p-5 text-center    text-[20px] font-medium leading-7 container mx-auto text-white ">
      2022 © FAMILY HANDBOOK GENERATOR ALL RIGHTS RESERVED
      </footer>
    </div>
    </div>

    </div>
  );
};
