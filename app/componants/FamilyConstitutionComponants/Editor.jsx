/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import toastr from "toastr"; // Import toastr for displaying toast messages
import "toastr/build/toastr.min.css"; // Import toastr CSS
import { useAppDispatch, useAppSelector } from "@/app/Redux/lib/hooks";
import { setFamilycon } from "@/app/Redux/lib/features/product/productSlice";
import { FamilyConstService } from "@/app/services/FamilyConstService";
import EditorToolbar, { modules, formats } from "../EditorToolbar";
import '@/app/assets/css/editor.css'
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
const MAX_CHAR_LIMIT = 800;
function Editor() {
  const familycon = useAppSelector((state) => state?.api?.familycon);
  const familyconBackup = useAppSelector((state) => state?.api?.familyconBackup);
  const [disableToaster,setDisableToaster] = useState(false)
  const dispatch = useAppDispatch();

  const [characterCountError, setCharacterCountError] = useState(false); // State to track character count error
  const reactQuillRef = useRef(null);
   // State to track if the editor is empty
  
  // Function to display error toast message
  const showErrorToast = (message) => {
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
     timeOut: "3000",
      extendedTimeOut: "1000",
      showEasing: "swing",
      hideEasing: "linear",
      showMethod: "fadeIn",
      hideMethod: "fadeOut",
      color: "red",
    };
    toastr.error(message);
  };

  const handleInputChange = (content, delta, source, editor) => {
    if (editor.getText().length >= MAX_CHAR_LIMIT+1) {
      if (!characterCountError) {
        setCharacterCountError(true);
        if(!disableToaster){
          
          setDisableToaster(true)
        showErrorToast("Limit exceeded, only 800 characters allowed");
      }
    }
    } else {
      setDisableToaster(false)
      if (characterCountError) {
        setCharacterCountError(false);
      }

      dispatch(setFamilycon(content));
    }
  };

 

  const getDataFromApi = async () => {
    try {
      const result = await FamilyConstService();
      if (result.status) {
        const { value_one, value_two, value_three, value_four, value_five } = result;
        // dispatch(setFamilycon(value_one));
        // dispatch(setFamilycon(value_two));
        // dispatch(setFamilycon(value_three));
        // dispatch(setFamilycon(value_four));
        // dispatch(setFamilycon(value_five));
  
       
          const data = `
            <strong>So that we may continue to grow together to become all that God has created us to be, <br>We hereby pledge to do the following:</strong><br><br><br>
            • Conduct ourselves both individually and as a family in a way that is in line with our stated Core Values:<br>
            <strong>${value_one}, ${value_two}, ${value_three}, ${value_four} and ${value_five}</strong><br>
            • Accept responsibility for our written <strong>Mission Statement</strong><br>
            • Commit to be an encouragement to each other as we move forward in life together.<br>
            • Obey God and those in authority<br>
            • Daily seek communion with Christ<br>
            • Love Unconditionally<br>
            • Respect the individuality and property of others<br>
            • Wisely steward my personal property<br>
            • Honor our parents both in how we communicate and how we engage in family activities together.<br>
          `;
           console.log("the data is",data)
          dispatch(setFamilycon(data));
          
       }
        else {
          dispatch(setFamilycon(familyconBackup));
          showErrorToast("One or more expected values are missing or empty");
        }
      
    } catch (error) {
      console.error("Failed to fetch data from API", error);
    }
  };

  useEffect(() => {
    getDataFromApi();
  }, []);
  const checkCharacterCount = (event) => {
   
    if (characterCountError && event.key !== "Backspace") {
      if(!disableToaster){
          
        setDisableToaster(true)
      showErrorToast("Limit exceeded, only 800 characters allowed");
      }
      event.preventDefault();
    }
  };

  return (
    <div>

 <style>
                {`
                    .ql-container {
                        min-height: 100% !important;
                        font-size: 18px !important;
                        font-weight: 400 !important;
                    }
                `}
            </style>
            
      <EditorToolbar />
      <ReactQuill
        ref={reactQuillRef}
        onKeyDown={checkCharacterCount}
        className="h-full"
        placeholder=""
        theme="snow"
        value={familycon}
        onChange={handleInputChange}
        modules={modules}
        formats={formats}
       
      />
      {/* {isOverLimit && <p style={{ color: 'red' }}>You&apos;ve exceeded the maximum word count (755 words).</p>}
      {isEmpty && <p style={{ color: 'red' }}>The editor content cannot be empty.</p>} */}
    </div>
  );
}

export default Editor;
