"use client"
import React, { useState, useEffect, useRef } from 'react';
import { Document, Page,pdfjs } from 'react-pdf';
import { Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

// Set the worker source globally
// pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;
const ThePdfViewer = ({pdfUrl}) => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    const [numPages, setNumPages] = useState();
    const [pageNumber, setPageNumber] = useState(1);
    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
      }

    return (
        <div className="">
            <div className="bg-primary py-2 px-3 flex flex-row justify-center items-start">

            <button className='py-1 rounded px-2 bg-secondary text-white ' onClick={()=>setPageNumber(pageNumber >0 ? pageNumber-1 :1)}>Previous</button>
             <span className='text-white p-2'>{pageNumber}:{numPages}</span>
            <button className='py-1 rounded px-2 bg-secondary text-white ' onClick={()=>setPageNumber(numPages !== pageNumber ?pageNumber+1: numPages)}>Next</button>
            </div>
             <Document file={pdfUrl} 
              className="  m-auto border-2 border-red-500 w-full text-center"
             onLoadSuccess={onDocumentLoadSuccess}>
        <Page height={840} pageNumber={pageNumber} />
      </Document>



        </div>
    
  );
};

export default ThePdfViewer;
