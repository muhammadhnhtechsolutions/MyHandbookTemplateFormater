'use client'

import { X } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import img from "../../../assets/imges/CVS Dash.png";
import Loader from "../../../assets/loader.gif";
import { useRouter } from "next/navigation";
import { FamilyCoreValueService } from "@/app/services/CoreValuesServices";
import { toast } from "react-toastify";
import Modal from "react-modal";
import ReactPlayer from "react-player";
const CorevalueSatement = ({ onClick }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timeoutId = setTimeout(() => {
      setLoading(false);
      setIsModalOpen(false);
    }, 600);

    return () => clearTimeout(timeoutId);
  }, []);

  const title = {
    Webtext: "Many CEOs, Coaches, Entrepreneurs and other leaders create Core Values Statements for those within their organizations. This often creates a sense of unity, shared purpose and intention. Parents can achieve the same for their families. Having a Family Core Values Statement and reviewing it together periodically can become an anchor for family members and help keep the most important things in perspective. The following quick exercise will help you to identify your personalized Core Values Statement. Enjoy.",
    responsivetext: "Outline your family’s mission to reinforce direction and purpose.",
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

  const AddNextbutton = async () => {
    setLoadingText(true);
    try {
      const result = await FamilyCoreValueService();
      if (result.status) {
        toast.success(result.message);
        router.push("/core_values");
      } else {
        toast.error(result.message);
        router.push("/core_values_first_step");
      }
    } catch (err) {
      console.error("Service Error:", err);
      router.push("/core_values_first_step");
    }
  };

  return (
    <div className="bg-white m-auto w-full md:w-[65%] pt-6 h-screen md:h-auto overflow-y-scroll md:overflow-y-hidden flex-col justify-center items-center md:rounded-[30px] md:border-[6px] md:border-primary md:py-0 py-2">
      <div className="flex justify-end w-full px-2 pt-2">
        <h1 className="hidden text-primary droid md:block pb-2 w-full text-[35px] text-center font-bold leading-tight  cursor-pointer">
        Create Your   CORE VALUE STATEMENT
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
              alt="Core Value Statment Image"
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
                 Create Your CORE VALUE STATEMENT
              </h1>
            </div>
            {/* Popup */}
             
           
            <div className="h-90  text-xl md:text-base p-3 text-justify w-full ">
              
          <ReactPlayer
          className='react-player'
          url='https://familyhandbook.s3.amazonaws.com/website_videos/Core+Values.mp4
'
          width='100%'
          height='100%'
          controls={true}
          // light="https://images.netdirector.co.uk/gforces-auto/image/upload/q_auto,c_crop,f_auto,fl_lossy,x_0,y_1690,w_6337,h_4222/w_750,h_500,c_fill/auto-client/f74af5624881f9f894cab5d57aa6985b/mobile_homepage_banner.jpg"
        />
              
            </div>
            <div  className="w-full">
            <button
            onClick={AddNextbutton}
            className="text-[20px]  block hover:bg-[#21A7D0] duration-300 ease-in hover:ease-out leading-[30px] font-[400] text-[white] bg-primary py-[5px] px-[10px]  montserrat rounded-[4px] w-full m-auto"
          >
            {loadingText ? "Loading..." : "GET STARTED"}
          </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CorevalueSatement;
