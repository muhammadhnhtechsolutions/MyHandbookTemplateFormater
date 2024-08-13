"use client";
import React from "react";
import Image from "next/image";
import sec1 from "../../../assets/imges/800191e489940aab191fe73187a28bf5_1200_80.webp";
import img11 from "../../../assets/imges/5bf805014c42a8006c51a4c66b475398_1200_80.webp";
import img7 from "../../../assets/imges/637dcf630f648499150e64b78521cb1b_1200_80.webp";
import img8 from "../../../assets/imges/4cbd4652dab009b842f5c0cc81bb668b_1200_80.webp";
import img9 from "../../../assets/imges/0197af50337630bdbc0283ff09c99df2_1200_80.webp";
import img10 from "../../../assets/imges/839e7f219d4066e39ee437d8e224b162_1200_80.webp";
import igpic from "../../../assets/imges/7d1100ef2c30b425941b9050851b1e77_1200_80.webp";
import img6 from "../../../assets/imges/eb2258eacea488c427e0c1f90bccc053_1200_80.webp";

export const Section8 = () => {
  return (
    <div>
      <div>
        <div className="text-center">
          <p className="text-[50px] font-bold leading-[61px] ">
            Here Is <span className="text-[#ff9900] ">A Short Glimpse </span> Of
            What You’ll Experience Inside…
          </p>
        </div>
        <div>
          <div className="justify-center flex flex-wrap ">
            <Image src={img6} alt="" />

            <Image src={img7} alt="" />

            <Image src={img8} alt="" />

            <Image src={img9} alt="" />

            <Image src={img10} alt="" />

            <Image src={img11} alt="" />
          </div>
          <div className="pt-16 text-center">
            <button className="bg-[#36ca37FF] aniation-shade py-2 text-[28px] px-5 font-bold leading-[25px] text-white">
              <div className="flex flex-col w-full">
                ACCESS FAMILY HANDBOOK GENERATOR NOW FOR ONLY $97.00!
              </div>
              <span className="text-[11px] font-semibold">
                Backed by Our 30-Day 100% Money Back Guarantee
              </span>
            </button>
            <div className="py-3  justify-center flex text-center">
              <Image src={sec1} alt="" className="w-[500px]" />
            </div>
          </div>
          <div className="justify-center pt-10 mx-20">
            <Image src={igpic} alt="" className="w-auto h-auto" />
          </div>
          <div className="mx-20">
            <div className="justify-center ">
              <p className="text-[45px] font-semibold leading-[41px]">
                And{" "}
                <span className="text-[#ff9900]">
                  Before You Try The FAMILY HANDBOOK GENERATOR...{" "}
                </span>
                I Want You To Know That There’s No Catch!
              </p>
              <p className="py-4 text-[22px] font-normal">
                I realize this is very inexpensive and that I’m practically
                giving it away…
              </p>
              <p className="py-4 text-[22px] font-normal">
                And you’re probably wondering:
              </p>
              <p className="py-4 text-[22px] font-normal">
                “If you’re doing so well with this, why would you give it away
                easily if this is a unique idea?”…
                <p>So there has to be a “catch”…</p>
              </p>
              <p className="py-4 text-[22px] font-normal">
                And I know there are some websites out there that offer you a
                great deal on something but then they stick you in some program
                that charges your card every month.
              </p>
              <p className="py-4 text-[22px] font-normal">
  This isn&apos;t one of them.
</p>
             <p className="py-4 text-[22px] font-normal">
  There&apos;s NO hidden &quot;continuity program&quot; you have to try or
  anything even remotely like that.
</p>
            <p className="py-4 text-[22px] font-normal">
  I&apos;m literally letting you create your very own family handbook,
  for $97.00, as a means of &quot;putting my best foot forward&quot; and
  demonstrating real value.
</p>
           <p className="py-4 text-[22px] font-normal">
  My hope is that you&apos;ll love it and you&apos;ll leave me a great
  review so other parents could also benefit from it.
  <p>
    But with all that said, there is ONE thing to keep in mind:
  </p>
</p>

<p className="text-[45px] py-5 font-semibold leading-[45px]">
  By Lowering The Price To $97.00…
  <span className="text-[#ff9900]">
    It Allows Me To Help More {" "}
  </span>
  Parents Lead Their Homes Sustainably
</p>
             <p className="py-4 text-[24px] font-semibold leading-[35px]">
  I consider that a true win/win...Also in most cases, I take a loss when selling at this price. It costs me just over $25.00 in advertising expenses to find parents like you who want to be more intentional. So why would I do that? Simple. I&apos;m making this offer with the idea that you&apos;ll be very impressed with what I&apos;m giving you today, and you&apos;ll help me reach other parents as well by sharing this. I&apos;m hoping that this interactive tool can lead you to happier family life. Pretty straightforward. Anyway - with all of that said, this is a limited offer. Oh. And in case you&apos;re wondering... Yes.Of course, there&apos;s a money-back guarantee. In fact, I think it&apos;s...
</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
