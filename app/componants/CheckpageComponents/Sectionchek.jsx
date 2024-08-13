'use client'
import React from "react";
import Image from "next/image";
import img11 from "../../assets/imges/5bf805014c42a8006c51a4c66b475398_1200_80.webp";
import img7 from "../../assets/imges/637dcf630f648499150e64b78521cb1b_1200_80.webp";
import img8 from "../../assets/imges/4cbd4652dab009b842f5c0cc81bb668b_1200_80.webp";
import img9 from "../../assets/imges/0197af50337630bdbc0283ff09c99df2_1200_80.webp";
import img10 from "../../assets/imges/839e7f219d4066e39ee437d8e224b162_1200_80.webp";
import img6 from "../../assets/imges/eb2258eacea488c427e0c1f90bccc053_1200_80.webp";
import { Secti2 } from "./Secti2";

export const Sectionchek = () => {
  return (
    <div className="py-10  ">
      <div className="text-center">
        <p className="font-bold leading-12 text-secondary md:text-[45px] py-2">
        Here is a glimpse of what you will get inside
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-16">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
          <Image src={img6} alt="" />
          <Image src={img8} alt="" />
          <Image src={img10} alt="" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
          <Image src={img7} alt="" />
          <Image src={img9} alt="" />
          <Image src={img11} alt="" />
        </div>
      
      </div>

      
    </div>
  );
};
