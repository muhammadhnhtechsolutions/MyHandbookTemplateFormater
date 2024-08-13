"use client";
import React, { useEffect, useState } from 'react'
import toastr from "toastr";
import Modal from "react-modal";
import { X } from "lucide-react";

import { IoInformationCircleSharp } from "react-icons/io5";
import Image from "next/image";

export default function InstrucationInfo({ video, tosterText }) {

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

  const [helpisModalOpen, sethelpIsModalOpen] = useState(false);

  const helpopenModal = () => {
    sethelpIsModalOpen(true);
  };

  const helpcloseModal = () => {
    sethelpIsModalOpen(false);
  };

  const handleClick = () => {
    toastr.options = {
      closeButton: true,
      debug: false,
      newestOnTop: false,
      progressBar: false,
      positionClass: "toast-top-right",
      preventDuplicates: false,
      onclick: null,
      showDuration: "300",
      hideDuration: "1000",
      timeOut: "100000",
      extendedTimeOut: "1000",
      showEasing: "swing",
      hideEasing: "linear",
      showMethod: "fadeIn",
      hideMethod: "fadeOut",
      onShown: function () {
        document.querySelectorAll('.toast').forEach(toast => {
          toast.style.backgroundColor = '#023D6D'; // Set the background color
          toast.style.color = 'white'; // Set the text color
          toast.style.opacity = '1'; // Remove the opacity
        });
      }
    };

    toastr.info(tosterText);
  };

  return (
    <>
     
        {/* Step Instruction */}
       

        {/* Help Section */}
        <div className="md:w-5/12 w-full flex justify-end">
          <div className='flex justify-end items-center space-x-5 montserrat'>
            <div className="w-full flex flex-col md:items-end text-right">
              <p className="text-[16px] font-[400] leading-[19px]">
                Have a question?
              </p>
              <p className="text-[16px] font-[400] leading-[19px]">
                Watch a help video
              </p>
            </div>
            <div
              onClick={helpopenModal}
              className='cursor-pointer flex justify-center items-center h-[40px] w-[200px] bg-[#FDA513] leading-[23px] font-[400] rounded-3xl text-black'
            >
              <p className='text-[15px] font-bold montserrat text-black'>Help</p>
            </div>
          </div>
        </div>
   

      <Modal
        isOpen={helpisModalOpen}
        onRequestClose={helpcloseModal}
        style={helpcustomStyles}
        contentLabel="Help Modal z-[999]"
        id='responsive_help_modal'
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
                    src={video}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  ></iframe>
                </div>
              </>
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}
