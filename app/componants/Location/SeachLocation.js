'use client'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import {  useJsApiLoader } from '@react-google-maps/api';

import ClipLoader from "react-spinners/ClipLoader";

function SeachLocation() {
  const router = useRouter();
  const [address, setAddress] = useState('');
  const [cordinates, setCordinates] = useState([]);
  const [asMapLoaded, setAsMapLoaded] = useState(false);
  const [loading, setLoading] = useState(false);

  const { isLoaded } = useJsApiLoader({
    id: 'myscript',
    googleMapsApiKey: "=AIzaSyBr091D5RIvJ5K1uLjNcIn6jmBNdwh6cy8"
  })

  const handleChange = (newAddress) => {
    setAddress(newAddress);
    
  };



  const handleSelect = (selectedAddress) => {
    
    geocodeByAddress(selectedAddress)
      .then((results) => {
        setAddress(results[0].formatted_address);
        return getLatLng(results[0]);
      })
      .then((latLng) => {
        setCordinates(latLng)
   
      })
      .catch((error) => console.error('Error', error));
      // SendData()
  };
const SendData=()=>{
  setLoading(true)
  setTimeout(()=>{
    setLoading(false)
  },4000)
  router.push(`/address/verify?address=${address}&lat=${cordinates.lat}&lng=${cordinates.lng}`);

}

  return (
    <>
      <div className='relative'>
      {isLoaded && window.google ? (
        <PlacesAutocomplete
          value={address}
          onChange={handleChange}
          onSelect={handleSelect}
        >
          {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
            
            <div className='relative'>
                          <input
                {...getInputProps({
                  placeholder: 'Enter your Home Address',
                  className: 'search-input',
                })}
              />
              <div className="autocomplete-dropdown-container absolute h-auto  bg-white w-full  ">
                {loading && <div>Loading...</div>}
                {suggestions.map((suggestion) => {
                  const className = suggestion.active
                    ? 'px-1 py-1 text-left relative before:absolute before:bottom-0 before:w-full before:border-b before:border-gray-300 before:border-solid text-sm cursor-pointer	'
                    : ' text-left px-1 py-1 text-sm';

                  return (
                    <div
                    key={suggestion.description}
                      {...getSuggestionItemProps(suggestion, {
                        className,
                      })}
                    >
                      <span>{suggestion.description}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>
      ) : 
        <input
       
          placeholder= 'Enter your Home Address'
          className='search-input'
          disabled
     
      />
      }
         <button
           type="button"
           className='offer-btn flex items-center justify-center'
           onClick={() =>SendData()}
           disabled={address ? false : true}
           >
             {loading ?
               <ClipLoader
         color={"white"}
         loading={loading}
         size={20}
         aria-label="Loading Spinner"
         data-testid="loader"
        /> 
        :
        "Get Offer "}
           </button>
      </div>
     
    
    </>
  );
}

export default SeachLocation;
