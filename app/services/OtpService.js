
import { axiosInstance } from "../Utils/httpAxios";
export const OtpService = async (data) => {
    const formdata = new FormData()
    formdata.append('otp', data.otp)
    formdata.append('email',data.email)
  return await axiosInstance
    .post("auth/verify_otp/", formdata)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.response.data;
    });
};
