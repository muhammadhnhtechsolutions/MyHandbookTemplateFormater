'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import img from '../../assets/imges/bannerSectionImg.jpg';
import image2 from '../../assets/imges/mohmmad.png';
import image1 from '../../assets/imges/logo.png';
import image3 from '../../assets/imges/bg2.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Loader from '../Layout/Loader';
import { useRouter } from 'next/navigation';

const BannerSection = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  const handleRoute = () => {
    setIsLoading(true);
    router.push('/learnmore');
  };

  return (
    <>
      {isLoading ? <Loader /> : null}
      <div className="relative h-[140vh] md:h-[130vh]  montserrat lg:h-[140vh] overflow-hidden">
        <Image
          src={image3}
          alt="Family Handbook Compass"
          className="absolute inset-0 w-full h-full object-cover"
          width={800}
          height={500}
        />
        <div className="w-full h-full absolute bg-white opacity-60"></div>

        <div className="absolute inset-0 flex items-center justify-center montserrat">
          <div className="text-center text-[#476782] w-full max-w-xl md:max-w-3xl lg:max-w-4xl p-4 md:p-8 lg:p-12 z-10">
            <Image
              src={image1}
              alt="Family Handbook"
              className="mx-auto py-5"
              width={200}
              height={100}
            />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              Strengthen your Marriage,
              <br /> Strengthen your Family.
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl mb-6">Create a unique family culture today</p>
            <p className="text-lg md:text-xl lg:text-2xl mb-6 font-bold">
              Where there is no vision, the people will perish
              <br />
              <span className="font-semibold">Proverbs 29:18</span>
            </p>
            <div className="relative flex justify-center items-center w-full h-auto max-h-64 mx-auto overflow-hidden z-20">
              <Image
                className="w-[80%] md:w-[70%] lg:w-[60%] h-auto object-cover"
                src={image2}
                alt="Family"
                width={400}
                height={500}
              />
              <div className="absolute inset-0 flex items-center justify-center p-4 bg-opacity-50">
                <div className="text-primary text-center w-full md:w-[60%] lg:w-[40%] p-4 rounded-lg max-w-xs md:max-w-md lg:max-w-lg bg-opacity-80">
                  <h1 className="text-lg md:text-xl lg:text-2xl font-bold mb-2">
                    Dear Mom and Dad,
                  </h1>
                  <p className="text-sm md:text-base lg:text-lg py-4">
                    How would it impact your family if all members of your family know your family mission statement?
                  </p>
                  <button
                    type="button"
                    className="bg-[#FF9900] text-white py-2 px-4 rounded"
                    onClick={handleRoute}
                  >
                    LEARN MORE
                  </button>
                </div>
              </div>
            </div>
            <p className="text-lg md:text-xl lg:text-2xl font-bold  z-20 pt-4 ">
              “Where Family Identity is strong, peer pressure is weak.”
            </p>
            <p className="text-base md:text-lg lg:text-xl z-20">
              Greg Gunn,
              <a
                href="https://family-id.com/"
                className="cursor-pointer"
                target="_blank"
                rel="noopener noreferrer"
              >
                Family ID Founder
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerSection;
