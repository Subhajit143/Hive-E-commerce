import React from 'react'
import { twMerge } from 'tailwind-merge';

const PriceContainer = ({item,priceStyle}) => {
  return (
    <div className='text-lg font-medium'>
        <p className={twMerge(priceStyle)}>₹{item.price}</p>
    </div>
  )
}

export default PriceContainer