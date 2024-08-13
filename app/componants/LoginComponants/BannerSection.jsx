import { useState } from "react";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import img from "../../assets/imges/Orange (1).png";
import { authLogin } from "@/app/services/AuthService";
import Loader from "../Layout/Loader";
import Swal from "sweetalert2";

const BannerSection = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid Email").required("Email is required"),
    password: Yup.string().min(8, "Password should be at least 8 characters").required("Password is required"),
    checkBox: Yup.boolean().oneOf([true], 'You must agree to the terms and conditions').required("You must agree to the terms and conditions"),
  });

  const initialValues = {
    email: "",
    password: "",
    checkBox: false,
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    isValid,
    dirty,
  } = useFormik({
    initialValues,
    validationSchema,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: async (values) => {
      if (!isValid || !dirty) {
        return;
      }
      setIsSubmitting(true);
      setIsLoading(true);
      try {
        const login = await authLogin(values);
        if (login?.status) {
          Swal.fire({
            icon: 'success',
            title: 'WELCOME',
            showConfirmButton: false,
            timer: 1500
          });
          localStorage.setItem("token", login.token);
          localStorage.setItem("ids", login?.all_pdf[0]?.id);
          localStorage.setItem("user", JSON.stringify(login?.data));
          router.push("/flipsnack");
        }
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Login failed',
          text: 'Please check your credentials and try again.',
        });
        console.error("Error submitting form:", error);
      } finally {
        setIsSubmitting(false);
        setIsLoading(false);
      }
    },
  });

  return (
    <>
      {isLoading && <Loader />}
      <div className="w-full bg-primary sm:justify-start relative h-[100px]">
        <Image
          alt="img"
          src={img}
          className="w-[136px] md:ml-24 sm:ml-2"
          id="mobile-responsive"
        />
      </div>
      <div className="container m-auto p-5 ">
        <div className="justify-center flex text-center">
          <div className="w-full sm:w-full md:w-[56%] lg:py-14 py-10">
            <h1 className="droid sm-w-[90%] md-w-full text-center lg:text-[31px] text-[30px] w-[41%] justify-center font-[800] text-[#03517E] leading-[37px] m-auto py-3">
              Login to access your Dashboard
            </h1>
            <form
              className=" montserrat sm:w-full md:w-[65%] justify-center flex-col space-y-2 items-center rounded-3xl m-auto py-9 p-2 shadow-2xl"
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col md:mx-10 space-y-5">
                <div>
                  <input
                    type="text"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    placeholder="Email"
                    className={`border-[4px] sm:w-full border-primary rounded-full ${
                      errors.email && touched.email && !values.email ? "border-danger" : "border-stroke"
                    } w-full p-2 outline-none focus:border-[3px] focus:border-[#ff6262]`}
                    disabled={isSubmitting}
                  />
                  {errors.email && touched.email && !values.email && (
                    <div className="text-red-500 text-sm">{errors.email}</div>
                  )}
                </div>
                <div>
                  <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    placeholder="Password"
                    className={`border-[4px] sm:w-full border-primary rounded-full ${
                      errors.password && touched.password && !values.password ? "border-danger" : "border-stroke"
                    } w-full p-2 outline-none focus:border-[3px] focus:border-[#ff6262]`}
                    disabled={isSubmitting}
                  />
                  {errors.password && touched.password && !values.password && (
                    <div className="text-red-500 text-sm">
                      {errors.password}
                    </div>
                  )}
                </div>
              </div>
              <div className="justify-start cursor-pointer text-[#21a7d0] text-start md:ml-[45px]">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="checkBox"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    checked={values.checkBox}
                    className="cursor-pointer"
                  />
                  <p onClick={() => router.push("/term-and-condition")} className="cursor-pointer">
                    Terms & Conditions
                  </p>
                </div>
                {errors.checkBox && touched.checkBox && (
                  <div className="text-red-500 text-sm">{errors.checkBox}</div>
                )}
              </div>
              <p
                className="text-center cursor-pointer text-[#21a7d0] text-[15px] font-normal leading-7 pt-3"
                onClick={() => router.push("/ResetPassword")}
              >
                Forget password?
              </p>
              <div className="cursor-pointer flex flex-col space-y-4 items-center py-3">
                <button
                   type="submit"
                  // disabled={!isValid || !dirty || isSubmitting}
                  className="md:w-[70%] cursor-pointer w-full sm:w-full border-[3px] font-extrabold bg-[#03517e] text-[17px] text-white border-[#03517e] rounded-[5px] p-2 outline-none focus:border-[2px] hover:bg-[#456c83]"
                >
                  {isSubmitting ? "Submitting..." : "Login account"}
                </button>
                <p className="text-[19px] font-normal leading-7 text-[#505050]">
                  Don’t have an account?{" "}
                  <a
                    className="cursor-pointer text-[#21a7d0] text-[15px] font-normal leading-7"
                    onClick={() => router.push("/family-handbook-generator/")}
                  >
                    Register
                  </a>
                </p>
                <p className="text-center">OR</p>
                <p
                  className="cursor-pointer opacity-[2.8] text-[#21a7d0] text-[19px] font-normal leading-7 text-center animate-pulse"
                  onClick={() => router.push("/signup-by-coupon")}
                >
                  Register with coupon code
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerSection;
