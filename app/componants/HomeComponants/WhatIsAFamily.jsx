/* eslint-disable react/no-unescaped-entities */
'use client';
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Loader from "../Layout/Loader";
import ReactPlayer from "react-player";
import Image from 'next/image';
import familyImage2 from '../../assets/imges/image 13.png';

const WhatIsAFamily = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  
  const handleRoute = () => {
    setIsLoading(true);
    // Add routing logic if needed
  };

  return (
    <>
      {isLoading && <Loader />}
      <div className="relative h-screen overflow-hidden">
        <Image
          src={familyImage2}
          alt="Family Handbook Compass"
          className="absolute inset-0 w-full h-full object-cover"
          width={800}
          height={500}
        />
        {/* Overlay Start */}
        <div className="absolute inset-0 bg-white opacity-5"></div>
        {/* Overlay End */}
        <div className='absolute inset-0 flex items-center justify-center z-40 px-4 md:px-10 lg:px-20'>
          <div className="flex flex-col md:flex-row gap-5 items-center justify-center w-full h-full ">
            <div className="w-full md:w-1/2 px-4">
              {/* Card Start */}
              <div className="bg-opacity-70 text-[#023D6D] p-4 montserrat rounded-lg">
  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold  montserrat pb-4 ">
  Why is it essential?
  </h2>
  <p className="text-base md:text-lg lg:text-xl ">
    {/* <span>The Family Handbook serves as a compass for parents;</span> {""}
    Culivatitng their family&apos;s distinct identity and collective vision. Drawing parallels with how successful business owners
    <span> cast vision and set the culture</span> for their teams, the <span>Family Handbook is a family&apos;s unique tool</span> to
    foster all that they&apos;ve identified to be most important in their family. */}
    The Family Handbook serves as a compass for busy parents who wish to be intentional and lead well; Cultivating their family&apos;s distinct identity and collective vision. 
  </p>
  <br />
  Drawing parallels with how successful business owners cast vision and set the culture for their organizations, the Family Handbook is a familys&apos;s unique tool to foster all that they've identified to be most important in their family and that which they wish to be a part of their ultimate family legacy.
</div>

              {/* Card End */}
            </div>
            <div className="w-full md:w-1/2 px-4">
              <ReactPlayer
                className="w-full h-auto"
                url="https://familyhandbook.s3.amazonaws.com/clientsidevideo/com-vW9-6qsG.mp4"
                controls
                width="100%"
                height="auto"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatIsAFamily;
