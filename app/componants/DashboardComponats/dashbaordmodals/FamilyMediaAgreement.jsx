'use client'
import { X } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import img from "../../../assets/imges/9Media Agrrement.png";
import { useRouter } from "next/navigation";
import { FamilyGETSTARTService } from "@/app/services/FamilymediaServisec";
import { toast } from "react-toastify";
import Loader from "../../../assets/loader.gif";
import Modal from "react-modal";
import ReactPlayer from "react-player";
const FamilyMediaAgreement = ({ onClick }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [loadingText, setLoadingText] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 600);

    return () => clearTimeout(timeoutId);
  }, []);

  const title = {
    Webtext:
      "Having a Family Media Agreement is almost a necessity in most families today. Parents struggle to manage media usage and often become frustrated by having to remind kids/teens constantly to minimize their media usage. Having a discussion and an agreement that everyone signs off on can put some responsibility back where it belongs. Once a media agreement is in place, expectations are set and no further discussion is needed.",
    responsivetext:
      "Establish media usage rules that everyone agrees to follow.",
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
      top:"20px",
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
      const result = await FamilyGETSTARTService();
      if (result.status.message) {
        router.push("/family_media_agreement");
      }
      toast[result.status];
      router.push("/family_media_agreement");
    } catch (err) {
      router.push("/family_media_agreement");
    }
  };

  return (
    <div className="bg-white m-auto w-full md:w-[65%] md:pt-6 h-screen md:h-auto overflow-y-auto flex flex-col justify-center items-center md:rounded-[30px] md:border-[6px] md:border-primary md:py-0 py-2">
        <div className="flex justify-end w-full px-2">
        <h1 className="hidden text-primary droid md:block pb-2 w-full text-[35px] text-center font-bold leading-tight  cursor-pointer">
        Create Your FAMILY MEDIA AGREEMENT
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
              alt="Create Your FAMILY MEDIA AGREEMENT"
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
               Create Your FAMILY MEDIA AGREEMENT
              </h1>
            </div>
            {/* Popup */}
             
           
            <div className="h-90  text-xl md:text-base p-3 text-justify w-full ">
              
               
          <ReactPlayer
          className='react-player'
          url='https://familyhandbook.s3.amazonaws.com/website_videos/Family+Media+Agreement.mp4
'
          width='100%'
          height='100%'
          controls={true}
          // light="https://images.netdirector.co.uk/gforces-auto/image/upload/q_auto,c_crop,f_auto,fl_lossy,x_0,y_1690,w_6337,h_4222/w_750,h_500,c_fill/auto-client/f74af5624881f9f894cab5d57aa6985b/mobile_homepage_banner.jpg"
        />
              
            </div>
            <div className="w-full">

            <button
              onClick={AddNextbutton}
              className="text-[20px] block hover:bg-[#21A7D0] duration-300 ease-in hover:ease-out leading-[30px] font-[400] text-[white] bg-primary montserrat py-[5px] px-[10px] rounded-[4px] w-full m-auto"
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

export default FamilyMediaAgreement;