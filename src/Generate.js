import React, { useState } from "react";
import { usePdf } from "./Pdfcontext";
import Resumstoportfoilo from "./assets/Resumstoportfoilo.png";

import Loader from "./Loader";

import Previewer from "./Previewer";
import LoaderData from "./LoaderData"

const Generate = () => {
  const { Resume, setResume } = usePdf();
  const [Loading, setLoader] = useState(false);
  const [second , setL] = useState(0)

  function handle(){
    setL(second+1)
  }

  async function handleFileUpload(event) {
    setLoader(true);
    const file = event.target.files[0];
    if (!file) {
      return;
    }
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("https://folify-backend.onrender.com/gererate", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      setResume(data);
    } catch (error) {
      console.log("Upload failed:", error);
    } finally {
      setLoader(false);
    }
  }
  return (
    <>
      <div className="bg-[#FAF4F3] py-20 px-6 lg:px-16 flex flex-col lg:flex-row items-center justify-between">
        {/* Left Section */}
        <div className="max-w-xl text-center lg:text-left mb-12 lg:mb-0">
          <h3 className="text-sm text-red-500 font-semibold uppercase mb-2">
            Resume Portfolio Builder
          </h3>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Build a website from your resume file.
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Want your resume to shine and turn heads? Folify transforms your
            resume into a stunning portfolio website, showcases your skills with
            style, and gives you downloadable code — all built to boost your
            personal brand and get you hired faster.
          </p>
          <ul className="text-left mb-8 space-y-2 text-gray-800">
            <li>✓ Converts your resume into a portfolio website</li>
            <li>✓ Gives you clean, downloadable source code</li>
          </ul>
          <div className="w-full max-w-md  p-6  rounded-xl shadow-lg flex flex-col items-center gap-6">
            {Loading ? (
              <Loader></Loader>
            ) : (
              <div className="text-center">
                <div className="text-6xl text-red-500 mb-4">📄</div>
                <p className="text-gray-700 font-semibold">
                  Upload your resume (PDF)
                </p>
              </div>
            )}

            <form onSubmit={(e) => e.preventDefault()}>
              <label className="cursor-pointer bg-red-500 text-white px-6 py-3 rounded-md shadow-md hover:bg-red-600 transition duration-300 inline-block">
                {Loading ? "Generating..." : "Upload PDF"}
                <input
                  disabled={Loading}
                  type="file"
                  accept=".pdf"
                  className="hidden"
                  onChange={handleFileUpload} // your upload function
                />
              </label>
            </form>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={Resumstoportfoilo}
            alt="Ats checker Resumes "
            className="max-w-full h-auto"
          />
        </div>
      </div>
      {Loading ? <LoaderData></LoaderData> : <Previewer></Previewer> }
    

    </>
  );
};

export default Generate;
