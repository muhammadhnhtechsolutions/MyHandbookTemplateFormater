import { axiosInstance } from "../Utils/httpAxios";

export const CompaletePDF = async () => {
    const pdfid = localStorage.getItem("ids");
  
    try {
      const response = await axiosInstance.get(
        `/completepdf?pdf_id=${pdfid}`
      );

      return response.data;
    } catch (err) {
      console.error("Error:", err);
      return err.response?.data;
    }
  };