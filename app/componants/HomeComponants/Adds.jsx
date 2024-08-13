/* eslint-disable @next/next/no-sync-scripts */
'use client';
import React from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import { Avatar } from "flowbite-react";
import familyImage1 from '../../assets/imges/Family Handbook Generator 2.webp';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
const Adds = () => {
  const router = useRouter();
  const handleRoute = () => {
    router.push('/login');
  };

  return (
    <div className="py-10 bg-gray-100 montserrat">
      <h1 className="text-center text-2xl md:text-3xl droid text-[#6BAEBF] font-semibold mb-10">
        What people say about <br /><span className="text-[#FF9900]">My Family Handbook</span>
      </h1>
      <div className="flex flex-wrap justify-center gap-6 px-4">
        {Array(3).fill().map((_, index) => (
          <div
            key={index}
            className="relative bg-[#FF9900] p-6 rounded-lg text-[#023D6D] max-w-sm w-full md:w-96 flex flex-col items-start"
          >
            <div className="flex items-start mb-4 w-full">
              <FaQuoteLeft className="text-[#023D6D] text-4xl" />
            </div>
            <div className="text-left w-full mb-4">
              <h3 className="text-lg font-bold text-[#023D6D] mb-1">Carol Carnegie</h3>
              <p className="text-sm font-normal">
                Absolutely phenomenal! Family Handbook is incredibly valuable, and the step-by-step approach makes implementing core values seamless. A must-have for every family!
              </p>
            </div>
            <div className="flex items-center w-full">
              <Avatar alt="User settings" rounded />
              <div className="ml-3">
                <p className="text-sm font-semibold text-[#023D6D]">Wife and Mother of 3 Girls</p>
                <div className="flex space-x-1 mt-1">
                  {[...Array(5)].map((_, starIndex) => (
                    <FaStar key={starIndex} className="text-[#023D6D] text-lg" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="!mx-auto w-full md:w-[424px] py-10" >
            <Image
              src={familyImage1}
              alt="Family"
              className="object-cover w-full h-auto "
              width={200}
              height={200}
              layout="responsive"
            />
          </div>
          <div className="text-center montserrat">
        <button onClick={handleRoute} className="text-[23px] w-[50%] md:w-[20%] hover:bg-[#21A7D0] bg-[#FF9900] duration-300 ease-in leading-[38px] font-[400] text-white py-[8px] px-[30px] rounded-[10px] m-auto">
          GET STARTED
        </button>
      </div>
    </div>
  );
};

export default Adds;
