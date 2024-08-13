import { toast } from "react-toastify";
import { axiosInstance } from "../Utils/httpAxios";

export const AddIntro =async(chartlist,tone,letter)=>{
    const pdfid = localStorage.getItem("ids")
    const valuesArray = chartlist.map(option => option.value);
  
 
    const data = {
        "pdf_id": pdfid,
        "beginning_letter": letter,
        "tone_used": tone,
        "character_list":valuesArray
     };
     try {
       const response = await axiosInstance.post('pdf/intoduction/add_intro/', data);
       
       return response.data;
     } catch (err) {
      //  toast.error(err?.response?.data?.message);
       return err.response.data;
     }
   };



   export const WrittingAss =async(notes)=>{
    const pdfid = localStorage.getItem("ids")
    const data = {
        "pdf_id": pdfid,
        "note": notes,
      
     };
     try {
       const response = await axiosInstance.post('pdf/intoduction/writting_assistant/', data);
 
       return response.data;
     } catch (err) {
       toast.error(err?.response?.data?.message);
       return err.response.data;
     }
   };



   export const Saveintronote =async(notes)=>{
    const pdfid = localStorage.getItem("ids")
    const data = {
        "pdf_id": pdfid,
        "note": notes, 
     };
     try {
       const response = await axiosInstance.post('pdf/intoduction/save_intro_note/', data);
      
       return response.data;
     } catch (err) {
       toast.error(err?.response?.data?.message);
       return err.response.data;
     }
   };


   export const GetIntro=async()=>{
const pdfid = localStorage.getItem("ids");

try {
  const response = await axiosInstance.get(
    `pdf/intoduction/get_intro/?pdf_id=${pdfid}`
  );
  return response.data;
} catch (err) {
  console.error("Error:", err);
  return err.response.data;
}
};
