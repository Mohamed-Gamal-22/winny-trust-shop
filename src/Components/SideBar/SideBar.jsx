import React from "react";
import style from "./SideBar.module.css";

export default function SideBar({isFilter,isOpen}) {
  return <>
    <div className="p-2 relative">
      {isOpen && <div onClick={() => isFilter()} className="fas fa-close absolute top-3 end-3 text-2xl cursor-pointer"></div>}
    </div>
  </>
}
