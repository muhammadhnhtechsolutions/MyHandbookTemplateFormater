import React from "react";
import { axiosInstance } from "../Utils/httpAxios";
import { toast } from "react-toastify"; // Ensure you import toast if you are using it

export const FamilyConstService = async () => {
  const pdfid = localStorage.getItem("ids");

  try {
    const response = await axiosInstance.get(
      `pdf/core_value/get_core_val/?pdf_id=${pdfid}`
    );
    return response.data;
  } catch (err) {
    toast.error(err?.response?.data?.message);
    console.error("Error:", err);
    return err.response.data;
  }
};
export const FamilySaveService = async (data) => {
  const pdfid = localStorage.getItem("ids");

  const value = {
    pdf_id: pdfid,
    note: data,
    // Assuming you need to add a note here
  };

  try {
    const response = await axiosInstance.post(
      "/pdf/family_constitution/add_constituition/",
      value
    );
   
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const Familyfamily_constService = async () => {
  const pdfid = localStorage.getItem("ids");

  try {
    const response = await axiosInstance.get(
      `/pdf/family_constitution/get_values/?pdf_id=${pdfid}`
    );
   
    return response.data;
  } catch (err) {
 
    console.error("Error:", err);
    return err.response.data;
  }
};
