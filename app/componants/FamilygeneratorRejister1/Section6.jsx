/* eslint-disable react/no-unescaped-entities */
'use client'
import React from "react";
import Image from "next/image";
import img11 from "../../assets/imges/5bf805014c42a8006c51a4c66b475398_1200_80.webp";
import img7 from "../../assets/imges/637dcf630f648499150e64b78521cb1b_1200_80.webp";
import img8 from "../../assets/imges/4cbd4652dab009b842f5c0cc81bb668b_1200_80.webp";
import img9 from "../../assets/imges/0197af50337630bdbc0283ff09c99df2_1200_80.webp";
import img10 from "../../assets/imges/839e7f219d4066e39ee437d8e224b162_1200_80.webp";
import img6 from "../../assets/imges/eb2258eacea488c427e0c1f90bccc053_1200_80.webp";
import img13 from "../../assets/imges/37f71e3e875722f0616e181f800ca950_1200_80.webp";
import img3 from "../../assets/imges/723016be2df4059cb17ffb8a3b1fe1a1_1200_80.webp";
import img4 from "../../assets/imges/08bea446b1162a7fd43053da97737b6d_1200_80.webp";
import img12 from "../../assets/imges/800191e489940aab191fe73187a28bf5_1200_80.webp";
import fam from "../../assets/imges/2e60eaac1644a5bf72dcf4183f21a9d7_1200_80.webp";

export const Section6 = () => {
  return (
    <>
      <div className="text-center">
        <p className="text-[22px] Montserrat text-[#023D6D] font-bold leading-[61px]">
          Here’s A Summary Of Everything You Get In This Limited-Time Deal...
        </p>
      </div>
      <div className="justify-center flex flex-wrap">
        <Image src={img9} alt="Image 9" />
        <Image src={img10} alt="Image 10" />
        <Image src={img11} alt="Image 11" />
        <Image src={img6} alt="Image 6" />
        <Image src={img7} alt="Image 7" />
        <Image src={img8} alt="Image 8" />
      </div>
      <div className="pt-5 w-full text-black">
        <div className="bg-[#FF9900] text-black justify-center shadow-2xl rounded-md mx-auto p-6">
          <div className="text-center">
            <h1 className="text-[50px] pt-5 font-bold">
              FREE BONUS
              <p className="font-bold text-[19px]">
                Over $3000 Worth Of Bonuses!
              </p>
            </h1>
          </div>
          <div className="font-normal justify-items-center leading-8 text-center text-[20px]">
            <p>✓ Creating a Strong Family Foundation: A Handbook for Parents to Impact and Influence Their Children</p>
            <p>✓ The Power of Shared Vision: How Parents Can Guide Their Family Towards a Common Goal</p>
            <p>✓ Building a Team: A Handbook for Parents to Create a Strong and United Family Unit</p>
            <p>✓ Shaping Core Values: How Parents Can Instill Important Beliefs in Their Children</p>
            <p>✓ From Chaos to Cohesion: A Guide for Parents to Redirect Their Family's Path Towards Success</p>
            <p className="py-5 text-[22px] font-bold">
              There’s Simply Too Much Value To List It All Here…
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
