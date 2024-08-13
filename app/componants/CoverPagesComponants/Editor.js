'use client'
import React, { useState } from "react";
// import ReactQuill from "react-quill";
import EditorToolbar, { modules, formats } from "../EditorToolbar";
import "react-quill/dist/quill.snow.css";
import toastr from 'toastr'; // Import toastr for displaying toast messages
import 'toastr/build/toastr.min.css'; // Import toastr CSS
import "./styles.css";
import { useAppDispatch, useAppSelector } from "@/app/Redux/lib/hooks";
import { setCovercon } from "@/app/Redux/lib/features/product/productSlice";
import dynamic from "next/dynamic";
import '@/app/assets/css/editor.css'
// const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
const MAX_CHAR_LIMIT = 95;
export const Editor = () => {
  const covercon = useAppSelector((state) => state?.api?.covercon);
  const editorEnabled = useAppSelector((state) => state?.api?.editorEnabled);
  const clickedButtonIndex = useAppSelector((state) => state?.api?.clickedButtonIndex);
  const dispatch = useAppDispatch();
  const [wordCountError, setWordCountError] = useState(false);
  const [characterCountError, setCharacterCountError] = useState(false);
  const [state, setState] = React.useState({ value: null });

  const showErrorToast = (message) => {
    toastr.error(message);
  };
  const handleInputChange = (content, delta, source, editor) => {
    // Get text without HTML tags for word count
    const text = editor.getText().trim().replace(/\n +/g, " ");
    const wordCount = text.split(/\s+/).length;

    // Limit to 200 words
    if (editor.getText().length >= MAX_CHAR_LIMIT) {
      if (characterCountError===false) {
        setCharacterCountError(true);
        showErrorToast(`Limit exceeded, only 90 characters allowed`);
      }
    } else {
       
        setCharacterCountError(false);
      
      
      dispatch(setCovercon(content, delta, source, editor, clickedButtonIndex));
    }
  };
 
  const checkCharacterCount = (event) => {
   
    if(characterCountError &&  event.key !== 'Backspace'){
      
      showErrorToast(`Limit exceeded, only 90 characters allowed`);
      event.preventDefault();
    }
  };
  return (
    <>

    <div className="text-editor ">
      <EditorToolbar />
      <ReactQuill
      onKeyDown={checkCharacterCount}
      className="h-[150px] sm:h-auto"
        theme="snow"
        value={!editorEnabled ? covercon :"" }
          onChange={handleInputChange}
          
        placeholder={"Create Your Own"}
        style={{
            pointerEvents: editorEnabled ? "none" : "auto",
            opacity: editorEnabled ? 0.6 : 1,
          }}
        modules={modules}
        formats={formats}
        
      />
    </div>
      
 
    </>
  );
}
export default Editor;