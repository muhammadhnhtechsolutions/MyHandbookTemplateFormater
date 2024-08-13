"use client"

const ThePdfViewer = ({pdfUrl}) => {
    
    return (
        <div className="">
    
<iframe src={pdfUrl} width="100%" height="600px"/>

        </div>
    
  );
};

export default ThePdfViewer;
