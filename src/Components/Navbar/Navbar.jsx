import React from "react";
import lightBigLogo from "../../assets/lightBig.png";
import { Link } from "react-router-dom";

export default function Navbar({ isFilter }) {
  return (
    <nav className="bg-[#0081a7] dark:bg-[#f07167]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="/"
          className="flex items-center  space-x-3 rtl:space-x-reverse"
        >
          <img src={lightBigLogo} className="h-12" alt="Flowbite Logo" />
          <div className="flex flex-col ">
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              Winny trust
            </span>
            <span className="self-center text-sm font-semibold whitespace-nowrap text-white">
              free for shopping
            </span>
          </div>
        </Link>
        <div className="flex space-x-3">
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-[#fdfcdc] focus:outline-none focus:ring-2 focus:ring-[#fed9b7]  dark:hover:bg-[#fdfcdc] dark:focus:ring-[#fed9b7] group"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span className="text-xl fa-solid fa-bars-staggered group-hover:text-[#00afb9] dark:group-hover:text-[#f07167] dark:text-[#fdfcdc] text-[#fdfcdc]"></span>
            {/* <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg> */}
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <ul className="flex items-center flex-col font-medium p-4 md:p-0 mt-4  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 border-2 border-[#fed9b7] border-t-0 border-e-0 rounded-0 bg-white md:bg-transparent">
            <li>
              <Link
                to="/"
                className="block py-2 px-3 md:p-0 text-dark md:text-white rounded-sm 
                 dark:border-gray-700 hover:text-[#666] md:hover:text-[#fdfcdc] dark:hover:text-[#666] md:dark:hover:text-[#fdfcdc]"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/categories"
                className="block py-2 px-3 md:p-0 text-dark md:text-white rounded-sm 
                 dark:border-gray-700 hover:text-[#666] md:hover:text-[#fdfcdc] dark:hover:text-[#666] md:dark:hover:text-[#fdfcdc]"
              >
                Categories
              </Link>
            </li>
            <li>
              <Link
                to="brands"
                className="block py-2 px-3 md:p-0 text-dark md:text-white rounded-sm 
                 dark:border-gray-700 hover:text-[#666] md:hover:text-[#fdfcdc] dark:hover:text-[#666] md:dark:hover:text-[#fdfcdc]"
              >
                Brands
              </Link>
            </li>
            <li>
              <Link
                to="/cart"
                className="block py-2 px-3 md:p-0 text-dark md:text-white rounded-sm 
                 dark:border-gray-700 hover:text-[#666] md:hover:text-[#fdfcdc] dark:hover:text-[#666] md:dark:hover:text-[#fdfcdc]"
              >
                Cart <i className="fa-solid fa-cart-plus"></i>
              </Link>
            </li>
            <li>
              <span
                onClick={isFilter}
                className="block py-2 px-3 text-dark dark md:text-[#0081a7] dark:md:text-[#f07167] rounded-sm cursor-pointer 
                 dark:border-gray-700 hover:text-[#666] md:hover:text-[#0081a7] dark:hover:text-[#666]  bg-[#fdfcdc]"
              >
                Filter <i className="fa-solid fa-filter text-dark"></i>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
