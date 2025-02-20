import React, { useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "./../Components/Footer/Footer";

export default function Layout() {

  const [isOpen, setisOpen] = useState(true)

  function isFilter(){
    setisOpen(!isOpen)
  }

  return (
    <>
      <Navbar isFilter={isFilter}/>

      <div className="row m-2">
        <div className={`left ${isOpen ? "w-1/5 bg-red-300 h-screen" : "w-0"} `}>
          <i className="fas fa-close cursor-pointer text-2xl" onClick={()=> setisOpen(false)}></i>
        </div>
        <div className={`right ${isOpen ? "w-4/5 bg-green-300" : "w-full bg-green-300 h-screen"} `}></div>
      </div>

      <Footer />
    </>
  );
}
