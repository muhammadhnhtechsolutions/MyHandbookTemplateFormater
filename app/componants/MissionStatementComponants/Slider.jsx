
'use client'
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import img1 from "../../assets/imges/mission-statement-0.png";
import img2 from "../../assets/imges/mission-statement-1.png";
import img3 from "../../assets/imges/mission-statement-2.png";
import img4 from "../../assets/imges/mission-statement-3.png";
import img5 from "../../assets/imges/mission-statement-5.png";
import img6 from "../../assets/imges/mission-statement-6.png";
import img7 from "../../assets/imges/mission-statement-7.png";
import img61 from "../../assets/imges/mission-statement-4.png";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import { useAppDispatch } from '@/app/Redux/lib/hooks';

import "./style.css";
import { setMissionstate1 } from "../../Redux/lib/features/product/productSlice";
import * as Icon from 'lucide-react'
import { useRouter } from "next/navigation";
const slides = [
   {
    img: img1,
    text: "We commit to be a family that loves each other and shows it daily in our actions. We will be caring, helpful, encouraging, loving, loyal, and practice having servant hearts with each other as well as our community."
  },
  {
    img: img2,
    text: "We will choose to love the Lord our God with all of our hearts and practice choosing His will in our lives daily."
  },
  {
    img: img3,
    text: "To be a unified family cultivating genuine relationships and living an active, debt-free lifestyle while serving and loving our Creator."
  },
  {
    img: img4,
    text: "We choose daily to be respectful to others, to nurture relationships, to practice gratefulness, and to serve our community with purpose and intention."
  },
  {
    img: img61,
    text: "To create an inviting place of spiritual enrichment, cleanliness, cooperation, safety, comfort, relaxation, and love."
  },
  {
    img: img5,
    text: "We honor our Creator through faith and service. We think before we act. We work together and show respect for others and ourselves."
  },
  {
    img: img6,
    text: "We live to glorify our God in all that we say and do. We will live simply, serve others, pursue growth, nurture relationships, and celebrate the gift of life."
  },
  {
    img: img7,
    text: "We will increase the quality of life of each generation more than the previous by building on our rich spiritual heritage and encouraging each other with grace and love."
  },
];
export default function Slider() {
  const dispatch = useAppDispatch();
   useEffect(()=>{
    // const currentSlide = slides[swiper.activeIndex];
    // dispatch(setMissionstate1(currentSlide.text));
     const currentSlide = slides[0];
     
     dispatch(setMissionstate1(currentSlide.text));

   },[])
  const handleSlideChange = (swiper) => {
    const currentSlide = slides[swiper.activeIndex];
    dispatch(setMissionstate1(currentSlide.text));
   // Log the dispatched text
  };
  const router = useRouter();
  const [loadingText, setLoadingText] = useState(false);
  const handleNextStepClick = () => {
    setLoadingText(true);
    router.push('/svg_mission-statement');
  };

  return (
    <>
    
    <Swiper
  
      modules={[Navigation]}
      className="mySwiper !z-0"
      onSlideChange={handleSlideChange}
      navigation={{
        nextEl: ".image-swiper-button-next",
        prevEl: ".image-swiper-button-prev",
        disabledClass: "swiper-button-disabled"
      }}
      >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <Image src={slide.img} alt={`slide-${index}`} />
        </SwiperSlide>
      ))}
      <div className="flex justify-between items-center text-primary pb-2 px-10">
    <button className="image-swiper-button-prev"><Icon.ArrowLeft size={40}/></button>
    <button className="image-swiper-button-next "><Icon.ArrowRight size={40} /></button>

    </div>
    </Swiper>
    <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 py-3 w-full">
         
            
         <button
           onClick={() => router.push("/section")}
           className="text-sm md:text-base lg:text-lg text-black bg-[#FDA513] hover:bg-primary hover:text-white duration-300 ease-in py-1 px-4 h-12 w-full max-w-xs md:w-[110px] rounded-3xl"
         >
          Previous
         </button>
         <button
               onClick={handleNextStepClick}
           className="text-sm md:text-base lg:text-lg text-black bg-[#FDA513] hover:bg-primary hover:text-white duration-300 ease-in py-1 px-4 h-12 w-full max-w-xs md:w-[140px] rounded-3xl"
         >
           {loadingText ? "Loading..." : " Next Step"}
         </button>
  
 
   </div>
      </>
  );
}
