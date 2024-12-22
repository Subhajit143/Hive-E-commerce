import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify'
import { twMerge } from 'tailwind-merge';
import { addToCart, decreaseQuantity, increaseQuantity } from '../Redux/hiveSlice';
import {HiOutlineMinus, HiOutlinePlus} from "react-icons/hi"

const AddToCart = ({item ,className,AddToCartStyle}) => {
  const dispatch=useDispatch()
 
  const {products}=useSelector((state)=>state.hive)
  const [cartProduct,setCartProduct]=useState(null)
  useEffect(()=>{
    const existingProduct= products.find((product)=>product._id === item._id)
    setCartProduct(existingProduct);
    
  },[item,products])

  const handleAddToCart=()=>{
    dispatch(addToCart(item))
    toast.success(item.name)
  } 
  const handleIncreaseQuantity=()=>{
    dispatch(increaseQuantity(item._id))
    toast.success(`Increased Quantity of ${item.name}`)
  }
  const handleDecreaseQuantity=()=>{
    dispatch(decreaseQuantity(item._id))
    toast.info(`Decreased Quantity of ${item.name}`)
  }
  
  return (
    <div>
      {
        cartProduct?(
          <div className='w-full h-full  flex items-center self-center gap-2'>
            <button disabled={cartProduct.quantity===1} onClick={handleDecreaseQuantity} className='w-6 h-6 border inline-flex items-center  cursor-pointer hover:bg-gray-800 hover:text-white duration-150 justify-center border-gray-400 rounded-sm disabled:text-gray-400 disabled:border-gray-200 disabled:hover:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-gray-400'>
              <HiOutlineMinus className='text-sm' /></button>
            <p className='text-base font-semibold w-6 text-center'>{cartProduct.quantity}</p>
            <button onClick={handleIncreaseQuantity} className='w-6 h-6 border inline-flex items-center cursor-pointer hover:bg-gray-800 hover:text-white duration-150 justify-center border-gray-400 rounded-sm'>
            <HiOutlinePlus className='text-sm' /></button>
          </div>
        ):(
          <button onClick={handleAddToCart} className={twMerge('w-full text-white/90 uppercase bg-slate-500  text-sm font-medium py-2 rounded-md mt-2 hover:text-white hover:bg-black cursor-pointer duration-700 p-2 ',AddToCartStyle)}>
        Add To Cart
    </button>
        )
      }
    </div>
  )
}

export default AddToCart