import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Product from './Product';
import PreviousArrow from '../components/PreviousArrow';
import NextArrow from '../components/NextArrow';

const NewArrival = () => {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/admin/getProducts");
      console.log("API Response: ", response);
  
      const data = response?.data;
      console.log("Data Fetched: ", data);
      setProducts(data);
      console.log("Products successfully fetched: ", data);
      
    } catch (error) {
      console.log("Product Fetching Error - ", error);
    }
  };
  
  
  
  console.log("hhkyiy",products);
  useEffect(() => {
    fetchData();
  }, []);

  const settings = {
    
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PreviousArrow />,
    arrows: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className="w-full py-10">
      
        <h1>New Arrival</h1>
        <Slider {...settings}>
          {products?.map((item) => (
            <Product key={item?._id} item={item} />
          ))}
        </Slider>
      
    </div>
  );
};

export default NewArrival;