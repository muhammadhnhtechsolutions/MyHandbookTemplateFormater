'use client'
import React from "react";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

function Edit() {
  const [value, setValue] = React.useState("");

  return (
    <ReactQuill
      className="h-full"
      placeholder=""
      theme="snow"
      value={value}
      onChange={setValue}
    />
  );
}

export default Edit;
