import React from 'react'
import PriceContainer from './PriceContainer'
import AddToCart from './AddToCart'

const ProductInfo = ({product}) => {
  return (
    <div className='flex justify-center flex-col gap-8'>
        <h1 className='text-2xl font-semibold'>{product.name}</h1>
        <PriceContainer item={product} priceStyle="text-xl font-bold "  />
        <p className='text-base text-gray-600'>{product.description}</p>
        <p className='text-sm font-semibold'>Be the first to Leave Review</p>
        <div>
            <p className='text-base font-semibold'><span className='text-slate-600 font-normal mr-1'>Category </span>:  {product.category}</p>
        </div>
        <AddToCart item={product} AddToCartStyle={"py-3 text-lg font-bold tracking-wide"}/>
    </div>
  )
}

export default ProductInfo