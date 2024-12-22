import React from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Banner1 from "../images/banner1.png";
import Banner2 from "../images/banner2.png";
import Banner3 from "../images/banner3.png";
import Container from "./Container";

const bannerData = [
  { title: "Keliyan ", image: Banner1 },
  { title: "Greatest ", image: Banner2 },
  { title: "Hot ", image: Banner3 },
];

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,         // Adjust for transition speed
    autoplay: true,
    autoplaySpeed: 2000, // Change delay for autoplay
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true, 
  };

  return (
    <div className="max-w-screen-2xl mx-auto px-4   ">
      <Slider {...settings}>
        {bannerData.map((item, index) => (
          <div key={index}>
            <img
              src={item.image}
              alt="bannerImage"
              className="h-full lg:h-[650px] w-screen object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
