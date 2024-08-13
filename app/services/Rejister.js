import { axiosInstance } from "../Utils/httpAxios";

export const authcoupen = async (data) => {
  try {
    const formdata = new FormData()
    formdata.append('coupon_code', data.coupon_code)
    formdata.append('price',data.price)
    const response = await axiosInstance.post('coupon_signup/validate_discount_coupon/', formdata);
    return response.data; 

  } catch (err) {
    return {
      status: false,
      message: err.response?.data?.message || 'An error occurred.',
    };
  }
};


export const authpayment = async (data,id) => {
  try {
    const formdata = new FormData()
    if(data.coupon_id !==""){

        formdata.append('coupon_id', data.coupon_id)
    }
    formdata.append('full_name', data.full_name)
    formdata.append('password',data.password)
    formdata.append('email', data.email)
    formdata.append('phone',data.phone)
    formdata.append('charge_token',id)
    formdata.append('price',data.price)
    const response = await axiosInstance.post('coupon_signup/strip_discount_signup/', formdata);
    return response.data; 

  } catch (err) {
    return {
      status: false,
      message: err.response?.data?.message || 'An error occurred.',
    };
  }
};




// import { authcoupen } from "@/app/services/Rejister";
{/* <Sectionchek />

<Secti2 />
<div className="pt-5 bg-[#141125] ">
  <footer className="p-5 text-center    text-[20px] font-medium leading-7 container mx-auto text-white ">
    2022 © FAMILY HANDBOOK GENERATOR ALL RIGHTS RESERVED
  </footer>
</div>
</div>
);
}; */}