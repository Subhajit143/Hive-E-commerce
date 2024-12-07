import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProductInfo from './ProductInfo';

const SingleProduct = () => {
  const [products, setProducts] = useState({});
  // Extract `id` from the route parameters
  const { id } = useParams();

  // Function to fetch single product data
  const fetchData = async (id) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/admin/singleProduct/${id}`);
      console.log("API Response: ", response);
      const data = response.data;
      if (data) {
        console.log("log",data);
        setProducts(data.product);
        
        
      } else {
        console.log("Product Fetching Error");
      }
    } catch (error) {
      console.log("Error From Single Product", error);
    }
  };
  console.log("lhgik",products);
  // Fetch data when component mounts
  useEffect(() => {
   
      if(id) fetchData(id);
    
  }, [id]);

  return (
    <div className="container grid grid-cols-2 py-10 px-5  gap-10">
      {/* <h1>Single Product</h1> */}
      <div className=' w-full h-full  group overflow-hidden rounded-md'>
      {products?.imageUrl ? (
       <div className='flex gap-5'>

        <div className='w-1/3 flex flex-col gap-5'>
          <img src={products.imageUrl[1]} alt="" className='border border-gray-300 rounded-md'/>
          <img src={products.imageUrl[2]} alt="" className='border border-gray-300 rounded-md'/>
        </div>
        
        
        <div>
        <img src={products.imageUrl[0]} 
          alt="ProductImage" 
          className='max-w-full max-h-full object-contain group-hover:scale-105 duration-300' />
        </div>
        
       </div>
         
       
      ) : (
        <p>Loading product details...</p>
      )}
       </div>
       <ProductInfo product={products} />
    </div>
  );
};

export default SingleProduct;
