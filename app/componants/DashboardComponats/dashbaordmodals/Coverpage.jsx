// Import necessary modules
import React, { useEffect, useState } from "react";
import Image from "next/image";
import img from "../../../assets/imges/1Cover.png";
import Loader from "../../../assets/loader.gif";
import Modal from "react-modal"; 
import { X } from "lucide-react";
import Link from "next/link";

const Coverpage = ({ onClick }) => {
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isWatching, setIsWatching] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timeoutId = setTimeout(() => {
      setLoading(false);
      setIsModalOpen(false);
    }, 600);

    return () => clearTimeout(timeoutId);
  }, []);

  
  const title = {
    Webtext:
      "Every book worth reading has a cover page. The cover page for your Family Handbook is the first thing you and your family will see when you reach for it. It tends to give the following pages more purpose and the readers more intention. Your Cover Page will need a picture. We encourage you to use a favorite family picture. If you don’t have one on the computer you are using, just use a generic one for now. Don’t get stuck searching for the perfect picture. You can always come back and change things or even create an entirely new book for your family. Just get started.",
    responsivetext:
      "Add a personal or generic picture to your handbook's cover page.",
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
      padding: "10px",
      background: "transparent",
      overflow: "visible",
      width: "100%",
      borderRadius: "10px",
    },
  };

  return (
    <div className="bg-white m-auto w-full md:w-[65%] md:pt-6 h-screen md:h-auto overflow-y-auto flex flex-col justify-center items-center md:rounded-[30px] md:border-[6px] md:border-primary md:py-0 py-2">
        <div className="flex justify-end w-full px-2">
        <h1 className="hidden text-primary droid md:block pb-2 w-full text-[35px] text-center font-bold leading-tight  cursor-pointer">
        Create Your Cover Page
      </h1>
      <div className="ml-auto">
        <X onClick={onClick} className="cursor-pointer justify-end" />
      </div>
    </div>
 
      {loading ? (
        <div className="grid place-items-center p-2 h-[540px]">
          <Image
            src={Loader}
            alt="Cover Page Image"
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
              alt="Cover Page Image"
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
               Create Your Cover Page
              </h1>
            </div>
            {/* Popup */}
             
           
            <div className="h-90  text-xl md:text-base p-3 text-justify w-full ">
              
            <iframe
          src="https://player.vimeo.com/video/960399561?h=b8132739b2"
          width="100%"
          height="300px"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          className="rounded-lg"
        ></iframe>
              
            </div>
            <Link
          href="/cover_page"
          onClick={() => setLoadingText(true)}
          className="text-lg text-center hover:bg-blue-500 transition duration-300 ease-in-out leading-7 font-medium text-white bg-primary py-2 px-4 rounded w-full"
        >
          {loadingText ? "Loading..." : "GET STARTED"}
        </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Coverpage;
