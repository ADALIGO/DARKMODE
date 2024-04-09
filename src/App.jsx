import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Page1 from "./Components/Page1/Page1";
import Page2 from "./Components/Page2/Page2";
import Page3 from "./Components/Page3/Page3";
import Page4 from "./Components/Page4/Page4";
import Page5 from "./Components/Page5/Page5";
import Page6 from "./Components/Page6/Page6";
import Page7 from "./Components/Page7/Page7";
import Page8 from "./Components/Page8/Page8";
import Page9 from "./Components/Page9/Page9";
import Page10 from "./Components/Page10/Page10";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import React, { Component, useEffect, useState } from "react";
import 'flowbite';
import AOS from "aos";
import "aos/dist/aos.css";



function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
    
  }, [theme]);
 
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <>
    <div  className="  py-20  dark:bg-black dark:text-white text-black duration-500 ">
<BrowserRouter>
    <Routes>   

         <Route path="/" element={<NavBar  theme={theme} setTheme={setTheme} />} />
         <Route path="/footer" element={<Footer  />} />
         <Route path="/page1" element={<Page1 theme={theme} setTheme={setTheme} />} />
         <Route path="/page2" element={<Page2 theme={theme} setTheme={setTheme} />} />
         <Route path="/page3" element={<Page3 theme={theme} setTheme={setTheme} />} />
         <Route path="/page4" element={<Page4 theme={theme} setTheme={setTheme} />} />
         <Route path="/page5" element={<Page5 />} />
         <Route path="/page6" element={<Page6 />} />
         <Route path="/page7" element={<Page7 />} />
         <Route path="/page8" element={<Page8 />} />
         <Route path="/page9" element={<Page9 />} />
         <Route path="/page10" element={<Page10 />} />
        
    </Routes>
    </BrowserRouter>
      </div>
    </>
  
  )
}

export default App
