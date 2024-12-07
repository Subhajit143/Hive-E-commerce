import React from "react";
import AddToCart from "./AddToCart";
import PriceContainer from "./PriceContainer";
import {Link} from "react-router-dom"

const Product = ({ item }) => {
  console.log(item);

  return (
    <div className="w-full h-full relative group pr-2.5">
 <div className="h-80 max-w-80 border border-gray-300 rounded-tr-md rounded-tl-md overflow-hidden">

    {/* Ensure consistent background and image fit */}
    <Link to={`/product/${item._id}`} className="w-full h-full  flex items-center justify-center">
      <img 
        src={item?.imageUrl[0]} 
        alt="productImage" 
        className="max-w-full max-h-full object-contain group-hover:scale-110 duration-300" 
      />
    </Link>
  </div>
  <div className="relative max-w-80 h-56 py-4 flex flex-col gap-1 border-[1px] border-t-0 border-gray-300 px-5 rounded-b-md">
    <p className="text-lg font-bold">{item?.name}</p>
    <PriceContainer item={item} />
    <div className="absolute inset-x-0 bottom-0   p-5">
    <AddToCart item={item} />
    </div>
  </div>
</div>

  );
};

export default Product;
