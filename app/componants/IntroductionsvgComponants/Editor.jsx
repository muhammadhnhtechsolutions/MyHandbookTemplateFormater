'use client'
import React, { useState, useEffect, useRef } from 'react';
import EditorToolbar, { modules, formats } from "../EditorToolbar";
import dynamic from 'next/dynamic';
import toastr from 'toastr'; // Import toastr for displaying toast messages
import 'toastr/build/toastr.min.css'; // Import toastr CSS
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css';
import { useAppDispatch, useAppSelector } from '@/app/Redux/lib/hooks';
import { setNotes } from '@/app/Redux/lib/features/product/productSlice';
import { GetIntro } from '@/app/services/IntroService';
const MAX_CHAR_LIMIT = 1600;

function Editor() {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state?.api?.notes);
  const [characterCountError, setCharacterCountError] = useState(false); // State to track character count error
  const reactQuillRef=useRef(null)
  const [disableToaster,setDisableToaster] = useState(false)

  useEffect(() => {
    // Set toastr options only once
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
    };

    // Fetch notes from API if data is empty initially
    if (!data) {
      fetchNotesFromAPI();
    }
  }, [data]); // Dependency array ensures useEffect runs on initial render and when data changes

  // Function to fetch notes from API and dispatch
  const fetchNotesFromAPI = async () => {
    const result = await GetIntro();
    if (result.status) {
      dispatch(setNotes(result.note));
    } else {
      // Handle error if needed
      console.error('Failed to fetch notes:', result.error);
    }
  };

  const handleInputChange = (content, delta, source, editor) => {
    if (editor.getText().length >= MAX_CHAR_LIMIT) {
      if (!characterCountError) {
        setCharacterCountError(true);
     
        if(!disableToaster){
          setDisableToaster(true)
          showErrorToast("Limit exceeded, only 1600 characters allowed");
        }
      }
    } else {
      setDisableToaster(false)
      if (characterCountError) {
        setCharacterCountError(false);
      }
      dispatch(setNotes(content));
    }
  };

  
  // Function to display error toast message
  const showErrorToast = (message) => {
    toastr.error(message);
  };
  const checkCharacterCount = (event) => {

    if(characterCountError &&  event.key !== 'Backspace'){
      if(!disableToaster){
        setDisableToaster(true)
        showErrorToast("Limit exceeded, only 1600 characters allowed");
      }
      event.preventDefault();
    }
  };

  return (
    <>
      <EditorToolbar className="fixed top-0 w-full"/>
      <ReactQuill
      ref={reactQuillRef}
      onKeyDown={checkCharacterCount}
        className='h-auto  '
        placeholder=''
        theme="snow"
        value={data || ''}
        // value={`<strong>${data || ''}</strong>`} // Ensure value is not undefined
        onChange={handleInputChange}
        modules={modules}
        formats={formats}
      />
      {characterCountError && <div style={{ color: 'red' }}>Limit exceeded, only 1600 characters allowed</div>}
    </>
  );
}

export default Editor;
