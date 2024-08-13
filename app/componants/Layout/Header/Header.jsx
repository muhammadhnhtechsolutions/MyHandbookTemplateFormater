'use client'
import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Manu from "./Manu";
import Image from "next/image";
import img from "../../../assets/imges/Family Handbook Final-06.png";
import coveer from "../../../assets/imges/icons-21.png";
import Intro from "../../../assets/imges/icons-22.png";
import faimmem from "../../../assets/imges/icons-23.png";
import core from "../../../assets/imges/icons-24.png";
import vision from "../../../assets/imges/icons-25.png";
import mision from "../../../assets/imges/icons-26.png";
import conduct from "../../../assets/imges/icons-27.png";
import fammedia from "../../../assets/imges/icons-28.png";
import famcont from "../../../assets/imges/icons-29.png";
import summary from "../../../assets/imges/icons-30.png";
import { Avatar, Dropdown } from "flowbite-react";
import { rootContexts } from "@/app/contexts/rootContexts";
import { usePathname } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const location = usePathname();
  const { headerData } = useContext(rootContexts);
  const [showDropdown, setShowDropdown] = useState(false);
  const [userData, setUserData] = useState([]);
 const[ userProfile,setUserProfile]= useState(null)
  const handleLogout = () => {
    // Perform logout actions here (e.g., clearing session, etc.)
    // After logout, navigate to another route
    router.push("/"); // Replace "/logout" with your actual logout route
  };
  const handleProfile = () => {
    // Perform logout actions here (e.g., clearing session, etc.)
    // After logout, navigate to another route
    router.push("/profile"); // Replace "/logout" with your actual logout route
  };

  const getImageSource = () => {
    switch (location) {
      case "/cover_page/":
        return coveer;
      case "/introduction/":
        return Intro;
      case "/svg_introduction/":
        return Intro;
      case "/family_members/":
        return faimmem;
      case "/core_values_first_step/":
        return core;
      case "/core_values_secend_step/":
        return core;
      case "/core_values/":
        return core;
      case "/vision_statement/":
        return vision;
      case "/vision_statementedit/":
        return vision;
      case "/mission_statement/":
        return mision;
      case "/svg_mission-statement/":
        return mision;
      case "/code_of_conduct/":
        return conduct;
      case "/family_media_agreement/":
        return fammedia;
      case "/family_constitution/":
        return famcont;
      case "/summary/":
        return summary;
      default:
        return null;
    }
  };

  const imagePath = getImageSource();

  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem("user")));
    setUserProfile(localStorage.getItem('profile'))
  }, []);

  return (
    <div className="lg:bg-primary lg:block">
      <div className="container m-auto">
        <div className="flex justify-between items-center py-2 px-3">
          <div>
            <Manu />
          </div>
          <div className="lg:flex items-center hidden">
  <h1 className="text-[32px]  flex items-center leading-[38px] text-white font-[700] montserrat lg:flex lg:items-center mx-16">
    {imagePath && (
      <Image
        alt="img"
        src={imagePath}
        width={12}
        height={10}
        className="w-[70px]"
      />
    )}
    <span className="hidden lg:block ml-2">{headerData}</span>
  </h1>
</div>
         
         <div className="lg:block hidden relative">
    
       <Dropdown
          arrowIcon={false}
          inline
          label={
            userProfile !== null ?
            <Avatar alt="User settings" img={userProfile} rounded />
            : 
           
<div class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
    <svg class="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
</div>

          }
        >
          <Dropdown.Header>
            {/* <span className="block text-sm montserrat">
          {userData?.full_name}
        </span> */}
            {/* <span className="block truncate text-sm font-medium">name@flowbite.com</span> */}
          </Dropdown.Header>
          <Dropdown.Item onClick={handleProfile} >Profile</Dropdown.Item>
          {/* <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item> */}
          <Dropdown.Divider />
          <Dropdown.Item  onClick={handleLogout} >logout</Dropdown.Item>
        </Dropdown>
    </div>

        </div>
      </div>
    </div>
  );
};

export default Header;
