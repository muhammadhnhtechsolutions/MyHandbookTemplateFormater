import React from 'react'
import { axiosInstance } from '../Utils/httpAxios';

export const SamaryServies = async (summaryNote, signatureImage) => {
  const pdfid = localStorage.getItem("ids");
  
   const formdata =  new FormData()
   formdata.append('pdf_id',pdfid);
   formdata.append('note',summaryNote.summaryNote);
   formdata.append('signature',summaryNote.signature)
  // const payload = {
  //   pdf_id: pdfid,['pdf_id', 'note', 'signature'] all keys are required


  //   note: summaryNote,
  //   signature: signatureImage // Ensure this is included
  // };

  try {
    const response = await axiosInstance.post(
      "/pdf/summary/add_summary/",
      formdata
    );
    return response.data;
  } catch (error) {
    return error.response?.data || { status: false, message: 'An error occurred' };
  }
}


export const FamilySummaryService = async () => {
  const pdfid = localStorage.getItem("ids");

  try {
    const response = await axiosInstance.get(
      `pdf/summary/get_summary/?pdf_id=${pdfid}`
    );

    // Verify that the signature_image field is present
    if (response.data ) {
     
      return response.data;
    } else {
      throw new Error('Signature image is missing in response');
    }
  } catch (err) {
    console.error("Error fetching summary:", err);
    return { status: false, message: 'Failed to fetch data from API' };
  }
};


