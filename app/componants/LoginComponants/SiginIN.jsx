'use client'
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import img from "../../assets/imges/Orange (1).png";
import { authSignin } from "../../../app/services/AuthService";
import Loader from "../Layout/Loader";  

const Sigin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const params = useSearchParams();

  const validationSchema = Yup.object().shape({
    full_name: Yup.string().required("Full Name is required"),
    email: Yup.string().email("Invalid Email").required("Email is required"),
    password: Yup.string().min(8, "Password should be at least 8 characters").required("Password is required"),
  });

  const initialValues = {
    full_name: "",
    email: "",
    password: "",
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      if (!formik.isValid || !formik.dirty) {
        return;
      }
      setIsSubmitting(true);

      setIsLoading(true);
      try {
        const login = await authSignin({...values, id: params.get("id")});
        if (login?.status) {
          router.push("/login");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
      } finally {
        setIsSubmitting(false);
        setIsLoading(false);
      }
    },
  });

  useEffect(() => {
    formik.resetForm();
  }, []);

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
      <div className="container m-auto p-5">
        <div className="justify-center flex text-center">
          <div className="w-full sm:w-full md:w-[56%] lg:py-14 py-10">
            <h1 className="sm-w-[90%] md-w-full text-center lg:text-[31px] text-[30px] w-[41%] justify-center font-[800] text-[#03517E] leading-[37px] m-auto py-3">
              SIGN UP to access your Dashboard
            </h1>
            <form
              className="sm:w-full md:w-[65%] justify-center flex-col space-y-2 items-center rounded-3xl m-auto py-9 p-2 shadow-2xl"
              onSubmit={formik.handleSubmit}
            >
              <div className="flex flex-col md:mx-10 space-y-5">
                <div>
                  <input
                    type="text"
                    name="full_name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.full_name}
                    placeholder="Full Name"
                    className={`border-[4px] sm:w-full border-primary rounded-full ${
                      formik.errors.full_name && formik.touched.full_name
                        ? "border-danger"
                        : "border-stroke"
                    } w-full p-2 outline-none focus:border-[3px] focus:border-[#ff6262]`}
                    disabled={isSubmitting}
                  />
                  {formik.errors.full_name && formik.touched.full_name && (
                    <div className="text-red-500 text-sm">{formik.errors.full_name}</div>
                  )}
                  {formik.touched.full_name && !formik.values.full_name && (
                    <div className="text-red-500 text-sm">
                      Full Name is required
                    </div>
                  )}
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    placeholder="Email"
                    className={`border-[4px] sm:w-full border-primary rounded-full ${
                      formik.errors.email && formik.touched.email
                        ? "border-danger"
                        : "border-stroke"
                    } w-full p-2 outline-none focus:border-[3px] focus:border-[#ff6262]`}
                    disabled={isSubmitting}
                  />
                  {formik.errors.email && formik.touched.email && (
                    <div className="text-red-500 text-sm">{formik.errors.email}</div>
                  )}
                  {formik.touched.email && !formik.values.email && (
                    <div className="text-red-500 text-sm">
                      Email is required
                    </div>
                  )}
                </div>
                <div>
                  <input
                    type="password"
                    name="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                    placeholder="Password"
                    className={`border-[4px] sm:w-full border-primary rounded-full ${
                      formik.errors.password && formik.touched.password
                        ? "border-danger"
                        : "border-stroke"
                    } w-full p-2 outline-none focus:border-[3px] focus:border-[#ff6262]`}
                    disabled={isSubmitting}
                  />
                  {formik.errors.password && formik.touched.password && (
                    <div className="text-red-500 text-sm">
                      {formik.errors.password}
                    </div>
                  )}
                  {formik.touched.password && !formik.values.password && (
                    <div className="text-red-500 text-sm">
                      Password is required
                    </div>
                  )}
                </div>
              </div>
              <div className="cursor-pointer flex flex-col space-y-4 items-center py-3">
                <button
                  type="submit"
                  disabled={!formik.isValid || !formik.dirty || isSubmitting}
                  className="md:w-[70%] w-full sm:w-full border-[3px] font-extrabold bg-[#03517e] text-[17px] text-white border-[#03517e] rounded-[5px] p-2 outline-none focus:border-[2px] hover:bg-[#456c83]"
                >
                  {isSubmitting ? "Submitting..." : "Sign In account"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sigin;
