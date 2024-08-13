'use client'
import { X } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import img from "../../../assets/imges/11Summary.png";
import { FamilySummaryService } from "@/app/services/SamaryServies";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Loader from "../../../assets/loader.gif";
import Modal from "react-modal";
import ReactPlayer from "react-player";

const Summary = ({ onClick }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loadingText, setLoadingText] = useState(false);
  const [isWatching, setIsWatching] = useState(false);
  useEffect(() => {
    setLoading(true);
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, []);

  const AddNextbutton = async () => {
    setLoadingText(true);
    try {
      const result = await FamilySummaryService();
      if (result.status.message) {
        router.push("/summary");
      }
      toast[result.status];
      router.push("/summary");
    } catch (err) {
      router.push("/summary");
    }
  };
  useEffect(() => {
    setLoading(true);
    const timeoutId = setTimeout(() => {
      setLoading(false);
      setIsModalOpen(false);
    }, 600);

    return () => clearTimeout(timeoutId);
  }, []);

  const title = {
    Webtext: "The Summary is just that. It summarizes that which you have attempted to convey in your Family Handbook. Again, you’ll begin with a sample. These are actual words written by one of our dads to summarize things for his family. Use the sample if you like. Or personalize it for your own family. Think Blessings.",
    responsivetext: "Summarize your Family Handbook’s main points and blessings.",
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
        <h1 className=" text-primary droid block pb-2 w-full text-[35px] text-center font-bold leading-tight  cursor-pointer pt-28 md:pt-0">
        Create Your SUMMARY
      </h1>
      <div className="ml-auto">
        <X onClick={onClick} className="cursor-pointer justify-end" />
      </div>
    </div>
 
      {loading ? (
        <div className="grid place-items-center p-2 h-[540px]">
          <Image
            src={Loader}
            alt="loader"
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
              alt="Create Your SUMMARY"
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
               
              >
                Create Your SUMMARY
              </h1>
            </div>
            {/* Popup */}
             
           
            <div className="h-90  text-xl md:text-base p-3 text-justify w-full ">
              
          <ReactPlayer
          className='react-player'
           url='https://familyhandbook.s3.amazonaws.com/website_videos/Summary.mp4 '
          width='100%'
          height='100%'
          controls={true}
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
export default Summary;
