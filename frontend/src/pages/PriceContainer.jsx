import React, { useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge';
import {  useSelector } from 'react-redux';

const PriceContainer = ({item,priceStyle}) => {
        
  const {products}=useSelector((state)=>state.hive)
  const [cartProduct,setCartProduct]=useState(null)

  useEffect(()=>{
    const existingProduct= products?.find((product)=>product.id === item.id)
    setCartProduct(existingProduct);
    
  },[item,products])

  const regularPrice= cartProduct? cartProduct.quantity*item.price :item?.price;
  return (
    <div className='text-lg font-medium'>
        <p className={twMerge(priceStyle)}>₹{regularPrice}</p>
    </div>
  )
}

export default PriceContainer