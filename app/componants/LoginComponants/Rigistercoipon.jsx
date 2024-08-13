'use client'
import React, { useContext } from "react";
import img from "../../assets/imges/Orange (1).png";
import Image from "next/image";
import { useFormik } from "formik";
import * as yup from "yup";
import { CoupencodeService } from "@/app/services/CoupencodeServices";
import { rootContexts } from "@/app/contexts/rootContexts";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
export const Rigistercoipon = () => {
  const router = useRouter();
  const { coupon_code } = useContext(rootContexts);

  const formik = useFormik({
    initialValues: {
      coupon_code: "",
      
    },
    validationSchema: yup.object({
  coupon_code: yup.string().required("Invalid coupon"),
  agree: yup.boolean().oneOf([true], "You must agree to the terms and conditions"),
}),
    onSubmit: async (values) => {
      // values.coupon_code = coupon_code;

      try {
        const result = await CoupencodeService(values);
       
        if (result.status) {
          Swal.fire("Success", "OTP verified successfully", "success");
          router.push(`/signin?id=${result.id}`);
        } else {
          Swal.fire("Error", "OTP verification failed", "error");
          console.error("Error during coupon code submission");
        }
      } catch (error) {
        Swal.fire("Error", "An error occurred. Please try again.", "error");
        console.error("Error during coupon code submission", error);
      }
    },
  });

  return (
    <>
      <div className="w-full bg-primary sm:justify-start">
        <Image alt="img" src={img} className="w-[160px] md:ml-24" />
      </div>
      <div className="py-32">
        <div className="flex justify-center space-y-9">
          <h1 className="text-center p-1 w-[32%] text-[#03517E] text-[34px] font-[800] leading-[35px]">
            Enter Coupon Code
          </h1>
        </div>
        <div className="pt-12">
          <form onSubmit={formik.handleSubmit}>
            <div className="flex justify-center md:justify-center sm:justify-center flex-col space-y-2 items-center rounded-3xl m-auto md:w-[450px] py-9 p-2 shadow-lg">
              <div className="flex flex-col md:w-[94%] w-full space-y-5">
                <div>
                  <input
                    type="text"
                    name="coupon_code"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.coupon_code}
                    placeholder="Enter Coupon Code"
                    className={`border-[4px] border-primary rounded-full w-full p-2 outline-none focus:border-[2px] focus:border-[#F9D1D1] ${
                      formik.errors.coupon_code && formik.touched.coupon_code ? "border-danger" : ""
                    }`}
                  />
                  {formik.errors.coupon_code && formik.touched.coupon_code && (
                    <div className="text-danger text-sm">{formik.errors.coupon_code}</div>
                  )}
                </div>
              
              </div>
              <div className="flex justify-center md:flex-row md:space-x-4 md:space-y-0 space-y-4 flex-col items-center py-3 w-[35%]">
                <button
                  type="submit"
                  className="border-[3px] font-medium bg-primary text-[20px] text-white rounded-[10px] w-full p-2 outline-none focus:border-[2px] focus:border-[#F9D1D1]"
                >
                  Proceed
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
