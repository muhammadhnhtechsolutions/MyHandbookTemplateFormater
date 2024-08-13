'use client'
import React from "react";
import Editor from "./Editor";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import { useAppSelector } from '@/app/Redux/lib/hooks';
const LeftSide = () => {
 
  
  const handleClick = () => {
    toastr.options = {
      closeButton: true,
      debug: false,
      newestOnTop: false,
      progressBar: false,
      positionClass: "toast-top-right",
      // position: "top-center",
      preventDuplicates: false,
      onclick: null,
      showDuration: "300",
      hideDuration: "1000",
      timeOut: "300000",
      extendedTimeOut: "1000",
      showEasing: "swing",
      hideEasing: "linear",
      showMethod: "fadeIn",
      hideMethod: "fadeOut",
      width: "40%",
      onShown: function() {
        document.querySelectorAll('.toast').forEach(toast => {
          toast.style.backgroundColor = '#023D6D'; // Set the background color
          toast.style.color = 'white'; // Set the text color
          toast.style.opacity = '1'; // Remove the opacity
        });
      }
    };
  


    toastr.info(`Below is an example of a consitution written by one of our Family Handbook Families.
                                        Our System pulled in your chosen core values. If you like the verbiage as your first draft,
                                        keep it. Otherwise you may write your own. When you are pleased with your draft,
                                        click the preview button.`);
  };
  
  return (
    <div className="w-full p-2 h-screen rounded space-y-10">
      <div className='text-center justify-center items-center montserrat'>
        <button
          className="bg-primary abbbbb1 text-sm leading-4 font-normal text-white py-3 px-4 rounded"
          onClick={handleClick}
        >
          Instruction
        </button>
      </div>
      <div className="w-full   overflow-x-hidden h-[650px]  border-primary md:space-y-10 mt-[-20px] space-y-5 border-[6px] rounded ">
        <Editor />
      </div>
    </div>
  );
};

export default LeftSide;
