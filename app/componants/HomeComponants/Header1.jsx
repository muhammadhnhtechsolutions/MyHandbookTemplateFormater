import React, { useState } from 'react';
import Image from 'next/image';
import HeaderImage from '../../assets/imges/FHB logo 1.png'; // Adjust path as needed
import Link from 'next/link';

const Header1 = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-primary text-gray-700 py-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        {/* Logo and Navigation */}
        <div className="flex items-center space-x-4">
          <Image src={HeaderImage} alt="Family Handbook Logo" />

          {/* Navigation Links for Desktop */}
          <nav className="flex space-x-9">
          <div className="relative group">
  {/* Organizations Text Outside the Dropdown */}
  <span className="group-hover:opacity-0 pb-3 montserrat text-lg md:text-24 font-bold leading-6 text-white cursor-pointer transition-opacity duration-300">
    Organizations
  </span>

  {/* Dropdown Content */}
  <div className="absolute hidden group-hover:block bg-[#FF9900] border border-gray-300 rounded-lg p-4 top-1 z-10 text-white transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100">
    <span className="block pb-3 montserrat text-lg md:text-24 font-bold leading-6 text-white cursor-pointer">
      Organizations
    </span>
    <div className="flex flex-col space-y-2">
      <Link href="/pastors" className="hover:underline montserrat text-base md:text-18 font-normal leading-21.94px">
        Churches
      </Link>
      <Link href="/school" className="hover:underline montserrat text-base md:text-18 font-normal leading-21.94px">
        Schools
      </Link>
      <Link href="/nonprofit" className="hover:underline montserrat text-base md:text-18 font-normal leading-21.94px">
        Non-profit
      </Link>
    </div>
  </div>
</div>
``

  <span className="hover:underline montserrat text-lg md:text-24 font-bold leading-6 cursor-pointer text-white">
    Parents
  </span>
</nav>

        </div>

        {/* Login and Signup Buttons for Desktop */}
        <div className="flex justify-end md:pt-0 w-full md:w-auto space-x-4">
          <Link href="/login/">
            <span className="bg-white border montserrat border-gray-300 rounded-full px-4 py-2 text-lg md:text-24 font-bold leading-6 cursor-pointer">
              Login
            </span>
          </Link>
          {/* <Link href="/checkout-page/"> */}
          <Link href="/family-handbook-generator/">
            <span className="text-lg md:text-24 font-bold montserrat leading-6 bg-[#FF9900] border border-gray-300 rounded-full px-4 py-2 cursor-pointer">
              Signup
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header1;
