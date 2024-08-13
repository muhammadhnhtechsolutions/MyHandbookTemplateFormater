"use client";
import React from "react";
import Image from "next/image";
import igpic from "../../../assets/imges/7d1100ef2c30b425941b9050851b1e77_1200_80.webp";
import sign from "../../../assets/imges/982f913cded92a2da599e725a2d10eb6_1200_80.webp";

export const Section9 = () => {
  return (
    <div className="py-5 w-full">
      <div className="w-full container mx-auto bg-[#fff] justify-center shadow-2xl rounded-md">
        <div>
          <h1 className="text-[50px] pt-5 text-center text-[#ff9900] font-bold leading-[65px] ">
            The World’s Best Money Back Guarantee
          </h1>
          <p className="pt-5 font-bold text-[19px] text-center">
            And Why You Can’t Lose With This
          </p>
        </div>
        <div className="font-normal py-5 leading-8 text-center text-[22px]">
        <p className="py-4">
  Create Your Family Handbook Access, Customize and download your
  Family Tools and Use Them. If You Don&apos;t Feel It Was Worth Every
  Penny...
</p>
          <p className="py-4">Get A Refund & Keep Everything Free of Charge.</p>
        </div>
        <div className="justify-center pt-10 mx-20">
          <Image src={igpic} alt="" className="w-auto h-auto" />
          <p className="font-extrabold text-[#e93d3d] py-5 leading-8 text-center text-[28px]">
            ONLY $97 TODAY
          </p>
          <p className="font-bold text-[#165f87] py-5 leading-8 text-center text-[19px]">
            Now Available For Instant Access
          </p>
          <div className="pt-6 text-center">
            <button className="bg-[#36ca37FF] aniation-shade py-2 text-[25px] px-5 font-bold leading-[25px] text-white">
              <div className="flex flex-col w-full">
                ACCESS FAMILY HANDBOOK GENERATOR NOW
              </div>
              <span className="text-[11px] font-semibold">
                Backed by Our 30-Day 100% Money Back Guarantee
              </span>
            </button>
            <div className="py-3 text-[21px] leading-7 font-medium justify-center flex text-center">
              <p>Until then, I wish all the best success for your family,</p>
            </div>
            <div className="justify-center text-center">
              <div className="flex justify-center">
                <Image src={sign} alt="" className="w-[250px] h-auto" />
              </div>
              <p className="text-[22px] leading-7 font-medium py-4">
                P.S. Remember, the Family Handbook Generator that comes in with
                The BEST Money-Back Guarantee In The World.
              </p>
              <p className="text-[22px] leading-7 font-normal py-4">
                Try it, Print it, Implement it, Get results.
              </p>
              <p className="text-[22px] leading-7 font-normal py-4">
                And if you’re not happy for any reason (and I mean ANY reason) - just
                let me know and we’ll refund you your $97.00.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
