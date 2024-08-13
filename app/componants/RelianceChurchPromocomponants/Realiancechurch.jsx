/* eslint-disable react/no-unescaped-entities */
'use client'
import React from 'react'
import Image from 'next/image';
import ReactPlayer from "react-player";
import { useRouter } from 'next/navigation';

import img1 from '../../assets/imges/bannerSectionImg.jpg';
import image2 from '../../assets/imges/mohmmad.png';
import check from '../../assets/imges/image 12.png';
import image1 from '../../assets/imges/image 5.png';
import image3 from '../../assets/imges/image 67.png';
import threesimkage from '../../assets/imges/image 70.png';

const Realiancechurch = () => {
  const router = useRouter();
  
  const handleRoute = () => {
    router.push('/login');
  };

  const handleRoute1 = () => {
    router.push('/family-handbook-generator');
  };

  return (
    <>
      {/* Section 1 */}
      <div className="h-full relative">
        <Image
          src={image3}
          alt="Family Handbook Compass"
          className="absolute inset-0 w-full h-full object-cover"
          layout="fill"
        />
        <div className="relative inset-0 flex items-center justify-center bg-white/5">
          <div className="text-center p-4 md:p-8 w-full md:w-3/4 lg:w-1/2 sm:text-[31px] pt-0">
            <Image
              src={image1}
              alt="Family Handbook"
              className="mx-auto mb-6"
              width={200}
              height={100}
            />
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 montserrat">
              Family Vision Initiative
            </h2>
            <p className="text-[18px] md:text-[24px] montserrat font-normal mt-4 py-8">
              Then the LORD answered me and said: “Write the vision And make it plain on tablets, That he may run who reads it. For the vision is yet for an appointed time; But at the end it will speak, and it will not lie.
              <br />
              Habukkuk 2:2-3
            </p>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="container mx-auto px-4 py-10">
        <p className="text-[20px] md:text-[24px] font-bold montserrat text-center">
          A Message from Pastor Phil
        </p>
        <div className="flex justify-center items-center mt-6">
          <ReactPlayer
            className="w-full h-auto"
            url="https://familyhandbook.s3.amazonaws.com/clientsidevideo/com-vW9-6qsG.mp4"
            controls
            // width="100%"
          />
        </div>
        <p className="text-[20px] md:text-[24px] font-bold montserrat text-center py-7">
          Where family vision is strong...
        </p>
        <div className="flex justify-center">
          <ul className="list-none flex flex-col items-center text-lg md:text-2xl font-bold">
            <li className="flex items-center mb-4">
              <Image
                src={check}
                alt="Family"
                className="w-[24px] md:w-[32px] h-[24px] md:h-[32px] mr-2"
              />
              <label className="text-lg">Peer Pressure is weak</label>
            </li>
            <li className="flex items-center mb-4">
              <Image
                src={check}
                alt="Family"
                className="w-[24px] md:w-[32px] h-[24px] md:h-[32px] mr-2"
              />
              <label className="text-lg">Gender Confusion is weak</label>
            </li>
            <li className="flex items-center mb-4">
              <Image
                src={check}
                alt="Family"
                className="w-[24px] md:w-[32px] h-[24px] md:h-[32px] mr-2"
              />
              <label className="text-lg">Faith Confusion is weak</label>
            </li>
            <li className="flex items-center mb-4">
              <Image
                src={check}
                alt="Family"
                className="w-[24px] md:w-[32px] h-[24px] md:h-[32px] mr-2"
              />
              <label className="text-lg">Teenage Rebellion is weak</label>
            </li>
          </ul>
        </div>
        <p className="text-[20px] md:text-[24px] font-bold montserrat text-center pt-7">
          We will become a church who embraces
        </p>
        <p className="text-[20px] md:text-[24px] font-bold montserrat text-center">
          God's Vision for Family TOGETHER!
        </p>
      </div>

      {/* Section 3 */}
      <div className="py-8 md:py-16 bg-[#D9D9D9] p-4 md:p-8 text-center rounded-lg">
        <h2 className="text-2xl md:text-[32px] font-bold mb-4 montserrat">
          BEGIN WITH YOUR <br /> FAMILY MISSION STATEMENT
        </h2>
        <div className="text-center montserrat">
          <button
            onClick={handleRoute}
            className="text-[16px] md:text-[18px] w-[50%] sm:w-[40%] md:w-[30%] lg:w-[20%] hover:bg-[#21A7D0] bg-[#6BAEBF] duration-300 ease-in leading-[38px] font-[400] text-white py-[8px] px-[30px] rounded-[20px] m-auto"
          >
            GET STARTED
          </button>
        </div>
      </div>

      {/* Section 4 */}
      <div className="py-8 md:py-16 p-4 md:p-8 text-center rounded-lg">
        <h2 className="text-2xl md:text-[24px] font-bold mb-4 montserrat">
          Lead Your Family With Custom Family Vision Statements
        </h2>
        <div className="flex justify-center items-center">
          <Image
            src={threesimkage}
            alt="Family"
            className="w-full max-w-[500px] h-auto"
          />
        </div>
      </div>

      {/* Footer Section */}
      <footer>
        <div className="py-8 md:py-16 bg-[#D9D9D9] p-4 md:p-8 text-center rounded-lg">
          <h2 className="text-2xl md:text-[32px] font-bold mb-4 montserrat">
            Create, Download & Print Today!
          </h2>
          <div className="text-center montserrat">
            <button
              onClick={handleRoute1}
              className="text-[16px] md:text-[18px] w-[90%] sm:w-[40%] md:w-[30%] lg:w-[25%] hover:bg-[#21A7D0] bg-[#6BAEBF] duration-300 ease-in leading-[38px] font-[400] text-white py-[8px] px-[30px] rounded-[20px] m-auto"
            >
              I’m a Pastor, Sign me up!
            </button>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Realiancechurch;
