import React from "react";
import style from "./Layout.module.css";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "./../Components/Footer/Footer";

export default function Layout() {
  return (
    <>
      <div className="wrapper flex flex-col justify-center">
        <Navbar />
        <div className="container w-full md:w-[90%] lg:w-[80%] mx-auto">
          <h1>hello</h1>
        </div>
        <Footer />
      </div>
    </>
  );
}
