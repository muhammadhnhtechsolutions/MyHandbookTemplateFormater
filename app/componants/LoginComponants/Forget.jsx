'use client'
import React, { useContext } from "react";
import img from "../../assets/imges/Orange (1).png";
import Image from "next/image";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { ForgotPasswordService } from "@/app/services/ForgetServices";
import { useFormik } from "formik";
import * as yup from "yup";
import { rootContexts } from "@/app/contexts/rootContexts";

export const Forget = () => {
  const router = useRouter();
  const { setEmailotp } = useContext(rootContexts);

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: yup.object({
      email: yup.string().email("Invalid email").required("Email is required"),
    }),
    onSubmit: async (values) => {
   
    // 
      try {
        const result = await ForgotPasswordService(values);
        
        if (result.status) {
          Swal.fire("Success", "Please check your email for further instructions.", "success");
          router.push("/otpCheck");
          setEmailotp(values.email);
        } else {
          Swal.fire("Error", "An error occurred. Please try again.", "error");
        }
      } catch (error) {
        console.error("Error during password reset", error);
        Swal.fire("Error", "An error occurred. Please try again.", "error");
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
          <h1 className="droid text-center p-1 w-[32%] text-[#03517E] text-[34px] font-[800] leading-[35px]">
            Reset Your Password
          </h1>
        </div>
        <div className="pt-12">
          <form onSubmit={formik.handleSubmit}>
            <div className="flex justify-center md:justify-center sm:justify-center flex-col space-y-2 items-center rounded-3xl m-auto md:w-[450px] py-9 p-2 shadow-lg">
              <div className="flex flex-col md:w-[94%] w-full space-y-5">
                <div>
                  <input
                    type="email"
                    name="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    placeholder="Enter your email"
                    className={`border-[4px] border-primary rounded-full w-full p-2 outline-none focus:border-[2px] focus:border-[#F9D1D1] ${
                      formik.errors.email && formik.touched.email ? 'border-danger' : ''
                    }`}
                  />
                  {formik.errors.email && formik.touched.email && (
                    <div className="text-danger text-sm">{formik.errors.email}</div>
                  )}
                </div>
              </div>

              <div className="flex justify-center md:flex-row md:space-x-4 md:space-y-0 space-y-4 flex-col items-center py-3 w-[35%]">
                <button
                  type="submit"
                  className="border-[3px] montserrat font-medium bg-primary text-[20px] text-white rounded-[10px] w-full p-2 outline-none focus:border-[2px] focus:border-[#F9D1D1]"
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
