import React, { useEffect, useState } from "react";
import style from "./Home.module.css";
import axios from "axios";

export default function Home() {
  const [products, setproducts] = useState([]);
  const [numberOfPages, setnumberOfPages] = useState(0);
  const [currentPage, setcurrentPage] = useState(1);
  const disabledNext = currentPage == numberOfPages;
  const disabledPrev = currentPage == 1;

  async function getAllProducts(pageNumber) {
    let { data } = await axios.get(
      `https://ecommerce.routemisr.com/api/v1/products?limit=18&page=${
        pageNumber || 1
      }`
    );
    console.log(data);
    setcurrentPage(data.metadata.currentPage);
    setnumberOfPages(data.metadata.numberOfPages);
    setproducts(data.data);
  }

  // functions in case we dont make condition to disable buttons
  function handleNext(nextPage){
    if(nextPage > numberOfPages){
      alert("not pages any more")
    }
    else{
      getAllProducts(nextPage)
    }
  }
  function handlePrev(prevPage){
    if(prevPage < 1){
      alert("not pages any more")
    }
    else{
      getAllProducts(prevPage)
    }
  }

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
      <div className="row p-2">
        {products.length > 0
          ? products.map((product) => (
              <div
                className="w-full sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/7"
                key={product.id}
              >
                <div className="product group p-1 relative overflow-hidden">
                  <div className="bg-[#1877F2] dark:bg-[#ddd] p-2 rounded-md text-dark">
                    <img src={product.imageCover} className="w-full" alt="a" />
                    <p className="font-bold flex my-1 items-center justify-between">
                      {product.title.split(" ").slice(0, 2).join(" ")}
                    </p>
                    <p className="text-sm my-1">{product.category.name}</p>
                    <div className="flex justify-between">
                      <span>{product.price} EGP</span>
                      <span>
                        {product.ratingsAverage}{" "}
                        <i className="fas fa-star text-yellow-400"></i>
                      </span>
                    </div>
                    <button className="main-btn">add to cart</button>
                  </div>
                  <div className="transition-all duration-300 opacity-0 absolute flex rounded-md justify-center items-center text-white size-7 cursor-pointer top-2.5 end-2.5 group-hover:opacity-100 bg-[#666]">
                    <i className="fas fa-heart"></i>
                  </div>
                </div>
              </div>
            ))
          : null}
      </div>

      <div className="flex justify-center">
        <nav aria-label="Page navigation example">
          <ul className="inline-flex -space-x-px text-sm">
            {/* {!disabledPrev && ( */}
              <button onClick={()=>handlePrev(currentPage - 1)}>
                <span className="flex cursor-pointer items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                  Previous
                </span>
              </button>
            {/* )} */}
            {Array.from({ length: numberOfPages }, (_, index) => {
              return (
                <button key={index} onClick={() => getAllProducts(index + 1)}>
                  <span style={index + 1 == currentPage ? {backgroundColor:"blue", color : "#fff"} : {}} className={`flex cursor-pointer items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}>
                    {index + 1}
                  </span>
                </button>
              );
            })}
            {/* {!disabledNext && ( */}
              <button onClick={() => handleNext(currentPage + 1)}>
                <span className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg active:bg-blue-500 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 cursor-pointer dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                  Next
                </span>
              </button>
            {/* )} */}
          </ul>
        </nav>
      </div>
    </>
  );
}
