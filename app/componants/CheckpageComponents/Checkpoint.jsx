'use client'
import React, { useState } from "react";
import Image from "next/image";
import img from "../../assets/imges/723016be2df4059cb17ffb8a3b1fe1a1_1200_80.webp";
import arrow from "../../assets/imges/691cf00fc95cea954443291022743ebe_1200_80.webp";
import { Card } from "flowbite-react";
import { useRouter } from 'next/navigation';
import StripeCheckout from 'react-stripe-checkout';
import Swal from 'sweetalert2';
import {Secti2} from './Secti2';
import {Sectionchek} from './Sectionchek';
import { authcoupen, authpayment } from "@/app/services/Rejister";

export const Checkpoint = () => {
  const [price, setPrice] = useState(67.00); // Set initial price
  const [couponCode, setCouponCode] = useState(""); // Coupon code state
  const router = useRouter();
  const [userData, setuserData] = useState({

coupon_id:"",
full_name:"",
password:"",
email:"",
phone:"",
charge_token:"",
price:67,

  });
  const onToken = (token) => {
   
   if(token.id){
    
    addData(token.id)

   }
   
  };
const addData=async(id)=>{
  const result = await authpayment(userData,id)
    
    if(result.status){
      router.push('/login')
      Swal.fire({
        icon: 'success',
        title: 'User Account',
        text: result?.message 
      }
    );
    }
    else{
      Swal.fire({
        icon: 'error',
        title: 'User Account',
        text: result?.message 
      }
    
    );
    }
}


  const handleApplyCoupon = async () => {
    try {
      // Prepare the data to send
      const data = {
        coupon_code: couponCode,
        price: 67.00, // Original price
      };
  
      // Call the API to validate the coupon
      const result = await authcoupen(data);
      
      if (result?.status === true) {
        // Update the price based on response
        

        setuserData({...userData,price:result.discounted_price,coupon_id:result.id})
        setPrice(result.discounted_price || 67.00); // Use the discounted price from the API
      } else {
        // Show error message if the coupon is invalid
        Swal.fire({
          icon: 'error',
          title: 'Invalid Coupon Code',
          text: result?.message || 'Please enter a valid coupon code.',
        });
      }
    } catch (error) {
      // Handle any errors that occur during the API call
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'An error occurred while applying the coupon.',
      });
    }
  };
  const handleInput = (e) => {
    
    const { name, value } = e.target;

    setuserData((prevState) => ({
      ...prevState,
      [name]: value,
     
    }));
    handleValidationOtherParent()
  };
  return (
    <div className="montserrat">
      <div className=" py-10 px-4 md:px-20">
        <p className="text-4xl font-extrabold  text-center aleading-12 md:text-5xl">
          THE <span className="text-[#ff9900]">FAMILY HANDBOOK</span> GENERATOR
        </p>
        <p className="text-lg font-medium leading-7 md:text-xl md:leading-8">
         
A fun, easy-to-use web based tool that helps moms and dads create a customized Handbook for the family quickly andeasily. The most effective tool for memorializing purpose and direction of a family and all family members. Stop buyingparenting books. Make the book that will impact your family for generations to come.
        </p>

        <div className="pt-5 w-full">
          <div className="w-full md:w-[100%] mx-auto bg-white shadow-2xl rounded-md">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-6 md:p-1">
                <div>
                  <p className="text-2xl pt-5 text-center text-[#ff9900] font-extrabold leading-10 md:text-3xl md:leading-12">
                    THE WORLD’S BEST MONEY BACK GUARANTEE
                  </p>
                  <p className="text-lg text-center font-normal leading-7 md:text-xl md:leading-8">
                    And Why You Can’t Lose
                  </p>
                  <p className="text-lg text-center font-normal leading-7 md:text-xl md:leading-8">
                    GET INSTANT ACCESS!
                  </p>
                  <p className="text-lg text-center font-normal leading-7 md:text-xl md:leading-8">
                    CREATE YOUR PERSONALIZED FAMILY HANDBOOK!
                  </p>
                  <p className="text-lg text-center font-normal leading-7 md:text-xl md:leading-8">
                    & If you don’t use it with your family, get a full refund!
                  </p>
                  <Image src={img} alt="" />
                  <p className="text-base pt-5 text-center font-bold leading-10 ">Get Access For Only</p>
                  <p className="text-2xl pt-5 text-center text-secondary font-extrabold leading-10 md:text-3xl md:leading-12">
                    ${price.toFixed(2)}!
                  </p>
                  {/* <div className="flex justify-center md:justify-end">
                    <Image
                      src={arrow}
                      alt=""
                      className="w-32 h-auto justify-end"
                    />
                  </div> */}
                </div>
              </div>
              <div className="p-6 md:p-12 text-center justify-center">
                <Card className="shadow-2xl">
                  <div className="text-center justify-center md:text-left">
                    <p className="text-blue-600 text-sm text-center font-bold leading-5">
                      Your Info
                    </p>
                    <p className="text-sm text-[#607179] text-center font-bold leading-7">
                      Upgrade Your Order & Save!
                    </p>
                    <p className="text-sm text-center font-bold leading-7">
                      Enter your details and apply the coupon code for a discount.
                    </p>
                  </div>
                  <form id="form" onSubmit={(e)=>e.preventDefault()} className="flex flex-col gap-2">
                    <div>
                      <input
                        name="full_name"
                        onChange={handleInput}
                        value={userData.full_name}
                        type="text"
                        placeholder="Full Name"
                        className="border-[1px] border-[#f87171] rounded-md text-lg p-2 w-full focus:outline-none focus:border-[#f87171] focus:ring-1 focus:ring-[#f87171]"
                        required
                      />
                    </div>
                    <div>
                      <input
                        id="Email"
                        name="email"
                        onChange={handleInput}
                        value={userData.email}
                        type="email"
                        placeholder="Email Address"
                        className="border-[1px] border-[#f87171] rounded-md text-lg p-2 w-full focus:outline-none focus:border-[#f87171] focus:ring-1 focus:ring-[#f87171]"
                        required
                      />
                    </div>
                   
                    <div>
                      <input
                        id="number"
                        type="text"
                        name="phone"
                        onChange={handleInput}
                        value={userData.phone}
                        placeholder="Phone Number"
                        className="border-[1px] border-[#f87171] rounded-md text-lg p-2 w-full focus:outline-none focus:border-[#f87171] focus:ring-1 focus:ring-[#f87171]"
                        required
                      />
                    </div>
                    <div>
                      <input
                        id="Password"
                        type="password"
                        placeholder="Password"
                        name="password"
                        onChange={handleInput}
                        value={userData.password}
                        className="border-[1px] border-[#f87171] rounded-md text-lg p-2 w-full focus:outline-none focus:border-[#f87171] focus:ring-1 focus:ring-[#f87171]"
                        required
                      />
                    </div>
                  </form>
                  <div className="flex justify-start mt-4">
                    <div className="flex items-center">
                      <p className="mr-2">Payment</p>
                      <div className="flex-grow border-b border-gray-400"></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-7">
                    <div className="col-span-3 text-left text-[15px] font-bold leading-normal">
                      Item
                    </div>
                    <div className="col-span-2 text-[15px] font-bold leading-normal">
                      Quantity
                    </div>
                    <div className="col-span-2 text-right text-[15px] font-bold leading-normal">
                      Price
                    </div>
                    <div className="col-span-7">
                      <hr className="w-full border-2" />
                    </div>
                  </div>
                  <div className="grid grid-cols-7">
                    <div className="col-span-3 text-left">
                      <p className="text-[14px] font-bold leading-normal">
                        <input type="checkbox" /> FHB Access
                      </p>
                    </div>
                    <div className="col-span-2">
                      <p className="text-[13px] font-bold leading-normal">1</p>
                    </div>
                    <div className="col-span-2 text-right">
                      <p className="text-[14px] text-[#1571a8] font-bold leading-normal">
                        ${price.toFixed(2)}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-end space-x-3">
                    <input
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      type="text"
                      placeholder="Enter coupon code"
                      className="border-[1px] rounded-md w-[70%] text-lg p-2"
                    />
                    <button
                      onClick={handleApplyCoupon}
                      className="bg-primary text-white rounded-md w-[20%] text-lg p-2"
                    >
                      Apply
                    </button>
                  </div>
                  <div className="text-center relative">
                    <p className="text-[13px] font-medium inline-block relative z-10 bg-white px-2">Order summary</p>
                    <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full border-t border-[#000000]"></span>
                    <span className="absolute right-0 top-1/2 transform -translate-y-1/2 w-full border-t border-[#000000]"></span>
                  </div>
                  <div className="grid grid-cols-7">
                    <div className="col-span-3 text-left text-[15px] font-bold leading-normal">
                      Item
                    </div>
                    <div className="col-span-2 text-[15px] font-bold leading-normal">
                      Quantity
                    </div>
                    <div className="col-span-2 text-right text-[15px] font-bold leading-normal">
                      Amount
                    </div>
                    <div className="col-span-7">
                      <hr className="w-full border-2" />
                    </div>
                  </div>
                  <div className="grid grid-cols-7">
                    <div className="col-span-3 text-left text-[15px] font-bold leading-normal">
                      FHB Access
                    </div>
                    <div className="col-span-2 text-[15px] font-bold leading-normal">
                      1
                    </div>
                    <div className="col-span-2 text-right text-[15px] font-bold leading-normal text-[#1571a8]">
                      ${price.toFixed(2)}
                    </div>
                    <div className="col-span-7">
                      <hr className="w-full border-2" />
                    </div>
                  </div>
                  <div className="grid grid-cols-7">
                    <div className="col-span-3 text-left text-[15px] font-bold leading-normal">
                      Order Subtotal
                    </div>
                    <div className="col-span-2 text-[15px] font-bold leading-normal"></div>
                    <div className="col-span-2 text-right text-[15px] font-bold leading-normal text-[#1571a8]">
                      ${price.toFixed(2)}
                    </div>
                    <div className="col-span-7">
                      <hr className="w-full border-2" />
                    </div>
                  </div>
                  <div className="grid grid-cols-7">
                    <div className="col-span-3 text-left text-[15px] font-bold leading-normal">
                      Order Total
                    </div>
                    <div className="col-span-2 text-[15px] font-bold leading-normal"></div>
                    <div className="col-span-2 text-right text-[15px] font-bold leading-normal text-[#1571a8]">
                      ${price.toFixed(2)}
                    </div>
                    <div className="col-span-7">
                      <hr className="w-full border-2" />
                    </div>
                  </div>
                  <div>
                    <StripeCheckout
                      amount={price * 100} // Price in cents
                      token={onToken}
                      stripeKey="pk_test_51LNt6zKhmRit377zkPatzgi9ckH1GU0kWpMkAUNU3BX3VucekD9bkV6QFodRelAmt7vDAgoIdpYUeGtuGWfQlcWr00bTsqA7Dl"
                    />
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Sectionchek/>
      <Secti2/>
      {/* <footer className="pt-5 bg-[#141125] p-5 text-center text-[20px] font-medium leading-7 container mx-auto text-white">
        2022 © FAMILY HANDBOOK GENERATOR ALL RIGHTS RESERVED
      </footer> */}
    </div>
  );
};
