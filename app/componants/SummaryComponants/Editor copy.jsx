/* eslint-disable react/no-unescaped-entities */
'use client';
import React, { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import toastr from 'toastr'; // Import toastr for displaying toast messages
import 'toastr/build/toastr.min.css'; // Import toastr CSS
import { useAppDispatch, useAppSelector } from '@/app/Redux/lib/hooks';
import { setSummarycomp } from '@/app/Redux/lib/features/product/productSlice';
import { FamilySummaryService } from '@/app/services/SamaryServies';
import EditorToolbar, { modules, formats } from "../EditorToolbar";
import '@/app/assets/css/editor.css';
import SignatureCanvas from 'react-signature-canvas';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

function Editor() {
  const [disableToaster, setDisableToaster] = useState(false);
  const MAX_CHAR_LIMIT = 955;
  const summarycomp = useAppSelector((state) => state?.api?.summarycomp);
  const dispatch = useAppDispatch();
  const [characterCountError, setCharacterCountError] = useState(false);
  const reactQuillRef = useRef(null);
  const sigCanvasRef = useRef(null);
  const [signatureImage, setSignatureImage] = useState(null);

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
      timeOut: "100000",
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
    if (editor.getText().length >= MAX_CHAR_LIMIT + 1) {
      if (!characterCountError) {
        setCharacterCountError(true);
        if (!disableToaster) {
          setDisableToaster(true);
          showErrorToast("Limit exceeded, only 955 characters allowed");
        }
      }
    } else {
      setDisableToaster(false);
      if (characterCountError) {
        setCharacterCountError(false);
      }
      dispatch(setSummarycomp(content));
    }
  };

  const checkCharacterCount = (event) => {
    if (characterCountError && event.key !== 'Backspace') {
      if (!disableToaster) {
        setDisableToaster(true);
        showErrorToast("Limit exceeded, only 955 characters allowed");
      }
      event.preventDefault();
    }
  };

  const handleMeSSionStatment = async () => {
    try {
      const result = await FamilySummaryService();
      if (result.status) {
        if (result.note.trim()) {
          dispatch(setSummarycomp(result.note));
        } else {
          showErrorToast('The fetched note is empty');
        }
      }
    } catch (error) {
      showErrorToast('Failed to fetch data from API');
      console.error('Failed to fetch data from API', error);
    }
  };

  const handleClearSignature = () => {
    if (sigCanvasRef.current) {
      sigCanvasRef.current.clear();
      setSignatureImage(null);
    }
  };

  const handleSaveSignature = async () => {
    if (sigCanvasRef.current) {
      const canvas = sigCanvasRef.current;
      const signatureData = canvas.toDataURL('image/png');

      // Convert signature to Base64 string
      const base64Image = signatureData.replace(/^data:image\/(png|jpg|jpeg);base64,/, "");
      setSignatureImage(base64Image);

      // Logic to integrate Base64 string with editor content (replace with your implementation)
      const updatedContent = `${summarycomp}\n[Image of Signature](${base64Image})`;
      setSummarycomp(updatedContent);
    } else {
      console.error('Signature canvas reference not available');
    }
  };

  

  useEffect(() => {
    handleMeSSionStatment();
  }, []);

  return (
    <div>
    <EditorToolbar />
    <ReactQuill ref={reactQuillRef} onKeyDown={checkCharacterCount} className='h-auto' theme="snow" value={summarycomp} onChange={handleInputChange} modules={modules} formats={formats} />
    <div className="signature-pad">
      <h3>Signature</h3>
      <SignatureCanvas ref={sigCanvasRef} penColor="black" canvasProps={{ width: 500, height: 200, className: 'sigCanvas' }} />
      <div className='justify-between rounded-sm space-x-4 text-white text-[16px] font-medium'>
        <button onClick={handleClearSignature} className='bg-primary'>Clear</button>
        <button onClick={handleSaveSignature} className='bg-primary'>Save</button>
      </div>
    </div>
  </div>
  );
}

export default Editor;
