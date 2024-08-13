'use client'

import { X } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import img from "../../../assets/imges/Family Members Dash.png";
import Loader from "../../../assets/loader.gif";
// import familyvideo from "../../../assets/imges/familymember.mp4";
import Modal from "react-modal";
import Link from "next/link";
import ReactPlayer from 'react-player/lazy'
import { useAppDispatch } from "@/app/Redux/lib/hooks";
import { useRouter } from "next/navigation";
import { setParentspreview } from "@/app/Redux/lib/features/product/productSlice";
const Familymemberpage = ({ onClick }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loadingText, setLoadingText] = useState(false);
  const [isWatching, setIsWatching] = useState(false);
 const dispatch = useAppDispatch();
  useEffect(() => {
    setLoading(true);
    const timeoutId = setTimeout(() => {
      setLoading(false);
      setIsModalOpen(false);
    }, 600);

    return () => clearTimeout(timeoutId);
  }, []);

  const title = {
    Webtext: "This is a fun way to identify each member of your family and some of his/her unique characteristics. It is also a fun way for parents to share fun facts as well as to identify the hierarchy within the family. It will be helpful to have a picture handy of each family member. If you don’t have your favorite at the moment, just use what you have. You can always come back and make changes later.",
    responsivetext: "Identify and describe each family member with a picture.",
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
const handleLink = ()=>{
  dispatch(setParentspreview([]))
  router.push('/family_members')
  setLoading(false)
}
  return (
    <div className="bg-white m-auto w-full md:w-[65%] md:pt-6 h-screen md:h-auto overflow-y-auto flex flex-col justify-center items-center md:rounded-[30px] md:border-[6px] md:border-primary md:py-0 py-2">
        <div className="flex justify-end w-full px-2">
        <h1 className="hidden text-primary droid md:block pb-2 w-full text-[35px] text-center font-bold leading-tight  cursor-pointer">
      Add Your Family Roles
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
              alt="FAMILY MEMBER Image"
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
                Add Your Family Roles
              </h1>
            </div>
            {/* Popup */}
             
           
            <div className="h-90  text-xl md:text-base p-3 text-justify w-full ">
              
                {/* <iframe
                  src={"https://www.youtube.com/embed/Qf6EAb3crCE?si=56Jqz5AltiNHZaS5"}
                  width="100%"
            height="300"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            className="rounded-lg"
          ></iframe> */}
          <ReactPlayer
          className='react-player'
          url='https://familyhandbook.s3.amazonaws.com/website_videos/Family+Members.mp4
'
          width='100%'
          height='100%'
          controls={true}
          // light="https://images.netdirector.co.uk/gforces-auto/image/upload/q_auto,c_crop,f_auto,fl_lossy,x_0,y_1690,w_6337,h_4222/w_750,h_500,c_fill/auto-client/f74af5624881f9f894cab5d57aa6985b/mobile_homepage_banner.jpg"
        />
              
            </div>
              <button
                
                onClick={() => {
                  setLoadingText(true)
                 handleLink();
                }}
                className="text-lg text-center hover:bg-blue-500 transition duration-300 ease-in-out montserrat leading-7 font-medium text-white bg-primary py-2 px-4 rounded w-full "
              >
                {loadingText ? "Loading..." : "GET STARTED"}
              </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Familymemberpage;
