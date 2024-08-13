
import { axiosInstance } from "../Utils/httpAxios";
import { toast } from "react-toastify";

export const ForgotPasswordService = async (data) => {
  return await axiosInstance
    .post("auth/send_forget_otp/", data)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.response.data;
    });
};
