'use client'
import React, { useContext, useRef } from "react";
import img from "../../assets/imges/Orange (1).png";
import Image from "next/image";
import { useFormik } from "formik";
import * as yup from "yup";
import { OtpService } from "@/app/services/OtpService";
import { rootContexts } from "@/app/contexts/rootContexts";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

export const Otp = () => {
  const router = useRouter();
  const { emailotp } = useContext(rootContexts);
  const firstDigitRef = useRef(null);
  const secondDigitRef = useRef(null);
  const thirdDigitRef = useRef(null);
  const fourthDigitRef = useRef(null);
  const fifthDigitRef = useRef(null);
  const sixthDigitRef = useRef(null);

  const formik = useFormik({
    initialValues: {
      firstDigit: "",
      secondDigit: "",
      thirdDigit: "",
      fourthDigit: "",
      fifthDigit: "",
      sixthDigit: "",
    },
    validationSchema: yup.object({
      firstDigit: yup.string().matches(/^\d$/, "Must be a digit").required("Required"),
      secondDigit: yup.string().matches(/^\d$/, "Must be a digit").required("Required"),
      thirdDigit: yup.string().matches(/^\d$/, "Must be a digit").required("Required"),
      fourthDigit: yup.string().matches(/^\d$/, "Must be a digit").required("Required"),
      fifthDigit: yup.string().matches(/^\d$/, "Must be a digit").required("Required"),
      sixthDigit: yup.string().matches(/^\d$/, "Must be a digit").required("Required"),
    }),
    onSubmit: async (values) => {
      const otp = `${values.firstDigit}${values.secondDigit}${values.thirdDigit}${values.fourthDigit}${values.fifthDigit}${values.sixthDigit}`;
      const payload = {
        email: emailotp,
        otp,
      };

      try {
        const result = await OtpService(payload);
        if (result.status) {
          Swal.fire("Success", "OTP verified successfully", "success");
          router.push("/changePassword");
        } else {
          Swal.fire("Error", "OTP verification failed", "error");
          console.error("OTP verification failed", result.message);
        }
      } catch (error) {
        Swal.fire("Error", "An error occurred. Please try again.", "error");
        console.error("Error during OTP verification", error);
      }
    },
  });

  const handleInputChange = (event, nextRef) => {
    const { value, name } = event.target;

    if (/^\d*$/.test(value)) {
      formik.setFieldValue(name, value);

      if (value && nextRef.current) {
        nextRef.current.focus();
      }
    }
  };

  return (
    <>
      <div className="w-full bg-primary flex justify-center sm:justify-start">
        <Image alt="img" src={img} className="w-[160px] md:ml-24" />
      </div>
      <div className="py-32">
        <div className="flex justify-center space-y-9">
          <h1 className="droid text-center p-1 w-full sm:w-[32%] text-[#03517E] text-[34px] font-[800] leading-[35px]">
            Enter OTP
          </h1>
        </div>
        <div className="pt-12">
          <form onSubmit={formik.handleSubmit}>
            <div className="flex justify-center flex-col space-y-2 items-center rounded-3xl m-auto w-full md:w-[450px] py-9 p-2 shadow-lg">
              <div className="flex flex-col w-full md:w-[94%] space-y-5">
                <div className="flex md:gap-x-3 justify-between w-full">
                  <input
                    type="text"
                    name="firstDigit"
                    onChange={(e) => handleInputChange(e, secondDigitRef)}
                    maxLength={1}
                    ref={firstDigitRef}
                    value={formik.values.firstDigit}
                    placeholder="1"
                    className={`otp-input border border-primary rounded-full w-[50px] h-[50px] pl-2 text-center p-2 outline-none focus:border-2 focus:border-[#F9D1D1] ${formik.errors.firstDigit && formik.touched.firstDigit ? "border-danger" : ""}`}
                  />
                  <input
                    type="text"
                    name="secondDigit"
                    onChange={(e) => handleInputChange(e, thirdDigitRef)}
                    maxLength={1}
                    ref={secondDigitRef}
                    value={formik.values.secondDigit}
                    placeholder="2"
                    className={`otp-input border border-primary rounded-full w-[50px] h-[50px] pl-2 text-center p-2 outline-none focus:border-2 focus:border-[#F9D1D1] ${formik.errors.secondDigit && formik.touched.secondDigit ? "border-danger" : ""}`}
                  />
                  <input
                    type="text"
                    name="thirdDigit"
                    onChange={(e) => handleInputChange(e, fourthDigitRef)}
                    maxLength={1}
                    ref={thirdDigitRef}
                    value={formik.values.thirdDigit}
                    placeholder="3"
                    className={`otp-input border border-primary rounded-full w-[50px] h-[50px] pl-2 text-center p-2 outline-none focus:border-2 focus:border-[#F9D1D1] ${formik.errors.thirdDigit && formik.touched.thirdDigit ? "border-danger" : ""}`}
                  />
                  <input
                    type="text"
                    name="fourthDigit"
                    onChange={(e) => handleInputChange(e, fifthDigitRef)}
                    maxLength={1}
                    ref={fourthDigitRef}
                    value={formik.values.fourthDigit}
                    placeholder="4"
                    className={`otp-input border border-primary rounded-full w-[50px] h-[50px] pl-2 text-center p-2 outline-none focus:border-2 focus:border-[#F9D1D1] ${formik.errors.fourthDigit && formik.touched.fourthDigit ? "border-danger" : ""}`}
                  />
                  <input
                    type="text"
                    name="fifthDigit"
                    onChange={(e) => handleInputChange(e, sixthDigitRef)}
                    maxLength={1}
                    ref={fifthDigitRef}
                    value={formik.values.fifthDigit}
                    placeholder="5"
                    className={`otp-input border border-primary rounded-full w-[50px] h-[50px] pl-2 text-center p-2 outline-none focus:border-2 focus:border-[#F9D1D1] ${formik.errors.fifthDigit && formik.touched.fifthDigit ? "border-danger" : ""}`}
                  />
                  <input
                    type="text"
                    name="sixthDigit"
                    onChange={formik.handleChange}
                    maxLength={1}
                    ref={sixthDigitRef}
                    value={formik.values.sixthDigit}
                    placeholder="6"
                    className={`otp-input border border-primary rounded-full w-[50px] h-[50px] pl-2 text-center p-2 outline-none focus:border-2 focus:border-[#F9D1D1] ${formik.errors.sixthDigit && formik.touched.sixthDigit ? "border-danger" : ""}`}
                  />
                </div>
                {formik.errors.firstDigit && formik.touched.firstDigit && (
                  <div className="text-danger text-sm">
                    {formik.errors.firstDigit}
                  </div>
                )}
                {formik.errors.secondDigit && formik.touched.secondDigit && (
                  <div className="text-danger text-sm">
                    {formik.errors.secondDigit}
                  </div>
                )}
                {formik.errors.thirdDigit && formik.touched.thirdDigit && (
                  <div className="text-danger text-sm">
                    {formik.errors.thirdDigit}
                  </div>
                )}
                {formik.errors.fourthDigit && formik.touched.fourthDigit && (
                  <div className="text-danger text-sm">
                    {formik.errors.fourthDigit}
                  </div>
                )}
                {formik.errors.fifthDigit && formik.touched.fifthDigit && (
                  <div className="text-danger text-sm">
                    {formik.errors.fifthDigit}
                  </div>
                )}
                {formik.errors.sixthDigit && formik.touched.sixthDigit && (
                  <div className="text-danger text-sm">
                    {formik.errors.sixthDigit}
                  </div>
                )}
              </div>

              <div className="flex justify-center md:flex-row md:space-x-4 md:space-y-0 space-y-4 flex-col items-center py-3 w-full md:w-[35%]">
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
