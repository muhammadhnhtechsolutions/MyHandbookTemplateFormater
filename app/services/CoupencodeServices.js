
import { axiosInstance } from "../Utils/httpAxios";
// import { toast } from "react-toastify";

export const CoupencodeService = async (data) => {
  return await axiosInstance
    .post("coupon_signup/validate_coupon/ ", data)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.response.data;
    });
};
