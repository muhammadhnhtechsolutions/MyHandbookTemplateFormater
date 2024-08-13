import React, { useRef, useState, useEffect } from 'react'
import { useLoadScript } from "@react-google-maps/api";
const libraries = ["places"]
export default function InputBySearch({ label, index, name, getValue, setValue }) {

  const ref = useRef(null);
  // const [query, setQuery] = useState("");
  const [isManualInput6, setIsManualInput6] = useState(false);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyDXJS_VZMhnp0szh92aZGg8RHszz6RMQN8',
    libraries,
  });
  const handleScriptLoad = (ref) => {
    let autoComplete = new window.google.maps.places.Autocomplete(
      ref.current,
      {
        // types: ['(country)'] 
      } // Adjust types as needed
    );

    autoComplete.addListener('place_changed', () => handlePlaceSelect(autoComplete));
  };

  const handlePlaceSelect = (autoComplete) => {
    const addressObject = autoComplete?.getPlace();
    const query = addressObject?.formatted_address;
    // setParent1((prevState) => ({
    //   ...prevState,
    //   birth_city:query
    // }));
    const data = {
      target: {
        name: name,
        value: query
      }

    }
    getValue(index, data)
    // setQuery(query);
    // setIsManualInput6(false)


  };

  useEffect(() => {
    // Call handleScriptLoad only when isLoaded is true
    if (isLoaded) {

      handleScriptLoad(ref);

    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoaded, ref.current])
  return (
    <>

      <div>
        {label}
        <input
          type="text"
          ref={ref}
          name={name}
          className="w-full border-[1px] p-1"
          placeholder={label}
          value={setValue}

          onChange={(e) => {
            // setQuery(e.target.value)
            getValue(index, e)
            setIsManualInput6(true)

          }}

          // onBlur={() => {
          //   if (setValue === '') {
          //     getValue((prevState) => ({
          //       ...prevState,
          //       name: '',
          //     }));
          //   }
          // }}
        />
      </div>
    </>
  )
}
