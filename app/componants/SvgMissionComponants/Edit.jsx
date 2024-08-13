'use client'
import React, { useContext, useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import {useSelector} from 'react-redux';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css';
import { rootContexts } from '@/app/contexts/rootContexts';
import { useAppDispatch, useAppSelector,  } from '@/app/Redux/lib/hooks';
import { setMissionstate } from '@/app/Redux/lib/features/product/productSlice';
import { Getimagename } from '@/app/services/MangeService';
import { toast } from 'react-toastify';
import  { modules2, formats, QuillToolbar2 } from "../EditorToolbar";
import 'toastr/build/toastr.min.css';
import toastr from 'toastr';
import '@/app/assets/css/editor.css'
const MAX_CHAR_LIMIT = 48;
function Edit({product}) {
  const  data = useAppSelector((state)=>state.api);
  const dispatch = useAppDispatch();
  const [characterCountError, setCharacterCountError] = useState(false);
  const reactQuillRef=useRef(null)
  const [disableToaster,setDisableToaster] = useState(false)
 
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
            showErrorToast("Limit exceeded, only 48 characters allowed");
          }
          }
        } else {
          setDisableToaster(false)
          if (characterCountError) {
            setCharacterCountError(false);
          }
          dispatch(setMissionstate(content));
        }
      };
 
    // dispatch(setMissionstate(content));
    const GETDATA = async () => {
      try {
        const result = await Getimagename();
        if (result.status) {
         
          dispatch(setMissionstate(result.coverpage_name ? `The ${result.coverpage_name} Family` : 'The Sample Family'))
          toast.success(result.message);
        } else {
          toast.error(result.message);
        }
      } catch (error) {
        // toast.error('An error occurred while fetching the image name.');
      }
    };
    useEffect(()=>{
      GETDATA()
    },[])

    const checkCharacterCount = (event) => {
   
      if(characterCountError &&  event.key !== 'Backspace'){
        if(!disableToaster){
          
          setDisableToaster(true)
      
        showErrorToast("Limit exceeded, only 30 characters allowed");
        }
        event.preventDefault();
      }
    };
  
  return (
  <>
  <QuillToolbar2/>
  <ReactQuill 
       ref={reactQuillRef}
       onKeyDown={checkCharacterCount}
  className='h-full ' 
  placeholder='' theme="snow"
   value={data?.missionstate} onChange={handleInputChange}
   modules={modules2}  
   formats={formats}
 />
  </>
  );
};

export default Edit;
