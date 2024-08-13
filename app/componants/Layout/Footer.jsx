'use client'
import React from "react";

const Footer = () => {
  return (
    <div className="pt-2 bg-primary lg:block">
      <footer className="p-1 container mx-auto text-center">
        <div className="flex flex-col items-center justify-center max-w-screen-xl p-2">
          <ul className="flex flex-col space-y-2 text-[15px] font-normal text-white leading-[27px] text-center">
            <li>
              <a href="#" className="hover:text-[#333333]">
                Copyright 2024 Family Handbook All Rights Reserved
              </a>
            </li>
            <li className="flex space-x-4 justify-center">
              <a href="/termsofservice" className="hover:text-[#333333]">
                Terms of Service
              </a>
              <span>|</span>
              <a href="/privacypolicy" className="hover:text-[#333333]">
                Privacy Policy
              </a>
              <span>|</span>
              <a href="/cookiepolicy" className="hover:text-[#333333]">
                Cookie Policy
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
