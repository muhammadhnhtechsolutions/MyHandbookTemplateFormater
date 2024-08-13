'use client'
import { X } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import img from '../../../assets/imges/6VS.png';
import { useRouter } from "next/navigation";
import { FamilyVissionService } from "@/app/services/VissionServisec";
import { toast } from "react-toastify";
import Loader from '../../../assets/loader.gif'
import Modal from "react-modal";



const Visionsatement = ({ onClick }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loadingText, setLoadingText] = useState(false);

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
      const result = await FamilyVissionService();

      if (result.status) {
        toast.success(result.message);
        router.push("/vision_statementedit");
      } else {
        toast.error(result.message);
        router.push("/vision_statement");
      }
    } catch (err) {
      router.push("/vision_statement");
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
    Webtext: "A Family Vision Statement can be an extraordinarily valuable tool for you and your family. Many parents report a more team like environment at home when using a Family Vision Statement to reinforce the family direction and purpose on a regular basis. Family members seem to have more ownership of the Family Vision when it is printed and easily available to review during family meetings. That being said, few families perfect their Family Vision Statement on the first try. You should treat this as a draft and simply begin the process with your family. It may take multiple iterations to perfect yours. Because of this, we created a bit of a cheat sheet for you on the next page.",
    responsivetext: "Draft a vision statement to guide your family’s direction and purpose.",
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
    <div className="bg-white m-auto w-full md:w-[90%] md:pt-6 h-screen md:h-auto md:overflow-y-hidden flex-col justify-center items-center md:rounded-[30px] md:border-[6px] md:border-primary md:py-0 py-2">
      <div className="flex justify-end  w-full px-2 pt-2">
      <h1
               className="hidden md:block pb-2 w-full text-[36px] text-center font-[700] leading-[43px]  droid  text-primary cursor-pointer"
            
             >
               Create Your  VISION STATEMENT
             </h1>
        <X onClick={onClick} className="cursor-pointer" />
      </div>
      {loading ? (
        <div className="grid grid-cols-1 p-2 md:h-[540px]">
          <Image
            src={Loader}
            alt="Cover Page Image"
            width={"100%"}
            height={500}
            className="md:w-screen w-fit object-none md:h-screen"
          />
        </div>
      ) : (
        <div className=" p-2 h-[500px]">
        <div className="flex justify-center items-center">
           <Image
             src={img}
             alt="VISION STATEMENT Image"
             width={500}
             height={500}
           />
         </div>
         <div className="flex flex-col justify-center items-center p-4">
           <div>
             {/* Title for Desktop */}
            
             {/* Title for Mobile */}
             <h1
               className="block md:hidden pb-2 w-full text-[36px] text-center font-[700] leading-[35px] underline cursor-pointer"
               onClick={openModal}
             >
               Create Your VISION STATEMENT
             </h1>
           </div>
           {/* Popup */}
           <Modal
             isOpen={isModalOpen}
             onRequestClose={closeModal}
             style={customStyles}
             contentLabel="Help Modal"
           >
             <div className="bg-white border-[2px]">
               <div className="bg-white m-auto overflow-y-hidden md:overflow-y-hidden flex-col justify-center items-center rounded-[10px]">
                 <div>
                   <div className="p-4 justify-end flex">
                     <p className="text-2xl mr-3 text-end">
                       <X
                         className="cursor-pointer"
                         onClick={closeModal}
                       />
                     </p>
                   </div>
                   <hr />
                   {/* Title for Mobile */}
                   <div className="my-2 text-xl md:text-base p-3 px-3 md:hidden block">
                     <p>{title?.responsivetext}</p>
                   </div>
                 </div>
               </div>
             </div>
           </Modal>
           <button
                 onClick={AddNextbutton}
                 className="text-[20px] montserrat hover:bg-[#21A7D0] duration-300 ease-in hover:ease-out leading-[30px] font-[400] text-[white] bg-primary py-[5px] px-[10px] rounded-[4px] w-full m-auto"
               >
                 {loadingText ? "Loading..." : "GET STARTED"}
               </button>
           <div className="h-90 text-xl md:text-base p-3 text-justify w-full hidden md:block">
           {/* <iframe
                src="https://player.vimeo.com/video/960399634?h=b78e407bc8"
                width="100%"
            height="300"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            className="rounded-lg"
          ></iframe> */}
             <div className="flex justify-center space-y-2 flex-col items-center md:py-[26px] w-full">
              
            
             </div>
           </div>
         </div>
       </div>
      )}
    </div>
  );
};

export default Visionsatement;
