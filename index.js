import React from "react";
import ReactDom from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { RecoilRoot } from "recoil";
import Home from "./src/Home";
import Navbar from "./src/Navbar";
import Banner from "./src/Banner";
import Footer from "./src/Footer";
import About from "./src/About";
import Song from "./Song";
import Ats from "./src/Ats";
import HowItWork from "./src/HowItWork";
import { PdfProvider } from "./src/Pdfcontext";

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/ats-resume-checker" element={<Ats></Ats>}></Route>
        <Route path="/how-it-works" element={<HowItWork></HowItWork>}></Route>
        {/* <Route path="/contact" element={<Contact></Contact>}></Route> */}
      </Routes>
      <Footer></Footer>
      <Song></Song>
    </>
  );
};

const root = ReactDom.createRoot(document.querySelector(".root"));
root.render(
  <BrowserRouter>
    <RecoilRoot>
      <PdfProvider>
        <App />
      </PdfProvider>
    </RecoilRoot>
  </BrowserRouter>
);
