'use client'
import React from "react";
import { useRouter } from "next/navigation";

const FeedBack = () => {
  const router = useRouter();

  const handleBackToDashboard = (e) => {
    e.preventDefault();
    router.push("/section");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/section");
  };

  return (
    <div className="container mx-auto md:p-5 px-5 md:pt-12 pt-0">
      <div className="min-h-screen flex flex-col rounded p-5">
        <div></div>
        <form className="space-y-5 m-auto gap-4 ">
          <p className="underline text-2xl justify-center leading-[43px] font-normal text-[#6B6B6B] mb-5 mx-auto ">
            (Please complete the following form and help us improve our customer
            experience.)
          </p>
          <div className="flex md:space-x-4 justify-center flex-col md:flex-row space-y-3 md:space-y-0 py-2">
            <div>
              <label htmlFor="name" className="text-left">
                Full Name <span className="text-red-500 pl-3">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Full Name"
                className="outline-none border-b-2 rounded w-full p-2"
              />
            </div>
            <div>
              <label htmlFor="contact" className="text-left">
                Contact <span className="text-red-500 pl-3">*</span>
              </label>
              <input
                type="number"
                id="contact"
                name="contact"
                className="outline-none border-b-2  numbers rounded w-full p-2"
                placeholder="Enter Contact #"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-left">
                Email <span className="text-red-500 pl-3">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="outline-none border-b-2 rounded w-full p-2"
                placeholder="raheel@gmail.com"
              />
            </div>
          </div>
          <div className="col-span-3">
            <textarea
              placeholder="Enter your feedback"
              className="outline-none border-b border-gray-400 rounded w-full p-2"
              name="feedback"
              id="feedback"
              cols="30"
              rows="10"
            ></textarea>
          </div>

          <div className="col-span-3 flex justify-center text-center ">
            <div className="space-x-7 w-full md:space-y-0 space-y-4">
              <button
                onClick={handleBackToDashboard}
                className="bg-[#273C66] md:w-[30%] hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              >
                Back To Dashboard
              </button>
              <button
                type="submit"
                onClick={handleSubmit}
                className="bg-[#273C66] w-[30%] hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FeedBack;
