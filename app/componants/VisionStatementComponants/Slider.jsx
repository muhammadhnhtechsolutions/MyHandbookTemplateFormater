'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import * as Icon from 'lucide-react'
import img1 from "../../assets/imges/vision-statement-0.svg";
import img2 from "../../assets/imges/vision-statement-1.svg";
import img3 from "../../assets/imges/vision-statement-2.svg";
import img4 from "../../assets/imges/vision-statement-3.svg";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import { useAppDispatch } from '@/app/Redux/lib/hooks';
import { setValue1 } from '@/app/Redux/lib/features/product/productSlice';
import "./style.css";

import React, { useState } from 'react';

import { useRouter } from 'next/navigation';
const slides = [
  {
    img: img1,
    text: "To be a close knit family cultivating genuine relationships and living a healthy & active lifestyle while also choosing to be debt free."
  },
  {
    img: img2,
    text: "We will love each other loyally, protect each other fiercely, encourage each other valiantly and live out our faith in our creator while serving our community and those we love."
  },
  {
    img: img3,
    text: "We will enjoy our health because we chose a healthy lifestyle, be grateful for our strong relationships because we chose others before ourselves, be debt-free because we made wise financial decisions, embrace prosperity because we worked diligently and maintain a deep relationship with our Savior because we chose to put Him first in our lives."
  },
  {
    img: img4,
    text: "Families who pray together gray together. We will experience the beauty of maturing and growing older together because we chose to stay grounded in prayer and complete dependence upon our Creator."
  },
];

export default function Slider() {
  const router = useRouter();
  const [loadingText, setLoadingText] = useState(false);

  const AddCorebutton = () => {
    setLoadingText(true);
    router.push('/vision_statementedit');
  };

  const dispatch = useAppDispatch();

  const handleSlideChange = (swiper) => {
    const currentSlide = slides[swiper.activeIndex];
    dispatch(setValue1(currentSlide.text));
     // Log the dispatched text
  };

  return (
    <>
   
    <Swiper
      // navigation={true}
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
    <div className='flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 py-3 w-full'>
        <button
          onClick={() => router.push('/section')}
          className='text-sm md:text-base lg:text-lg text-black bg-[#FDA513] hover:bg-primary hover:text-white duration-300 ease-in py-1 px-4 h-12 w-full max-w-xs md:w-[110px] rounded-3xl'
        >
          Previous
        </button>
        <button
          onClick={AddCorebutton}
          className='text-sm md:text-base lg:text-lg text-black bg-[#FDA513] hover:bg-primary hover:text-white duration-300 ease-in py-1 px-4 h-12 w-full max-w-xs md:w-[140px] rounded-3xl'
        >
          {loadingText ? 'Loading...' : 'Next Step'}
        </button>
      </div>
      </>
  );
}
