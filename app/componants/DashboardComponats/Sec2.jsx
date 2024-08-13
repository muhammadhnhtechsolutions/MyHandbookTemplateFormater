'use client'
import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import QuoteCard from "./dashbaordmodals/QuoteCard";
import Sec1 from "./Sec1";
import Sect from "./dashbaordmodals/Slider";
import { useSearchParams } from "next/navigation";

const Sec2 = () => {
  const searchParams = useSearchParams();

  useEffect(() => {
    const searchQuery = searchParams.get('token');
    const searchId = searchParams.get('id');
    if ((searchQuery !== null && searchQuery !== "" && searchQuery !== undefined) && (searchId !== null && searchId !== "" && searchId !== undefined)){
      localStorage.setItem("token", searchQuery);
      localStorage.setItem("ids", searchId);

    }
  
  }, [searchParams]);

  const quotes = [
    "“To us, family means putting your arms around each other and being there.” –Barbara Bush",
    "“The memories we make with our family is everything. ~Candace Cameron Bure~",
    "The greatest legacy that one can pass on to one's children is not money...but rather a legacy of character and faith. ~Billy Graham~",
    "Family faces are magic mirrors. Looking at people who belong to us, we see the past, present, and future.” – Gail Lumet Buckley",
    "The only rock I know that stays steady, the only institution I know that works, is the family. ~Lee Iacocca~",
  ];

  const settings = {
    infinite: true,
    speed: 700,
    slidesToShow: 3, 
    slidesToScroll: 1, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    cssEase: "linear",
    centerMode: true,
    centerPadding: "0px",
    dots: false,
  };

  return (
    <>
      <Sec1 />
      <Sect />
      <div className="container montserrat px-5 md: m-auto my-6 w-full overflow-hidden relative">
        <Slider {...settings} className="py-10">
          {quotes.map((quote, index) => (
            <QuoteCard key={index} index={index} quote={quote} />
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Sec2;
