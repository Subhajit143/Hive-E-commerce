import React from 'react'
import { FaLongArrowAltLeft } from 'react-icons/fa'

const PreviousArrow = (props) => {
  const {onClick}=props;
    return (
    <div onClick={onClick} className='w-14 h-14 rounded-full text-white bg-black bg-opacity-40 hover:bg-opacity-100 flex items-center justify-center absolute top-[35%] left-0 z-10 '>
        <FaLongArrowAltLeft/>
    </div>
  )
}

export default PreviousArrow