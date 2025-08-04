import React, { createContext, useState, useContext } from 'react';

const PdfContext = createContext();

export const PdfProvider = ({ children }) => {
  const [pdfdata, setPdfdata] = useState('');

  return (
    <PdfContext.Provider value={{ pdfdata, setPdfdata }}>
      {children}
    </PdfContext.Provider>
  );
};

export const usePdf = () => useContext(PdfContext);
