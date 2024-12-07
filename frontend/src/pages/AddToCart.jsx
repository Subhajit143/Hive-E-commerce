import React from 'react'
import { toast } from 'react-toastify'
import { twMerge } from 'tailwind-merge';

const AddToCart = ({item ,className,AddToCartStyle}) => {
  return (
    <button onClick={()=>{
        toast.success(item.name)
    }} className={twMerge('text-white/90 bg-gray-700 text-sm font-medium py-2 rounded-md mt-2 hover:text-white hover:bg-black cursor-pointer duration-700 p-2 ',AddToCartStyle)}>
        Add To Cart
    </button>
  )
}

export default AddToCart