import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import emptyCart from "../assets/emptyCart.png"
import { Link } from 'react-router-dom'
import CartProduct from './CartProduct'
import { resetCart } from '../Redux/hiveSlice'
import { toast } from 'react-toastify'
import PriceContainer from './PriceContainer'
import { useState } from 'react'
import Container from '../components/Container'

const CartPage = () => {
    const {products}=useSelector((state)=>state.hive.cart)
    const dispatch=useDispatch();
    const[subTotalAmt,setSubTotalAmt]=useState("")
    const[discount,setDiscount]=useState("")


    const handleReset= ()=>{
        const confirmed= window.confirm("Are your Sure to Reset Your Cart?")
        if(confirmed){
            dispatch(resetCart())
            
        }
    }

    // useEffect(()=>{
    //     let price=0
    //     let discountPrice=0
    //     products.map((item)=>{
    //         price+=(item.price + discountPrice)
    //     })
    // },[])
  return (
    <Container className='p-10'>
        <div>
            <h1 className='p-10 text-xl font-bold'>My Cart</h1>
        </div>
        {products?.length > 0 ? (
            <div className='py-10'>
            <div className='w-full h-20 bg-[#f5f7f7] text-gray-700 hidden lg:grid grid-cols-5 place-content-center px-6 text-lg font-semibold '>
                <h2 className='col-span-2'>Product</h2>
                <h2>Price</h2>
                <h2>Quantity</h2>
                <h2>Subtotal</h2>
            </div>
            <div className='mt-5'>
                {products.map((item)=>(
                    
                        <CartProduct key={item._id} item={item} />
                    
                ))}
            </div>
            <div className='flex items-start justify-between'>
                <button onClick={handleReset} className='py-2.5 px-10 bg-red-500 text-white font-semibold uppercase mb-4 rounded-md hover:bg-red-700 cursor-pointer duration-300'>Reset cart</button>
                
                <div className='max-w-xl gap-4 flex justify-end'>
                <div className='w-96 flex flex-col gap-4'>
                    <h2 className='text-xl font-bold uppercase text-right'>Cart Totals</h2>
                    <div className=''>
                        <p className='flex items-center justify-between border-[1px] py-1.5 px-4 text-lg font-medium'>Subtotal
                            <span>Price <p   className="font-semibold tracking-wide" /></span>
                        </p>
                        <p className='flex items-center justify-between border-[1px] py-1.5 px-4 text-lg font-medium border-b-0 border-t-0'>Discount
                            <span>Price <p className="font-semibold tracking-wide" /></span>
                        </p>
                        <p className='flex items-center justify-between border-[1px] py-1.5 px-4 text-lg font-medium'>Total
                            <span>Price <p className="text-xl font-bold tracking-wide" /></span>
                        </p>
                    </div>
                    <div>
                        <button onClick={()=>toast.success("Payment will proceed Shortly")} className='w-full rounded-md py-2.5 bg-gray-600 text-white hover:bg-gray-900 cursor-pointer duration-300'>Proceed to Cheakout</button>
                    </div>
                </div>
            </div>
            </div>
            
        </div>): (
            <div className='py-10'>
                <img src={emptyCart} alt="" className='max-w-80'/>
                <div className='flex flex-col gap-3'>
                    <h2>Your Cart Feels Lonely</h2>
                    <p className='text-sm max-w-96  '>Your Shopping Cart Lives to serve .Give it purpose - fill it with books, electronics, videos,etc. and make it happy.</p>
                    <Link to={"/"} className='bg-slate-700 text-white w-48 text-center rounded-md py-2 hover:bg-black duration-300'>
                    Continue Shopping</Link>
                
                </div>
            </div>) }
    </Container>
  )
}

export default CartPage