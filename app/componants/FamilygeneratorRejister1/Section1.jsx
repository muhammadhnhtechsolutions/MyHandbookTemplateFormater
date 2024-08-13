'use client'
import React from "react";
import Image from "next/image";
import img2 from "../../assets/imges/37f71e3e875722f0616e181f800ca950_1200_80.webp";
import img from "../../assets/imges/723016be2df4059cb17ffb8a3b1fe1a1_1200_80.webp";
import img1 from "../../assets/imges/800191e489940aab191fe73187a28bf5_1200_80.webp";

import Section2 from "./Section2";
import { Section4 } from "./Section4";
import { Section5 } from "./Section5";
import { Section6 } from "./Section6";
import { Section8 } from "./Section8";
import { Section9 } from "./Section9";
import { useRouter } from "next/navigation";
export const Section1 = () => {
  const router = useRouter();
  return (
    <div className="container m-auto  pt-12">
      <div className="w-[100%] flex md:flex-row flex-col-reverse md:space-x-5 md:space-y-0 space-y-5  p-5">
        <div className="md:w-[70%] w-full">
          <div className="border-[2px] p-2 rounded-md  ">
            <a href="">
              <iframe
                width="100%"
                height="440"
                src="https://www.youtube.com/embed/BSiS6o9I9o8?si=ZB6NV_I63AWcoWXl"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </a>
          </div>
          <div className="w-full">
            <p className="justify-center flex text-[32px] font-bold text-white   py-3 ">
              WHAT IS THE{" "}
              <span className="pl-2 text-[#ff9900]">
                {" "}
                FAMILY HANDBOOK GENERATOR ?
              </span>{" "}
            </p>
            <p className="justify-center text-[19px] font-medium text-white   ">
              The Family Handbook Generator is an{" "}
              <span className="underline font-bold">
                interactive tool created for moms and dads
              </span>{" "}
              by a team of successful intentional parents, Executive Coaches,
              Counselors, CEOs, Entrepreneurs, and others to:{" "}
            </p>
            <p className="justify-center text-[19px] font-medium text-white pt-5  ">
              Walk moms and dads through a simple step-by-step process for
              creating a handbook that is specific to their family.{" "}
            </p>
            <p className="text-[19px] font-medium text-white">
              It can instantly generate customized Family:
            </p>
          </div>
          <div className="w-full pt-7">
            <p className="justify-center  text-[19px] font-bold text-white    ">
              Core Value Statements,
            </p>
            <p className="justify-center text-[19px] font-medium text-white   ">
              Mission Statements,
            </p>
            <p className="justify-center text-[19px] font-medium text-white   ">
              Media Agreements,
            </p>
            <p className="text-[19px] font-medium text-white">
              Code of Conduct and more....
            </p>
            <p className="text-[15px] font-normal text-white py-8">
              ALL FULLY CUSTOMIZED FOR YOUR FAMILY!
            </p>
            <p className="text-[32px] font-bold leading-10 text-white ">
              <span className="text-[#ff9900] pr-2">
                {" "}
                FAMILY HANDBOOK GENERATOR
              </span>
              IS THE MODERN DAY PARENTING STRATEGY.
            </p>
          </div>
        </div>

        <div className="md:w-[30%] w-full  border-[#ff9900] flex justify-center md:justify-center sm:justify-center  flex-col  items-center rounded-xl bg-[#ff9900] m-auto  py-1 shadow-2xl">
          <div className="">
            <div className="justify-center">
              <p className="text-[18px] text-center font-bold  text-white ">
                NOW AVAILABLE FOR INSTANT ACCESS
              </p>
            </div>
            <div className="bg-white pt-4 p-5 mx-1">
              <div>
                <Image src={img} alt="" />
              </div>
              <div className="">
                <p className="text-[#e93d3d] text-[23px] text-center font-extrabold  ">
                  ONLY $67.00 TODAY!
                </p>
                <p className=" text-[19px] text-center font-bold pt-4  line-through">
                  LIST PRICE $250
                </p>
                <p className=" text-[19px] text-center font-bold py-8 ">
                  YOU’RE SAVING $201
                </p>
                <div className="justify-center">
                  <p className="text-[18px] text-center font-bold   ">
                    Get Instant Access Plus 5 Bonuses For Just $67.00!
                  </p>
                  <p className="text-[16px] text-center font-bold pt-5  ">
                    NOW AVAILABLE FOR INSTANT Family Customization!
                  </p>
                </div>
                <div className="pt-16">
                  <label htmlFor="">Email*</label>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Your best email*** "
                    className="border-[1px] border-[#ACACACFF] rounded- w-full p-1  "
                  />
                </div>
                <div className="pt-16">
                  <button onClick={() => router.push('/checkout-page')} className="bg-[#36ca37FF] text-white p-3 text-[20px] font-semibold">
                    ACCESS FAMILY HANDBOOK GENERATOR NOW!
                  </button>
                </div>
              </div>
              <div className="bg-white h-full  space-y-5 pt-16 pb-1 p-1 m-auto ">
            <div>
              <Image src={img1} alt="" />
            </div>
            <div>
              <Image src={img2} alt="" />
            </div>
          </div>
            </div>
            
          </div>
         
        </div>
      </div>
      <div className="w-full   ">
  
    <div>
      {/* <Section4/> */}
      <Section5/>
      {/* <Section6/> */}
   
      {/* <Section7/> */}
      {/* <Section8/>  */}
      <Section9/>
      <div className='pt-5 bg-[#141125] '>
      <footer className="p-5 text-center    text-[20px] font-medium leading-7 container mx-auto text-white ">
      2022 © FAMILY HANDBOOK GENERATOR ALL RIGHTS RESERVED
      </footer>
    </div>
    </div>

    </div>
    </div>
  );
};
