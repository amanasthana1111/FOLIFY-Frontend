import React from "react";
import ReactDom from "react-dom/client";
import { BrowserRouter , Route , Routes } from "react-router";
import { RecoilRoot } from "recoil";
import Home from "./src/components/Home";
import Navbar from "./src/components/Navbar";
import Banner from "./src/components/Banner";
import Footer from "./src/components/Footer";
import About from "./src/components/About";



const App = () => {
  return (
    <>
    <Navbar></Navbar>
    <Banner></Banner>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
         <Route path="/about" element={<About></About>}></Route>
       {/* <Route path="/contact" element={<Contact></Contact>}></Route> */}
      </Routes>
      <Footer></Footer>
    </>
  );
};

const root = ReactDom.createRoot(document.querySelector(".root"));
root.render(
  <BrowserRouter>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </BrowserRouter>
);
