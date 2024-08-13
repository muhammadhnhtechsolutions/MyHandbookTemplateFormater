"use client";
import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { useAppDispatch, useAppSelector } from "@/app/Redux/lib/hooks";
import {
  setValue,
  setValue1,
  setValueedit,
} from "@/app/Redux/lib/features/product/productSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FamilyVissionService } from "@/app/services/VissionServisec";
import  { modules2, formats, QuillToolbar2 } from "../EditorToolbar";
import 'toastr/build/toastr.min.css';
import toastr from 'toastr';
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import '@/app/assets/css/editor.css'
function Editor2() {
  const value1 = useAppSelector((state) => state.api.value1);
  const dispatch = useAppDispatch();
  const [characterCountError, setCharacterCountError] = useState(false);
  const reactQuillRef=useRef(null)
  const MAX_CHAR_LIMIT = 360;
  const [disableToaster,setDisableToaster] = useState(false)
  const handleInputChange = (content, delta, source, editor) => {

    if (editor.getText().length >= MAX_CHAR_LIMIT+1) {
      if (!characterCountError) {
        setCharacterCountError(true);
        if(!disableToaster){
          
          setDisableToaster(true)
        showErrorToast("Limit exceeded, only 360 characters allowed");
      }
      }
    } else {
      setDisableToaster(false)
      if (characterCountError) {
        setCharacterCountError(false);
      }
      dispatch(setValue1(content));
    }
  };
  
  
    
    // dispatch(setValue1(content));
 

 
  const handleVersionStatement = async () => {
    try {
      const result = await FamilyVissionService();
      if (result.status) {
        // dispatch(setValue(result?.heading || ""));
        dispatch(setValue1(result?.note || ""));

        // Validate statement length and show error toast if exceeded
       
      }
    } catch (error) {
      console.error("Failed to fetch data from API", error);
      toast.error("Failed to fetch data from API");
    }
  };

  useEffect(() => {
    handleVersionStatement();
  }, []);

  const checkCharacterCount = (event) => {
    
  
    if(value1.length >= MAX_CHAR_LIMIT &&  event.key !== 'Backspace'){
      if(!disableToaster){
          
        setDisableToaster(true)
      showErrorToast("Limit exceeded, only 360 characters allowed");
      }
      event.preventDefault();
    }
  };
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

    return (
    <>
        <QuillToolbar2/>
      <ReactQuill
      
       ref={reactQuillRef}
       onKeyDown={checkCharacterCount}
        className="h-full text-4xl font-bold" 
        theme="snow"
        value={value1 || ""}
        onChange={handleInputChange}
        modules={modules2}
        formats={formats}
      />
    </>
  );
}

export default Editor2;
