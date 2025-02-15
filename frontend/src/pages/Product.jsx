import React, { useState } from "react";
import AddToCart from "./AddToCart";
import PriceContainer from "./PriceContainer";
import { Link } from "react-router-dom";

const Product = ({ item }) => {
  const [imgurl, setImgurl] = useState(false);

  const handle2nd = () => {
    setImgurl(true);
  };

  const handle1nd = () => {
    setImgurl(false);
  };

  return (
    <div className="w-full h-full relative group p-4"> {/* Added padding here */}
      {/* Product Container with Semi-Transparent Background */}
      <div className="h-80 w-80 bg-white/70 shadow-lg  overflow-hidden relative">
        {/* Overlay for Hover Effect */}
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>

        <Link
          to={`/product/${item._id}`}
          className="w-full h-full flex items-center justify-center duration-300 relative"
          onMouseEnter={handle2nd}
          onMouseLeave={handle1nd}
        >
          <img
            src={imgurl ? item?.imageUrl[1] : item.imageUrl[0]}
            alt="productImage"
            className="max-w-full max-h-full object-contain group-hover:scale-110 duration-700"
          />
        </Link>

        {/* Add to Cart Button on Hover */}
        <div className="absolute w-full bg-opacity-30 bottom-5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <AddToCart item={item} />
        </div>
      </div>

      {/* Product Info Section with Improved Text Visibility */}
      <div className="relative w-80 h-14  flex flex-col py-2   px-5 text-black rounded-b-md">
  <div className="max-w-52 overflow-hidden whitespace-nowrap text-ellipsis">
    <p className="text-xs ">{item?.name}</p>
  </div>

  <div className="flex ">
    <p className="font-light">₹{item.price}</p>
  </div>
</div>

    </div>
  );
};

export default Product;