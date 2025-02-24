import React from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom"; // Import Link if navigating to a shop page

import Banner1 from "../images/b1image.png";
import Banner2 from "../images/image.png";
import Banner3 from "../images/image212.png";

const bannerData = [
  { title: "Keliyan Vintage", image: Banner1 },
  { title: "Live like a queen ", image: Banner2 },
  { title: "Hotest Winter", image: Banner3 },
];

const Banner = () => {
  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true, 
  };

  return (
    <div className="w-screen relative">
      <Slider {...settings}>
        {bannerData.map((item, index) => (
          <div key={index} className="relative">
            <img
              src={item.image}
              alt="bannerImage"
              className="h-screen w-full object-cover "
            />
            
            {/* Overlay content (Title & Shop Now button) */}
            <div className="absolute bottom-32 right-20 flex flex-col justify-center items-center  text-white text-right">
              <h2 className="text-4xl font-bold  px-4 py-2 ">{item.title}</h2>
              <Link
                to="/shop" // Adjust the path based on your shop page route
                className="mt-4 inline-block px-6 py-3  text-white text-lg font-semibold hover:bg-black duration-700 border border-white ransition "
              >
                Shop Now
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
