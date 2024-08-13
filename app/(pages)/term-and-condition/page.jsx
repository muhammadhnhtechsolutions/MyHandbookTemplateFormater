/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import React from 'react'
// import Layout from "@/app/componants/Layout/Layout";
import { TermCondition } from '../../componants/LoginComponants/Term&Condition'
import Layout from '@/app/componants/Layout/Layout'
import Image from "next/image";
import img from "../../assets/imges/logo2.png";
import { TfiYoutube } from "react-icons/tfi";
import { FaFacebookF } from "react-icons/fa";
import { useRouter } from "next/navigation";
 const page = () => {
  const router = useRouter();
  return (
    <div>
    {/* <Layout> */}
    <div className="lg:bg-primary  lg:block">
      <div className="container m-auto">
        <div className="flex justify-between items-center py-2 px-3">
          <div >
          
          </div>
          <div className="lg:flex items-center hidden">
  <h1 className="text-[32px] text-center flex items-center leading-[38px] text-white font-[700] lg:flex lg:items-center mx-16">
    
    
  </h1>
</div>
         
          <div className="lg:block hidden" onClick={() => router.push("/login")}>
            <Image alt="img"  src={img} className="w-[100px] cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
    <TermCondition/>
    <div className="pt-2 bg-primary lg:block hidden">
      <footer className="p-1 container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-screen-xl p-2">
          <ul className="flex flex-wrap space-x-1 md:space-x-6 mt-3 text-[15px] font-normal text-white leading-[27px]">
            <li className="text-start">
              <a href="#" className="hover:text-[#333333]">
                Copyright 2020 Family Handbook All Rights Reserved ||
              </a>
            </li>
            <li className="text-start">
              <a href="/termsofservice" className="hover:text-[#333333]">
                Terms of Service
              </a>
            </li>
            <li className="text-start">
              <a href="/privacypolicy" className="hover:text-[#333333]">
                | Privacy Policy
              </a>
            </li>
            <li className="text-start">
              <a href="/cookiepolicy" className="hover:text-[#333333]">
                | Cookie Policy
              </a>
            </li>
          </ul>
          <div className="flex space-x-2 mt-3 md:mt-0">
            <a
              href="https://www.facebook.com/"
              className="px-3 py-2 rounded-sm bg-[#023d6d] text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.youtube.com/"
              className="px-3 py-2 bg-[#C82333] rounded-sm text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TfiYoutube />
            </a>
          </div>
        </div>
      </footer>
    </div>
    
    </div>
  )
}
export default page
