import { axiosInstance } from "../Utils/httpAxios";

export const VissionServisecs = async (data) => {
  const pdfId = localStorage.getItem("ids");

  const values = {
    pdf_id: pdfId,
    statements: data,
  };

  try {
    const response = await axiosInstance.post('pdf/vision_stat/writting_assistant/', values);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
export const vissionSafeServices = async (heading,note) => {
  const pdfId = localStorage.getItem("ids");

  const value = {
    pdf_id: pdfId,
    heading: heading,
    note: note,
 
  };

  try {
    const response = await axiosInstance.post("pdf/vision_stat/add_vision_stat/", value);
   
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const FamilyVissionService = async () => {
  const pdfid = localStorage.getItem("ids");

  try {
    const response = await axiosInstance.get(
      `/pdf/vision_stat/get_vision_stat/?pdf_id=${pdfid}`
    );
   
    return response.data;
  } catch (err) {
    console.error("Error:", err);
    return err.response.data;
  }
};

