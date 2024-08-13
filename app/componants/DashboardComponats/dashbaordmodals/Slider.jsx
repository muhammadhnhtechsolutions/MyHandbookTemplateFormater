/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import React, { useEffect, useState } from "react";
import Image from "next/image";
// import { useRouter } from "next/router";
import Modal from "react-modal";
import { ArrowLeft } from "lucide-react";
import CodeofConduct from "./../dashbaordmodals/CodeofConduct";
import CorevalueSatement from "./../dashbaordmodals/CorevalueSatement";
import Coverpage from "./../dashbaordmodals/Coverpage";
import FamilyConstitution from "./../dashbaordmodals/FamilyConstitution";
import FamilyMediaAgreement from "./../dashbaordmodals/FamilyMediaAgreement";
import Familymemberpage from "./../dashbaordmodals/Familymemberpage";
import Intropage from "./../dashbaordmodals/Intropage";
import Missionsatement from "./../dashbaordmodals/Missionsatement";
import Summary from "./../dashbaordmodals/Summary";
import Visionsatement from "./../dashbaordmodals/Visionsatement";
import img111 from "../../../assets/imges/Final icons/icons-11.png";
import img22 from "../../../assets/imges/Final icons/icons-12.png";
import img44 from "../../../assets/imges/Final icons/icons-13.png";
import img55 from "../../../assets/imges/Final icons/icons-14.png";
import img102 from "../../../assets/imges/Final icons/icons-15.png";
import img100 from "../../../assets/imges/Final icons/icons-16.png";
import img101 from "../../../assets/imges/Final icons/icons-17.png";
import img66 from "../../../assets/imges/Final icons/icons-18.png";
import img77 from "../../../assets/imges/Final icons/icons-19.png";
import img88 from "../../../assets/imges/Final icons/icons-20.png";
import img99 from "../../../assets/imges/55.png";


import img1 from "../../../assets/imges/Final icons/icons-01.png";
import img2 from "../../../assets/imges/Final icons/icons-02.png";
import img3 from "../../../assets/imges/Final icons/icons-03.png";
import img4 from "../../../assets/imges/Final icons/icons-04.png";
import img5 from "../../../assets/imges/Final icons/icons-05.png";
import img6 from "../../../assets/imges/Final icons/icons-06.png";
import img7 from "../../../assets/imges/Final icons/icons-07.png";
import img8 from "../../../assets/imges/Final icons/icons-08.png";
import img9 from "../../../assets/imges/Final icons/icons-09.png";
import img10 from "../../../assets/imges/Final icons/icons-10.png";
import img11 from "../../../assets/imges/cover11.png";


import { useRouter } from "next/navigation";
import { AllModules } from "@/app/services/MangeService";
import { toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from '@/app/Redux/lib/hooks';
import { setAllmoduledata } from '@/app/Redux/lib/features/product/productSlice';
import Loader from "../../Layout/Loader";




const Sect = () => {
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
  // Styles for the modal
  const customStyles = {
    overlay: {
      backgroundColor:isMobile?"white":"rgba(0, 0, 0, 0.9)",
    },
    content: {
      top: "73%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform:isMobile?"translate(-50%, -72%)" :"translate(-50%, -50%)",
      inset:isMobile? "73% auto auto 50%":"50% auto auto 50%",
      padding:isMobile? "2px":"20",
      border: "none",
      hlight:isMobile? "none":"600px",
      background: "transparent",
      overflow: "visible",
    },
  };
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state?.api?.allmoduledata);
  const pdfid = useAppSelector((state) => state?.api?.pdfid);
 
  const [selectedImage, setSelectedImage] = useState(null);
  // @ts-ignore
  const [ids, setIds] = useState(null);
  

  const router = useRouter();
  const [loading, setLoading] = useState(false);


  // Effect to get ids from localStorage
  // useEffect(() => {
  //   const storedIds = localStorage.getItem('ids');
  //   if (storedIds) {
  //     setIds(storedIds);
  //   }
  // }, []);

  // Effect to call AllModule when ids is available
  useEffect(() => {
   
    
      AllModule();
    
  }, []); // Add ids as a dependency

  const AllModule = async () => {
    const id = localStorage.getItem('ids')
    const result = await AllModules(id);
    if (result.status) {
      dispatch(setAllmoduledata(result));
      // toast.success(result?.message);
     
      closeModal();
      }
  };


 
  const DataObj = [
    {
      img: img1,

    },
    {
      img: img2,

    },
    {
      img: img3,

    },
    {
      img: img4,

    },
    {
      img: img5,

    },
    {
      img: img6,

    },
    {
      img: img7,

    },
    {
      img: img8,

    },
    {
      img: img9,

    },
    {
      img: img10,

    },
    {
      img: img11,

    },
  ];
  const openModal = (name) => {
    if (name === "coverpage") {
      setSelectedImage(
      <Coverpage onClick={() => setSelectedImage(null)} />
    );
    } else if (name === 'intro') {
      setSelectedImage(<Intropage onClick={() => setSelectedImage(null)} />);
    } else if (name === 'family') {
      setSelectedImage(
        <Familymemberpage onClick={() => setSelectedImage(null)} />
      );
    } else if (name === 'corevalue') {
      setSelectedImage(
        <CorevalueSatement onClick={() => setSelectedImage(null)} />
      );
    } else if (name === 'vision') {
      setSelectedImage(
        <Visionsatement onClick={() => setSelectedImage(null)} />
      );
    } else if (name === 'mission') {
      setSelectedImage(
        <Missionsatement onClick={() => setSelectedImage(null)} />
      );
    } else if (name === 'code') {
      setSelectedImage(
        <CodeofConduct onClick={() => setSelectedImage(null)} />
      );
    } else if (name === 'familymedia') {
      setSelectedImage(
        <FamilyMediaAgreement onClick={() => setSelectedImage(null)} />
      );
    } else if (name === 'familyconsti') {
      setSelectedImage(
        <FamilyConstitution onClick={() => setSelectedImage(null)} />
      );
    } else if (name === 'summary') {
      setSelectedImage(<Summary onClick={() => setSelectedImage(null)} />);
    } else if (name === 'familybook') {
    setLoading(true);
      router.push("/finalize");
    }
  };
  const closeModal = () => {
    setSelectedImage(null);
  };






  return (
    <div className="relative container m-auto">
      {loading ? <Loader/> :null }
      <div className="md:mx-auto w-[100%] md:pt-10 pt-3">
        <div className="relative flex flex-wrap md:space-y-3 justify-center items-center md:bottom-3">

   
<div className=" grid grid-cols-2  md:flex md:flex-wrap md:space-y-0 md:justify-center md:items-center md:gap-2 gap-x-[1rem]">
          {data?.CoverPage == 0 ?
            <Image
              onClick={() => openModal("coverpage")}

              src={img1}
              alt='Image '
              className=" md:mb-0 mb-3 w-[150px] rounded-[25px] cursor-pointer"
            /> :
            <Image
              onClick={() => openModal("coverpage")}
              src={img111}
              alt='Image '
              className=" md:mb-0 mb-3 w-[150px] rounded-[25px] cursor-pointer"
            />}

          {data?.IntroductionPage == 0 ?
            <Image
              onClick={() => openModal("intro")}
              src={img2}
              alt='Image '
               className=" md:mb-0 mb-3 w-[150px] rounded-[25px] cursor-pointer"
            /> :
            <Image
            onClick={() => openModal("intro")}

              src={img22}
              alt='Image '
               className=" md:mb-0 mb-3 w-[150px] rounded-[25px] cursor-pointer"
            />}

          {data?.family_bios == 0 ?
            <Image
              onClick={() => openModal("family")}
              src={img3}
              alt='Image '
               className=" md:mb-0 mb-3 w-[150px] rounded-[25px] cursor-pointer"
            /> :
            <Image
              onClick={() => openModal("family")}
              src={img44}
              alt='Image '
               className=" md:mb-0 mb-3 w-[150px] rounded-[25px] cursor-pointer"
            />}

          {data?.CoreValues == 0 ?

            <Image
              onClick={() => openModal("corevalue")}

              src={img4}
              alt='Image '
               className=" md:mb-0 mb-3 w-[150px] rounded-[25px] cursor-pointer"
            /> :
            <Image
            onClick={() => openModal("corevalue")}
              src={img55}
              alt='Image '
               className=" md:mb-0 mb-3 w-[150px] rounded-[25px] cursor-pointer"
            />}
          {data?.VisionStatements == 0 ?

            <Image
              onClick={() => openModal("vision")}

              src={img5}
              alt='Image '
               className=" md:mb-0 mb-3 w-[150px] rounded-[25px] cursor-pointer"
            /> :
            <Image
              onClick={() => openModal("vision")}

              src={img102}
              alt='Image '
               className=" md:mb-0 mb-3 w-[150px] rounded-[25px] cursor-pointer"
            />}

          {data?.MissionStatements == 0 ?

            <Image
              onClick={() => openModal("mission")}

              src={img6}
              alt='Image '
               className=" md:mb-0 mb-3 w-[150px] rounded-[25px] cursor-pointer"
            /> :
            <Image
              onClick={() => openModal("mission")}

              src={img100}
              alt='Image '
               className=" md:mb-0 mb-3 w-[150px] rounded-[25px] cursor-pointer"
            />}

          {data?.CodeOfConducts == 0 ?

            <Image
              onClick={() => openModal("code")}

              src={img7}
              alt='Image '
               className=" md:mb-0 mb-3 w-[150px] rounded-[25px] cursor-pointer"
            /> :

            <Image
              onClick={() => openModal("code")}

              src={img101}
              alt='Image '
               className=" md:mb-0 mb-3 w-[150px] rounded-[25px] cursor-pointer"
            />}


          {data?.FamilyMediaAgreements == 0 ?


            <Image
              onClick={() => openModal("familymedia")}

              src={img8}
              alt='Image '
               className=" md:mb-0 mb-3 w-[150px] rounded-[25px] cursor-pointer"
            /> :
            <Image
              onClick={() => openModal("familymedia")}

              src={img66}
              alt='Image '
               className=" md:mb-0 mb-3 w-[150px] rounded-[25px] cursor-pointer"
            />}
          {data?.FamilyConstitutions == 0 ?

            <Image
              onClick={() => openModal("familyconsti")}

              src={img9}
              alt='Image '
               className=" md:mb-0 mb-3 w-[150px] rounded-[25px] cursor-pointer"
            /> :
            <Image
              onClick={() => openModal("familyconsti")}

              src={img77}
              alt='Image '
               className=" md:mb-0 mb-3 w-[150px] rounded-[25px] cursor-pointer"
            />}

          {data?.Summary == 0 ?


            <Image
              onClick={() => openModal("summary")}

              src={img10}
              alt='Image '
               className=" md:mb-0 mb-3 w-[150px] rounded-[25px] cursor-pointer"
            /> :
            <Image
              onClick={() => openModal("summary")}

              src={img88}
              alt='Image '
               className=" md:mb-0 mb-3 w-[150px] rounded-[25px] cursor-pointer"
            />}


          <Image
            onClick={() => openModal("familybook")}

            src={img11}
            alt='Image '
            className=" mb-3 rounded-[25px] w-[134px]  animate-pulse scale-105 cursor-pointer"
          />



          
          </div>
        </div>
      </div>
      <Modal
        isOpen={selectedImage !== null}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Selected Image"
        className=""
      >

        {selectedImage}
      </Modal>
    </div>
  );
};

export default Sect;

