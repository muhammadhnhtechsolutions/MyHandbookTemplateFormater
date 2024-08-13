'use client'
import Image from "next/image";
import img from "../../assets/imges/logo.png";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'
import Loader from "../Layout/Loader";
const Header = () => {
  const router = useRouter();
  const [Isloading,setIsloading]= useState(false)
  useEffect(() => {
    AOS.init({
      duration: 2000
    })
  }, [])
  const handleRouthe =()=>{
    setIsloading(true)
    // router.push('/poster')
    router.push('/family-handbook-generator')
  }
  return (
    <>

{Isloading? <Loader />:null}
<div className="w-full container px-20 m-auto   ">
  <div className="flex flex-row  justify-between items-center">

  <Image alt="img" src={img} className="lg:w-[160px]  mt-2" />
  <div>

  <button
          onClick={() =>handleRouthe()}
          className="text-[23px] hover:bg-[#21A7D0] duration-300 ease-in leading-[38px] font-[400] text-white bg-primary py-[8px] px-[30px] rounded-[4px]  m-auto justify-end"
        >
         Visit Here
        </button>
  </div>
</div>
  </div>
  </>
  );
};

export default Header;
