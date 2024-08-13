"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Manu from "./Manu";
import Image from "next/image";
import Loader from "../../../assets/loader.gif";
import { getprofile, putprofile } from "@/app/services/AuthService";
import { rootContexts } from "@/app/contexts/rootContexts";
import { usePathname } from "next/navigation";
import Swal from "sweetalert2";
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'; // Import the default styles


export const Profile = () => {
  const router = useRouter();
  const location = usePathname();
  const { headerData } = useContext(rootContexts);
  const [showDropdown, setShowDropdown] = useState(false);
  const [userData, setUserData] = useState({
    email: '',
    full_name: '',
    phone: '',
    address: '',
    profile: '',
  });
  const imageRef = useRef(null);
  const getImageSource = () => {
    switch (location) {
      // your switch cases for different image sources
    }
  };

  const imagePath = getImageSource();
  const { setEmailotp } = useContext(rootContexts);
  const [profileimage, setProfileImage] = useState("");
  const [loading, setLoading] = useState(false);

  const GETDATA = async () => {
    setLoading(true);
    try {
      const result = await getprofile();
      setLoading(false);
      if (result.data.email) {
        setUserData({
          email: result.data.email,
          full_name: result.data.full_name,
          phone: result.data.phone,
          address: result.data.address,
          profile: result.data.profile,
        });
        setProfileImage(result.data.profile);
        localStorage.setItem('profile', result.data.profile);
      } else {
        Swal.fire('Error', result.message, 'error');
      }
    } catch (error) {
      setLoading(false);
      // Swal.fire('Error', 'An error occurred while fetching the data.', 'error');
    }
  };

  useEffect(() => {
    GETDATA();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        setUserData({
          ...userData,
          profile: file,
        });
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePhoneChange = (value) => {
    setUserData({
      ...userData,
      phone: value,
    });
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('email', userData.email);
      formData.append('full_name', userData.full_name);
      formData.append('phone', userData.phone); // phone includes country code
      formData.append('address', userData.address);
      setLoading(false);
      if (typeof(userData.profile) !== "string") {
        formData.append('profile', userData.profile);
      }
      const result = await putprofile(formData);
      if (result.status) {
        setUserData({
          email: result.data.email,
          full_name: result.data.full_name,
          phone: result.data.phone,
          address: result.data.address,
          profile: result.data.profile,
        });
        router.push("/section");
        // Swal.fire('success', 'Profile updated successfully.', 'success');
      } else {
        Swal.fire('error', result.message, 'success');
      }
    } catch (error) {
      setLoading(false);
      // Swal.fire('Error', 'An error occurred while updating the da/ta.', 'error');
    }
  };

  const onUpload = () => {
    if (imageRef.current) {
      imageRef.current.click();
    }
  };

  return (
    <>
      <div className="lg:bg-primary lg:block py-8">
        <div className="container mx-auto">
          <div className="flex justify-between items-center py-2 px-3">
            <div>
              <Manu />
            </div>
            <div className="lg:flex items-center hidden">
              <h1 className="text-[32px] text-center flex items-center leading-[38px] text-white font-[700] droid lg:flex lg:items-center mx-16">
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
            <div className="relative lg:block hidden">
            </div>
          </div>
        </div>
      </div>
      {loading ? (
        <div className="grid grid-cols-1 p-2 md:h-[540px]">
          <Image
            src={Loader}
            alt="Cover Page Image"
            width={"100%"}
            height={500}
            className="md:w-screen w-fit object-none md:h-screen"
          />
        </div>
      ) : (
        <form>
          <div className="mx-20 py-20">
            <div className="px-4 pb-6 lg:pb-8 xl:pb-11.5">
              <div className="mb-1.5 text-center">
                <div className="flex flex-col items-center justify-center relative group">
                  <div className="flex flex-col items-center">
                    {profileimage == null ?
                      <label
                        htmlFor="profileimage"
                        className="cursor-pointer p-2 bg-gray-200 rounded"
                      >
                        Upload Image
                      </label> :
                      <button type="button" onClick={onUpload}>
                        <Image
                          alt="img"
                          src={profileimage}
                          width={100}
                          height={100}
                          className="w-[150px] h-[150px] object-cover rounded-full cursor-pointer montserrat"
                          htmlFor="profileimage"
                        />
                      </button>
                    }
                    <input
                      ref={imageRef}
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                      id="profileimage"
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 md:space-x-4 justify-center space-y-8 md:space-y-0 py-4">
                <div>
                  <div className="pt-3">
                    <label htmlFor="name" className="text-left">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="full_name"
                      name="full_name"
                      value={userData.full_name}
                      onChange={handleInputChange}
                      placeholder="Full Name"
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-left">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={userData.email}
                      onChange={handleInputChange}
                      className="input-field"
                      readOnly={true}
                    />
                  </div>
                </div>
                <div>
                  <div>
                    <label htmlFor="phone" className="text-left">
                      Phone number
                    </label>
                    <PhoneInput
                      international
                      defaultCountry="US" // Default country code
                      value={userData.phone}
                      onChange={handlePhoneChange}
                      className="input-field"
                      limitMaxLength={15}
                    />
                  </div>
                  <div>
                    <label htmlFor="address" className="text-left">
                      Address
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={userData.address}
                      onChange={handleInputChange}
                      placeholder="Address"
                      className="input-field"
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-center text-center montserrat mt-4">
                <div onClick={handleSubmit} className="w-[30%] p-3 bg-primary rounded-lg text-white cursor-pointer">
                  SUBMIT
                </div>
              </div>
            </div>
          </div>
        </form>
      )}
    </>
  );
};
