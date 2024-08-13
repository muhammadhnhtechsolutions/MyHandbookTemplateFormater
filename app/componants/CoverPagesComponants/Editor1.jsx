// Import necessary modules
import React, { useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css"; // Import Quill styles
import { useAppDispatch, useAppSelector } from "@/app/Redux/lib/hooks";
import { setCovercon } from "@/app/Redux/lib/features/product/productSlice";
// import { Quill } from "react-quill";
import '@/app/assets/css/editor.css'
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

// Define custom fonts
// const Font = Quill.import("formats/font");
// Font.whitelist = [
//   "sans-serif",
//   "serif",
//   "monospace",
//   "roboto",
//   "open-sans"
// ];
// Quill.register(Font, true);

// const CustomToolbar = () => (
//   <div id="toolbar">
//     <select className="ql-font">
//       <option value="sans-serif">Sans Serif</option>
//       <option value="serif">Serif</option>
//       <option value="monospace">Monospace</option>
//       <option value="roboto">Roboto</option>
//       <option value="open-sans">Open Sans</option>
//     </select>
//     {/* other toolbar items */}
//   </div>
// );

const modules = {
  toolbar: {
    container: "#toolbar",
  },
};

function Editor1() {
  const covercon = useAppSelector((state) => state?.api?.covercon);
  const editorEnabled = useAppSelector((state) => state?.api?.editorEnabled);
  const clickedButtonIndex = useAppSelector((state) => state?.api?.clickedButtonIndex);
  const dispatch = useAppDispatch();

  const [wordCountError, setWordCountError] = useState(false); // State to track word count error

  const modules = {
    
        toolbar: [
      [{ 'header': '1' }, { 'header': '2' },],
      [{ size: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'color': [] }, { 'background': [] }],
      ['clean'] // remove formatting button
    ],
  
  };

  // Function to handle text editor changes
  const handleInputChange = (content, delta, source, editor) => {
    // Get text without HTML tags for word count
    const text = editor.getText().trim().replace(/\n +/g, " ");
    const wordCount = text.split(/\s+/).length;

    // Limit to 200 words
    if (wordCount > 200) {
      setWordCountError(true);
    } else {
      setWordCountError(false);
      dispatch(setCovercon(content, delta, source, editor, clickedButtonIndex));
    }
  };

  return (
    <>
      {/* <CustomToolbar /> */}
      <div>
        <ReactQuill
          className="md:h-full overflow-y-scroll"
          placeholder="The Sample Family"
          theme="snow"
          value={covercon ? covercon : clickedButtonIndex}
          onChange={handleInputChange}
          style={{
            pointerEvents: editorEnabled ? "none" : "auto",
            opacity: editorEnabled ? 0.6 : 1,
          }}
          modules={modules}
        />
      </div>
      {wordCountError && (
        <div style={{ color: "red" }}>
          Limit exceeded, only 200 words allowed
        </div>
      )}
    </>
  );
}

export default Editor1;
