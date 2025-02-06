import React, { useState } from "react";
import AddToCart from "./AddToCart";
import PriceContainer from "./PriceContainer";
import { Link } from "react-router-dom";

const Product = ({ item }) => {
  console.log(item);
  const [imgurl,setImgurl]=useState(false)
  const handle2nd=()=>{
    setImgurl(true)
  }
  const handle1nd=()=>{
    setImgurl(false)
  }
  return (
    <div className="w-full h-full relative group   ">
      <div className="h-80 w-80   shadow-inner rounded-tr-md  overflow-hidden relative">
        {/* Ensure consistent background and image fit */}

        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 "></div>
        <Link
          to={`/product/${item._id}`}
          className="w-full h-full  flex items-center justify-center duration-300 relative"
          onMouseEnter={handle2nd}
          onMouseLeave={handle1nd}
        >
          
            <img
            src={imgurl ? item?.imageUrl[1]:item.imageUrl[0]}
            alt="productImage"
            className=" max-w-full max-h-full object-contain group-hover:scale-110 duration-1000"
          />
          
          
        </Link>
        {/* <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div> */}
        <div className="absolute w-full  bg-opacity-30 bottom-5 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <AddToCart item={item} />
        </div>
      </div>
      <div className="relative w-80 h-auto py-4 flex justify-between  gap-1 px-5 rounded-b-md ">
        <div className="max-w-52">
          <p className=" text-xs font-semibold">{item?.name}</p>
        </div>

        <div className="flex justify-center">
          <p className=" font-light ">₹{item.price}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
