import React, { useEffect, useRef } from "react";
import { usePdf } from "./Pdfcontext";

const PrivewRout = () => {
    const { Resume } = usePdf();
    const data = Resume.html || "Something went Wrong"

    if(data==undefined){return}
    const iframeRef = useRef(null);
       useEffect(() => {
        const document = iframeRef.current.contentDocument;
        const documentContents = `${data}`;
    
        
    
        document.open();
        document.write(documentContents);
        document.close();
      }, [data]);
  return (
    <div className="w-full h-[100vh] border rounded overflow-hidden shadow-lg">
    <iframe
      title="Website Preview"
      ref={iframeRef}
      className="w-full h-full"
      sandbox="allow-scripts allow-same-origin"
    />
  </div>
  )
}

export default PrivewRout
