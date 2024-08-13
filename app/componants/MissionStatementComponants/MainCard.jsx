'use client';
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
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
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
      zIndex: 999, // Ensure overlay is on top
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%, -50%)",
      border: "none",
      background: "transparent",
      overflow: "auto", // Allow scrolling inside the modal
      width: isMobile ? "100%" : "50%",
      maxHeight: "80vh", // Limit the height of the modal to 80% of the viewport
      borderRadius: "10px",
    },
  };

  return (
    <div className="container m-auto p-5 md:pt-12 overflow-y-auto">
      <div className="w-full">
        <div className="flex justify-end items-center space-x-5 montserrat">
          <div className="w-full flex flex-col md:items-end">
            <p className="text-[16px] font-[400] leading-[19px]">Have a question?</p>
            <p className="text-[16px] font-[400] leading-[19px]">Watch a help video</p>
          </div>
          <div
            onClick={helpopenModal}
            className="cursor-pointer flex justify-center items-center h-[40px] w-[200px] bg-[#FDA513] leading-[23px] font-[400] rounded-3xl text-black"
          >
            <p className="text-[15px] font-bold montserrat text-black">Help</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center flex-col md:flex-row md:space-x-5 space-y-5 md:space-y-0 rounded-lg p-3">
        <div className="w-full md:w-1/2">
          <div className="flex flex-col md:flex-row md:space-x-5 space-y-5 md:space-y-0 rounded-lg items-center justify-center">
            <div className="w-full">
            <div className="bg-primary text-white p-6 rounded-3xl flex flex-col sm:flex-row items-center sm:items-start">
  <div className="flex-shrink-0">
    <Image src={stepImage1} alt="Step 1" className="w-[73px] h-auto mx-auto sm:mx-0" />
  </div>
  <div className="mt-4 sm:mt-0 sm:ml-4 montserrat flex-1 text-center sm:text-left">
    <h4 className="text-xl font-bold text-[#FDA513]">Step 1</h4>
    <p className="mt-2 text-base leading-relaxed">
      Create a Mission Statement <br />
      Use the instructions from the first step to create the instructions box.
    </p>
  </div>
</div>

            </div>
          </div>
          <LeftSide />
        </div>
      </div>

      <Modal
        isOpen={helpisModalOpen}
        onRequestClose={helpcloseModal}
        style={helpcustomStyles}
        contentLabel="Help Modal"
      >
        <div className="bg-white border-2 rounded-3xl">
          <div className="bg-white m-auto overflow-auto flex-col justify-center items-center rounded-[10px] p-5">
            <div className="flex justify-end p-2">
              <X className="cursor-pointer text-2xl" onClick={helpcloseModal} />
            </div>
            <hr />
            <div className="my-2">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/GSoND9ukJII?si=VibUhIW3r7q-fUsr"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default MainCard;
