import React from 'react'
import { ImCross } from "react-icons/im";
import { toast } from 'react-toastify';
import PriceContainer from './PriceContainer';
import AddToCart from './AddToCart';
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../Redux/hiveSlice';


const CartProduct = ({item}) => {
    console.log("im item",item);
    const dispatch=useDispatch();
    
  return (
    <div className='w-full grid grid-cols-5 mb-4 border py-2'>
        <div className='flex col-span-5 md:col-span-2 items-center gap-4 ml-4'>
        
            <ImCross
            onClick={()=>{
              dispatch(deleteProduct(item._id))
              toast.error(`${item.name.substring(0,10)}... is deleted successfully `)
            }} className='text-gray-700 hover:text-red-500 cursor-pointer duration-300' />
        
        <img src={item.imageUrl[0]} alt="" className='w-32 h-32 object-cover'/>
        <h1 className='font-semibold'>{item.name}</h1>
        </div>

        <div className='col-span-5 md:col-span-3 flex flex-col md:flex-row md:items-center
         items-center justify-between p-4 md:p-0  '>
          <div className='flex w-1/3 items-center text-lg font-semibold '>
           <h1>₹{item.price}</h1>
          </div>
          <div className='w-1/3 flex items-center gap-6 text-lg'>
            <AddToCart item={item} className="border-red-500" />
          </div>
          <div className='w-1/3 flex items-center'>
          <PriceContainer item={item} priceStyle="text-lg font-semibold"/>
          </div>
        </div>
    </div>
  )
}

export default CartProduct