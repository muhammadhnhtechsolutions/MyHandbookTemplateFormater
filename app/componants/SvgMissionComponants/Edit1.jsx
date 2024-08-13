import React, { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import { useAppDispatch, useAppSelector } from '@/app/Redux/lib/hooks';
import { setMissionstate, setMissionstate1, setValuemission1 } from '../../Redux/lib/features/product/productSlice';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css';
import { FamilyMissonService, missionSafeServices } from '@/app/services/MissionServices';
import EditorToolbar, { modules, formats } from "../EditorToolbar";
import 'toastr/build/toastr.min.css';
import toastr from 'toastr';
import '@/app/assets/css/editor.css'

function Editor() {
  const value1 = useAppSelector((state) => state.api.missionstate1);
  const [characterCountError, setCharacterCountError] = useState(false);
  const reactQuillRef=useRef(null)
  const dispatch = useAppDispatch();
  const MAX_CHAR_LIMIT = 380;
  const [disableToaster,setDisableToaster] = useState(false)
  const handleInputChange = (content, delta, source, editor) => {
    if (editor.getText().length > MAX_CHAR_LIMIT+1) {
      if (!characterCountError) {
        setCharacterCountError(true);
        if(!disableToaster){
          
          setDisableToaster(true)

        showErrorToast("Limit exceeded, only 280 characters allowed");
      }
      }
    } else {
      setDisableToaster(false)
      if (characterCountError) {
        setCharacterCountError(false);

      }
      // dispatch(setValue1(content));
      dispatch(setMissionstate1(content));
    }
  };
 

  const apiResponseData = async()=>{
    const response = await FamilyMissonService();
    if(response.status){
      dispatch(setMissionstate1(response?.note))
    }
  }

 

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
    
  
    if(characterCountError &&  event.key !== 'Backspace'){
      if(!disableToaster){
          
        setDisableToaster(true)
      showErrorToast("Limit exceeded, only 280 characters allowed");
      }
      event.preventDefault();
    }
  };

useEffect(()=>{
  apiResponseData()
},[])
  return (
    <>
      
       <EditorToolbar/>
    <ReactQuill
    ref={reactQuillRef}
    onKeyDown={checkCharacterCount}
      className='h-full '
      theme="snow"
      value={value1}
      onChange={handleInputChange} 
      modules={modules}
      formats={formats}
    
    />
    </>
  );
}

export default Editor;
