import React from 'react';
import { usePdf } from "./Pdfcontext";

const AtsData = () => {
  const { pdfdata } = usePdf();

  if (!pdfdata) {
    return 
  }

  const {
    job_position,
    ats_score,
    matched_keywords,
    missing_keywords,
    suggestions,
    recommendations,
  } = pdfdata;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-[#FAF4F3] shadow-md rounded-lg mt-10 space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">ATS Resume Analysis</h2>

      <div>
        <p className="text-lg"><strong>Job Position:</strong> {job_position}</p>
        <p className="text-lg"><strong>ATS Score:</strong> {ats_score}</p>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-green-600 mt-4">✅ Matched Keywords</h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {matched_keywords.map((keyword, index) => (
            <span key={index} className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
              {keyword}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-red-600 mt-4">❌ Missing Keywords</h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {missing_keywords.map((keyword, index) => (
            <span key={index} className="bg-red-100 text-red-800 text-sm font-medium px-3 py-1 rounded-full">
              {keyword}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-yellow-600 mt-6">🛠 Suggestions</h3>
        <ul className="list-disc pl-6 space-y-2 mt-2 text-gray-700">
          {suggestions.map((tip, index) => (
            <li key={index}>{tip}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-blue-600 mt-6">🌟 Recommendations</h3>
        <ul className="list-disc pl-6 space-y-2 mt-2 text-gray-700">
          {recommendations.map((rec, index) => (
            <li key={index}>{rec}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AtsData;
