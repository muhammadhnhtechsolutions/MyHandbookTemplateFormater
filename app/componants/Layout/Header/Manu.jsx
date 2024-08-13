'use client'
import { AlignJustify, X } from "lucide-react";
import React, { useState } from "react";
// import component 👇
import Drawer from "react-modern-drawer";
import { useRouter } from "next/navigation";
import Modal from "react-modal";
//import styles 👇
import "react-modern-drawer/dist/index.css";
import ModalOpen from "../../createlogo/ModalOpen";
import { FaStar } from "react-icons/fa";
import { FamilyMissonService } from "@/app/services/MissionServices";
import { FamilyVissionService } from "@/app/services/VissionServisec";
import { toast } from "react-toastify";
import { GetIntro } from "@/app/services/IntroService";
// import { FamilyConductService } from "@/app/services/";
import { setGetIntro } from "@/app/Redux/lib/features/product/productSlice";
import { useAppDispatch } from "@/app/Redux/lib/hooks";
import { FamilyCoreValueService } from "@/app/services/CoreValuesServices";
import Loader from "../Loader";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "none",
    background: "transparent",
    overflow: "visible",
  },
};
const Manu = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [selectedImage, setSelectedImage] = React.useState(false);

  const openModal = () => {
    setSelectedImage(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const Logoutfun = () => {
    const currentPath = router.pathname; // Get the current path
    const targetPath = "/"; // The path you are navigating to
  
    setLoading(true);
  
    if (currentPath === targetPath) {
      setLoading(false); // If already on the target path, set loader to false
    } else {
      router.push(targetPath);
      localStorage.clear();
    }
  };
  

  const AddNextbutton = async () => {
    setLoading(true)
    try {
      const result = await FamilyMissonService();

      if (result.status) {
        toast.success(result.message);
        router.push("/svg_mission-statement");
        setLoading(false)
      } else {
        toast.error(result.message);
        router.push("/mission_statement");
        setLoading(false)
      }
    } catch (err) {
      router.push("/mission_statement");
    setLoading(false)
    }
  };

  const AddVissionbutton = async () => {
    setLoading(true)
    try {
      const result = await FamilyVissionService();

      if (result.status) {
        toast.success(result.message);
        router.push("/vision_statementedit");
        setLoading(false)
      } else {
        toast.error(result.message);
        router.push("/vision_statement");
        setLoading(false)
      }
    } catch (err) {
      router.push("/vision_statement");
    setLoading(false)
    }
  };
  const SaveGetIntro = async () => {
    setLoading(true)
    try {
      const result = await GetIntro();

      if (result.note) {
        dispatch(setGetIntro(result));
        router.push("/svg_introduction");
        toast.success(result?.message);
      setLoading(false)
      } else {
        router.push("/introduction");
        setLoading(false)
      }
    } catch (err) {
      console.error("Error in SaveGetIntro: ", err);
      router.push("/introduction");
    setLoading(false)
    }
  };
  // const SaveGetIntro = async () => {
  //   // const Ids = localStorage.getItem('ids');
  //   try {
  //     const result = await GetIntro();
  //     if (result.note !=="" && result.status==false) {
  //       dispatch(setGetIntro(result));
  //       router.push('/svg_introduction');
  //       toast.success(result?.message);
  //     } else {
  //       router.push("/introduction");

  //     }
  //   } catch (err) {
  //     router.push("/introduction");

  //   }
  // };

  const AddCorebutton = async () => {
    setLoading(true)
    try {
      const result = await FamilyCoreValueService();
       // Debug log
      if (result.status) {
        toast.success(result.message);
        router.push("/core_values");
        setLoading(false)
      } else {
        toast.error(result.message);
        router.push("/core_values_first_step");
        setLoading(false)
        }
    } catch (err) {
      console.error("Service Error:", err); // Debug log
      router.push("/core_values_first_step");
    setLoading(false)
    }
  };

  const handleItemClick = (targetPath) => {
    const currentPath = router.pathname; // Get the current path

    setLoading(true);

    if (currentPath === targetPath) {
      setLoading(false); // If already on the target path, set loader to false
    } else {
      router.push(targetPath);
      closeModal();
    }
  };
  return (
    <>{loading? <Loader/>:null}
      <div
        onClick={toggleDrawer}
        className="menu-button lg:text-white  flex items-center cursor-pointer space-x-2"
      >
        <AlignJustify size="30px" />
        <p className="text-[25px] font-[400] leading-[26px]  md:block hidden">
          Menu
        </p>
      </div>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        className="bla bla bla bg-[#273C66] overflow-y-scroll "
        style={{ background: "#273C66" }}
      >
        <div className="bg-[#273C66] flex flex-col justify-center">
          <hr />

          <ul className="  bg-[#273C66] overflow-x-hidden">
            <div className="justify-end flex">
              <X
                className="cursor-pointer"
                onClick={()=>{
                  closeModal()
                  setLoading(false)
                }}
                color="white"
                size={30}
              />
            </div>

            <li
              onClick={() => handleItemClick("/section")}
              className="p-2 ml-2 w-full justify-center text-white  cursor-pointer"
            >
              Dashboard
            </li>
            <li
                onClick={() => handleItemClick("/cover_page")}
              className="p-2 ml-2 w-full justify-center text-white  cursor-pointer"
            >
              Cover Page
            </li>
            <li
              onClick={SaveGetIntro}
              className="p-2 ml-2 w-full justify-center text-white  cursor-pointer"
            >
              Introduction
            </li>
            <li
                onClick={() => handleItemClick("/family_members")}
              className="p-2 ml-2 w-full justify-center text-white  cursor-pointer"
            >
              Family Members
            </li>
            <li
              onClick={AddCorebutton}
              className="p-2 ml-2 w-full justify-center text-white  cursor-pointer"
            >
              Core Value
            </li>
            <li
              onClick={AddVissionbutton}
              className="p-2 ml-2 w-full justify-center text-white  cursor-pointer"
            >
              Vision Statement
            </li>
            <li
              onClick={AddNextbutton}
              className="p-2 ml-2 w-full justify-center text-white  cursor-pointer"
            >
              Mission Statement
            </li>
            <li
                onClick={() => handleItemClick("/code_of_conduct")}
              className="p-2 ml-2 w-full justify-center text-white  cursor-pointer"
            >
              Code Of Conduct
            </li>
            <li
                onClick={() => handleItemClick("/family_media_agreement")}
              className="p-2 ml-2 w-full justify-center text-white  cursor-pointer"
            >
              Family Media Agreement
            </li>
            <li
                onClick={() => handleItemClick("/family_constitution")}
              className="p-2 ml-2 w-full justify-center text-white  cursor-pointer"
            >
              Family Constitution
            </li>
            <li
                onClick={() => handleItemClick("/summary")}
              className="p-2 ml-2 w-full justify-center text-white  cursor-pointer"
            >
              Summary
            </li>
            <li
                onClick={() => handleItemClick("/get_inspired")}
              className="p-2 ml-2 w-full justify-center text-white  cursor-pointer"
            >
              Get Inspired
            </li>
            <li
                onClick={() => handleItemClick("/feedback")}
              className="p-2 ml-2 w-full justify-center text-white  cursor-pointer"
            >
              Feedback
            </li>
            <li
  onClick={openModal}
  className="p-2 ml-2 w-full flex items-center space-x-3 justify-center text-white cursor-pointer"
>
  Create Your Family Logo 
  <span>
  <FaStar />
  </span>
  <span className="py-1"></span>
</li>

            <li
              onClick={() => Logoutfun()}
              className="p-2 ml-2 w-full justify-center text-white  cursor-pointer"
            >
              Logout
            </li>
          </ul>
        </div>
      </Drawer>
      <div>
        <Modal
          isOpen={selectedImage !== false}
          // onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Selected Image"
        >
          <div>
            <ModalOpen onClick={() => setSelectedImage(false)} />
          </div>
        </Modal>
      </div>
    </>
  );
};
export default Manu;
