'use client'
import { X } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import img from "../../../assets/imges/10Constitution.png";
// import Button from './Button'
import Loader from '../../../assets/loader.gif'
import Modal from "react-modal";
import Link from "next/link";
import ReactPlayer from "react-player";
// import { Familyfamily_constService } from '@/app/services/FamilyConstService';
// import { toast } from 'react-toastify';
const FamilyConstitution = ({ onClick }) => {
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isWatching, setIsWatching] = useState(false);
  useEffect(() => {
    setLoading(true);
    const timeoutId = setTimeout(() => {
      setLoading(false);
      setIsModalOpen(false)
    }, 600);

    return () => clearTimeout(timeoutId);
  }, []);
  const title = {
    Webtext: "The Family Constitution is a valuable tool for some families. This was actually sent to us by a mom and dad who have used something similar with their children from a very young age. Their children had all memorized the entire Family Constitution by age 6. Pretty Impressive. Don’t worry. You wont have to think up your own. Use the sample in the next page and personalize it to your liking.",
    responsivetext: "Use a template to create a personalized Family Constitution.",
  };
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.9)",
    },
    content: {
      inset: "50% auto auto 50%",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      border: "none",
      padding:"10px;",
      background: "transparent",
      overflow: "visible",
      width: "100%",
      borderradius: "10px",
    },
  };
  return (
    <div className="bg-white m-auto w-full md:w-[65%] md:pt-6 h-screen md:h-auto overflow-y-auto flex flex-col justify-center items-center md:rounded-[30px] md:border-[6px] md:border-primary md:py-0 py-2">
        <div className="flex justify-end w-full px-2">
        <h1 className="hidden text-primary droid md:block pb-2 w-full text-[35px] text-center font-bold leading-tight  cursor-pointer">
        Create Your  FAMILY CONSTITUTION
      </h1>
      <div className="ml-auto">
        <X onClick={onClick} className="cursor-pointer justify-end" />
      </div>
    </div>
 
      {loading ? (
        <div className="grid place-items-center p-2 h-[540px]">
          <Image
            src={Loader}
            alt="Loader"
            width={500}
            height={500}
            className="object-contain rounded-lg"
          />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 p-2 h-[540px]">
          <div className="h-[500px]">
            <Image
              src={img}
              alt=" Create Your  FAMILY CONSTITUTION"
              width={500}
              height={500}
              className="object-contain rounded-lg h-full "
            />
          </div>
          <div className="flex flex-col justify-center items-center p-4">
            <div>
              {/* Title for Desktop */}
            
              {/* Title for Mobile */}
              <h1
                className="block md:hidden pb-2 text-3xl text-center font-bold leading-tight underline cursor-pointer"
                onClick={openModal}
              >
                 Create Your  FAMILY CONSTITUTION
              </h1>
            </div>
            {/* Popup */}
             
           
            <div className="h-90  text-xl md:text-base p-3 text-justify w-full ">
              
               
          <ReactPlayer
          className='react-player'
            url='https://familyhandbook.s3.amazonaws.com/website_videos/Constitution.mp4
'
          width='100%'
          height='100%'
          controls={true}
          // light="https://images.netdirector.co.uk/gforces-auto/image/upload/q_auto,c_crop,f_auto,fl_lossy,x_0,y_1690,w_6337,h_4222/w_750,h_500,c_fill/auto-client/f74af5624881f9f894cab5d57aa6985b/mobile_homepage_banner.jpg"
        />
              
            </div>
            <div className="w-full">
              
            <Link href={"/family_constitution"}
                  onClick={() => setLoadingText(true)}
                  className="text-[20px] block text-center hover:bg-[#21A7D0] duration-300 ease-in hover:ease-out leading-[30px]  font-[400] text-[white] montserrat bg-primary py-[5px] px-[10px] rounded-[4px] w-full  m-auto "
                  >
                  {loadingText ? "Loading..." : "GET STARTED"}
                </Link>
                  </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default FamilyConstitution;