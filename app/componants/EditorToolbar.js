'use client'
import React, { useEffect } from "react";

const CustomUndo = () => (
  <svg viewBox="0 0 18 18">
    <polygon className="ql-fill ql-stroke" points="6 10 4 12 2 10 6 10" />
    <path
      className="ql-stroke"
      d="M8.09,13.91A4.6,4.6,0,0,0,9,14,5,5,0,1,0,4,9"
    />
  </svg>
);

// Redo button icon component for Quill editor
const CustomRedo = () => (
  <svg viewBox="0 0 18 18">
    <polygon className="ql-fill ql-stroke" points="12 10 14 12 16 10 12 10" />
    <path
      className="ql-stroke"
      d="M9.91,13.91A4.6,4.6,0,0,1,9,14a5,5,0,1,1,5-5"
    />
  </svg>
);

// Undo and redo functions for Custom Toolbar
function undoChange() {
  this.quill.history.undo();
}
function redoChange() {
  this.quill.history.redo();
}




export const modules = {
  toolbar: {
    container: "#toolbar",
    handlers: {
      undo: undoChange,
      redo: redoChange
    }
  },
  history: {
    delay: 500,
    maxStack: 100,
    userOnly: true
  }
};
export const modules2 = {
  toolbar: {
    container: "#toolbar2",
    handlers: {
      undo: undoChange,
      redo: redoChange
    }
  },
  history: {
    delay: 500,
    maxStack: 100,
    userOnly: true
  }
};
// module without enter start
export const modulesWithouEnter=  {
  toolbar: {
    container: "#toolbar",
    handlers: {
      undo: undoChange,
      redo: redoChange
    }
  },
  history: {
    delay: 500,
    maxStack: 100,
    userOnly: true
  },
  keyboard: {
    bindings: {
      enter: {
        key: 13, // Enter key code
        handler: () => {
         
            return false; // Prevents default behavior if content length is greater than 1000
         // Allows Enter key if content length is 1000 or less
        },
      },
    },
  },
  
};
// module without enter end
// Formats objects for setting up the Quill editor
export const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "align",
  "strike",
  "script",
  "blockquote",
  "background",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "color",
  "code-block"
];

// Quill Toolbar component
export const QuillToolbar = () => {
  useEffect(() => {
    const Quill = require("react-quill").Quill;

    const Size = Quill.import("formats/size");
    Size.whitelist = ["extra-small", "small", "medium", "large"];
    Quill.register(Size, true);

    const Font = Quill.import("formats/font");
    Font.whitelist = [
      "arial",
      "comic-sans",
      "courier-new",
      "georgia",
      "helvetica",
      "lucida",
      "quicksandb",
      "odinrounded",
      "oswaldsemib",
      "oswaldsemibold",
      "robotobcondensed"
    ];
    Quill.register(Font, true);
  }, []);
  return(
  <div id="toolbar">
    <span className="ql-formats">
      <select className="ql-font" defaultValue="arial">
        <option value="arial">Arial</option>
        <option value="comic-sans">Comic Sans</option>
        <option value="courier-new">Courier New</option>
        <option value="georgia">Georgia</option>
        <option value="helvetica">Helvetica</option>
        <option value="lucida">Lucida</option>
        <option value="quicksandb">Quicksandb</option>
        <option value="odinrounded">Odinrounded</option>
        <option value="oswaldsemib">Oswaldsemib</option>
        <option value="oswaldsemibold">Oswaldsemibold</option>
        <option value="robotobcondensed">Robotobcondensed</option>
      </select>
      {/* <select className="ql-size" defaultValue="medium">
        <option value="extra-small">Size 1</option>
        <option value="small">Size 2</option>
        <option value="medium">Size 3</option>
        <option value="large">Size 4</option>
      </select> */}
      <select className="ql-header" defaultValue="3">
        <option value="1">Heading</option>
        <option value="2">Subheading</option>
        <option value="3">Normal</option>
      </select>
    </span>
    <span className="ql-formats ql-bold">
    <button className="ql-bold" />
    <button className="ql-italic" />
    <button className="ql-underline" />
    <button className="ql-strike" />
  </span>
 
    <span className="ql-formats">
      {/* <select className="ql-align" /> */}
      <select className="ql-color" />
      <select className="ql-background" />
    </span>
  
  </div>
)};
export const QuillToolbar2 = () => {
  useEffect(() => {
    const Quill = require("react-quill").Quill;

    const Size = Quill.import("formats/size");
    Size.whitelist = ["extra-small", "small", "medium", "large"];
    Quill.register(Size, true);

    const Font = Quill.import("formats/font");
    Font.whitelist = [
      "arial",
      "comic-sans",
      "courier-new",
      "georgia",
      "helvetica",
      "lucida",
      "quicksandb",
      "odinrounded",
      "oswaldsemib",
      "oswaldsemibold",
      "robotobcondensed"
    ];
    Quill.register(Font, true);
  }, []);
  return(
  <div id="toolbar2">
    <span className="ql-formats">
      <select className="ql-font " defaultValue="arial">
      <option value="arial">Arial</option>
        <option value="comic-sans">Comic Sans</option>
        <option value="courier-new">Courier New</option>
        <option value="georgia">Georgia</option>
        <option value="helvetica">Helvetica</option>
        <option value="lucida">Lucida</option>
        <option value="quicksandb">Quicksandb</option>
        <option value="odinrounded">Odinrounded</option>
        <option value="oswaldsemib">Oswaldsemib</option>
        <option value="oswaldsemibold">Oswaldsemibold</option>
        <option value="robotobcondensed">Robotobcondensed</option>
      </select>
      {/* <select className="ql-size" defaultValue="medium">
        <option value="extra-small">Size 1</option>
        <option value="small">Size 2</option>
        <option value="medium">Size 3</option>
        <option value="large">Size 4</option>
      </select> */}
      <select className="ql-header" defaultValue="3">
        <option value="1">Heading</option>
        <option value="2">Subheading</option>
        <option value="3">Normal</option>
      </select>
    </span>
    <span className="ql-formats ql-bold">
    <button className="ql-bold" />
    <button className="ql-italic" />
    <button className="ql-underline" />
    <button className="ql-strike" />
  </span>
  
    <span className="ql-formats">
      {/* <select className="ql-align" /> */}
      <select className="ql-color" />
      <select className="ql-background" />
    </span>
  
  </div>
)};

export default QuillToolbar;