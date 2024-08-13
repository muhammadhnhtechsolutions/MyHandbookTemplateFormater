'use client'
import React, { useEffect, useState } from "react";
import Select from "react-select";
import toastr from "toastr";
import Image from "next/image";
import "toastr/build/toastr.min.css";
import { useAppDispatch } from "@/app/Redux/lib/hooks";
import { useSelector } from "react-redux";
import { GetIntro } from "@/app/services/IntroService";
import { setGetIntro } from "@/app/Redux/lib/features/product/productSlice";
import stepImage from "../../assets/imges/image 9.png";
import stepImage1 from "../../assets/imges/image 11.png";

const options = [
  { value: "Patience", label: "Patience" },
  { value: "Honesty", label: "Honesty" },
  { value: "Responsibility", label: "Responsibility" },
  { value: "Team-work", label: "Team-work" },
  { value: "Kindness", label: "Kindness" },
  { value: "Togetherness", label: "Togetherness" },
  { value: "Fun", label: "Fun" },
  { value: "Creativity", label: "Creativity" },
  { value: "Laughter", label: "Laughter" },
  { value: "Diligence", label: "Diligence" },
  { value: "Persistence", label: "Persistence" },
  { value: "Obedience", label: "Obedience" },
  { value: "Respect", label: "Respect" },
  { value: "Love", label: "Love" },
];

const LeftSide = ({
  tone,
  setTone,
  letter,
  setLetter,
  handleChange,
  setChartlist,
  chartlist,
  setError1,
  setError2,
  error1,
  error2,
  error3,
}) => {
  const data = useSelector((state) => state.api.getIntrosave);
  const dispatch = useAppDispatch();

  const [customTrait, setCustomTrait] = useState("");
  const [customName, setCustomName] = useState("");
  const [customTone, setCustomTone] = useState("");
  const [traitError, setTraitError] = useState("");
  const [nameError, setNameError] = useState("");
  const [toneError, setToneError] = useState("");

  useEffect(() => {
    if (data && data.tone_used) {
      setTone(data.tone_used);
    }
  }, [data]);

  useEffect(() => {
    if (data && data.beginning_letter) {
      setLetter(data.beginning_letter);
    }
  }, [data]);

  useEffect(() => {
    if (data && data.characters_list) {
      const initialOptions = options.filter((option) =>
        data.characters_list.includes(option.value)
      );
      setChartlist(initialOptions);
    }
  }, [data]);

  const handleClick = () => {
    toastr.options = {
      closeButton: true,
      debug: false,
      newestOnTop: false,
      progressBar: false,
      positionClass: "toast-top-right",
      preventDuplicates: false,
      onclick: null,
      showDuration: "300",
      hideDuration: "1000",
      timeOut: "100000",
      extendedTimeOut: "1000",
      showEasing: "swing",
      hideEasing: "linear",
      showMethod: "fadeIn",
      hideMethod: "fadeOut",
      onShown: function() {
        document.querySelectorAll('.toast').forEach(toast => {
          toast.style.backgroundColor = '#023D6D'; // Set the background color
          toast.style.color = 'white'; // Set the text color
          toast.style.opacity = '1'; // Remove the opacity
        });
      }
    };

    toastr.info(
      `Writing an introduction letter to your family can take time and lots of thought. Some of our users have gotten hung up on this step. So we've recently improved the process. Simply answer the questions below. We'll draft your first letter for you based on your responses. In the next step you'll either approve your letter or change it to your liking.`
    );
  };

  const handleEditorData = async () => {
    const result = await GetIntro();
    if (result.status) {
      const data = Object.values(result).filter(
        (value) => typeof value === "string" && value !== null && value !== ""
      );

      dispatch(setGetIntro(data));
    }
  };

  useEffect(() => {
    dispatch(setGetIntro([]));
    handleEditorData();
  }, []);
  // const handleCustomTraitChange = (e) => {
  //   if (e.target.value.length <= 35) {
  //     setCustomTrait(e.target.value);
  //     setTraitError("");
  //   } else {
  //     setTraitError("Maximum length of 35 characters exceeded");
  //   }
  // };
  const handleCustomNameChange = (e) => {
    if (e.target.value.length <= 35) {
      setCustomName(e.target.value);
      setNameError("");
    } else {
      setNameError("Maximum length of 35 characters exceeded");
    }
  };

  const handleCustomToneChange = (e) => {
    if (e.target.value.length <= 35) {
      setCustomTone(e.target.value);
      setToneError("");
    } else {
      setToneError("Maximum length of 35 characters exceeded");
    }
  };

  return (
    <>
      <div className="mb-6">
        <div className="bg-primary text-white W-[702px] p-6 rounded-3xl flex flex-col sm:flex-row">
          <div className="flex-shrink-0 mx-auto sm:mx-0">
            <div className="pt-10">
              <Image src={stepImage1} alt="Step 1" className="w-[73px] h-[73.52px]" />
            </div>
          </div>
          <div className="mt-4 sm:mt-0 sm:ml-4">
            <h4 className="text-xl font-bold text-[#FDA513]">Instructions</h4>
            <p className="mt-2 text-base leading-relaxed">
 
  Writing an introduction letter to your family can take time and lots of thought.So we created a tool to help you get started.Just answer the question below and our writting assistant will begin your fisrt draft for you.In the next step you&apos;                 ll be able to edit your letter to your liking
</p>

          </div>
        </div>
      </div>
      <div className="w-full p-2 rounded montserrat">
        <div className="overflow-y-scroll h-[43rem]">
          <div className="py-3 md:w-11/12 w-full m-auto space-y-4 flex flex-col md:flex-row items-start md:items-center">
            <Image src={stepImage} alt="Step 1" className="w-16 h-16 rounded-full bg-primary mb-4 md:mb-0" />
            <div className="md:ml-4">
              <p className="font-bold text-[24px] montserrat text-[#FDA513]">Step 1</p>
              <p className="md:w-[85%] text-start font-[500] text-[16px] leading-[26px]">
                Imagine you are leading your family on a big adventure and you can only tell them about the adventure in a letter. How would you begin the letter?
              </p>
              <select
                value={letter}
                onChange={(e) => {
                  setLetter(e.target.value);
                  if (letter || e.target.value) {
                    setError1("");
                  }
                }}
                name=""
                id=""
                className="w-full md:w-[90%] border-[1px] p-1 text-lg"
              >
                <option value="">Select an Option</option>
                <option value="Dearest Family">Dearest Family</option>
                <option value="Dear Family">Dear Family</option>
                <option value="To whom it may concern">To whom it may concern</option>
                <option value="To those I love the most">To those I love the most</option>
                <option value="Howdy Y’all">Howdy Y’all</option>
                <option value="Hey Team">Hey Team</option>
                <option value="customName">I&apos;d mention each by name (custom)</option>
                <option value="custom">Other (custom)</option>
              </select>
              <p className="text-red-600 text-sm">{error1 && error1}</p>
            </div>
          </div>

          {letter === "customName" && (
            <div className="py-3 md:w-11/12 w-full m-auto space-y-4">
              <p className="md:w-[85%] text-start font-[500] text-[16px] leading-[26px]">
                Mention each by name (Specify):
              </p>
              <input
                type="text"
                className="w-full md:w-[90%] border-[2px] p-1 mt-2"
                placeholder=""
                value={customName}
                onChange={handleCustomNameChange}
                maxLength="35"
              />
            </div>
          )}

          {letter === "custom" && (
            <div className="py-3 md:w-11/12 w-full m-auto space-y-4">
              <p className="md:w-[85%] text-start font-[500] text-[16px] leading-[26px]">
                Other (Specify):
              </p>
              <input
                type="text"
                className="w-full md:w-[90%] border-[2px] p-1 mt-2"
                placeholder=""
                value={customTone}
                onChange={handleCustomToneChange}
                maxLength="35"
              />
            </div>
          )}

          <div className="py-3 md:w-11/12 w-full m-auto space-y-4 flex flex-col md:flex-row items-start md:items-center">
            <Image src={stepImage} alt="Step 2" className="w-16 h-16 rounded-full bg-primary mb-4 md:mb-0" />
            <div className="md:ml-4">
              <p className="font-bold text-[24px] montserrat text-[#FDA513]">Step 2</p>
              <p className="md:w-[85%] text-start font-[500] text-[16px] leading-[26px] text-2xl">
                Assuming your adventure would ultimately be a blessing to your family, what tone would you use in your letter?
              </p>
              <select
                value={tone}
                onChange={(e) => {
                  setTone(e.target.value);
                  if (tone || e.target.value) {
                    setError2("");
                  }
                }}
                name=""
                id=""
                className="w-full md:w-[90%] border-[1px] p-1 text-lg"
              >
                <option value="">Select an Option</option>
                <option value="Warm and Loving">Warm and Loving</option>
                <option value="Inspiring and Motivational">Inspiring and Motivational</option>
                <option value="Informative and Factual">Informative and Factual</option>
                <option value="Playful and Fun">Playful and Fun</option>
                <option value="customTone">Other (Custom)</option>
              </select>
              <p className="text-red-600 text-sm">{error2 && error2}</p>
            </div>
          </div>

          {tone === "customTone" && (
            <div className="py-3 md:w-11/12 w-full m-auto space-y-4">
              <p className="md:w-[85%] text-start font-[500] text-[16px] leading-[26px]">
                Other (Specify):
              </p>
              <input
                type="text"
                className="w-full md:w-[90%] border-[2px] p-1 mt-2"
                placeholder=""
                value={customTone}
                onChange={handleCustomToneChange}
                maxLength="35"
              />
            </div>
          )}

          <div className="py-3 md:w-11/12 w-full m-auto space-y-4 flex flex-col md:flex-row items-start md:items-center">
            <Image src={stepImage} alt="Step 3" className="w-16 h-16 rounded-full bg-primary mb-4 md:mb-0" />
            <div className="md:ml-4">
              <p className="font-bold text-[24px] montserrat text-[#FDA513]">Step 3</p>
              <p className="md:w-[85%] text-start text-[16px] font-[500] montserrat leading-[26px]">
                Which qualities or character traits do you think are most important to your family?
              </p>
              <Select
                isMulti
                options={options}
                value={chartlist}
                onChange={handleChange}
                className="w-full md:w-[90%] montserrat"
              />
              <p className="text-red-600 text-sm">{error3 && error3}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftSide;
