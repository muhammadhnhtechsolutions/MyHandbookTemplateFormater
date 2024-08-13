'use client'
import React, { useEffect, useState } from "react";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import InstrucationInfo from '../VisionStatementComponants/InstrucationInfo'
import stepImage1 from "../../assets/imges/image 11.png";
import { IoInformationCircleSharp } from "react-icons/io5";
import Modal from "react-modal";
import { X } from "lucide-react";
import Image from "next/image";

const MainCard = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to handle resize
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const [helpisModalOpen, sethelpIsModalOpen] = useState(false);

  const helpopenModal = () => {
    sethelpIsModalOpen(true);
  };

  const helpcloseModal = () => {
    sethelpIsModalOpen(false);
  };

  const helpcustomStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.9)",
    },
    content: {
      top: "45%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      border: "none",
      background: "transparent",
      overflow: "visible",
      width: isMobile ? "100%" : "50%",
      borderradius: "10px",
    },
  };

  return (
    <div className="container m-auto p-5 md:pt-12">
    
    <div className=" w-full">
          <div className="flex justify-end items-center space-x-5 montserrat ">
            <div className="w-full flex flex-col md:items-end">
              <p className="text-[16px] font-[400] leading-[19px]">
                Have a question?
              </p>
              <p className="text-[16px] font-[400] leading-[19px]">
                Watch a help video
              </p>
            </div>
            <div onClick={helpopenModal} className="cursor-pointer flex justify-center items-center h-[40px] w-[200px] abbbbb bg-[#FDA513] leading-[23px] font-[400] rounded-3xl text-black">
              <p className="text-[15px] font-bold montserrat text-black">Help</p>
            </div>
          </div>
        </div>
      <div className="flex items-center justify-center flex-col md:flex-row md:space-x-5 space-y-5 md:space-y-0 rounded-lg p-3">
        <div className="w-full md:w-1/2">
        <div className="flex flex-col md:flex-row md:space-x-5 space-y-5 md:space-y-0 rounded-lg items-center justify-center">
        <div className="w-full ">
        <div className="bg-primary text-white W-[702px] p-6 rounded-3xl flex flex-col sm:flex-row">
          <div className="flex-shrink-0 mx-auto sm:mx-0">
            <div className="pt-10">
              <Image src={stepImage1} alt="Step 1" className="w-[73px] h-[73.52px]" />
            </div>
          </div>
          <div className="mt-4 sm:mt-0 sm:ml-4">
            <h4 className="text-xl font-bold text-[#FDA513]">Step 1</h4>
            <p className="mt-2 text-base leading-relaxed">
            Using the arrows below, scroll through the sample vision statements of other families.  When you see a template you like, click the “next step” button below.  You’ll be able to edit your family vision statement in the following step.
</p>

          </div>
        </div>
        </div>
        
      </div>
          <LeftSide />
        </div>
        {/* Add RightSide or other components as needed */}
      </div>

      <Modal
        isOpen={helpisModalOpen}
        onRequestClose={helpcloseModal}
        style={helpcustomStyles}
        contentLabel="Help Modal z-[999]"
        id="responsive_help_modal"
      >
        <div className="bg-white border-[2px] -z-[999]">
          <div className="bg-white m-auto overflow-y-hidden md:overflow-y-hidden flex-col justify-center items-center rounded-[10px]">
            <div className="">
              <>
                <div className="p-4 justify-end flex">
                  <p className="text-2xl mr-3 text-end">
                    <X className="cursor-pointer" onClick={helpcloseModal} />
                  </p>
                </div>
                <hr />
                <div className="my-2">
                  <iframe
                    width="630"
                    height="415"
                    src="https://www.youtube.com/embed/GSoND9ukJII?si=VibUhIW3r7q-fUsr"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
              </>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default MainCard;
