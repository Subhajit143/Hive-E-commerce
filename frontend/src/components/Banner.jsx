import React from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Banner1 from "../images/banner1.png";
import Banner2 from "../images/image.png";
import Banner3 from "../images/banner2.png";
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
    <Container className="w-screen  ">
      <Slider {...settings}>
        {bannerData.map((item, index) => (
          <div key={index}>
            <img
              src={item.image}
              alt="bannerImage"
              className="h-full lg:h-[600px] w-screen object-cover"
            />
          </div>
        ))}
      </Slider>
    </Container>
  );
};

export default Banner;
