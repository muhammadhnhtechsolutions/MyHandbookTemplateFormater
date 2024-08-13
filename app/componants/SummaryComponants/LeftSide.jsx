'use client';
import React from "react";
import Editor from "./Editor";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

const LeftSide = ({ onSummaryUpdate, onSignatureUpdate }) => {
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
          toast.style.backgroundColor = '#023D6D';
          toast.style.color = 'white';
          toast.style.opacity = '1';
        });
      }
    };
    toastr.info(`Use the box below to write a summary letter for your family. When you are comfortable with your letter, click the preview button.`);
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
      <div className="w-full border-primary md:space-y-10 space-y-5 border-[6px] rounded h-[96vh] overflow-y-auto montserrats">
        <Editor 
          onSummaryUpdate={onSummaryUpdate} 
          onSignatureUpdate={onSignatureUpdate} 
        />
      </div>
    </div>
  );
};

export default LeftSide;
