'use client'
import React from 'react'
import Image from "next/image";
import Footer from "../../assets/imges/FHB white orange 1 1.png";
import { Facebook } from 'lucide-react';
import { Twitter } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { useRouter } from "next/navigation";

const Foteer = () => {
  const router = useRouter();

  return (
    <footer className="bg-primary montserrat text-white py-8">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center space-x-4 mb-4 sm:mb-0">
          <div>
            <Image
              src={Footer}
              alt="Family Handbook Logo"
              className="cursor-pointer"
              // onClick={() => router.push("/")}
            />
          </div>
        </div>

        <div className=" text-sm mb-6">
          <a href="#" className="hover:underline cursor-pointer block mb-2">Newsroom</a>
          <a href="#" className="hover:underline cursor-pointer block mb-2">Contact Us</a>
          <a onClick={() => router.push("/faq")} className="hover:underline cursor-pointer block mb-2">Frequently Asked Questions</a>
          <a href="#" className="hover:underline cursor-pointer block mb-2">Investor Relations</a>
          <a onClick={() => router.push("/termsofservice")} className="hover:underline cursor-pointer block mb-2">Terms and Conditions</a>
          <a onClick={() => router.push("/privacypolicy")} className="hover:underline cursor-pointer block mb-2">Privacy Policy</a>
          <a onClick={() => router.push("/cookiepolicy")} className="hover:underline cursor-pointer block">Cookie Policy</a>
        </div>

        <div className="flex flex-col items-center sm:items-start space-y-2">
          <button onClick={() => router.push("/family-handbook-generator/")} className="bg-[#FF9900] text-black  rounded-full px-4 py-2">Signup for Newsletter</button>
          <div className="flex space-x-4 mb-4">
            <a 
              href="https://www.facebook.com/" 
              aria-label="Facebook"  
              rel="noopener noreferrer"
              className="bg-black hover:bg-secondary p-2 rounded-full inline-flex items-center justify-center"
            >
              <Facebook size={32} strokeWidth={1.5} className="text-white " />
            </a>
            <a 
              href="https://www.twitter.com/" 
              aria-label="Twitter"  
              rel="noopener noreferrer"
              className="bg-black hover:bg-secondary p-2 rounded-full inline-flex items-center justify-center"
            >
              <Twitter size={32} strokeWidth={1.5} className="text-white" />
            </a>
            <a 
              href="https://www.instagram.com/" 
              aria-label="Instagram"  
              rel="noopener noreferrer"
              className="bg-black hover:bg-secondary p-2 rounded-full inline-flex items-center justify-center"
            >
              <Instagram size={32} strokeWidth={1.5} className="text-white" />
            </a>
          </div>

          <div className="text-center sm:text-left">
            <p>www.myfamilyhandbook.com</p>
            <p>ben@myfamilyhandbook.com</p>
          
          </div>
          <div className="text-center justify-center">
          <p className='pt-5'>Wichita, KS</p>
          <p>PO Box 012345</p>
          
          </div>
        </div>
      </div>

      <div className="text-center text-sm mt-4">
        <p>Copyright 2024 | My Family Handbook | All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Foteer;
