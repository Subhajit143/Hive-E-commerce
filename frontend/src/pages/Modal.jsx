import React from 'react'
import img1 from "../assets/modal1.png"
import img2 from "../assets/modal5.png"
import img3 from "../assets/modal3.png"
import img4 from "../assets/modal6.png"
import { FaArrowRightLong } from 'react-icons/fa6'
const data =[
            {title:'Just Dropped', image:img1},
            {title:'Best Sellers', image:img3},
            {title:"Men's Spring Essentials", image:img2},
            {title:'The Shirt Showdown', image:img4},
]
const Modal = () => {
  return (
    <>
   <div className='grid grid-cols-1 sm:grid-cols-2 w-full '>
   {
        data.map((item,i)=>{
            return(
                <div key={i}>
                   <div>
                   <div><img src={item.image} alt={item.title}  className='w-full'/>
                   <div className='-mt-24 pb-5 pl-5 text-lg  '>
                   <p >{item.title}</p>
                   <button className='flex gap-2 font-bold'>
                   <div><h1>SHOP NOW</h1></div> 
                    <FaArrowRightLong className='text-xl  pt-1'/>
                   </button>
                   </div>
                   </div>
                   
                   </div>
                </div>
            )  // End of return statement for each item in the array.
        })
    }
   </div>
    </>
  )
}

export default Modal