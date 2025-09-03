import React, { useRef } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Agency from "./Pages/Agency";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const App = () => {

  const Parentref = useRef();

  useGSAP(function(){

    const tl = gsap.timeline();

    tl.to(Parentref.current,{
      display:"block"
    });
    tl.from(".stair",{
      height:0,
      stagger:{
        amount:-0.25,
      }
    });
     tl.to(".stair",{
        y:"100%",
        stagger:{
          amount:-0.25,
        }
      });
      tl.to(Parentref.current,{
        display:"none"
      });
  })
  return (
    <div>
      <div ref={Parentref} className="  h-screen w-screen fixed z-20 ">
        <div className="h-full w-full flex  ">
        <div className="stair h-full w-[30vh] bg-black"></div>
        <div className="stair h-full w-[30vh] bg-black"></div>
        <div className="stair h-full w-[30vh] bg-black"></div>
        <div className="stair h-full w-[30vh] bg-black"></div>
        <div className="stair h-full w-[30vh] bg-black"></div>
        <div className="stair h-full w-[30vh] bg-black"></div>
      </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/agency" element={<Agency />} />
      </Routes>
    </div>
  );
};

export default App;
