import React from "react";
import Home from "./Home/Home";
import { Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import Contactus from "./contactus/Contactus";
import Aboutt from "./about/Aboutt";
function App() {
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/about" element={<Aboutt />} />
      </Routes>
      </div>
    </>
  );
}

export default App;
