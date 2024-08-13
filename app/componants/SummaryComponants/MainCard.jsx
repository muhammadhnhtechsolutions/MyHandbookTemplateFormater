'use client';
import React, { useState, useEffect } from "react";
import Image from "next/image"; 
import Loader from "../../assets/loader.gif";
import RightSide from "./RightSide";
import LeftSide from "./LeftSide";
import { FamilySummaryService } from '@/app/services/SamaryServies';

const MainCard = () => {
  const [loading, setLoading] = useState(false); 
  const [summarycomp, setSummarycomp] = useState('');
  const [signatureImage, setSignatureImage] = useState(null);

  const handleSummaryUpdate = (content) => {
    setSummarycomp(content);
  };

  const handleSignatureUpdate = (base64Image) => {
    setSignatureImage(base64Image);
  };

  useEffect(() => {
    const fetchData = async () => {
      
      try {
        const result = await FamilySummaryService();
        if (result.status && result.note.trim()) {
          setSummarycomp(result.note);
        }
      } catch (error) {
        console.error('Failed to fetch data from API', error);
      } finally {
       
      }
    };

    fetchData();
  }, []);

  return (
    <>
      
        
     
        <div className="md:container md:mx-auto">
          <div className="flex flex-wrap md:flex-nowrap gap-4">
            <div className="md:w-[60%] w-full">
              <LeftSide 
                onSummaryUpdate={handleSummaryUpdate} 
                onSignatureUpdate={handleSignatureUpdate} 
              />
            </div>
            <div className="md:w-[40%] w-full">
              <RightSide 
                summarycomp={summarycomp} 
                signatureImage={signatureImage} 
                
              />
            </div>
          </div>
        </div>
      
    </>
  );
};

export default MainCard;
