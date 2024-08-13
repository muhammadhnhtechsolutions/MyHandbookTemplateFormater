'use client'
import React, { useState } from 'react';
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import { useAppDispatch, useAppSelector } from '@/app/Redux/lib/hooks';
import { setValue1, setValueedit, setVisionsatement, setVission } from '@/app/Redux/lib/features/product/productSlice';
import { toast } from 'react-toastify';
// import Editor1 from '../CoverPagesComponants/Editor1';
import Editor from './Editor2';
import { VissionServisecs } from '@/app/services/VissionServisec';
import Editorvission from './Editor1';
// import { VissionServisecs } from '@/app/services/VissionServisecs';
import stepImage1 from "../../assets/imges/image 11.png";
import { IoInformationCircleSharp } from "react-icons/io5";
import Image from "next/image";
const Add1page = () => {
  // const [showButtons, setShowButtons] = useState(false);
  const dispatch = useAppDispatch();
  const dataselected = useAppSelector((state) => state.api.value1);
  const showInitialButtons = useAppSelector((state) => state.api.showInitialButtons);
  const value1 = useAppSelector((state) => state.api.edit1);
  const [loadingText, setLoadingText] = useState(false);

  const handleClick = () => {
    toastr.options = {
      closeButton: true,
      debug: false,
      newestOnTop: false,
      progressBar: false,
      positionClass: "toast-top-right",
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
  
    toastr.info(`Scroll through the vision statements of other families below. When you see a template you like, click 'Next Step' below. You'll be able to edit to your liking in the following step.`);
  };

  
  const AddCorebutton = async () => {
    setLoadingText(true);
    try {
      const result = await VissionServisecs(dataselected);
      setLoadingText(false);
      if (result.status) {
        dispatch(setValue1(result?.note));
        toast.success(result.message);
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      console.error('Error fetching note:', error);
      toast.error('Failed to fetch note.');
    } finally {
      setLoadingText(false); // Set loading to false after handling the API response
    }
  }
 
  

  return (
    <>
      <div className=''>
      <div className="bg-primary text-white W-[702px] p-6 rounded-3xl flex flex-col sm:flex-row">
          <div className="flex-shrink-0 mx-auto sm:mx-0">
            <div className="pt-10">
              <Image src={stepImage1} alt="Step 1" className="w-[73px] h-[73.52px]" />
            </div>
          </div>
          <div className="mt-4 sm:mt-0 sm:ml-4">
            <h4 className="text-xl font-bold text-[#FDA513]">Step 2</h4>
            <p className="mt-2 text-base leading-relaxed">
            Personalize your Family Vision Statement.  A Vision Statement communicates how you want your family to look in at least a couple of decades from now.  Use the box below like a word processor. Edit the statement provided to your liking.  Feel free to use the “Writing Assistant” button to get newer ideas.  When you have your statement good enough for a first draft, click “preview”.
</p>

          </div>
        </div>
      </div>

      <div className='space-y-10 pt-[24px]' >
        <div className="w-[100%] border-primary border-[4px]">
          <div className=''>
            <Editorvission  />
          </div>
        </div>
        <div className='pt-1'>
          <div className="w-[100%]  border-primary border-[4px]">
            <Editor />
          </div>
          {/* {showInitialButtons && ( */}
          <div className='pt-5 text-center justify-center items-center'>
            <button
              className="bg-[#023d6d] text-sm leading-4 font-normal hover:bg-gray-400 text-white py-3 px-4 rounded"
              onClick={()=> AddCorebutton()}
            >
               {loadingText ? "Loading..." : " Writing Assistant"}
            </button>
          </div>
         
        </div>
      </div>
    </>
  );
}

export default Add1page;
