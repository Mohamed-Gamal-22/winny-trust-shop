import React, { useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "./../Components/Footer/Footer";
import SideBar from "./../Components/SideBar/SideBar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  const [isOpen, setisOpen] = useState(true);

  function isFilter() {
    setisOpen(!isOpen);
  }

  return (
    <>
      <Navbar isFilter={isFilter} />

      <div className="container w-full md:w-[90%] lg:w-[80%] mx-auto">
        <Outlet />
      </div>

      <Footer />
    </>
  );
}
