import React from "react";
import ReactDom from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router";
import Home from "./src/Home";
import Navbar from "./src/Navbar";
import Banner from "./src/Banner";
import Footer from "./src/Footer";
import About from "./src/About";
import Song from "./Song";
import Ats from "./src/Ats";
import HowItWork from "./src/HowItWork";
import { PdfProvider } from "./src/Pdfcontext";
import Profile from "./src/Profile"
import NoPageFound from "./src/NoPageFound";
import Generate from "./src/Generate";
import Template from "./src/Template";
import PrivewRout from "./src/PrivewRout";

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
        <Route path="/contact" element={<Profile></Profile>}></Route>
        <Route path="/generate" element={<Generate></Generate>}></Route>
        <Route path="/template" element={<Template></Template>}></Route>
        <Route path="*" element={<NoPageFound></NoPageFound>}></Route>
        <Route path="/preview" element={<PrivewRout/>}></Route>
      </Routes>
      <Footer></Footer>
      <Song></Song>
    </>
  );
};

const root = ReactDom.createRoot(document.querySelector(".root"));
root.render(
  <HashRouter>
      <PdfProvider>
        <App />
      </PdfProvider>
  </HashRouter>
);
