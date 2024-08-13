"use client";
import React from "react";
import Image from "next/image";
import img2 from "../../../assets/imges/08bea446b1162a7fd43053da97737b6d_1200_80.webp";
import vid from "../../../assets/imges/0554a157a58d22eedca4fe07bfa55c7c_1200_80.webp";
import img from "../../../assets/imges/background.webp";
import img3 from "../../../assets/imges/723016be2df4059cb17ffb8a3b1fe1a1_1200_80.webp";
import img12 from "../../../assets/imges/800191e489940aab191fe73187a28bf5_1200_80.webp";
import img13 from "../../../assets/imges/37f71e3e875722f0616e181f800ca950_1200_80.webp";
// import img4 from "../../assets/imges/800191e489940aab191fe73187a28bf5_1200_80.webp";
// import img5 from "../../assets/imges/37f71e3e875722f0616e181f800ca950_1200_80.webp";
// import img5 from "../../assets/imges/37f71e3e875722f0616e181f800ca950_1200_80.webp";
import img11 from "../../../assets/imges/5bf805014c42a8006c51a4c66b475398_1200_80.webp";
import img7 from "../../../assets/imges/637dcf630f648499150e64b78521cb1b_1200_80.webp";
import img8 from "../../../assets/imges/4cbd4652dab009b842f5c0cc81bb668b_1200_80.webp";
import img9 from "../../../assets/imges/0197af50337630bdbc0283ff09c99df2_1200_80.webp";
import img10 from "../../../assets/imges/839e7f219d4066e39ee437d8e224b162_1200_80.webp";
import img6 from "../../../assets/imges/eb2258eacea488c427e0c1f90bccc053_1200_80.webp";
import { Check } from "lucide-react";
import { Section3 } from "./Section3";
import { useRouter } from "next/navigation";
const Section2 = () => {
  const router = useRouter();
  return (
    <div>
      <div className="container m-auto  pt-12">
        <div className="w-[100%] flex md:flex-row flex-col-reverse md:space-x-5 md:space-y-0 sm:space-y-5 ">
          <div className="md:w-[70%] w-full  ">
            <div className="pt-5 mx-9">
              <p className="text-lg md:text-xl font-medium text-white py-3">
                The thing about parenting is that you learn as you go. Something
                that used to work with one child simply doesn&apos;t work with
                the other.
              </p>
              <p className="text-lg md:text-xl font-medium text-white">
                As a parent, it&rsquo;s not easy to guide your children away
                from the influence of the world and toward what is good and
                right. There are so many distractions and it doesn&apos;t help
                that there are constant changes in culture and society affecting
                the way our kids deal with us.
              </p>
              <p className="text-lg md:text-xl font-medium text-white pt-5">
                That&rsquo;s why I thought to make a solution for this problem.
              </p>
              <p className="text-lg md:text-xl font-medium text-white pt-5">
                Introducing the Family Handbook Generator… it is a fun,
                easy-to-use tool that helps you create an authentic family
                handbook quickly and easily. No more arguing about what your
                core values are or what principles you want your family to
                operate on.
              </p>
              <p className="text-lg md:text-xl font-medium text-white pt-5">
                You know what you need, but now you have the perfect solution
                for organizing your thoughts and creating valuable family tools.
              </p>
              <p className="text-lg md:text-xl font-medium text-white">
                See below to learn how it works in detail, but here’s a snapshot
                of how it works:
              </p>
            </div>
            <div className="pt-5 mx-9">
              <Image src={img2} alt="" />
            </div>
            <div className="pt-5 mx-9">
              <p className="text-2xl font-bold text-white">
                HERE’S
                <span className="text-[#ff9900]">
                  {" "}
                  WHAT THIS MEANS FOR YOU
                </span>{" "}
                AND YOUR FAMILY...
              </p>
              <p className="text-lg md:text-xl font-medium text-white ">
                No family is perfect – but with the right guidance, you can set
                up a moral compass that navigates your family to work as a team
                in every direction.
              </p>
              <p className="text-lg md:text-xl font-medium text-white pt-5">
                …That’s what the Family Handbook Generator can do for you and
                your family. Because the heartbreaking truth is that most
                families don&apos;t have a handbook.
              </p>
              <p className="text-lg md:text-xl font-medium text-white">
                Without a plan for how to deal with conflict, stress, and
                difficult situations, families are more likely to fall apart
                when they face challenges.
              </p>
              <p className="text-lg md:text-xl font-normal text-white py-8">
                This tool is perfect for hands-on parents like you… who prefer
                to have things laid out and simplified for them, especially when
                it comes to training their children and going over the rules and
                consequences of their actions.
              </p>
              <div className="text-2xl font-bold text-white py-8">
                <p>
                  HERE ARE SOME OF THE PARENTS WHO LOVED THE INTENTIONALITY THAT
                  COMES WITH THE FAMILY HANDBOOK:
                </p>
                <div className="space-y-6">
                  <div className="border-2 p-2 pb-4 rounded-md ">
                    <Image src={vid} alt="" />
                  </div>
                  <div className="border-2 p-2 rounded-md ">
                    <a href="">
                      <iframe
                        width="100%"
                        height="440"
                        src="https://www.youtube.com/embed/j8hts3kPyBs?si=2bI6_crjTcWmRZCK"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen
                      ></iframe>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-[30%] overflow-hidden  border-[#ff9900] border-[3px]  justify-center md:justify-center sm:justify-center  flex-col bg-[#ff9900]  items-center rounded-2xl  m-auto   py-2 shadow-2xl">
            <div className=" ">
              <div className="justify-center">
                <p className="text-[23px] text-center font-bold  text-white ">
                  HERE’S SOME OF WHAT YOU’RE GETTING FOR ONLY $47
                </p>
              </div>
              <div className="bg-white pt-4 p-5 mx-1">
                <div>
                  <Image src={img3} alt="" />
                </div>
              </div>
              <p className="text-[23px] text-center font-bold  text-white ">
                LIMITED TIME SPECIAL
              </p>
              <div className="bg-white p-0">
                <Image src={img6} alt="" />
                <Image src={img7} alt="" />
                <Image src={img8} alt="" />
                <Image src={img9} alt="" />
                <Image src={img10} alt="" />
                <Image src={img11} alt="" />
                <p className="text-[#e93d3d] text-[30px] text-center font-black  ">
                  ONLY $47.00 TODAY!
                </p>
                <p className=" text-[19px] text-center font-bold pt-4  line-through">
                  LIMITED TIME SPECIAL
                </p>
                <p className=" text-[19px] text-center font-bold py-8 ">
                  YOU’RE SAVING $201
                </p>
                <div className="justify-center">
                  <p className="text-[18px] text-center font-bold   ">
                    Get Instant Access Plus 5 Bonuses For Just $47.00!
                  </p>
                  <p className="text-[16px] text-center font-bold pt-5  ">
                    NOW AVAILABLE FOR INSTANT Family Customization!
                  </p>
                </div>

                <div className="pt-6  ">
                  <button  onClick={() => router.push('/checkout-page')} className="bg-[#36ca37FF] aniation-shade text-white  text-center p-7 text-[14px] font-bold">
                    ACCESS FAMILY HANDBOOK GENERATOR NOW!
                    <br />
                    <span className="text-[11px] w-[90%] font-semibold">
                      Backed by Our 30-Day 100% Money Back Guarantee
                    </span>
                  </button>
                </div>

                <div className=""></div>
                <div className="bg-white h-full    pb-1 p-1 m-auto ">
                  <div>
                    <Image src={img13} alt="" className="w-full" />
                  </div>
                  <div>
                    <Image src={img12} alt="" className="w-full" />
                  </div>
                </div>
                <div className="justify-center">
                  <p className="text-[28px] pt-5 text-center font-extrabold  ">
                    The Only Tool
                    <span className="text-[#ff9900]">You’ll Ever Need</span> To
                    Lead Your Families Towards Greatness, Intention, And Purpose
                  </p>
                </div>
                <div className="pt-[30px] pb-[20px] pr-[20px] pl-[15px] text-[19px] text-center font-semibold  space-x-10">
                  <p className="flex items-center space-x-4">
                    <Check size={54} color="#ff9900" strokeWidth={5} />
                    Unlocking the Secret to a Unified Family: How Our Software
                    Can Transform Your Family Life
                  </p>

                  <p className="flex items-center space-x-4">
                    <Check size={54} color="#ff9900" strokeWidth={5} />
                    Say Goodbye to Family Chaos: Harnessing the Power of Our
                    Software for a Harmonious Home
                  </p>

                  <p className="flex items-center space-x-4">
                    <Check size={54} color="#ff9900" strokeWidth={5} />
                    The Ultimate Tool for Building a Stronger Family: How Our
                    Software Can Help You Achieve a Unified Mission
                  </p>

                  <p className="flex items-center space-x-4">
                    <Check size={54} color="#ff9900" strokeWidth={5} />
                    Revolutionize Your Family Life: Discover the Software That
                    Will Bring Your Family Together Like a Team
                  </p>

                  <p className="flex items-center space-x-4">
                    <Check size={54} color="#ff9900" strokeWidth={5} />
                    From Chaos to Cohesion: How Our Software Can Help Moms and
                    Dads Create a Purposeful Family Life
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Section3 />
      </div>
    </div>
  );
};

export default Section2;
