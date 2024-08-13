import { axiosInstance } from "../Utils/httpAxios";


export const MissionServices = async (data) => {
    const pdfId = localStorage.getItem("ids");

    const values = {
      pdf_id: pdfId,
      statements: data,
    };
  
    try {
      const response = await axiosInstance.post('/pdf/mission_stat/writting_assistant/', values);
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  };
  export const missionSafeServices = async (heading,note) => {
    const pdfId = localStorage.getItem("ids");
  
    const value = {
      pdf_id: pdfId,
      heading: heading,
      note: note,
   
    };
  
    try {
      const response = await axiosInstance.post("pdf/mission_stat/add_mission_stat/", value);
   
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  };
  
  export const FamilyMissonService = async () => {
    const pdfid = localStorage.getItem("ids");
  
    try {
      const response = await axiosInstance.get(
        `/pdf/mission_stat/get_mission_stat/?pdf_id=${pdfid}`
      );
   
      return response.data;
    } catch (err) {
      console.error("Error:", err);
      return err.response.data;
    }
  };

