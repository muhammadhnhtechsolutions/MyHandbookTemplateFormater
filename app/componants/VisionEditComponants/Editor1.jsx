'use client'
import React, { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import { useAppDispatch, useAppSelector } from '@/app/Redux/lib/hooks';
import { setValue } from '@/app/Redux/lib/features/product/productSlice';
import { toast } from 'react-toastify';
import { Getimagename } from '@/app/services/MangeService';
import 'react-quill/dist/quill.snow.css';
import 'toastr/build/toastr.min.css';
import toastr from 'toastr';
import '@/app/assets/css/editor.css'
import EditorToolbar, { modules, formats } from "../EditorToolbar";

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
const MAX_CHAR_LIMIT =47;

function Editorvission() {
  const [disableToaster, setDisableToaster] = useState(false);
  const value = useAppSelector((state) => state.api.value); 
  const dispatch = useAppDispatch();
  const [characterCountError, setCharacterCountError] = useState(false);
  const reactQuillRef = useRef(null);

  const handleInputChange = (content, delta, source, editor) => {
    const textLength = editor.getText().length;

    
    if (textLength >= MAX_CHAR_LIMIT + 1) {
      if (!characterCountError) {
        setCharacterCountError(true);
        if (!disableToaster) {
          setDisableToaster(true);
          showErrorToast(`Limit exceeded, only 48 characters allowed`);
        }
      }
    } else {
      setDisableToaster(false);
      if (characterCountError) {
        setCharacterCountError(false);
      }
      dispatch(setValue(content));
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

  const checkCharacterCount = (event) => {
    if (characterCountError && event.key !== 'Backspace') {
      if (!disableToaster) {
        setDisableToaster(true);
        showErrorToast(`Limit exceeded, only 30 characters allowed`);
      }
      event.preventDefault();
    }
  };

  const GETDATA = async () => {
    try {
      const result = await Getimagename();
      if (result.status) {
        dispatch(setValue(result.coverpage_name ? `The ${result.coverpage_name} Family` : 'The Sample Family'));
        toast.success(result.message);
      } else {
        showErrorToast(result.message);
      }
    } catch (error) {
      showErrorToast("An error occurred while fetching the data.");
    }
  };

  useEffect(() => {
    GETDATA();
  }, []);

  return (
    <>
      <EditorToolbar />
      <ReactQuill 
        ref={reactQuillRef}
        onKeyDown={checkCharacterCount}
        className='h-full !text-center font-bold ' 
        theme="snow" 
        value={value} 
        onChange={handleInputChange}
        modules={modules}  
        formats={formats}
      />
      {/* {characterCountError && <div style={{ color: 'red' }}>Limit exceeded, only 30 characters allowed</div>} */}
    </>
  );
}

export default Editorvission;
