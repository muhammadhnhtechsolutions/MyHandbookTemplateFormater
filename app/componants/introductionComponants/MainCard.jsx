'use client'
import React, { useState } from "react";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import { AddIntro } from "@/app/services/IntroService";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/app/Redux/lib/hooks";
import { setNotes } from "@/app/Redux/lib/features/product/productSlice";
import Loader from "../../assets/loader.gif";
import Image from "next/image";

const MainCard = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const [chartlist, setChartlist] = useState([]);
  const [tone, setTone] = useState("");
  const [letter, setLetter] = useState("");
  const [error1, setError1] = useState("");
  const [error2, setError2] = useState("");
  const [error3, setError3] = useState("");

  const handleChange = (selectedOptions) => {
    setChartlist(selectedOptions);
    if (selectedOptions) {
      setError3("");
    }
  };

  const AddIntroduction = async () => {
    setLoading(true);
    setError1("");
    setError2("");
    setError3("");

    try {
      const result = await AddIntro(chartlist, tone, letter);

      if (result.status) {
        dispatch(setNotes(result?.note.replaceAll("\n\n", "<br/>")));
        router.push("/svg_introduction");
        toast.success(result?.message);
      } else {
        setError1(result?.message);
        setError2(result?.message);
        setError3(result?.message);
      }
    } catch (error) {
      console.error("Error occurred while adding introduction:", error);
      toast.error("Failed to add introduction. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      
        <div className="container mx-auto md:p-5 px-5 md:pt-12  pt-0">
          <div className="w-full flex flex-col md:flex-row md:space-x-5 md:space-y-0 space-y-5 rounded lg:p-5">
            <div className="md:w-7/12 w-full">
              <LeftSide
                chartlist={chartlist}
                setChartlist={setChartlist}
                setTone={setTone}
                tone={tone}
                letter={letter}
                setLetter={setLetter}
                handleChange={handleChange}
                setError1={setError1}
                setError2={setError2}
                setError3={setError3}
                error1={error1}
                error2={error2}
                error3={error3}
              />
            </div>
            <div className="md:w-5/12 w-full">
          <RightSide AddIntroduction={AddIntroduction} loading={loading} />
        </div>
          </div>
        </div>
      
    </>
  );
};

export default MainCard;
