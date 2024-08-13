'use client'
import React, { useState } from 'react';
import Edit from './Edit';
import Edit1 from './Edit1';
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import { useAppDispatch, useAppSelector } from '@/app/Redux/lib/hooks';
import { setMissionstate1 } from '../../Redux/lib/features/product/productSlice';
import { toast } from 'react-toastify';
import { MissionServices } from '../../services/MissionServices';
import stepImage1 from "../../assets/imges/image 11.png";
import { IoInformationCircleSharp } from "react-icons/io5";
import Image from "next/image";
const AddEditor = () => {
  const [loading, setLoading] = useState(false);   
  const dispatch = useAppDispatch();
  // const dataselected = useAppSelector((state) => state.api.missionstate1);
  // const value1 = useAppSelector((state) => state.api.edit2);
  const data = useAppSelector((state) => state.api);

  const handleClick = () => {
    toastr.options = {
      closeButton: true,
      debug: false,
      newestOnTop: false,
      progressBar: false,
      positionClass: "toast-top-left",
      preventDuplicates: false,
      onclick: null,
      showDuration: "300",
      hideDuration: "1000",
     timeOut: "100000",
      extendedTimeOut: "1000",
      showEasing: "swing",
      hideEasing: "linear",
      showMethod: "fadeIn",
      hideMethod: "fadeOut",
      onShown: function() {
        document.querySelectorAll('.toast').forEach(toast => {
          toast.style.backgroundColor = '#023D6D'; // Set the background color
          toast.style.color = 'white'; // Set the text color
          toast.style.opacity = '1'; // Remove the opacity
        });
      }
    };
    toastr.info(`Use the arrows below to get ideas of how you might write your Family Mission Statement. When ready, Click the 'Choose Template' button below. You'll be able to edit your own on the next page.`);
  };

  const AddCorebutton = async () => {
    setLoading(true);
    try {
      const result = await MissionServices(data?.missionstate1);
      setLoading(false); 
      if (result.status) {
        dispatch(setMissionstate1(result.note));
        toast.success(result.message);
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      console.error('Error fetching note:', error);
      toast.error('Failed to fetch note.');
    } finally {
      setLoading(false); // Set loading to false after handling the API response
    }
  };
  
  return (
    <>
      <div className=''>
      <div className="bg-primary text-white p-6 rounded-3xl flex flex-col sm:flex-row items-center sm:items-start">
  <div className="flex-shrink-0">
    <Image src={stepImage1} alt="Step 1" className="w-[73px] h-auto mx-auto sm:mx-0" />
  </div>
  <div className="mt-4 sm:mt-0 sm:ml-4 montserrat flex-1 text-center sm:text-left">
    <h4 className="text-xl font-bold text-[#FDA513]">Step 2</h4>
    <p className="mt-2 text-base leading-relaxed">
    Personalize your Family Mission Statement.  A Mission Statement communicates how you see your family in the next 3 to 5 years.  “This is our mission for the near future”.  “We will do these things and be this way so that we can effectively move towards our Family Vision.”
    </p>
  </div>
</div>
      </div>

      <div className='space-y-10 pt-[50px]' >
        <div className="w-[100%] border-primary border-[4px]">
          <div className=''>
            <Edit />
          </div>
          </div>
          <div className='pt-18'>
            <div className="w-[100%]  border-primary border-[4px]">
              <Edit1 />
            </div>
            {/* {data?.showInitialButtons && ( */}
            <div className='pt-5 text-center justify-center items-center'>
              <button
                className="bg-[#023d6d] text-sm leading-4 font-normal hover:bg-gray-400 text-white py-3 px-4 rounded"
                onClick={AddCorebutton}
              >
               {loading ? "Loading..." : "Writing Assistant"}
              </button>
            </div>
            {/* )} */}
          </div>
        </div>
      
    </>
  );
};

export default AddEditor;
