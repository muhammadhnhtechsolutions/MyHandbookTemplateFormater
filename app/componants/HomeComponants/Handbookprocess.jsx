'use client';
import React from 'react';
import icon1 from "../../assets/imges/image_28-removebg-preview.png";
import icon2 from "../../assets/imges/image_29-removebg-preview.png";
import icon4 from "../../assets/imges/image_30-removebg-preview.png";
import icon3 from "../../assets/imges/icon2-removebg.png";
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Handbookprocess = () => {
  const router = useRouter();
  const handleRoute = () => {
    router.push('/login');
  };

  return (
    <div className="bg-primary p-5 montserrat">
      <div className="text-center p-5">
        <h1 className="font-bold text-[#ff9900] text-4xl droid mb-6">The Family Handbook Process</h1>
        <h3 className="text-white pb-5 font-medium text-lg md:text-xl montserrat">Create in Four Easy Steps</h3>
      </div>
      <div className="flex flex-wrap justify-center space-x-6 mb-6">
        <div className="flex flex-col items-center w-28">
          <div className="bg-white flex justify-center items-center border-2 border-wheat rounded-2xl p-4">
            <Image src={icon1} alt="Join" className="w-24 h-24 object-contain" />
          </div>
          <p className="text-center text-white font-medium mt-2">Join</p>
        </div>
        <div className="flex flex-col items-center w-36">
          <div className="bg-white flex justify-center items-center border-2 border-wheat rounded-2xl p-4">
            <Image src={icon3} alt="Customize" className="w-24 h-24 object-contain" />
          </div>
          <p className="text-center text-white font-medium mt-2">Customize with step by step Digital Coach</p>
        </div>
        <div className="flex flex-col items-center w-28">
          <div className="bg-white flex justify-center items-center border-2 border-wheat rounded-2xl p-4">
            <Image src={icon2} alt="Review" className="w-24 h-24 object-contain" />
          </div>
          <p className="text-center text-white font-medium mt-2">Review Drafts</p>
        </div>
        <div className="flex flex-col items-center w-28">
          <div className="bg-white flex justify-center items-center border-2 border-wheat rounded-2xl p-4">
            <Image src={icon4} alt="Download" className="w-24 h-24 object-contain" />
          </div>
          <p className="text-center text-white font-medium mt-2">Download</p>
        </div>
      </div>
      <div className="text-center p-5 md:px-20 md:w-[75%] montserrat mx-auto">
        <p className="text-white text-base md:text-lg mb-4">
          Our simple step-by-step process allows moms and dads to create their own customized Family Mission, Vision & Values Statements along with Family Media Agreements, Family Constitution, Code of Conduct, and more.
        </p>
        <p className="text-white mb-5">
          Instantly available for immediate download, use, and display for your church families. See how it works...
        </p>
      </div>
      <div className="text-center montserrat">
        <button onClick={handleRoute} className="text-[23px] w-[50%] md:w-[20%] hover:bg-[#21A7D0] bg-[#FF9900] duration-300 ease-in leading-[38px] font-[400] text-white py-[8px] px-[30px] rounded-[10px] m-auto">
          GET STARTED
        </button>
      </div>
    </div>
  );
};

export default Handbookprocess;
