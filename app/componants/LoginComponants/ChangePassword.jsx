'use client'
import React, { useContext } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as yup from "yup";
import { rootContexts } from "@/app/contexts/rootContexts";
import { ResetServices } from "@/app/services/ResetServices";
import img from "../../assets/imges/Orange (1).png";

export const ChangePassword = () => {
  const router = useRouter();
  const { setEmailotp } = useContext(rootContexts);

  const formik = useFormik({
    initialValues: {
      email: "",
      newpassword: "",
      confirmpassword: "",
    },
    validationSchema: yup.object({
      email: yup.string().email("Invalid email address").required("Email is required"),
      newpassword: yup.string().min(8, "Password must be at least 8 characters").required("Password is required"),
      confirmpassword: yup.string()
        .oneOf([yup.ref('newpassword'), null], "Passwords must match")
        .required("Confirm password is required"),
    }),
    onSubmit: async (values) => {
      try {
        const result = await ResetServices(values);
        if (result.status) {
          setEmailotp(formik.values.email);
         
          router.push("/login");
        } else {
          console.error("Password reset failed: ", result.message || 'An error occurred during password reset');
        }
      } catch (error) {
        console.error("Error during password reset", error);
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
          <h1 className="text-center  droid  p-1 w-[32%] text-[#03517E] text-[34px] font-[800] leading-[35px]">
            Change Your Password
          </h1>
        </div>
        <div className="pt-12">
          <form onSubmit={formik.handleSubmit}>
            <div className="montserrat flex justify-center md:justify-center sm:justify-center flex-col space-y-2 items-center rounded-3xl m-auto md:w-[450px] py-9 p-2 shadow-lg">
              <div className="flex flex-col md:w-[94%] w-full space-y-5">
                <div>
                  <input
                    type="email"
                    name="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    placeholder="Enter your email"
                    className={`border-[4px]  border-primary rounded-full w-full p-2 outline-none focus:border-[2px] focus:border-[#F9D1D1] ${formik.errors.email && formik.touched.email ? 'border-danger' : ''}`}
                  />
                  {formik.errors.email && formik.touched.email && (
                    <div className="text-danger text-sm">{formik.errors.email}</div>
                  )}
                </div>
                <div>
                  <input
                    type="password"
                    name="newpassword"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.newpassword}
                    placeholder="Enter your new password"
                    className={`border-[4px] border-primary rounded-full w-full p-2 outline-none focus:border-[2px] focus:border-[#F9D1D1] ${formik.errors.newpassword && formik.touched.newpassword ? 'border-danger' : ''}`}
                  />
                  {formik.errors.newpassword && formik.touched.newpassword && (
                    <div className="text-danger text-sm">{formik.errors.newpassword}</div>
                  )}
                </div>
                <div>
                  <input
                    type="password"
                    name="confirmpassword"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.confirmpassword}
                    placeholder="Confirm your new password"
                    className={`border-[4px] border-primary rounded-full w-full p-2 outline-none focus:border-[2px] focus:border-[#F9D1D1] ${formik.errors.confirmpassword && formik.touched.confirmpassword ? 'border-danger' : ''}`}
                  />
                  {formik.errors.confirmpassword && formik.touched.confirmpassword && (
                    <div className="text-danger text-sm">{formik.errors.confirmpassword}</div>
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
