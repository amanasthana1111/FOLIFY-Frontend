import React, { useEffect, useRef } from "react";
import { usePdf } from "./Pdfcontext";
// import JSZip from "jszip";
// import { saveAs } from "file-saver";

const Previewer = () => {
  const { Resume } = usePdf();
  const data = Resume?.html;

  // If no data, render nothing (or return a loader/fallback)
  if (!data) return null;

  // Optional: downloadZip kept outside JSX so comments don't break JSX parsing
  // const downloadZip = () => {
  //   const zip = new JSZip();
  //   zip.file("index.html", data || "");
  //   zip.generateAsync({ type: "blob" }).then((content) => {
  //     saveAs(content, "Portfolio-website.zip");
  //   });
  // };

  const iframeRef = useRef(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    // Prefer contentDocument, fall back to contentWindow.document
    const doc = iframe.contentDocument || iframe.contentWindow?.document;
    if (!doc) return;

    doc.open();
    doc.write(String(data));
    doc.close();

    // Optional cleanup: clear iframe on unmount
    return () => {
      try {
        const cleanupDoc = iframe.contentDocument || iframe.contentWindow?.document;
        if (cleanupDoc) {
          cleanupDoc.open();
          cleanupDoc.write("");
          cleanupDoc.close();
        }
      } catch (e) {
        // ignore
      }
    };
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
  );
};

export default Previewer;
