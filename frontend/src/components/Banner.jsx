import React from 'react'
import "slick-carousel/slick/slick.css"
import Slider from "react-slick"

const Banner = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
      cssEase: "ease",
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows:false,
      
    }
  return (
    <div>Banner</div>
  )
}

export default Banner