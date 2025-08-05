import React from 'react'
import React, { useEffect, useRef } from "react";
import { usePdf } from "./Pdfcontext";
import  JSZip  from "jszip";
import { saveAs } from "file-saver";


const Previewer = () => {
  const { Resume } = usePdf();
  const data = Resume.html

  if(data==undefined){return}
  const downloadZip = () => {
    
    const zip = new JSZip();

    // Add files to the zip
    zip.file("index.html", data || "");

    // Generate the zip and trigger download
    zip.generateAsync({ type: "blob" }).then((content) => {
      saveAs(content, "Portfoilo-website.zip");
    });
  };
  
  const iframeRef = useRef(null);
   useEffect(() => {
    const document = iframeRef.current.contentDocument;
    const documentContents = `${data}`;

    

    document.open();
    document.write(documentContents);
    document.close();
  }, [data]);
  return (
   <>
  <div className="flex justify-end p-4 bg-[#FAF4F3] border-b shadow-sm">
    <button
      onClick={downloadZip}
      className="bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:from-red-600 hover:to-red-700 hover:shadow-xl transform hover:scale-105 transition duration-300 ease-out"
    >
      Download Code
    </button>
  </div>

  <div className="w-full h-[100vh] border rounded overflow-hidden shadow-lg">
    <iframe
      title="Website Preview"
      ref={iframeRef}
      className="w-full h-full"
      sandbox="allow-scripts allow-same-origin"
    />
  </div>
</>

  )

}

export default Previewer