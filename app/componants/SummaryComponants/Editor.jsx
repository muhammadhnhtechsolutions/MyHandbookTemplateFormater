import React, { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';
import SignatureCanvas from 'react-signature-canvas';
import EditorToolbar, { modules, formats } from "../EditorToolbar";
import '@/app/assets/css/editor.css';
import { FamilySummaryService } from '@/app/services/SamaryServies';
import { useAppDispatch, useAppSelector } from '@/app/Redux/lib/hooks';
import { setSummarycomp } from '@/app/Redux/lib/features/product/productSlice';
import axios from 'axios';


const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

function Editor({ onSummaryUpdate, onSignatureUpdate }) {
  const dispatch = useAppDispatch();
  const summarycomp = useAppSelector((state) => state?.api?.summarycomp);
  const summarycompBackup = useAppSelector((state) => state?.api?.summarycompBackup);
  const [disableToaster, setDisableToaster] = useState(false);
  const [signatureImage, setSignatureImage] = useState(null);
  const MAX_CHAR_LIMIT = 955;
  const [characterCountError, setCharacterCountError] = useState(false);
  const reactQuillRef = useRef(null);
  const sigCanvasRef = useRef(null);

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
    if (editor.getText().length > MAX_CHAR_LIMIT) {
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
      onSummaryUpdate(content);
      dispatch(setSummarycomp(content)); // Update Redux state
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
      onSignatureUpdate(base64Image);

      // Send the summary note and signature to the API
      try {
        const response = await axios.post('/api/save-signature', { summary: summarycomp, signature: base64Image });
        if (response.status === 200) {
          toastr.success('Data saved successfully');
        }
      } catch (error) {
        // showErrorToast('Failed to save data');
        // console.error('Failed to save data', error);
      }
    } else {
      console.error('Signature canvas reference not available');
    }
  };

  const handleMeSSionStatment = async () => {
    try {
      const result = await FamilySummaryService();
      if (result.status) {
        setSignatureImage(result.signature);
        onSignatureUpdate(result.signature);
        if (result.note.trim()) {
          dispatch(setSummarycomp(result.note));
        } else {
          showErrorToast('The fetched note is empty');
        }
      }
      else{
        dispatch(setSummarycomp(summarycompBackup));
        
      }
    } catch (error) {
      showErrorToast('Failed to fetch data from API');
      console.error('Failed to fetch data from API', error);
    }
  };

  useEffect(() => {
    handleMeSSionStatment();
  }, []);

  return (
    <div>
      <EditorToolbar />
      <ReactQuill
        ref={reactQuillRef}
        onKeyDown={checkCharacterCount}
        className='h-auto'
        theme="snow"
        onChange={handleInputChange}
        modules={modules}
        formats={formats}
        value={summarycomp}
      />
      <div className="signature-pad">
        <h3>Signature</h3>
        <SignatureCanvas
          ref={sigCanvasRef}
          penColor="black"
          canvasProps={{ width: 300, height: 160, className: 'sigCanvas border-[4px]' }}
        />
        <div className='flex justify-between rounded-sm space-x-4 text-white text-[16px] font-medium'>
          <button onClick={handleClearSignature} className='bg-primary px-4 py-2'>Clear</button>
          <button onClick={handleSaveSignature} className='bg-primary px-4 py-2'>Save</button>
        </div>
        {signatureImage && (
          <div className="signature-preview mt-4">
            <h4>Preview</h4>
            <img
              src={`data:image/png;base64,${signatureImage}`}
              alt="Signature"
              className="border-[1px] border-gray-300"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Editor;
