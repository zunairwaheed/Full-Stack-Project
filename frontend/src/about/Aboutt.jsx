import React from "react";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Footer from "../components/Footer";

function Aboutt() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-20">
        <About />
      </div>
      <Footer />
    </>
  );
}

export default Aboutt;
