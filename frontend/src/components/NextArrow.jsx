import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa';

const NextArrow = (props) => {
    const {onClick}=props;
    return (
    <div onClick={onClick} className='w-14 h-14 mx-5 rounded-full text-white bg-black bg-opacity-40 hover:bg-opacity-100 flex items-center justify-center absolute top-[35%] right-0 z-10 '>
        <FaLongArrowAltRight/>
    </div>
  )
}

export default NextArrow